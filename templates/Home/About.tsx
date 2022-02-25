import Banner from '@components/container/Banner'
import Wrapper from '@components/container/Wrapper'
import Title from '@components/heading/Title'
import Spinner from '@components/spinner/Default'
import Cubes from '@icons/Cubes'
import Offer from '@icons/Offer'
import Reactive from '@icons/Reactive'

const About = () => {
  return (
    <div className="wrapper-top" id="about">
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

        .spinner-light,
        .spinner-secondary,
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
          .spinner-secondary,
          .cube {
            display: block;
          }
        }

        .spinner-light {
          bottom: -3rem;
          right: 9rem;
        }

        .spinner-primary {
          top: 10rem;
          right: 0rem;
        }

        .spinner-secondary {
          top: 8rem;
          left: -5rem;
        }
      `}</style>
      <div className="title-area">
        <Title>What we offer</Title>
      </div>
      <Wrapper>
        <Banner>
          <div className="content-image">
            <Offer />
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
              Our services portfolio ranges from UX Design and Consultancy to
              Software Development.
            </p>
            <br />
            <br />
            <p>
              <b>- UX Design and Consultancy</b>
            </p>
            <br />
            <br />
            <p>
              <b>- Website development</b>
            </p>
            <br />
            <br />
            <p>
              <b>- Migration of native apps to PWA</b>
            </p>
            <br />
            <br />
            <p>
              <b>- Tailor made systems</b>
            </p>
            <br />
            <br />
            <p>
              Get in contact with us to discuss your needs and we’ll find a
              solution that fits your budget and time. One of our team members
              will be happy to discuss it with you!
            </p>
          </div>
        </Banner>
      </Wrapper>
    </div>
  )
}

export default About
