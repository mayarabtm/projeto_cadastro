import { useState } from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'

export default function Home() {

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [client, setClient] = useState<Cliente>(Cliente.empty())

  const clients = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 35, '2'),
    new Cliente('Carlos', 40, '3'),
    new Cliente('Daniel', 30, '4'),
  ]

  function clientSelected(client: Cliente) {
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Cliente) {
    console.log(client.name);

  }

  function newClient(){
    setClient(Cliente.empty())
    setVisible('form')
    
  }

  function saveClient( client: Cliente){
    console.log(client);
    setVisible('table')
    
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
          canceled={() => setVisible('table')}/>
        )}

      </Layout>
    </div>
  )
}
