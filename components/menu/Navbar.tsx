import { useState } from 'react'
import Ghost from '@components/button/Ghost'
import Hamburger from '@icons/Hamburger'
import Item from './Item'
import Close from '@icons/Close'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav>
      <style jsx>{`
        nav {
          max-width: 100rem;
        }
        nav,
        .menu-wrapper {
          display: flex;
          align-items: center;
        }
        .menu-wrapper.active {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--primary);
          z-index: var(--layer-menu);
          flex-direction: column;
          justify-content: space-around;
        }

        .menu-wrapper:not(.active) li {
          width: 100%;
          height: 100%;
        }

        .menu-wrapper:not(.active) {
          display: none;
        }

        .close-menu {
          position: absolute;
          top: var(--spacing-small);
          right: var(--spacing-small);
          width: 4rem;
          height: 4rem;
        }

        @media (min-width: 999px) {
          .close-menu,
          .hamburger-wrapper {
            display: none;
          }
          .menu-wrapper:not(.active) {
            display: flex;
          }
          nav,
          .menu-wrapper {
            width: 100%;
            height: 8rem;
            justify-content: flex-end;
            flex-direction: row;
          }
        }
      `}</style>
      <div className="hamburger-wrapper">
        <Ghost onClick={() => setIsActive(!isActive)}>
          <Hamburger />
        </Ghost>
      </div>
      <ul className={`menu-wrapper ${isActive ? 'active' : ''}`}>
        <li className="close-menu">
          <Ghost onClick={() => setIsActive(!isActive)}>
            <Close />
          </Ghost>
        </li>
        <li onClick={() => setIsActive(false)}>
          <Item url="#home">HOME</Item>
        </li>
        <li onClick={() => setIsActive(false)}>
          <Item url="#about">ABOUT</Item>
        </li>
        <li onClick={() => setIsActive(false)}>
          <Item url="#services">SERVICES</Item>
        </li>
        <li onClick={() => setIsActive(false)}>
          <Item url="#projects">PROJECTS</Item>
        </li>
        <li onClick={() => setIsActive(false)}>
          <Item url="#contact">CONTACT</Item>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
