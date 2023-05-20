import React from 'react'
import useWindowDimensions from '../helpers/useWindowDimensions'

function Footer() {
  const {height, width } = useWindowDimensions()

  const footerClass = width > 814 ? 'web-footer' : 'phone-footer'

  return (
  <footer className={footerClass}>
    <h4>Created By Luis Castro</h4>
    <div className='links-div'>
      <h4>Follow Me:</h4>
      <button>
        <a href="https://www.linkedin.com/in/luis-dejesus-castro/" target='_blank'>
          <img src="../icons/linkedin.png"/>
        </a>
      </button>
      <button>
        <a href="https://medium.com/@luis-dejesus-castro" target='_blank'>
          <img src="../icons/medium.png"/>
        </a>  
      </button>
      <button>
        <a href="https://github.com/foreverluiscastro" target='_blank'>
          <img src="../icons/octocat.png"/>
        </a>
      </button>
    </div>
  </footer>
  )
}

export default Footer