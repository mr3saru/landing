import Logo_footer from '@icons/Logo_footer_icon'
import Link from 'next/link'

const Footer = () => (
  <footer>
    <style jsx>{`
      footer {
        background: var(--secondary);
        width: 100%;
        height: 20rem;
        padding: var(--spacing-compact) var(--spacing-large);
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 250px;
      }
      a {
        width: 9rem;
      }
      Logo_footer {
        width: 200px;
      }
    `}</style>

    <Logo_footer />
  </footer>
)

export default Footer
