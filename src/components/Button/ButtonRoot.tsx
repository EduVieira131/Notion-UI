import { ComponentProps, ReactNode } from 'react'

interface ButtonRootProps extends ComponentProps<'button'> {
  children: ReactNode
  onSubmit: () => void
  data?: boolean
}

export function ButtonRoot({ children, onSubmit, data }: ButtonRootProps) {
  return (
    <button
      className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 hover:text-zinc-700 hover:bg-zinc-200 data-[active=true]:text-emerald-400 rounded w-full"
      onClick={onSubmit}
      data-active={data}
    >
      {children}
    </button>
  )
}
