import React from 'react'
import { FaHome } from "react-icons/fa"
import { useContext } from 'react'
import contactContext from '../../contexts/ContactContext'

function Notfound() {
  const { setViewProfile } = useContext(contactContext)

  const closeNotfound = ()=>{
    setViewProfile(false)
    window.location.reload()
  }

  return (
    <div class ="flex justify-center">
      <div class="container bg-gray-200 shadow-2xl border-solid  border-black mt-10 rounded-3xl ">
        <div class='hero'>
          <div class="text-center hero-content">
            <div class="lg:max-w-md max-w-xs">
              <h1 class="lg:text-8xl text-4xl font-bold  text-red-500 mb-4">Oops!</h1>
              <p class="lg:text-3xl text-1.5xl mb-4 font-bold  text-black-500">Something went wrong. The requested contact ID doesn't exist!.</p>
              <button onClick={closeNotfound} class='btn bg-red-500 btn-md lg:btn-lg  text-white lg:text-2xl text-xl'>
                <FaHome class="lg:text-3xl text-xl" />
                <p>Go Back </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notfound