import { ComponentProps } from 'react'

export interface FloatingMenuButtonProps extends ComponentProps<'button'> {
  imgURL: string
  title: string
  description: string
}

export default function FloatingMenuButton(props: FloatingMenuButtonProps) {
  return (
    <button
      className="flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-200"
      {...props}
    >
      <img
        src={props.imgURL}
        alt="text"
        className="w-12 border border-zinc-50 rounded"
      />
      <div className="flex flex-col text-left">
        <span className="text-sm">{props.title}</span>
        <span className="text-xs text-gray-600">{props.description}</span>
      </div>
    </button>
  )
}
