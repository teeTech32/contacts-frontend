import { useNavigate } from "react-router-dom"
import contact from '../assets/svg/contact.jpg'
import Testimonial from "./Testimonial"
import Parttern from "./Parttern"

const BackgroundImage = {
  backgroundImage:`url(${contact})`,
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  height:'100%',
  width:'100%'
}


function LandingPage(){
  const navigate = useNavigate()

  return <> 
  <div style={BackgroundImage} className='text-blue-600 py-40 md:py-60 lg:py-80'>
    <div class="container sm:px-24 ">
       <div class="flex justify-center w-full h-full">
        <div  data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='200'
            data-aos-duration='2000'
            data-aos-easing='ease-in-sine' class=" space-y-4">
            <div class="font-bold leading-7 lg:mb-40">
              <div class="text-xl font-bold lg:text-2xl">
                <div class="flex flex-wrap container p-2">
                  <h1 class="flex justify-center text-2xl xl:text-3xl hover:text-black font-bold mb-2 lg:mb-6 sm:ml-24">Welcome To teeTech Contact Details Saving App</h1>
                </div>
                <p class=" flex justify-center hover:text-black mb-2 lg:mb-6">We are Trusted and Reliabled </p>
                <h4 class=" flex justify-center hover:text-black mb-2 lg:mb-6" >Save Smartly!!!</h4>
              </div>
              <div className="button">
                <button onClick={() => {
                  navigate('/Homepage')
                }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>    
      </div>  
    </div>
    <Testimonial/>
    <Parttern/>
    </>
}
export default LandingPage
