import React from 'react'
import Primary from '@components/button/Primary'
const Form = () => {
  return (
    <form action="">
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
      `}</style>
      <input placeholder="Name" type="text" required />
      <input placeholder="Email or phone" type="text" required />
      <textarea placeholder="Message" name="msg" id="msg" required></textarea>
      <Primary>Send</Primary>
    </form>
  )
}

export default Form
