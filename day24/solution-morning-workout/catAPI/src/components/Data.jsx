import {useState, useEffect} from 'react'

const CatAPI = () => {

  const [data, setData] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

      const fetchData = async () => {
        const response = await fetch('http://www.cbp-exercises.test/exercises/day-25/morning-workout/')
        const responseData = await response.json()
        setData(responseData)
        setDataLoaded(true)
    }
    
    useEffect(() => {
      fetchData()
    }, [])
    
    console.log(data);
    
    return(
      <div>
        {!dataLoaded ?
          <p>Loading</p> :
          <p>{data.fact}</p>
        }
      </div>
    )
  }
  
export default CatAPI;