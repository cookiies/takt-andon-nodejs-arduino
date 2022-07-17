import React from 'react'
import { ReadlineParser, SerialPort } from 'serialport'

const port = new SerialPort('/dev/tty.usbmodem14201', { baudRate: 9600 })
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))

// Read the port data
port.on('open', () => {
    console.log('serial port open')
})

parser.on('data', data => {
    console.log('got word from arduino: ', data);
})

export default function TaktTimer() {
  return (
    <div>TaktTimer</div>
  )
}
