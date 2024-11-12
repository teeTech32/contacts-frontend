import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ReactModal from 'react-modal'
import { useContext } from 'react'
import contactContext from '../../contexts/ContactContext'
import DeletIcon from "../ReactIcons/DeleteIcon"
import { useNavigate } from 'react-router-dom'
 


function About() {
  const { about } = useContext(contactContext)
  const navigate = useNavigate()

  return (
    <ReactModal isOpen={about } appElement={document.getElementById('root')} className="style">
     <div  class="scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-gray-500 h-80 overflow-y-scroll">
       <div class="relative text-center container bg-white text-black p-5 m-10 rounded-3xl">
         <DeletIcon onClick={() => {navigate(-1) 
         }} class="absolute text-2xl font-bold top-2 right-2 hover:bg-red-600 cursor-pointer" />
         <h1 class="text-4xl font-bold mb-4">Contact Application</h1>
         <p class="mb-4 text-xl font-ligth">This is a fullstack App that saves contact details, which involeved both the frontend and the backend technologies. The backend technologies are: python(fastAPI), postgreSQL, AWS(S3 Buckect), while the frontend technologies are:Reactjs, TailwindCSS and DaisyUI, React-toastify to mension few. Docker was also used for balancing and proper networking among different applications in a containerized form. It includes Login and Sign Up Authentication and Authorization, Add contact, Edit(Update) contact and Delete contact.
         </p>
         <div class="container mx-auto ">
           <a href="https://www.linkedin.com/in/timothy-atanda-55b36424a" class="text-black underline  flex-none px-2 mx-2" ><FaLinkedin class="inline text-3xl" /><span class="text-xl font-bold">By teeTech</span></a>
         </div>
         <p class=" text-lg text-black">
           Version: <span class="text-gray-600">1.0.0</span>
         </p>
         <div class=" text-lg text-black ">
           Also layout By:
           <div class='container mx-auto'>
             <a class="text-black underline  flex-none px-2 mx-2" href="https://github.com/teeTech32"><FaGithub class='inline text-3xl' /><span class="text-xl font-bold">Atanda Timothy</span></a>
           </div>
         </div>
       </div>
     </div>

    </ReactModal>
    
  )
}

export default About
