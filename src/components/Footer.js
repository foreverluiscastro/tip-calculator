import React from 'react'

function Footer() {
  return (
  <footer>
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