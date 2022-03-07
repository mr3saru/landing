import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type PrimaryProps = {
  children?: ReactNode | string | null
} & ButtonTypes

const Primary = ({ children, ...props }: PrimaryProps) => {
  return (
    <button {...props} disabled={props?.disabled || false}>
      <style jsx>{`
        button {
          border: none;
          cursor: pointer;
          background: var(--primary);
          color: var(--white);
          width: 100%;
          height: 4rem;
          display: block;
          margin: 0 auto;
          font-weight: var(--font-bold);
        }

        button:disabled {
          cursor: not-allowed;
        }
        button:disabled:hover {
          opacity: 0.5;
        }
      `}</style>
      {children}
    </button>
  )
}

export default Primary
