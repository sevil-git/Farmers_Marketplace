import React from 'react'
import '../App.css'
import bg_hero from '../../assets/hero_bg.png'

const Main = () => {
  return (
    <div>
        <div class="flexCenter wfull hscreen">
        <div class="w50 w501">
            -- Content for first half --
        </div>
        <div class="w50 w502">
            <img className='img' alt='background' src={bg_hero}/>
        </div>
        </div>
    </div>
    

    
  )
}

export default Main