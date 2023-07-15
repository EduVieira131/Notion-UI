import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ComponentProps<'image'> {
  url: string
}

export function ButtonImage({ url, ...rest }: ButtonRootProps) {
  return (
    <img
      src={url}
      alt="Button image"
      className={twMerge('border border-zinc-50 rounded', rest.className)}
    />
  )
}
