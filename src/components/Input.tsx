
interface InputProps{
    type: 'text' | 'number'
    text: string
}

export default function Input(props:InputProps){
    return(
        <div>
            <label>{props.text}</label>
            <input type={props.type ?? 'text'} />
        </div>
    )
}