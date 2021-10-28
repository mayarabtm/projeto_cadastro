import Cliente from "./Cliente";

export default interface ClientRepository{
    save(client: Cliente): Promise<Cliente>
    delete(client: Cliente): Promise<void>
    getAll(): Promise<Cliente[]>
}

