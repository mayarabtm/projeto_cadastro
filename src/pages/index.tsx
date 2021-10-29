import Button from '../components/Button';
import Form from '../components/Form';
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClient from '../hooks/useClients';

export default function Home() {

  const { 
    client, 
    clients, 
    saveClient,
    newClient, 
    clientSelected, 
    clientDeleted,
    tableVisible,
    showTable
  } = useClient()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>

      <Layout title="Cadastro de Tarefas">
        {tableVisible ? (
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
            canceled={showTable} />
        )}

      </Layout>
    </div>
  )
}
