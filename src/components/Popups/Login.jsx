import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ReactModal from "react-modal"
import contactContext from "../../contexts/ContactContext"
import DeletIcon from "../ReactIcons/DeleteIcon"
import googleIcon from '../assets/svg/googleIcon.svg'
import { toast } from "react-toastify"
import Spinner from "../Layouts/Spinner"
import { FaEye, FaEyeSlash } from "react-icons/fa6"

const apiUrl = process.env.REACT_APP_API_URL;

function Login() {
  const navigate = useNavigate()
  const { loginInput, setLoginInput, isloading, setIsloading, login, visible, setVisible, fetchUser, setIsuser, fetchUsercontacts } = useContext(contactContext)
  const { username, password } = loginInput

  const handleOnchange = (e) => {
    setLoginInput({
      ...loginInput,
      [e.target.id]: e.target.value
    }
    )
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsloading(true) 
    const formDetails = new URLSearchParams();
    formDetails.append('username', username)
    formDetails.append('password', password)
    try{
      const response = await fetch(`${apiUrl}/token/`,{
        method: "POST",
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        body: formDetails,
      })
      if(!response.ok){
        setIsloading(false)
        toast.error('Invalid Credentials')
        setLoginInput({
          password: '', username: ''
        })
      }else{
        fetchUser(username)
        fetchUsercontacts(username)
        setIsloading(false)
        toast.success('Welcome back')
        navigate(`/user/${username}`)
        setIsuser(true)
        setLoginInput({
          password: '', username: ''
        }) 
      }
    }catch(error){
      setIsloading(false)
      toast.error('Check your internet connectivity!')
      }
  }

  return <ReactModal isOpen={login} appElement={document.getElementById('root')} className="style">
    { isloading ? <Spinner /> : <div class="flex justify-center mb-0 mt-0">
      <div class="relative border-4 rounded-xl border-dashed border-blue-800 w-64 h-90 bg-gradient-to-t from-pink-800 to-blue-500 hover:shadow-2xl pt-4 pb-6"> 
        <div class="form ">
          <DeletIcon onClick={() => {
            navigate('/Homepage/')
            window.location.reload()}
          } class="absolute text-2xl font-bold top-0 right-0 hover:bg-red-600 cursor-pointer" />
          <form onSubmit={handleSubmit}>
            <div>
              <div class="bg-blue-500">
                <div class="flex justify-center">
                  <div class="inline-flex">
                    <div class=" rounded-full w-5 h-5 mt-2 bg-pink-500"></div>
                    <h2 class="align-middle font-sans text-white font-bold text-2xl pl-1">LOG IN</h2>
                  </div>
                </div>
                <div class="flex justify-center">
                  <p class=" text-white hover:text-black  flex justify-center">Welcom back. </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-3">
              <div class="relative">
                <img src={googleIcon} alt="googleIcon" class="absolute mt-2 ml-4 mr-2" />
                <button type="submit" class="h-10 w-52 hover:bg-gradient-to-l from-green-500 via-orange-500 to-blue-500 font-bold text-black hover:text-white rounded-full">
                  <p class="ml-6">Log in with Google</p>
                </button>
              </div>
            </div>
            <p class="flex justify-center text-black">............... or ...............</p>
            <div class="mr-2 ml-2 mb-0 mt-2">
              <div class="flex justify-center mt-3 mb-5">
                <input id="username" value={username} onChange={handleOnchange} class="input input-sm w-52  hover:bg-blue-200 text-black" placeholder="Email" type="email" required />
              </div>
              <div class="relative flex justify-center mb-0">
                <input id="password" value={password} onChange={handleOnchange} class=" input input-sm w-52 hover:bg-blue-200 text-black" placeholder="Password" type={visible ? "text" : "password"} required />
                <div class="absolute right-5 bottom-1 cursor-pointer text-2xl" onClick={() => setVisible(!visible)}>
                  {visible ? <FaEyeSlash /> : <FaEye />}
                </div> 
              </div>
              <div class="ml-28">
                <p class="text-sm text-white hover:text-black font-bold mb-3 mt-3 pr-0  hover:cursor-pointer">Forgot Password</p>
              </div>
            </div>
            <div class="flex justify-center mb-0 mt-2 ">
              <button type="submit" class="h-10 w-52  hover:bg-gradient-to-l from-green-500 via-orange-500 to-blue-500 font-bold text-black hover:text-white align-middle rounded-full">
                 Log In
              </button>
            </div>
            <div class="flex justify-center">
              <p class="text-white mt-2">Don't have an account ? <span class="text-sm text-blue-500 hover:text-black font-bold mb-2 mt-2 pr-0  hover:cursor-pointer" onClick={() => navigate('/signup')}>Sign Up</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    }
  </ReactModal>
}
export default Login
