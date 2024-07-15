import LayoutApp from '../components/app/LayoutApp'
import Search from '../components/app/Search'
import WidgetTrends from '../components/app/WidgetTrends'
import Banner from '../components/app/Banner'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Index() {
  const [searchInput, setSearchInput] = useState<string>('')
  console.log(searchInput)
  // if(searchInput != ''){
  //   console.log(axios.get("http://127.0.0.1:8000/query/?prompt="+ searchInput))
  // }


  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    // e.preventDefault();
    try {
      const result = await axios.post('https://schlarbright-1.onrender.com/query/', {
        prompt: searchInput
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };
  
  if(searchInput != ''){
    handleSubmit()
    console.log("::", response)
  } 


  useEffect(() => {
    console.log(response)
  }, [response])
  

  


  return (
    <LayoutApp
      title="Find Scholar around you"
      description="Scholarbright is an assistant for Find Scholar around you. Explore a healthier internet with control over algorithms, privacy, and carbon.">
      <Search setSearchInput={setSearchInput}/>
      <WidgetTrends />
      <Banner />
    </LayoutApp>
  )
}
