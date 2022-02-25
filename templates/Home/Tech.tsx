import Wrapper from '@components/container/Wrapper'
import Title from '@components/heading/Title'
import Image from 'next/image'

import Figma from '@public/images/tech/figma.png'
import Gatsby from '@public/images/tech/gatsby.png'
import Git from '@public/images/tech/git.png'
import Github from '@public/images/tech/github.png'
import Graphql from '@public/images/tech/graphql.png'
import Javascript from '@public/images/tech/javascript.png'
import Jest from '@public/images/tech/jest.png'
import Nextjs from '@public/images/tech/nextjs.png'
import Node from '@public/images/tech/node.png'
import ReactImage from '@public/images/tech/react.png'
import Redux from '@public/images/tech/redux.png'
import Sass from '@public/images/tech/sass.png'
import Typescript from '@public/images/tech/typescript.png'
import Vercel from '@public/images/tech/vercel.png'
import Vscode from '@public/images/tech/vscode.png'

const Tech = () => {
  return (
    <div className="wrapper-top" id="tech">
      <style jsx>{`
        .wrapper-top {
          margin-top: 5rem;
        }
        .title-area {
          margin-bottom: 3rem;
          padding: var(--spacing-compact) var(--spacing-large);
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .grid-image {
          min-height: 50rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 3rem;
        }

        figure {
          display: none;
          position: relative;
        }

        .principal-stack {
          display: block;
        }

        @media (min-width: 768px) {
          figure {
            display: block;
          }
          .wrapper-top {
            margin-top: 20rem;
          }
          .title-area {
            margin-bottom: 5rem;
          }

          .grid-image {
            grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
            grid-gap: 6rem;
          }
        }

        @media (min-width: 999px) {
          .figure-small {
            margin-top: 3rem;
            max-height: 8rem;
          }
        }
      `}</style>
      <div className="title-area">
        <Title>Tech</Title>
      </div>
      <Wrapper>
        <div className="grid-image">
          <figure>
            <Image
              src={Vercel}
              alt={'Vercel'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="principal-stack">
            <Image
              src={Nextjs}
              alt={'Nextjs'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="figure-small principal-stack">
            <Image
              src={Typescript}
              alt={'Typescript'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="principal-stack">
            <Image
              src={ReactImage}
              alt={'ReactImage'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="principal-stack">
            <Image src={Node} alt={'Node'} layout="fill" objectFit="contain" />
          </figure>
          <figure className="principal-stack">
            <Image
              src={Redux}
              alt={'Redux'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="principal-stack">
            <Image
              src={Graphql}
              alt={'Graphql'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="figure-small">
            <Image
              src={Javascript}
              alt={'Javascript'}
              layout="fill"
              objectFit="contain"
            />
          </figure>

          <figure className="principal-stack">
            <Image src={Git} alt={'Git'} layout="fill" objectFit="contain" />
          </figure>
          <figure className="principal-stack">
            <Image
              src={Figma}
              alt={'Figma'}
              layout="fill"
              objectFit="contain"
            />
          </figure>

          <figure>
            <Image
              src={Gatsby}
              alt={'Gatsby'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className="figure-small">
            <Image src={Sass} alt={'Sass'} layout="fill" objectFit="contain" />
          </figure>
          <figure className="figure-small">
            <Image src={Jest} alt={'Jest'} layout="fill" objectFit="contain" />
          </figure>
          <figure className="figure-small">
            <Image
              src={Vscode}
              alt={'Vscode'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure>
            <Image
              src={Github}
              alt={'Github'}
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </div>
      </Wrapper>
    </div>
  )
}

export default Tech
