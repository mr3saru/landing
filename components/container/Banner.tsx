type BannerProps = {
  children: React.ReactNode
}

const Banner = ({ children }: BannerProps) => {
  return (
    <div>
      <style jsx>{`
        div {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          grid-gap: 5rem;
        }

        @media (min-width: 999px) {
          div {
            grid-template-columns: 1fr 1fr;
            grid-gap: 20rem;
          }
        }
      `}</style>
      {children}
    </div>
  )
}

export default Banner
