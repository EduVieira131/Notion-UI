import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight'

import 'highlight.js/styles/agate.css'

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
    <EditorContent
      className="max-w-[700px] mx-auto pt-16 prose font-serif prose-emerald"
      editor={editor}
    />
  )
}
