import { useEffect, useState } from 'react';
import CollectionClient from '../backend/db/CollectionClient';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'
import ClientRepository from '../core/ClientRepository';

export default function Home() {

  const repo: ClientRepository = new CollectionClient()

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [clients, setClients] = useState<Cliente[]>([])
  const [client, setClient] = useState<Cliente>(Cliente.empty())

  useEffect(getAll, [])

  function getAll(){
    repo.getAll().then(clients =>{
      setClients(clients)
      setVisible('table')
    })
  }

  function clientSelected(client: Cliente) {
    setClient(client)
    setVisible('form')
  }

  async function clientDeleted(client: Cliente) {
    await repo.delete(client)
    getAll()

  }

  function newClient() {
    setClient(Cliente.empty())
    setVisible('form')

  }

  async function saveClient(client: Cliente) {
    await repo.save(client)
    getAll()

  }





  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>

      <Layout title="Cadastro de Tarefas">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4"
                onClick={newClient}>
                Novo cliente </Button>
            </div>
            <Table clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted} />
          </>
        ) : (
          <Form cliente={client}
            clientChange={saveClient}
            canceled={() => setVisible('table')} />
        )}

      </Layout>
    </div>
  )
}
