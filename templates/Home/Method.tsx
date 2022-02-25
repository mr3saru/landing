import Banner from '@components/container/Banner'
import Wrapper from '@components/container/Wrapper'
import Title from '@components/heading/Title'
import Spinner from '@components/spinner/Default'
import Cubes from '@icons/Cubes'
import Rocket from '@icons/Rocket'
import Reactive from '@icons/Reactive'

const Values = () => {
  return (
    <div className="wrapper-top" id="method">
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

        .content-text,
        .content-image {
          position: relative;
        }

        .cube {
          position: absolute;
          right: -5rem;
          top: -10rem;
        }

        .spinner {
          position: absolute;
        }

        .spinner-secondary,
        .spinner-primary,
        .cube {
          display: none;
        }

        @media (min-width: 999px) {
          .wrapper-top {
            margin-top: 20rem;
          }
          .title-area {
            margin-bottom: 5rem;
          }

          .spinner-light,
          .spinner-primary,
          .spinner-secondary,
          .cube {
            display: block;
          }
        }

        .spinner-primary {
          top: 3rem;
          right: 0rem;
        }

        .spinner-light {
          top: 8rem;
          left: 0rem;
        }

        .spinner-secondary {
          bottom: 5rem;
          right: 9rem;
        }
      `}</style>
      <div className="title-area">
        <Title>Our working method</Title>
      </div>
      <Wrapper>
        <Banner>
          <div className="content-image">
            <Rocket />
            <div className="spinner spinner-light">
              <Spinner speed={12}>
                <Reactive color="light" />
              </Spinner>
            </div>
            <div className="spinner spinner-primary">
              <Spinner speed={12}>
                <Reactive color="primary" />
              </Spinner>
            </div>
            <div className="spinner spinner-secondary">
              <Spinner speed={12}>
                <Reactive color="secondary" />
              </Spinner>
            </div>
          </div>
          <div className="content-text">
            <div className="cube">
              <Cubes />
            </div>
            <p>
              We are a passionate and committed team of developers and designers
              with global experience. We follow agile methods and deliver
              solutions with startup thinking.
            </p>
            <br />
            <br />
            <p>
              <b>1. Scope Definition</b>
            </p>
            <br />
            <br />
            <p>
              <b>2. UX and Design</b>
            </p>
            <br />
            <br />
            <p>
              <b>3. Development </b>
            </p>
            <br />
            <br />
            <p>
              <b>4. Delivery</b>
            </p>
            <br />
            <br />
            <p>
              <b>
                <a href="#">[I want to get in touch with Mr. Saru!]</a>
              </b>
            </p>
          </div>
        </Banner>
      </Wrapper>
    </div>
  )
}

export default Values
