import { createSignal, onMount } from 'solid-js'

import './App.scss'
import PanelsWithTab from './containers/panels-with-tab/PanelsWithTab'
import Carousel from './containers/carousel/Carousel'
import CarouselFolded from './containers/carousel-folded/CarouselFolded'

function App() {
  const [breakpoint, setBreakpoint] = createSignal('Mobile')
  const whichBreakpoint = (width) => {
    if (width < 768) {
      setBreakpoint('Mobile')
    } else if (width < 1025) {
      setBreakpoint('Tablet')
    } else {
      setBreakpoint('Desktop')
    }
  }
  onMount(() => {
    whichBreakpoint(window.innerWidth)
    window.addEventListener('resize', () => {
      whichBreakpoint(window.innerWidth)
    })
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        document.querySelector('.scroll-to-top').classList.remove('hidden')
      } else {
        document.querySelector('.scroll-to-top').classList.add('hidden')
      }
    })
    document.querySelector('.scroll-to-top').addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  })
  return (
    <>
      <h1>SCSS & JS Components</h1>
      <hr />
      <section className='section-00 section-above-all'>
        <h2>Above All</h2>
        <article className='alert'>
          <h3>警告 Alert</h3>
          <p>
            All design is collected from the internet. if any design is not allowed, please contact me. 
          </p>
          <p>
            所有设计均来自网络，如有侵权请联系我。
          </p>
        </article>
        <article>
          <h3>Current Breakpoint</h3>
          <p>{breakpoint}</p>
        </article>
      </section>
      <section className='section-01 section-panels-with-tabs'>
        <h2>Section 01 - Panels With Tabs</h2>
        <PanelsWithTab />
      </section>
      <section className='section-02 section-carousel'>
        <h2>Section 02 - Carousel</h2>
        <Carousel />
      </section>
      <section className='section-03 section-carousel-folded'>
        <h2>Section 03 - Carousel Folded</h2>
        <CarouselFolded />
      </section>
      <div className='floating-button'>
        <div className='scroll-to-top hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M9.21 11H11v9c0 .55.45 1 1 1s1-.45 1-1v-9h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85zM4 4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z" fill="currentColor"></path></svg>
        </div>
      </div>
    </>
  )
}

export default App
