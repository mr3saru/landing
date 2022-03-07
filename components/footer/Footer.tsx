import LogoFooter from '@icons/LogoFooter'
import Link from 'next/link'
import Linkedin from '@icons/socials/Linkedin'
import Instagram from '@icons/socials/Instagram'
import Twitter from '@icons/socials/Twitter'

const Footer = () => (
  <footer>
    <style jsx>{`
      footer {
        background: var(--secondary);
        width: 100%;
        height: fit-content;
        padding: var(--spacing-medium) var(--spacing-large);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-top: 250px;
      }

      // Logo
      .logo-container {
        margin-bottom: var(--spacing-huge);
      }
      .logo {
        margin-bottom: var(--spacing-large);
      }

      // Policy & Copy
      .policy-container {
        display: flex;
        justify-content: space-evenly;
        height: 100px;
        flex-direction: column;
        align-items: center;
      }
      .policy-link {
        font-size: var(--font-large);
        color: var(--white);
        display: block;
        width: fit-content;
        padding: var(--spacing-compact);
        margin: var(--spacing-medium) 0 0;
      }
      //test
      // Copy
      .copy {
        margin-top: 1rem;
      }
      .copy span {
        font-size: var(--font-medium);
        color: var(--light-gray);
        display: block;
        text-align: center;
      }

      // Socials
      .socials-container {
        width: 160px;
      }
      .socials {
        display: flex;
        justify-content: space-between;
        padding: var(--spacing-small);
      }

      @media (min-width: 999px) {
        footer {
          flex-direction: row;
          height: 20rem;
        }

        // Logo
        .logo-container,
        .logo {
          margin-bottom: 0;
        }

        // Policy
        .policy-container {
          flex-direction: row;
          justify-content: space-evenly;
          height: auto;
        }
        .policy-link {
          font-size: var(--font-medium);
          color: var(--white);
          display: block;
          width: fit-content;
          padding: var(--spacing-compact) 0 0;
        }

        // Copy
        .copy span {
          margin: 1rem 0 0;
          text-align: left;
        }
      }
    `}</style>
    <div className="logo-container">
      <div className="logo">
        <Link href="/">
          <a>
            <LogoFooter />
          </a>
        </Link>
      </div>

      <div className="policy-container">
        <Link href="/">
          <a className="policy-link">Privacy policy</a>
        </Link>
        <Link href="/">
          <a className="policy-link">Terms of service</a>
        </Link>
      </div>
    </div>

    <div className="socials-container">
      <div className="socials">
        <Link href="https://www.linkedin.com/company/mrsaru/" passHref={true}>
          <a>
            <Linkedin />
          </a>
        </Link>
        <Link href="https://www.instagram.com/mrsaruit/" passHref={true}>
          <a>
            <Instagram />
          </a>
        </Link>
        <Link href="https://twitter.com/MrSaruit" passHref={true}>
          <a>
            <Twitter />
          </a>
        </Link>
      </div>
      <div className="copy">
        <span>&copy; Mr. Saru 2022</span>
      </div>
    </div>
  </footer>
)

export default Footer
