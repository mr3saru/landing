import Wrapper from '@components/container/Wrapper'
import Spinner from '@components/spinner/Default'
import Reactive from '@icons/Reactive'
import SoftwareHouse from '@icons/SoftwareHouse'

const Welcome = () => {
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
        .spinner-secondary {
          display: none;
        }

        @media (min-width: 999px) {
          .spinner-light,
          .spinner-secondary {
            display: block;
          }
        }

        .spinner-light {
          top: -5rem;
          right: -5rem;
        }

        .spinner-primary {
          top: -3rem;
          left: -3rem;
        }

        .spinner-secondary {
          bottom: -8rem;
          right: 8rem;
        }
      `}</style>
      <Wrapper>
        <div className="wrapper-responsive">
          <div className="content-image">
            <SoftwareHouse />
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
            <p>
              Welcome to <b>Mr. Saru! </b>
            </p>
            <br />
            <p>
              We are a <b>software house</b> company. We offer agile and tailor
              made digital solutions to our customers. Our main goal is to
              delight our customers delivering scalable and lean solutions.
            </p>
            <br />
            <p>
              <b>
                <a href="#">[Click here to book a meeting]</a>
              </b>
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Welcome
