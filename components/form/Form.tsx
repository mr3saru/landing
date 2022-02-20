import React, { FormEvent, useState } from 'react'
import Primary from '@components/button/Primary'

type ValuesProps = {
  name?: string
  contact?: string
  message?: string
}

const SUCCESS_FEEDBACK = 'Your message has been sent!'
const ERROR_FEEDBACK = 'Something is wrong. Please try again later.'

const Form = () => {
  const [values, setValues] = useState<ValuesProps>()
  const [feedback, setFeedback] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFeedback('')

    const url = process.env.NEXT_PUBLIC_BASE_URL as string

    fetch(url + '/api/submit-form', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values?.name,
        contact: values?.contact,
        message: values?.message
      })
    })
      .then((response) => {
        console.log(response)
        if (!!response?.ok) {
          setFeedback(SUCCESS_FEEDBACK)
        } else {
          setFeedback(ERROR_FEEDBACK)
        }
      })
      .catch(() => {
        setFeedback(ERROR_FEEDBACK)
      })
  }

  const handleChange = (val: string, field: string) => {
    setValues({ ...values, [field]: val })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <style jsx>{`
        input,
        textarea {
          display: block;
          margin-bottom: 2rem;
          padding: var(--spacing-compact);
          resize: none;
          border: 1px solid var(--medium-gray);
          color: var(--light-gray);
          font-size: 24px;
        }
        input {
          height: 70px;
          width: 100%;
        }
        textarea {
          height: 210px;
          width: 100%;
        }
        ::placeholder {
          color: var(--light-gray);
        }
        .btn-text {
          font-size: var(--font-medium);
        }
        p {
          padding-top: var(--spacing-medium);
          height: 3rem;
          color: var(--light-gray);
          font-size: var(--font-xlarge);
          text-align: center;
        }
        .btn-text {
          font-size: var(--font-medium);
        }
      `}</style>
      <input
        placeholder="Name"
        type="text"
        required
        onChange={(e) => handleChange(e.target.value, 'name')}
      />
      <input
        placeholder="Email or phone"
        type="text"
        required
        onChange={(e) => handleChange(e.target.value, 'contact')}
      />
      <textarea
        placeholder="Message"
        name="msg"
        id="msg"
        required
        onChange={(e) => handleChange(e.target.value, 'message')}
      ></textarea>
      <Primary>
        <span className="btn-text">Send</span>
      </Primary>
      <p>{feedback}</p>
    </form>
  )
}

export default Form
