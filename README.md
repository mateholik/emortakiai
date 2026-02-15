# ortakiai

> Nuxt 3 project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and preview locally
$ npm run build
$ npm run preview

# generate static project
$ npm run generate
```

### SMTP (contact endpoint)

The server endpoint `POST /api/contact` uses Nodemailer. Configure SMTP via env vars:

```bash
SMTP_HOST=
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
SMTP_TO=info@emortakiuvalymas.lt
```

For detailed explanation on how things work, check out [Nuxt docs](https://nuxt.com).
