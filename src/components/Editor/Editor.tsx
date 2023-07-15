import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Placeholder from '@tiptap/extension-placeholder'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Typography from '@tiptap/extension-typography'
import Code from '@tiptap/extension-code'
import js from 'highlight.js/lib/languages/javascript'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
} from 'react-icons/rx'

import * as Toolbar from '@radix-ui/react-toolbar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import 'highlight.js/styles/agate.css'
import { Button } from '../Button'

lowlight.registerLanguage('js', js)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      TaskList,
      TaskItem.configure({
        HTMLAttributes: {
          id: 'taskItem',
        },
      }),
      BulletList,
      ListItem,
      Placeholder.configure({
        placeholder: 'Type / for commands...',
      }),
      HorizontalRule,
      Typography,
      Code.configure({
        HTMLAttributes: {
          id: 'inlineCode',
        },
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  })

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose font-serif prose-emerald prose-p:m-1 prose-hr:my-1"
        editor={editor}
      />

      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-white py-2 px-1 shadow-md border border-neutral-50 shadow-black/20 rounded-lg 
          overflow-hidden flex flex-col gap-2"
          shouldShow={({ state }) => {
            const { $from } = state.selection

            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'
          }}
        >
          <Button.Root
            onSubmit={() => editor.chain().focus().undo().clearNodes().run()}
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/text/en-US.png"
              className="w-11"
            />
            <Button.Content
              title="Text"
              description="Just start writing with plain text"
            />
          </Button.Root>

          <Button.Root
            onSubmit={() => editor.chain().undo().setHorizontalRule().run()}
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/divider.210d0faf.png"
              className="w-11"
            />
            <Button.Content
              title="Divider"
              description="Visually divide blocks."
            />
          </Button.Root>

          <Button.Root
            onSubmit={() =>
              editor.chain().focus().undo().toggleHeading({ level: 1 }).run()
            }
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/header.57a7576a.png"
              className="w-11"
            />
            <Button.Content
              title="Heading 1"
              description="Big section heading"
            />
          </Button.Root>

          <Button.Root
            onSubmit={() =>
              editor.chain().focus().undo().toggleHeading({ level: 2 }).run()
            }
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/subheader.9aab4769.png"
              className="w-11"
            />
            <Button.Content
              title="Heading 2"
              description="Medium section heading"
            />
          </Button.Root>

          <Button.Root
            onSubmit={() =>
              editor.chain().focus().undo().toggleHeading({ level: 3 }).run()
            }
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
              className="w-11"
            />
            <Button.Content
              title="Heading 3"
              description="Small section heading"
            />
          </Button.Root>

          <Button.Root
            onSubmit={() =>
              editor.chain().undo().focus().toggleTaskList().run()
            }
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/to-do.f8d20542.png"
              className="w-11"
            />
            <Button.Content
              title="To-do list"
              description="Track tasks with a to-do list."
            />
          </Button.Root>

          <Button.Root
            onSubmit={() =>
              editor.chain().focus().undo().toggleBulletList().run()
            }
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
              className="w-11"
            />
            <Button.Content
              title="Bulleted list"
              description="Create a simple bulleted list."
            />
          </Button.Root>

          <Button.Root
            onSubmit={() =>
              editor.chain().focus().undo().toggleCodeBlock().run()
            }
          >
            <Button.Image
              url="http://www.notion.so/images/blocks/code.a8b201f4.png"
              className="w-11"
            />
            <Button.Content
              title="Code"
              description="Capture a code snippet."
            />
          </Button.Root>
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu editor={editor}>
          <Toolbar.Root className="flex items-center overflow-hidden bg-white shadow-sm border border-neutral-50 shadow-black/20 rounded-lg p-1">
            <DropdownMenu.Root>
              <Toolbar.Button asChild>
                <DropdownMenu.Trigger className="p-2 text-zinc-600 text-xs flex items-center gap-1.5 font-medium leading-none hover:bg-zinc-100">
                  Formatting
                  <RxChevronDown classname="w-5 h-5" />
                </DropdownMenu.Trigger>
              </Toolbar.Button>

              <DropdownMenu.Content className="min-w-[200px] flex flex-col p-1 justify-center overflow-hidden bg-white shadow-sm border border-neutral-50 shadow-black/20 rounded-lg">
                <h2 className="text-xs text-zinc-500 my-1 ml-3">Turn into</h2>

                <Button.Root
                  onSubmit={() => editor.chain().focus().clearNodes().run()}
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/text/en-US.png"
                    className="w-8"
                  />
                  <Button.Content title="Text" />
                </Button.Root>

                <Button.Root
                  onSubmit={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/header.57a7576a.png"
                    className="w-8"
                  />
                  <Button.Content title="Heading 1" />
                </Button.Root>

                <Button.Root
                  onSubmit={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/subheader.9aab4769.png"
                    className="w-8"
                  />
                  <Button.Content title="Heading 2" />
                </Button.Root>

                <Button.Root
                  onSubmit={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
                    className="w-8"
                  />
                  <Button.Content title="Heading 3" />
                </Button.Root>

                <Button.Root
                  onSubmit={() => editor.chain().focus().toggleTaskList().run()}
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/to-do.f8d20542.png"
                    className="w-8"
                  />
                  <Button.Content title="To-do list" />
                </Button.Root>

                <Button.Root
                  onSubmit={() =>
                    editor.chain().focus().toggleBulletList().run()
                  }
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
                    className="w-8"
                  />
                  <Button.Content title="Bulleted list" />
                </Button.Root>

                <Button.Root
                  onSubmit={() =>
                    editor.chain().focus().toggleCodeBlock().run()
                  }
                >
                  <Button.Image
                    url="http://www.notion.so/images/blocks/code.a8b201f4.png"
                    className="w-8"
                  />
                  <Button.Content title="Code" />
                </Button.Root>
              </DropdownMenu.Content>

              <Toolbar.Separator className="w-[1px] h-5 bg-zinc-200 mx-1" />

              <Toolbar.ToggleGroup
                className="flex gap-1 items-center"
                type="multiple"
                rovingFocus={true}
              >
                <Toolbar.ToggleItem value="bold" aria-label="Bold selection">
                  <Button.Root
                    onSubmit={() => editor.chain().focus().toggleBold().run()}
                    data={editor.isActive('bold')}
                  >
                    <Button.Icon icon={RxFontBold} />
                  </Button.Root>
                </Toolbar.ToggleItem>

                <Toolbar.ToggleItem
                  value="italic"
                  aria-label="italic selection"
                >
                  <Button.Root
                    onSubmit={() => editor.chain().focus().toggleItalic().run()}
                    data={editor.isActive('italic')}
                  >
                    <Button.Icon icon={RxFontItalic} />
                  </Button.Root>
                </Toolbar.ToggleItem>

                <Toolbar.ToggleItem
                  value="strike"
                  aria-label="Strike selection"
                >
                  <Button.Root
                    onSubmit={() => editor.chain().focus().toggleStrike().run()}
                    data={editor.isActive('strike')}
                  >
                    <Button.Icon icon={RxStrikethrough} />
                  </Button.Root>
                </Toolbar.ToggleItem>

                <Toolbar.ToggleItem value="code" aria-label="Inline code">
                  <Button.Root
                    onSubmit={() => editor.chain().focus().toggleCode().run()}
                    data={editor.isActive('code')}
                  >
                    <Button.Icon icon={RxCode} />
                  </Button.Root>
                </Toolbar.ToggleItem>
              </Toolbar.ToggleGroup>
            </DropdownMenu.Root>
          </Toolbar.Root>
        </BubbleMenu>
      )}
    </>
  )
}
