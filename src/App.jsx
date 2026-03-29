import './App.css'
import Banner from './Components/Header/Banner'
import NavBar from './Components/Header/NavBar'
import InfoStrip from './Components/Main/InfoStrip'
import TabSection from './Components/Main/TabSection'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <InfoStrip></InfoStrip>

      <TabSection></TabSection>
      <div>hi</div>
    </>
  )
}

export default App
