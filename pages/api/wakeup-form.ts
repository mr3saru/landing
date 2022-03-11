import { RawException } from '@utils/exceptions'

export default async function handler(
  req: { method: string; body: any },
  res: any
) {
  const url = process.env.API_CONTACT_FORM_URL as string

  fetch(url)
    .then((data) => {
      if (data.status !== 200) {
        RawException('Failed to wake up')
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
