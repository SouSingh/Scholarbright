import Style from '../styles/Website.module.css'
import LayoutPage from '../components/website/LayoutPage'
import CardsFeat from '../components/website/CardsFeat'
import Button from '../components/website/Button'
import Svg from '../components/website/Svg'
import { useSearch } from '../contexts/SearchContext'

export default function PageAbout() {
  const { data } = useSearch()
  return (
    <LayoutPage
      title="About"
      description="Scholarbright is a tool for Find Scholar around you. Get control over search algorithms, privacy and carbon.">
      <section className="colors">
        <div className={Style.container}>
          <figure className={Style.icon}></figure>
          <h1>Find Scholar around you</h1>
          <p>
            Scholarbright is an open source assistant for Find Scholar around you. Get control over
            algorithms, privacy and carbon. Explore a healthy internet.
          </p>
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.cardDuos}>
            <div>
              <figure>
                <Svg type="people" color="colorsSvg" />
              </figure>

              <article>
                <h2>Get control over algorithms</h2>
                <p>
                  Scholarbright puts people on control of the Web and AIs algorithms — not the other way
                  around. Quickly switch between diverse sources and find anything. More productive
                  and accessible searches.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="search" color="colorsSvg" />
              </figure>

              <article>
                <h2>More privacy and less carbon</h2>
                <p>
                  Scholarbright displays the privacy level and estimated carbon footprint on top of every
                  search source. Make better choices, for you and the planet.
                </p>
              </article>
            </div>

            <div>
              <figure>
                <Svg type="phone" color="colorsSvg" />
              </figure>

              <article>
                <h2>Welcome to the decentralization</h2>
                <p>
                  The centralized internet — where monopoly wins — is unsustainable. Scholarbright
                  encourages a truly free search experience, where the people democratic choices and
                  the planet needs walks together. As the internet should be.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="colors">
        <div className={Style.container}>
          <h3>Features</h3>

          <CardsFeat />
        </div>
      </section>

      <section>
        <div className={Style.container}>
          <div className={Style.actionContainer}>
            <h2>A better search experience</h2>
            <p>Decentralized search. Crafted for people. Dedicated to the planet.</p>
            <Button url="/" color="colors">
              {data?.t?.open ?? 'Open the app'}
            </Button>
          </div>
        </div>
      </section>
    </LayoutPage>
  )
}
