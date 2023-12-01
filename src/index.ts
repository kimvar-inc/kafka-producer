import {Kafka} from "kafkajs";


const kafka = new Kafka({
    clientId: 'my-app2',
    brokers: ['192.168.35.68:9092']
})
async function init() {
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: 'test-topic',
        messages: [
            { value: 'http://localhost:3000/dev-show-case' ,key:'delete'},
        ],
    })

    await producer.disconnect()

}
void init()
