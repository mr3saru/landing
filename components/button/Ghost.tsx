import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

type GhostProps = {
  children?: ReactNode | string | null
} & ButtonTypes

const Ghost = ({ children, ...props }: GhostProps) => {
  return (
    <button {...props} disabled={props?.disabled || false}>
      <style jsx>{`
        button {
          border: none;
          cursor: pointer;
          background: transparent;
          width: fit-content;
          height: fit-content;
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

export default Ghost
