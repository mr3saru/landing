import Link from 'next/link'

type ItemProps = {
  url: string
  children: string
}

const Item = ({ url, children }: ItemProps) => {
  return (
    <Link href={url}>
      <a>
        <style jsx>{`
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }
          a {
            border-bottom: 5px solid transparent;
            transition: var(--transition-default);
          }
          a:hover {
            border-bottom: 5px solid var(--primary);
          }
          span {
            font-size: var(--font-large);
            color: var(--white);
            font-weight: var(--font-light);
          }
        `}</style>
        <span>{children}</span>
      </a>
    </Link>
  )
}

export default Item
