import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Header/Banner'
import NavBar from './Components/Header/NavBar'
import Products from './Components/Main/CardsSection/Products'
import InfoStrip from './Components/Main/InfoStrip'
import TabSection from './Components/Main/TabSection'
import { useState } from "react";
import Carts from './Components/Main/Carts/Carts'

const productsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const productsPromise = productsData()
  const [activeTab, setActiveTab] = useState("product")

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <InfoStrip></InfoStrip>
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab}></TabSection>

      {activeTab === "product" &&
        <Suspense fallback={"Loading..."}>
          <Products productsPromise={productsPromise}></Products>
        </Suspense>
      }

      {activeTab === "cart" && <Carts></Carts>}

    </>
  )
}

export default App
