import { ComponentProps, ReactNode } from "react"

interface IconButtoProps extends ComponentProps<'button'> {
// children: ReactNode, não é necessario, pq o button ja espera q passe algo dentro dele
}


export function IconButton(props :IconButtoProps) {
    return (

    <button 
    className="p-1.5 bg-gray-500 text-blue rounded-md   cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-700" 
    {...props}
    />
    //     {props.children}
    // </button>
  
  )
} 