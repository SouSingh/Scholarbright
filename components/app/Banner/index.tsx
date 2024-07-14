import Link from 'next/link'
import { useSearch } from '../../../contexts/SearchContext'
import Styles from './Banner.module.css'
import { IconHeart } from '../SvgIcons'

export default function Banner() {
  const { data } = useSearch()

  return (
    <section className={Styles.container}>
      <div>
        <h3>{data?.t?.banner[0] ?? 'Welcome to Scholarbright'}</h3>
        <p>
          {data?.t?.banner[1] ?? 'Find Scholar around you. Discover more. Help the planet.'}
        </p>
      </div>
      <div>
        <Link href="/about">{data?.t?.learnMore ?? 'Learn more'}</Link>
      </div>
    </section>
  )
}
