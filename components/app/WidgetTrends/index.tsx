import Styles from './WidgetTrends.module.css'
import Image from 'next/image'
import { useSearch } from '../../../contexts/SearchContext'
import Loader from '../Loader'
import { ITrendsItem } from '../../../interfaces/trends'
import { useState } from 'react'
import ButtonGeolocation from '../ButtonGeolocation'

const scholarships = [
  { title: 'INSPIRE Scholarship for Higher Education' },
  { title: 'MCM Scholarship Scheme for Minorities' },
  { title: 'National Scholarship for Persons with Disabilities' },
  { title: 'Pragati Scholarship for Girls' },
  { title: 'Scholarships for Top Class Education for Students with Disabilities' },
  { title: 'Swami Vivekananda Single Girl Child Scholarship' },
  { title: 'TEQIP Scholarship for Engineering Students' },
  { title: 'UGC Scholarships for Research and Teaching' },
  { title: 'AICTE Pragati Scholarship Scheme for Girls' },
  { title: 'AICTE Saksham Scholarship Scheme for Specially Abled Students' }
];
export default function SearchTrends() {
  const { category, titleTrends, putValue } = useSearch()
  const [dataTrends, setDataTrends] = useState<ITrendsItem[]>(scholarships)
  const [errorTrends, setErrorTrends] = useState<any>(null)

  const miniImage =
    category === 'Web' ||
    category === 'AI' ||
    category === 'Local' ||
    category === 'Code' ||
    category === 'Apps'

  return (
    <div className={Styles.space}>
    <section className={Styles.section + ' ' + Styles[`trends${category}`]}>
      <div className={Styles.title}>
        <h2>{titleTrends ?? 'Trends'}</h2>
      </div>

      {category === 'Local' && <ButtonGeolocation />}
      {!dataTrends && !errorTrends && category != 'Local' && <Loader />}
      {errorTrends && <div>Error</div>}

      {dataTrends && (
        <div className={Styles.container}>
          <ul>
            {dataTrends.map((item: ITrendsItem, index: number) => (
              <li key={index}>
                <button
                  onClick={() =>
                    item.url ? window.open(item.url, '_blank') : putValue(item.title.toLowerCase())
                  }>
                  {item.title && <span>{item.title}</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
    </div>
  )
}


