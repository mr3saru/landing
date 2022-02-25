import Wrapper from '@components/container/Wrapper'
import Spinner from '@components/spinner/Default'
import Building from '@icons/Building'
import Reactive from '@icons/Reactive'
import Title from '@components/heading/Title'
import Cubes from '@icons/Cubes'

const Industries = () => {
  return (
    <div className="wrapper-top" id="home">
      <style jsx>{`
        .wrapper-top {
          margin-top: 12rem;
        }
        .wrapper-responsive {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          grid-gap: 5rem;
        }
        .title-area {
          margin-bottom: 3rem;
          padding: var(--spacing-compact) var(--spacing-large);
          width: 100%;
          display: flex;
          justify-content: center;
        }

        @media (min-width: 999px) {
          .wrapper-responsive {
            grid-template-columns: 1fr 1fr;
            grid-gap: 20rem;
          }
        }

        .content-text {
          font-size: var(--font-xlarge);
          font-weight: var(--font-light);
          color: var(--gray);
          position: relative;
        }
        .cube {
          position: absolute;
          right: -5rem;
          top: -10rem;
        }
        .content-text b {
          font-weight: var(--font-bold);
        }
        .content-text b a {
          color: var(--primary);
        }
        .content-image {
          position: relative;
        }

        .spinner {
          position: absolute;
        }

        .spinner-light,
        .spinner-secondary,
        .cube {
          display: none;
        }

        @media (min-width: 999px) {
          .spinner-light,
          .spinner-secondary,
          .cube {
            display: block;
          }
        }

        .spinner-primary {
          top: -3rem;
          right: -1rem;
        }

        .spinner-secondary {
          top: 2rem;
          left: -3rem;
        }

        .spinner-light {
          bottom: -2rem;
          right: 8rem;
        }

        #industries {
          margin-top: 12rem;
        }

        .form-title {
          margin-bottom: 3rem;
          display: block;
        }
      `}</style>
      <div className="title-area">
        <Title>Industries</Title>
      </div>
      <Wrapper>
        <div className="wrapper-responsive" id="industries">
          <div className="content-image">
            <Building />
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
              <b>Mr. Saru&#39;s team</b> has experience across multiple
              industries in a variety of countries: <b>Brazil, China, UK</b> and{' '}
              <b>New Zealand</b>.
            </p>
            <p>
              Banking, Blockchain, Cloud File Management Communication,
              Corporate HR, E-commerce, Fleet Management, Task Management,
              Software Factory.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Industries
