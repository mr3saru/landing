import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type PrimaryProps = {
  children?: ReactNode | string | null
} & ButtonTypes

const Primary = ({ children, ...props }: PrimaryProps) => (
  <button {...props}>
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
    `}</style>
    {children}
  </button>
)

export default Primary
