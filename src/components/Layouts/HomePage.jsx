import { useContext } from "react"
import ReactModal from "react-modal"
import contactContext from "../../contexts/ContactContext"
import { toast } from "react-toastify"
import { useNavigate, Link } from "react-router-dom"

function HomePage (){

  const { home, setHome} = useContext(contactContext)
  const navigate = useNavigate()

  return <ReactModal isOpen={home} appElement={document.getElementById('root')} className="styleH">
    <div>
      <div>
        <p class="flex text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 pb-40 ">Make A Choice</p>
      </div>
      <div className="slider">
        <div style={{"--i": 1}} class="max-w-100 card-body ">
          <button class=" h-30 text-white rounded-3xl p-10 mb-5  font-bold bg-blue-500 hover:scale-125 ease-in-out duration-500 hover:bg-gray-500" onClick={() => {
            setHome(true)
            toast.success('Welcome Home')
          }} ><span class=" btn btn-sm flex justify-center hover:text-yellow-600">Home</span></button>
        </div>
        <div style={{ "--i": 2 }} class="max-w-64 card-body">
          <Link to={'/login'} class=" hover:scale-125 ease-in-out duration-500">
            <button class=" h-30 text-white rounded-3xl p-10 mb-5  font-bold bg-yellow-500 hover:bg-gray-500" onClick={() => {
              setHome(false)
              navigate('/login')
            }} ><span class=" btn btn-sm flex justify-center hover:text-green-600">LogIn</span></button>
          </Link>
        </div>
        <div class="max-w-64 card-body" style={{ "--i": 3 }}>
          <Link to={'/signup'} class="hover:scale-125 ease-in-out duration-500">
            <button class=" h-30 text-white rounded-3xl p-10 mb-5 font-bold bg-pink-500 hover:bg-gray-500 " onClick={() => {
              setHome(false)
              navigate('/signup')
            }} ><span class=" btn btn-sm flex justify-center hover:text-pink-600">SignUp</span></button>
          </Link>
        </div>
        <div class="max-w-64 card-body" style={{ "--i": 4}}>
          <button class=" h-30 text-white rounded-3xl p-10 mb-5  font-bold bg-orange-500  hover:bg-gray-500 hover:scale-125 ease-in-out duration-500" onClick={()=>{
            navigate('/about')
          }}><span class="btn btn-sm flex justify-center hover:text-blue-600">About</span></button>
        </div>
        <div class="max-w-64 card-body" style={{ "--i": 5 }}>
          <button class=" h-30 text-white rounded-3xl p-10 mb-5  font-bold bg-green-500 hover:bg-gray-500 hover:scale-125 ease-in-out duration-500" onClick={()=>{
            navigate('/')
            window.location.reload()
          }}><span class="btn btn-sm flex justify-center hover:text-orange-600">GoBack</span></button>
        </div>
      </div>
    </div>      
  </ReactModal>
}
export default HomePage