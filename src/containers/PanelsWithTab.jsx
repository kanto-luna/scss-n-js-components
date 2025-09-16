import { onMount } from 'solid-js'

import selfPortraitInAStrawHat from '../assets/self-portrait-in-a-straw-hat.jpg'
import './PanelsWithTab.scss'

export default function PanelsWithTab() {
  onMount(() => {
    // mock runtime event
    document.querySelectorAll('.tab').forEach((tab, index) => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        let panels = document.querySelectorAll('.panel')
        panels.forEach(panel => {
          panel.classList.remove('active')
        })
        panels[index].classList.add('active')
      })
    })
  }, [])
  return (
    <>
      <div className="section">
        <div className='leader'>
          <div className='title'>
            Panels With Tab
          </div>
          <div className='detail'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.
          </div>
          <div className='tabs'>
            <div className='tab active'>Tab 1</div>
            <div className='tab'>Tab 2</div>
            <div className='tab'>Tab 3</div>
            <div className='tab'>Tab 4</div>
            <div className='tab'>Tab 5</div>
            <div className='tab'>Tab 6</div>
          </div>
        </div>
        <div className='panels'>
          <div className='panel active'>
            <img src={selfPortraitInAStrawHat} className='panel-image' />
            <div className='panel-title'>Panel 1</div>
            <div className='panel-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.</div>
          </div>
          <div className='panel'>
            <img src={selfPortraitInAStrawHat} className='panel-image' />
            <div className='panel-title'>Panel 2</div>
            <div className='panel-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.</div>
          </div>
          <div className='panel'>
            <img src={selfPortraitInAStrawHat} className='panel-image' />
            <div className='panel-title'>Panel 3</div>
            <div className='panel-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.</div>
          </div>
          <div className='panel'>
            <img src={selfPortraitInAStrawHat} className='panel-image' />
            <div className='panel-title'>Panel 4</div>
            <div className='panel-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.</div>
          </div>
          <div className='panel'>
            <img src={selfPortraitInAStrawHat} className='panel-image' />
            <div className='panel-title'>Panel 5</div>
            <div className='panel-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.</div>
          </div>
          <div className='panel'>
            <img src={selfPortraitInAStrawHat} className='panel-image' />
            <div className='panel-title'>Panel 6</div>
            <div className='panel-detail'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta recusandae praesentium nesciunt modi fuga eos placeat nobis.</div>
          </div>
        </div>
      </div>
    </>
  )
}