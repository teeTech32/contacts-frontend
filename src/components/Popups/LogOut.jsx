import { useContext } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import contactContext from "../../contexts/ContactContext"
import ReactModal from "react-modal"
import { toast } from "react-toastify"

function LogOut() {
  const navigate = useNavigate()
  const params = useParams()

  const { removeUser, setIsuser, setRemoveUser } = useContext(contactContext)

  const username = params.username
  

  return <ReactModal isOpen={removeUser} appElement={document.getElementById('root')} className="styleLogout">
    <div class="p-5 flex justify-center">
      <div class="p-5 container relative  h-50 w-56 bg-pink-300 rounded-t-3xl rounded-bl-3xl shadow-xl">
        <div class="text-black-800 font-bold text-xl">
          <h1 class="mb-2 ">
            Do you really want to LogOut ?
          </h1>
          <div class=" ">
            <div class="flex justify-center mt-5">
              <button onClick={() => {setRemoveUser(false) 
                setIsuser(true)
              }} class="pr-16 pl-16 btn btn-md bg-transparent  hover:bg-blue-400 rounded-full shadow-2xl hover:text-white font-bold">
                NO
              </button>
            </div>
            <div class="flex justify-center mt-5 ">
              <button onClick={() => {
                                toast.success(`Goodbye ${username}`)
                                setTimeout(() => { navigate('/Homepage/')
                                  window.location.reload()
                                }, 6000)
              }} class=" pr-16 pl-16 btn btn-md bg-transparent rounded-full shadow-2xl hover:text-white font-bold  hover:bg-blue-400">
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReactModal>
}
export default LogOut