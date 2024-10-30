import { useContext, useState} from "react"
import {useNavigate} from 'react-router-dom'
import ReactModal from "react-modal"
import contactContext from "../../contexts/ContactContext"
import DeletIcon from "../ReactIcons/DeleteIcon"
import { toast } from "react-toastify"
import Spinner from "../Layouts/Spinner"
import {FaEye, FaEyeSlash} from "react-icons/fa6"

const apiUrl = process.env.REACT_APP_API_URL;

function SignUp() {
  const navigate = useNavigate()
  const [confirmPassword, setConfirmPassword] = useState('')
  const { signinData, setSigninData, isloading, setIsloading, signin, visible, setVisible, visibleC, setVisibleC, fetchUser, setIsuser, fetchUsercontacts } = useContext(contactContext)
  const { full_name, username, password,} = signinData

  const handleOnchange = (e) => {
    setSigninData({
      ...signinData,
      [e.target.id]: e.target.value
    }
    )
}
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsloading(true)
    try{
      const signinDataCopy = {
        ...signinData
      }
      signinDataCopy.user_image = password
      if(password===confirmPassword){
        const response = await fetch('apiUrl/register/', {
          method:"POST",
          headers:{"Content-Type": "application/json" },
          body: JSON.stringify(signinDataCopy)
        })
        if(!response.ok){
          setIsloading(false)
          toast.error('The Provided Email has been used')
          setSigninData({
            full_name: '', username: '', password: ''
          })
          setConfirmPassword('')
        }else{
          fetchUser(username)
          fetchUsercontacts(username)
          setIsloading(false)
          toast.success(`Welcome ${full_name}`)
          setConfirmPassword('')
          navigate(`/user/${username}`)
          setIsuser(true)
          setSigninData({
            full_name: '', username: '', password: ''
          })
        }
      }else{
        setIsloading(false)
        toast.error('Password and ConfirmPassword Must Matched !')
      } 
    }catch(error){
      setIsloading(false)
      toast.error('Something whent wrong!')
      }
  }

  return <ReactModal isOpen={signin} appElement={document.getElementById('root')} className="style">
    {isloading ? <Spinner /> : <div class="flex justify-center mb-0 mt-0">
      <div class="relative border-4 rounded-xl border-dashed border-blue-800 w-64 h-90 bg-gradient-to-t from-pink-800 to-blue-500 hover:shadow-2xl pt-4 pb-6">
        <div class="form ">
          <DeletIcon onClick={() =>{
            navigate('/Homepage/')
            window.location.reload()}} class="absolute text-2xl font-bold top-0 right-0 hover:bg-red-600 cursor-pointer" />
          <form onSubmit={handleSubmit}>
            <div>
              <div class="bg-blue-500">
                <div class="flex justify-center">
                  <div class="inline-flex">
                    <div class=" rounded-full w-5 h-5 mt-1 bg-pink-500"></div>
                    <h2 class="align-middle font-sans text-white font-bold text-2xl pl-1">Register</h2>
                  </div>
                </div>
                <div class="flex justify-center">
                  <p class=" text-white hover:text-black  flex justify-center">Welcom</p>
                </div>
              </div>
            </div>
            <div class="mr-2 ml-2 mb-0 mt-2">
              <div class="flex justify-center mt-3 mb-5">
                <input id="full_name" value={full_name} onChange={handleOnchange} class="input input-sm w-52  hover:bg-blue-200 text-black" placeholder="Full_Name" type="text" required />
              </div>
              <div class="flex justify-center mt-3 mb-5">
                <input id="username" value={username} onChange={handleOnchange} class="input input-sm w-52  hover:bg-blue-200 text-black" placeholder="Email" type="email" required />
              </div>
              <div class="relative flex justify-center mb-5">
                <input id="password" value={password} onChange={handleOnchange} class=" input input-sm w-52 hover:bg-blue-200 text-black" placeholder="Password" type={visible ? "text" : "password"} required />
                <div class="absolute right-5 bottom-1 cursor-pointer text-2xl" onClick={()=>setVisible(!visible)}>
                  {visible ? <FaEyeSlash /> : <FaEye /> }
                </div> 
              </div>
              <div class="relative flex justify-center mb-5">
                <input id="confirmPassword" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} class=" input input-sm w-52 hover:bg-blue-200 text-black" placeholder="ConfirmPassword" type={visibleC ? "text" : "password"} required />
                <div class="absolute right-5 bottom-1 cursor-pointer text-2xl" onClick={() => setVisibleC(!visibleC)}>
                  {visibleC ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div class="flex justify-center mb-0 mt-2 ">
              <button type="submit" class="h-10 w-52  hover:bg-gradient-to-l from-green-500 via-orange-500 to-blue-500 font-bold text-black hover:text-white align-middle rounded-full">
                Sign In
              </button>
            </div>
            <div class="flex justify-center">
              <p class="text-white mt-2">Already have an account? <span class="text-sm text-blue-500 hover:text-black font-bold mb-2 mt-2 pr-0  hover:cursor-pointer" onClick={()=>navigate('/login')}>Log In</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    }
  </ReactModal>
}
export default SignUp
