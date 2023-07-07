import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
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

import 'highlight.js/styles/agate.css'
import { BubbleButton } from './BubbleButton'

lowlight.registerLanguage('js', js)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
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
        className="max-w-[700px] mx-auto pt-16 prose font-serif prose-emerald"
        editor={editor}
      />
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

          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold classname="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic classname="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough classname="w-5 h-5" />
            </BubbleButton>

            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode classname="w-5 h-5" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  )
}
