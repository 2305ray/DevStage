'use client'

import { type ComponentProps, useState } from 'react'

// Componente Root (envolve o input e outros elementos)
interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}
export function InputRoot({ error = false, ...props }: InputRootProps) {
  // Estado para verificar se há texto no input
  const [hasText, setHasText] = useState(false)

  return (
    <div
      data-error={error}
      className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 
            data-[error=true]:border-danger"
      {...props}
    />
  )
}

// Componente do Ícone (Mail ou qualquer outro ícone)
interface InputIconProps extends ComponentProps<'span'> {
  hasText?: boolean
}
export function InputIcon({ hasText, ...props }: InputIconProps) {
  return (
    <span
      className={`transition-all 
            ${hasText ? 'text-gray-100' : 'text-gray-400 group-focus-within:text-gray-100'}
            group-data-[error=true]:text-danger`}
      {...props}
    />
  )
}

// Campo de entrada (Input)
interface InputFieldProps extends ComponentProps<'input'> {
  setHasText?: (value: boolean) => void
}
export function InputField({ setHasText, ...props }: InputFieldProps) {
  return (
    <input
      className="peer flex-1 outline-0 placeholder-transparent bg-transparent text-gray-100"
      placeholder="Digite algo..."
      onChange={(e) => setHasText?.(e.target.value.trim().length > 0)}
      {...props}
    />
  )
}
