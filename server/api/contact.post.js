import nodemailer from 'nodemailer'
import { createError, readBody } from 'h3'

function isNonEmptyString (value) {
  return typeof value === 'string' && value.trim().length > 0
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event).catch(() => ({}))
  const name = typeof body?.name === 'string' ? body.name.trim() : ''
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const msg = typeof body?.msg === 'string' ? body.msg.trim() : ''

  if (!isNonEmptyString(email) || !isNonEmptyString(msg)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  const { smtp } = useRuntimeConfig()

  if (!isNonEmptyString(smtp?.host) || !isNonEmptyString(smtp?.user) || !isNonEmptyString(smtp?.pass)) {
    throw createError({
      statusCode: 500,
      statusMessage: 'SMTP is not configured'
    })
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: Number(smtp.port || 465),
    secure: Boolean(smtp.secure),
    auth: {
      user: smtp.user,
      pass: smtp.pass
    }
  })

  await transporter.sendMail({
    from: smtp.from || smtp.user,
    replyTo: email,
    to: smtp.to || smtp.user,
    subject: 'Naujas pranešimas iš kontaktų formos tinklapyje',
    text: [
      name ? `Vardas: ${name}` : null,
      `El. paštas: ${email}`,
      '',
      msg
    ].filter(Boolean).join('\n')
  })

  return { ok: true }
})
