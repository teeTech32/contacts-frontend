import { useContext } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import contactContext from "../../contexts/ContactContext"
import ReactModal from "react-modal"
import api from "../../api"
import { toast } from "react-toastify"

function DeleteCaution(){
const params = useParams()
const navigate = useNavigate()

  const { removeContact, fetchContacts } = useContext(contactContext)

  const id = params.id
 
  const comfirmDelete = async(id) => {
   try {
    await api.delete(`/contact/${id}`)
    await api.delete(`/image/${id}`)
    toast.success('Contact Successfully deleted')
    fetchContacts() 
     setTimeout(() => { navigate(-1) }, 2000)
   } catch (error) {
     if (error.response) {
       toast.error('No contact exist anymore!')
     } else if (error.request) {
       toast.error('No contact exist anymore!')
     }
   }
  }

  return <ReactModal isOpen={removeContact} appElement={document.getElementById('root')} className="style">
        <div class="p-5 flex justify-center">
          <div class="p-5 container relative hover:text-white h-40 w-56 bg-pink-200 rounded-t-3xl rounded-bl-3xl hover:bg-blue-400 shadow-xl">
            <div class="text-black-800 font-bold text-xl">
              <h1 class="mb-2 ">
                Do you really want to delete this contact?
              </h1>
              <div class="inline-flex gap-11 mb-0">
                <div class="inline">
                  <button onClick={()=> navigate(-1)} class="pr-4 pl-4 btn btn-sm bg-green-500 hover:bg-gradient-to-l from-green-700 via-blue-500 to-green-700 rounded-md shadow-2xl hover:text-white font-bold">
                    Cancil
                  </button>
                </div>
                <div class="align-middle">
                  <button onClick={() => comfirmDelete(id)} class=" pr-1 pl-1 btn btn-sm bg-red-500 rounded-md hover:bg-gradient-to-l from-red-700 via-blue-500 to-red-700 shadow-2xl hover:text-white font-bold">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
}
export default DeleteCaution
