import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"
import Cliente from "../core/Cliente"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClient() {
    const repo: ClientRepository = new CollectionClient()

    const { tableVisible, formVisible, showTable, showForm } = useTableOrForm()

    const [clients, setClients] = useState<Cliente[]>([])
    const [client, setClient] = useState<Cliente>(Cliente.empty())

    useEffect(getAll, [])

    function getAll() {
        repo.getAll().then(clients => {
            setClients(clients)
            showTable()
        })
    }

    function clientSelected(client: Cliente) {
        setClient(client)
        showForm()
    }

    async function clientDeleted(client: Cliente) {
        await repo.delete(client)
        getAll()

    }

    function newClient() {
        setClient(Cliente.empty())
        showForm()

    }

    async function saveClient(client: Cliente) {
        await repo.save(client)
        console.log(client);

        getAll()

    }

    return {
        client,
        clients,
        newClient,
        saveClient,
        clientDeleted,
        clientSelected,
        getAll,
        showTable,
        tableVisible
    }
}