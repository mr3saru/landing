import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type GhostProps = {
  children?: ReactNode | string | null
} & ButtonTypes

const Ghost = ({ children, ...props }: GhostProps) => (
  <button {...props}>
    <style jsx>{`
      button {
        border: none;
        cursor: pointer;
        background: transparent;
        width: fit-content;
        height: fit-content;
      }
    `}</style>
    {children}
  </button>
)

export default Ghost
