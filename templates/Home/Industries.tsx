import Wrapper from '@components/container/Wrapper'
import Spinner from '@components/spinner/Default'
import Building from '@icons/Building'
import Reactive from '@icons/Reactive'
import Title from '@components/heading/Title'
import Cubes from '@icons/Cubes'

const Industries = () => {
  return (
    <div className="wrapper-top">
      <div id="services" className="section-anchor"></div>

      <style jsx>{`
        .section-anchor {
          position: absolute;
          top: -12rem;
        }
        .wrapper-top {
          margin-top: 12rem;
          position: relative;
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

        .industries-text {
          margin-bottom: var(--spacing-medium);
        }
      `}</style>
      <div className="title-area">
        <Title>Sectors</Title>
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
            <p className="industries-text">
              <b>Mr. Saru&#39;s team</b> has experience across multiple sectors
              in a variety of countries:{' '}
              <b>Brazil, China, UK, Switzerland, India</b> and{' '}
              <b>New Zealand</b>.
            </p>
            <ul>
              <b>Our services include:</b>
              <li>Banking</li>
              <li>Blockchain</li>
              <li>Cloud File Management Communication</li>
              <li>Corporate HR</li>
              <li>E-commerce</li>
              <li>Fleet Management</li>
              <li>Task Management</li>
              <li>Software Factory</li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Industries
