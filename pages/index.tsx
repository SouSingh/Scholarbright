import LayoutApp from '../components/app/LayoutApp'
import Search from '../components/app/Search'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'

export default function Index() {
  return (
    <LayoutApp
      title="Find Scholar around you"
      description="Scholarbright is an assistant for Find Scholar around you. Explore a healthier internet with control over algorithms, privacy, and carbon.">
      <Search />
      <WidgetTrends />
      <Banner />
    </LayoutApp>
  )
}
