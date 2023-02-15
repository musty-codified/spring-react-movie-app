import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'

const Home = ({movies}) => {
  return (
    <>
    {/* <Header/> */}
    <Hero movies={movies}/>
    </>
  )
}

export default Home