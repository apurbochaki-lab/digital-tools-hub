import './App.css'
import Banner from './Components/Header/Banner'
import NavBar from './Components/Header/NavBar'
import Products from './Components/Main/CardsSection/Products'
import InfoStrip from './Components/Main/InfoStrip'
import TabSection from './Components/Main/TabSection'
import { useState } from "react";
import Carts from './Components/Main/Carts/Carts'
import Steps from './Components/Main/Steps'
import Pricings from './Components/Main/Pricings/Pricings'
import WorkflowStrip from './Components/Main/WorkflowStrip'
import Footer from './Components/Footer/Footer'

function App() {
  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([])

  return (
    <>
      <NavBar carts={carts}></NavBar>
      <Banner></Banner>
      <InfoStrip></InfoStrip>
      <TabSection
        activeTab={activeTab} setActiveTab={setActiveTab}
        carts={carts}
      ></TabSection>

      {activeTab === "product" &&
        <Products
          carts={carts} setCarts={setCarts}
        ></Products>
      }

      {activeTab === "cart" && <Carts carts={carts} setCarts={setCarts}></Carts>}
      <Steps></Steps>
      <Pricings></Pricings>
      <WorkflowStrip></WorkflowStrip>
      <Footer></Footer>

    </>
  )
}

export default App
