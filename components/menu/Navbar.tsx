import { useState } from 'react'
import Ghost from '@components/button/Ghost'
import Hamburger from '@icons/Hamburger'
import Item from './Item'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav>
      <style jsx>{`
        nav {
          max-width: 100rem;
        }
        nav,
        ul {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          height: 8rem;
        }
        /* .menu-wrapper.active {
          display: flex;
          position: absolute;
          flex-direction: column;
          width: 30rem;
          height: 400px;
          top: 0;
          right: 0;
          background: var(--primary);
        } */
        li {
          width: 100%;
          height: 100%;
        }
        .menu-wrapper {
          display: none;
        }

        @media (min-width: 999px) {
          .hamburger-wrapper {
            display: none;
          }
          .menu-wrapper {
            display: flex;
          }
        }
      `}</style>
      <div className="hamburger-wrapper">
        <Ghost onClick={() => setIsActive(!isActive)}>
          <Hamburger />
        </Ghost>
      </div>
      <ul className={`menu-wrapper ${isActive ? 'active' : ''}`}>
        <li>
          <Item url="#home">HOME</Item>
        </li>
        <li>
          <Item url="#about">ABOUT</Item>
        </li>
        <li>
          <Item url="#services">SERVICES</Item>
        </li>
        <li>
          <Item url="#projects">PROJECTS</Item>
        </li>
        <li>
          <Item url="#contact">CONTACT</Item>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
