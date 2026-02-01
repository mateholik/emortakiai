const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
  console.log(req.body)

  sendMail(req.body.name, req.body.email, req.body.msg)
  res.status(200).json({ message: 'OH YEAH' })
})
module.exports = {
  path: '/api/contact',
  handler: app
}

const sendMail = (name, email, msg) => {
  const transporter = nodemailer.createTransport({
    host: 'remeza.serveriai.lt',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
      user: 'info@emortakiuvalymas.lt',
      pass: '1EMpaslaugos'
    }
  })
  transporter.sendMail({
    from: email,
    to: 'info@emortakiuvalymas.lt',
    subject: 'Naujas pranešimas iš kontaktų formos tinklapyje',
    text: msg
  }, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('success!')
    }
  })
}
