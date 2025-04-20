import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {



  // here we create a state to store the data into it
  const [imageData, setImageData] = useState([])

  // custom search in query of api
  const [queryParam, setQueryParam] = useState('india')
  
  const api_key = '49717660-48f14e4f71ea1cb8a279d920c'

  // category list on the api
  const categories = [
    'backgrounds',
    'fashion',
    'nature',
    'science',
    'education',
    'feelings',
    'health',
    'people',
    'religion',
    'places',
    'animals',
    'industry',
    'computer',
    'food',
    'sports',
    'transportation',
    'travel',
    'buildings',
    'business',
    'music',
  ];


  // we using useeffect
  useEffect(() => {
    // implementing data fetching here from the api 
    const dataFetch = async () => {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${queryParam}&image_type=photo&per_page=200`) 
      const response = await api.json()
      // console.log(response.hits)
      setImageData(response.hits)
    }
    dataFetch();
    
  }, [queryParam])

  const fetchByCategory = async (category) => {
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${category}&image_type=photo&per_page=200`) 
      const response = await api.json()
      // console.log(response.hits)
      setImageData(response.hits)
  }



  return (
    <PixabayContext.Provider value={{imageData,setImageData, setQueryParam, fetchByCategory, categories}}>{props.children}</PixabayContext.Provider>
  )
}

export default PixabayState;