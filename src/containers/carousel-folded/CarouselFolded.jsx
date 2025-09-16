import { onMount } from 'solid-js'

import './CarouselFolded.scss'
import selfPortraitInAStrawHat from '/assets/self-portrait-in-a-straw-hat.jpg'

export default function CarouselFolded() {

  onMount(() => {
    // mock runtime event
    let resizeTimer = null
    let carouselItems = document.querySelector('.section-03 .carousel-items')
    let carouselItem = document.querySelector('.section-03 .carousel-item')
    window.addEventListener('resize', () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer)
      }
      resizeTimer = setTimeout(() => {
        document.querySelectorAll('.section-03 .carousel-controller-item').forEach(item => {
          item.classList.remove('active')
        })
        document.querySelectorAll('.section-03 .carousel-controller-item')[0].classList.add('active')
        carouselItems.style.transform = `translateX(0)`
        resizeTimer = null
      }, 500)
    })
    document.querySelectorAll('.section-03 .carousel-controller-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.section-03 .carousel-controller-item').forEach(item => {
          item.classList.remove('active')
        })
        item.classList.add('active')
        carouselItems.style.transform = `translateX(-${index * carouselItem.offsetWidth}px)`
      })
    })
  })

  return (
    <>
      <div className="section">
        <div className="title">
          <span> Carousel Folded </span>
          <span> Show Your Pictures </span>
        </div>
        <div className='carousel'>
          <div className='carousel-screen'>
            <div className='carousel-items'>
              <div className='carousel-item'>
                <div className='carousel-item-title'>
                  Card 1
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-title'>
                  Card 2
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-title'>
                  Card 3
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
            </div>
          </div>
          <div className='carousel-controller'>
            <div className='carousel-controller-item active'></div>
            <div className='carousel-controller-item'></div>
            <div className='carousel-controller-item'></div>
          </div>
        </div>
      </div>
    </>
  )
}