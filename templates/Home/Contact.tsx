import Wrapper from '@components/container/Wrapper'
import Spinner from '@components/spinner/Default'
import Clock from '@icons/Clock'
import Reactive from '@icons/Reactive'
import Form from '@components/form/Form'
import Title from '@components/heading/Title'
import Cubes from '@icons/Cubes'

const Contact = () => {
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

        .spinner-secondary {
          top: -3rem;
          right: -1rem;
        }

        .spinner-light {
          top: 2rem;
          left: -3rem;
        }

        .spinner-primary {
          bottom: -2rem;
          right: 8rem;
        }

        #pricing {
          margin-top: 12rem;
        }

        .form-title {
          margin-bottom: 3rem;
          display: block;
        }
      `}</style>
      <div className="title-area">
        <Title>Pricing</Title>
      </div>
      <Wrapper>
        <div className="wrapper-responsive" id="pricing">
          <div className="content-image">
            <Clock></Clock>
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
            <span className="form-title">
              Our price depends on the size of the project. We will discuss it
              before kicking it off!
            </span>
            <Form />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Contact
