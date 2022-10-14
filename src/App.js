import Layout from './components/Layout'
import Header from './components/Header'
import Hero from './components/Hero'
import BrowseByCategory from './BrowseByCategory'
import { useState, useEffect } from 'react'
import { DB } from './assets/db'
import HeroProduct from './Hero-product'
import ProductsList from './Products-list'
import HeroImg from './components/Hero-img'
import SectionBlogs from './components/Section-blogs'
import Footer from './components/Footer'

function App() {
  let [ db, setDB ] = useState(null)

  useEffect(() => {
    if(DB){
      return setDB(DB)
    }

  }, [])

  if(db){

    return (
      <>
        <Header />
        <Hero url="./images/hero.png"/>
        <Layout>
          <BrowseByCategory db={ db } />
          <HeroProduct db={ db } />
          <ProductsList db={ db } />
          <HeroImg url="./images/random.png" />
          <SectionBlogs blogs={ db.blogs }/>
        </Layout>
        <Footer />
      </>
      
    )
  }
  return <span>Is loading</span>
}

export default App
