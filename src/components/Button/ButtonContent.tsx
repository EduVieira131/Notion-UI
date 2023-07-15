interface ButtonRootProps {
  title: string
  description?: string
}

export function ButtonContent({ title, description }: ButtonRootProps) {
  return (
    <div className="flex flex-col text-left">
      <span className="text-xs">{title}</span>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  )
}
