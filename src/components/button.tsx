import { type ComponentProps, ReactNode } from 'react'

interface ButtoProps extends ComponentProps<'button'> {
  // children: ReactNode, não é necessario, pq o button ja espera q passe algo dentro dele
}

export function Button(props: ButtoProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full  cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-700"
      {...props} // pega todas as props q tem e envia aí dentro, ou seja, o children ja vai
    />
  )
}
