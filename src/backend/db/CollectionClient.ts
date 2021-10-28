import firebase from "../config";
import Cliente from "../../core/Cliente";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {

    #conversor = {
        toFirestore(client: Cliente) {
            return {
                name: client.name,
                age: client.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
            const data = snapshot.data(options)
            return new Cliente(data.name, data.age, snapshot.id)
        }
    }

    async save(client: Cliente): Promise<Cliente> {
        if(client?.id){
            await this.#collection().doc(client.id).set(client)
            return client
        }else{
           const docRef = await this.#collection().add(client)
           const doc = await docRef.get()
           return doc.data()
        }
    }

    async delete(client: Cliente): Promise<void> {
        return this.#collection().doc(client.id).delete()
    }

    async getAll(): Promise<Cliente[]> {
      const query = await this.#collection().get()
      return query.docs.map(doc => doc.data()) ?? []
    }

    #collection() {
        return firebase.firestore().collection('clients')
        .withConverter(this.#conversor)
    }
}