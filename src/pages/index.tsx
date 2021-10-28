import Button from '../components/Button';
import Layout from '../components/Layout'
import Table from '../components/Table'
import Cliente from '../core/Cliente'

export default function Home() {

  const clients = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 35, '2'),
    new Cliente('Carlos', 40, '3'),
    new Cliente('Daniel', 30, '4'),
  ]

  function clientSelected(client: Cliente) {
    console.log(client.name);

  }

  function clientDeleted(client: Cliente) {
    console.log(client.name);

  }
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>

      <Layout title="Cadastro de Tarefas">
        <div className="flex justify-end">
          <Button color="green" className="mb-4"> Novo cliente </Button>
        </div>
        <Table clients={clients}
          clientSelected={clientSelected}
          clientDeleted={clientDeleted} />
      </Layout>
    </div>
  )
}
