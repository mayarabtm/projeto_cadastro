import { useState } from 'react'
import Cliente from '../core/Cliente'
import Button from './Button'
import Entrada from './Input'
interface FormProps {
    cliente: Cliente
    clientChange?: (cliente: Cliente) => void
    canceled?: () => void
}

export default function Form(props: FormProps) {
    const id = props.cliente?.id
    const [name, setName] = useState(props.cliente?.name ?? '')
    const [age, setAge] = useState(props.cliente?.age ?? 0)
    return (
        <div>
            {id ? (
                <Entrada readOnly text="Código" value={id} className="mb-4" />
            ) : false}
            <Entrada text="Nome" value={name} onChange={setName} className="mb-4" />
            <Entrada text="Idade" type="number" value={age} onChange={setAge} />
            <div className="flex justify-end mt-3">
                <Button color="blue" className="mr-2" 
                onClick={() => props.clientChange?.(new Cliente(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.canceled}>Cancelar</Button>
            </div>
        </div>
    )
}