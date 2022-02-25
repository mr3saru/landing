import Banner from '@components/container/Banner'
import Wrapper from '@components/container/Wrapper'
import Title from '@components/heading/Title'
import Spinner from '@components/spinner/Default'
import Cubes from '@icons/Cubes'
import Person from '@icons/Person'
import Reactive from '@icons/Reactive'

const Values = () => {
  return (
    <div className="wrapper-top" id="values">
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

        .spinner-light {
          top: 3rem;
          right: 0rem;
        }

        .spinner-primary {
          top: 8rem;
          left: 0rem;
        }

        .spinner-secondary {
          bottom: 5rem;
          right: 9rem;
        }
      `}</style>
      <div className="title-area">
        <Title>Values</Title>
      </div>
      <Wrapper>
        <Banner>
          <div className="content-image">
            <Person />
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
              <b>Commitment</b>
            </p>
            <p>We deliver what we commit to</p>
            <br />
            <br />
            <p>
              <b>Go there and do it!</b>
            </p>
            <p>We believe there is (more than) a solution for every problem.</p>
            <p>We are a pro-active team that make things happen!</p>
            <br />
            <br />
            <p>
              <b>Freedom</b>
            </p>
            <p>
              We respect and encourage inquisitive minds. We are free to express
              our ideas and opinions.
            </p>
            <br />
            <br />
            <p>
              <b>Confidence</b>
            </p>
            <p>
              We are constantly learning to build up our confidence and deliver
              the most updated technologies and solutions to our customers
            </p>
            <br />
            <br />
            <p>
              <b>Customer centered</b>
            </p>
            <p>
              We provide more than a solution. We are here to add and deliver
              value to our customers
            </p>
          </div>
        </Banner>
      </Wrapper>
    </div>
  )
}

export default Values
