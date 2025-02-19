interface ButtoProps {
    text?: string
}

export function Button(props :ButtoProps) {
    return <button className="bg-violet-300 px-5 py-2  rounded-sm" >
        {props.text || 'Enviar'}
        </button>
}