import Banner from '@components/container/Banner'
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
        <Banner>
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

          <div>
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
        </Banner>
      </Wrapper>
    </div>
  )
}

export default Welcome
