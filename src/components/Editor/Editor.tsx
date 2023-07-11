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
import js from 'highlight.js/lib/languages/javascript'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx'

import * as ToggleGroup from '@radix-ui/react-toggle-group'

import 'highlight.js/styles/agate.css'
import { BubbleButton } from '../BubbleMenu/BubbleButton'
import FloatingMenuButton from '../FloatingMenu/FloatingMenu'

lowlight.registerLanguage('js', js)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      TaskList,
      TaskItem,
      BulletList,
      ListItem,
      Placeholder.configure({
        placeholder: 'Type / for commands...',
      }),
      HorizontalRule,
      Typography,
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
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/text/en-US.png"
            title="Text"
            description="Just start writing with plain text"
            onClick={() => editor.chain().focus().undo().run()}
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/header.57a7576a.png"
            title="Heading 1"
            description="Big section heading"
            onClick={() =>
              editor.chain().focus().undo().toggleHeading({ level: 1 }).run()
            }
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/subheader.9aab4769.png"
            title="Heading 2"
            description="Medium section heading"
            onClick={() =>
              editor.chain().focus().undo().toggleHeading({ level: 2 }).run()
            }
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/subsubheader.d0ed0bb3.png"
            title="Heading 3"
            description="Small section heading"
            onClick={() =>
              editor.chain().focus().undo().toggleHeading({ level: 3 }).run()
            }
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/to-do.f8d20542.png"
            title="To-do list"
            description="Track tasks with a to-do list."
            onClick={() => editor.chain().undo().focus().toggleTaskList().run()}
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/bulleted-list.0e87e917.png"
            title="Bulleted list"
            description="Create a simple bulleted list."
            onClick={() =>
              editor.chain().focus().undo().toggleBulletList().run()
            }
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/code.a8b201f4.png"
            title="Code"
            description="Capture a code snippet."
            onClick={() =>
              editor.chain().focus().undo().toggleCodeBlock().run()
            }
          />
          <FloatingMenuButton
            imgURL="http://www.notion.so/images/blocks/divider.210d0faf.png"
            title="Divider"
            description="Visually divide blocks."
            onClick={() => editor.chain().undo().setHorizontalRule().run()}
          />
        </FloatingMenu>
      )}

      {editor && (
        <BubbleMenu
          className="bg-white shadow-md border border-neutral-50 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-100"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown classname="w-5 h-5" />
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble classname="w-5 h-5" />
            Comment
          </BubbleButton>

          <ToggleGroup.Root
            className="flex gap-1 items-center"
            type="multiple"
            defaultValue={['bold', 'italic', 'strike', 'code']}
            rovingFocus={true}
            aria-label="Text alignment"
          >
            <ToggleGroup.Item value="bold" aria-label="Bold selection">
              <BubbleButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                data-active={editor.isActive('bold')}
              >
                <RxFontBold classname="w-5 h-5" />
              </BubbleButton>
            </ToggleGroup.Item>

            <ToggleGroup.Item value="italic" aria-label="italic selection">
              <BubbleButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                data-active={editor.isActive('italic')}
              >
                <RxFontItalic classname="w-5 h-5" />
              </BubbleButton>
            </ToggleGroup.Item>

            <ToggleGroup.Item value="strike" aria-label="Strike selection">
              <BubbleButton
                onClick={() => editor.chain().focus().toggleStrike().run()}
                data-active={editor.isActive('strike')}
              >
                <RxStrikethrough classname="w-5 h-5" />
              </BubbleButton>
            </ToggleGroup.Item>

            <ToggleGroup.Item value="code" aria-label="Code snippet">
              <BubbleButton
                onClick={() => editor.chain().focus().toggleCode().run()}
                data-active={editor.isActive('code')}
              >
                <RxCode classname="w-5 h-5" />
              </BubbleButton>
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </BubbleMenu>
      )}
    </>
  )
}
