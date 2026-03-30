import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Header/Banner'
import NavBar from './Components/Header/NavBar'
import Products from './Components/Main/CardsSection/Products'
import InfoStrip from './Components/Main/InfoStrip'
import TabSection from './Components/Main/TabSection'

const productsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productsPromise = productsData()

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <InfoStrip></InfoStrip>
      <TabSection></TabSection>

      <Suspense fallback={"Loading..."}>
        <Products productsPromise={productsPromise}></Products>
      </Suspense>
    </>
  )
}

export default App
