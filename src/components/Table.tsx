import Cliente from "../core/Cliente";
import { IconEdition, IconTrash } from "./Icons";

interface TableProps {
    clients: Cliente[]
    clientSelected?: (client: Cliente) => void
    clientDeleted?: (client: Cliente) => void
}

export default function Table(props: TableProps) {

    const showActions = props.clientDeleted || props.clientSelected

    //renderiza o cabeçalho da tabela
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions ? <th className=" p-4">Ações</th> : false}
            </tr>
        )
    }

    //renderiza as ações de cada cliente
    function renderActions(client: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)} className={`flex justify-center items-center
                        text-green-600 rounded-full hover:bg-purple-50 p-2 m-1`}>
                        {IconEdition}
                    </button>

                ) : false}
                {props.clientDeleted ? (
                    <button onClick={() => props.clientDeleted?.(client)} className={`flex justify-center items-center
                          text-red-500 rounded-full hover:bg-purple-50 p-2 m-1`}>
                        {IconTrash}
                    </button>
                ) : false}
            </td>
        )
    }

    //renderiza os  dados da tabela
    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }


    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}