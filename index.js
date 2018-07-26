var twilio = require('twilio');

const MESSAGE = process.argv[process.argv.length-1]
const TWILIO_SID = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const TWILIO_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const TWILIO_FROM = '+19999999999'
const TWILIO_TO = '+19999999999'

var client = new twilio(TWILIO_SID, TWILIO_TOKEN)

client.messages.create({
  body: MESSAGE,
  to: TWILIO_TO,  // Text this number
  from: TWILIO_FROM // From a valid Twilio number
}).then(function(message) {
  if(message.sid){
    console.log('Message sent')
  }else{
    console.error('Error sending message', message)
  }
})