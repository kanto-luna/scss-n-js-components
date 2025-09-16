import { onMount } from 'solid-js'

import './Carousel.scss'
import selfPortraitInAStrawHat from '/assets/self-portrait-in-a-straw-hat.jpg'

export default function Carousel() {
  onMount(() => {
    // mock runtime event
    let resizeTimer = null
    let carouselItems = document.querySelector('.section-02 .carousel-items')
    let carouselItem = document.querySelector('.section-02 .carousel-item')
    window.addEventListener('resize', () => {
      if (resizeTimer) {
        clearTimeout(resizeTimer)
      }
      resizeTimer = setTimeout(() => {
        document.querySelectorAll('.section-02 .carousel-controller-item').forEach(item => {
          item.classList.remove('active')
        })
        document.querySelectorAll('.section-02 .carousel-controller-item')[0].classList.add('active')
        carouselItems.style.transform = `translateX(0)`
        resizeTimer = null
      }, 500)
    })
    document.querySelectorAll('.section-02 .carousel-controller-item').forEach((item, index) => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.section-02 .carousel-controller-item').forEach(item => {
          item.classList.remove('active')
        })
        item.classList.add('active')
        carouselItems.style.transform = `translateX(-${index * carouselItem.offsetWidth}px)`
      })
    })
  }, [])
  return (
    <>
      <div className='section'>
        <div className='title'>
          <span> Carousel </span>
          <span> Show Your Pictures </span>
        </div>
        <div className='carousel'>
          <div className='carousel-screen'>
            <div className='carousel-items'>
              <div className='carousel-item'>
                <div className='carousel-item-content'>
                  <span className='carousel-item-title'>Card 1</span>
                  <span className='carousel-item-detail'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi cum quam praesentium hic minus repellat. Labore facere in nostrum provident atque! Vero, exercitationem.
                  </span>
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-content'>
                  <span className='carousel-item-title'>Card 2</span>
                  <span className='carousel-item-detail'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi cum quam praesentium hic minus repellat. Labore facere in nostrum provident atque! Vero, exercitationem.
                  </span>
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-content'>
                  <span className='carousel-item-title'>Card 3</span>
                  <span className='carousel-item-detail'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi cum quam praesentium hic minus repellat. Labore facere in nostrum provident atque! Vero, exercitationem.
                  </span>
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-content'>
                  <span className='carousel-item-title'>Card 4</span>
                  <span className='carousel-item-detail'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi cum quam praesentium hic minus repellat. Labore facere in nostrum provident atque! Vero, exercitationem.
                  </span>
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-content'>
                  <span className='carousel-item-title'>Card 5</span>
                  <span className='carousel-item-detail'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi cum quam praesentium hic minus repellat. Labore facere in nostrum provident atque! Vero, exercitationem.
                  </span>
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
              <div className='carousel-item'>
                <div className='carousel-item-content'>
                  <span className='carousel-item-title'>Card 6</span>
                  <span className='carousel-item-detail'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem modi cum quam praesentium hic minus repellat. Labore facere in nostrum provident atque! Vero, exercitationem.
                  </span>
                </div>
                <img src={selfPortraitInAStrawHat} className='carousel-item-image' />
              </div>
            </div>
          </div>
          <div className='carousel-controller'>
            <div className='carousel-controller-item active'>
              <div className='carousel-controller-item-content'>
                <span>Total</span>
                <span>6</span>
                <span>Pictures</span>
              </div>
            </div>
            <div className='carousel-controller-item'>
              <div className='carousel-controller-item-content'>
                <span>Total</span>
                <span>6</span>
                <span>Pictures</span>
              </div>
            </div>
            <div className='carousel-controller-item'>
              <div className='carousel-controller-item-content'>
                <span>Total</span>
                <span>6</span>
                <span>Pictures</span>
              </div>
            </div>
            <div className='carousel-controller-item'>
              <div className='carousel-controller-item-content'>
                <span>Total</span>
                <span>6</span>
                <span>Pictures</span>
              </div>
            </div>
            <div className='carousel-controller-item'>
              <div className='carousel-controller-item-content'>
                <span>Total</span>
                <span>6</span>
                <span>Pictures</span>
              </div>
            </div>
            <div className='carousel-controller-item'>
              <div className='carousel-controller-item-content'>
                <span>Total</span>
                <span>6</span>
                <span>Pictures</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}