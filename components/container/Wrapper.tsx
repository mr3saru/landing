type WrapperProps = {
  children: React.ReactNode
}
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div>
      <style jsx>{`
        div {
          width: 100%;
          max-width: var(--max-width);
          padding: 0 var(--spacing-large);
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
      {children}
    </div>
  )
}

export default Wrapper
