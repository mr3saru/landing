import { ReactNode } from 'react'

type SpinnerProps = {
  children: ReactNode
  speed?: number
}
const Spinner = ({ children, speed = 4 }: SpinnerProps) => (
  <div className="rotate">
    <style jsx>{`
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }
      .rotate {
        animation: rotate ${speed}s linear infinite;
      }
    `}</style>
    {children}
  </div>
)

export default Spinner
