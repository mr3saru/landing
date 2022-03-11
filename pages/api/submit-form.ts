import { RawException } from '@utils/exceptions'

export default async function handler(
  req: { method: string; body: any },
  res: any
) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end('Method Not Allowed')
    return
  }

  const url = process.env.API_CONTACT_FORM_URL as string

  const { name, contact, message } = req.body

  fetch(url + 'api/form', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      contact,
      message
    })
  })
    .then((data) => {
      if (data.status !== 200) {
        RawException('Failed to send message')
      } else {
        res.statusCode = 200
        res.end('OK')
      }
    })
    .catch(() => {
      res.statusCode = 500
      res.end('Internal Server Error')
    })
}
