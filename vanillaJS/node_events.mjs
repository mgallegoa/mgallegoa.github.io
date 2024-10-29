// This example is for show the event emitter class to emit events
// Like document.getElementById('id').addEventListener('click', (event) => console.log('Clicked'))
import { EventEmitter } from "events";

const eventEmitter = new EventEmitter()

eventEmitter.on('event_Manuel', (firstData, secondData) => {
  console.log('Recived event')
  console.log('firstData', firstData)
  console.log('secondData', secondData)
})

eventEmitter.emit('event_Manuel', 'string for first data', { emit: 'secondData' })
