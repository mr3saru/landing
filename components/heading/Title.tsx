type TitleProps = {
  children: React.ReactNode | string
  props?: React.HTMLAttributes<HTMLHeadingElement>
}

const Title = ({ children, ...props }: TitleProps) => (
  <h1 {...props}>
    <style jsx>{`
      h1 {
        color: var(--primary);
        font-size: var(--font-xlarge);
        font-weight: var(--font-normal);
      }
    `}</style>
    {children}
  </h1>
)

export default Title
