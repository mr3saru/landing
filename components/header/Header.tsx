import Navbar from '@components/menu/Navbar'
import Logo from '@icons/Logo'
import Link from 'next/link'

type HeaderProps = {
  isFixed?: boolean
}

const Header = ({ isFixed = false }: HeaderProps) => (
  <header>
    <style jsx>{`
      header {
        background: var(--secondary);
        width: 100%;
        height: 12rem;
        padding: var(--spacing-compact) var(--spacing-large);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        box-shadow: var(--shadow-basic);

        ${isFixed &&
        `
          position: sticky;
          top: 0;
          z-index: var(--layer-layout);
        `}
      }
      a {
        width: 9rem;
      }
    `}</style>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <Navbar />
  </header>
)

export default Header
