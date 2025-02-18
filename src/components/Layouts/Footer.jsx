import React from 'react'
import SmileFace from '../ReactIcons/SmileFace'

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer class=' mb-none footer text-content-primary footer-center bg-blue-950/85 bg-opacity-50 p-5'>
      <div>
        <SmileFace class='text-5xl text-white ' />
        <p class='text-white text-sm font-bold'>teeTech&copy;{footerYear} All copy rights reserved!</p>
      </div>
    </footer>
  )
}

export default Footer
