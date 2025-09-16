import './App.scss'
import PanelsWithTab from './containers/panels-with-tab/PanelsWithTab'
import Carousel from './containers/carousel/Carousel'

function App() {
  return (
    <>
      <h1>Scss & Js Components</h1>
      <hr />
      <section className='section-01 section-panels-with-tabs'>
        <h2>Section 01 - Panels With Tabs</h2>
        <PanelsWithTab />
      </section>
      <section className='section-02'>
        <h2>Section 02 - Carousel</h2>
        <Carousel />
      </section>
    </>
  )
}

export default App
