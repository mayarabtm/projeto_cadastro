import { IconEdition, IconTrash } from "./Icons";
import Table from "./Table";
export default function Button(props) {
    return (
        <>
            <button onClick={() => props.clientSelected?.(client)} className={`flex justify-center items-center
                text-green-600 rounded-full hover:bg-purple-50 p-2 m-1
                `}>
                {IconEdition}
            </button>
            <button onClick={() => props.clientDeleted?.(client)} className={`flex justify-center items-center
                text-red-500 rounded-full hover:bg-purple-50 p-2 m-1
                `}>
                {IconTrash}
            </button>
        </>
    )
}