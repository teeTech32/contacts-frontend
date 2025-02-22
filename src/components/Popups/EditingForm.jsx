import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import contactContext from "../../contexts/ContactContext"
import DeletIcon from "../ReactIcons/DeleteIcon"
import {toast} from "react-toastify"
import Spinner from "../Layouts/Spinner"

const apiUrl = process.env.REACT_APP_API_URL;

function EditingForm(){
  const navigate = useNavigate()
  const {setViewContacts, fetchContacts, editData, setEditData, editId, imageEdit, setImageEdit, isloading, setIsloading, setContacts, contacts} = useContext(contactContext)
  const { first_name, last_name, email, mobile_no, country_name, state_name} = editData
  
  const handleEditImage = (e)=>{
    e.preventDefault()
    setImageEdit(e.target.files[0])
  }

  const handleOnchange = (e) => {
    setEditData({
      ...editData, 
      [e.target.id]: e.target.value
    })
  }

  const handleEdit = async(e) => {
    e.preventDefault()
    setIsloading(true)
    try{
      if(imageEdit === null){
        const response = await fetch(`${apiUrl}/contact/${editId}?`, {
          method: "PATCH",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editData),
        })
        const data = await response.json()
        setContacts(
          contacts.map((contact) => (contact.id === editId ? { ...contact, ...data } : contact)
          )
        )
        setTimeout(() =>{ setIsloading(false)
          toast.success('Contact Successfully Edited')
         },2000)
        fetchContacts()
        setEditData({
          first_name: '', last_name: '', email: '', mobile_no: '', country_name: '', state_name: '', photo_name: ''
        })
      }else if(imageEdit !== null) {
        const editCopyData = {
          ...editData
        }
        editCopyData.photo_name = imageEdit.name
        const response = await fetch(`${apiUrl}/contact/${editId}?`, {
          method: "PATCH",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editCopyData),
        })
        const data = await response.json()
        setContacts(
          contacts.map((contact) => (contact.id === editId ? { ...contact, ...data } : contact)
          )
        )
        const formData = new FormData();
        formData.append('file', imageEdit, imageEdit.name)
        await fetch(`${apiUrl}/UploadImage/${editId}`, {
          method: "PATCH",
          body: formData
        })
        setIsloading(false)
        toast.success('Contact Successfully Edited')
        fetchContacts()
        setEditData({
          first_name: '', last_name: '', email: '', mobile_no: '', country_name: '', state_name: '', photo_name: ''
        })
        setImageEdit(null)
      }
    }catch(error){
      if(error.response){
        setIsloading(false)
        toast.error("Repeated inputs are not allowed!")
      }else if(error.request){
        setIsloading(false)
        toast.error("Repeated inputs are not allowed!")
      }else{
        setTimeout(() => {
          setIsloading(false)
          toast.error("If you are connected? Then either Email, Mobile & Picture is(are) already existed!")
          setImageEdit(null)
        }, 2000) 
      }
    }
   
  }
      
  const handleForm = (e) => {
    e.preventDefault()
    setViewContacts(true)
    navigate(-1)
  }

  const clearDetails = ()=>{
    setEditData({
      first_name: '', last_name: '', email: '', mobile_no: '', country_name: '', state_name: '', 
    })
  }

   return <div class='bg-blue-950/75 bg-opacity-50 py-20'>
    {isloading ? <Spinner/> : <div data-aos='zoom-out'
                                   data-aos-offset='100'
                                   data-aos-delay='200'
                                   data-aos-duration='2000'
                                   data-aos-easing='ease-in-sine' class="flex justify-center my-20">
      <div class="container border-4 rounded-xl border-dashed border-blue-800 w-[350px] h-100 bg-gradient-to-b from-pink-500 to-blue-500 hover:shadow-2xl">
        <div class="form">
          <form onSubmit={handleEdit}>
            <div>
              <div class="relative navbar justify-center item-center bg bg-blue-500">
                <h1 class="font-sans text-white font-bold text-2xl">Edit Contact</h1>
                <DeletIcon onClick={handleForm} class="absolute text-2xl text-white font-bold top-0 right-0 hover:text-red-600 cursor-pointer" />
              </div>
            </div>
            <div class="mr-5  mb-5 mt-5">
              <div class="inline-flex justify-between ml-2 gap-8 md:gap-12">
                <label htmlFor="FirstName" class="form-title label text-md font-bold  text-black">FirstName</label>
                <input id="first_name" value={first_name} onChange={handleOnchange} class="input input-sm w-sm pr-30 mr-0  ml-19 hover:bg-blue-200 text-black" placeholder="First_Name" type="text" />
              </div>
              <div class="inline-flex justify-between mt-2 p-2 gap-8 md:gap-12">
                <label htmlFor="LastName" class="form-title label text-md font-bold  text-black">LastName</label>
                <input id="last_name" value={last_name} onChange={handleOnchange} class="input input-sm w-sm pr-30 mr-0 ml-19 hover:bg-blue-200 text-black" placeholder="Last_Name" type="text" />
              </div>
              <div class="inline-flex justify-between p-2 gap-2 md:gap-5">
                <label htmlFor="EmailAddress" class="form-title label text-md font-bold  text-black">EmailAddress</label>
                <input id="email" value={email} onChange={handleOnchange} class="input input-sm w-sm pr-30 mr-0 ml-19 hover:bg-blue-200 text-black" placeholder="Email_Address" type="email" />
              </div>
              <div class="inline-flex justify-between p-2 gap-0 md:gap-3">
                <label htmlFor="MobileContact" class="form-title label text-md font-bold  text-black">MobileContact</label>
                <input id="mobile_no" value={mobile_no} onChange={handleOnchange} class="input input-sm w-sm pr-30 mr-0 ml-19 hover:bg-blue-200 text-black" placeholder="Phone_Number" type="text" />
              </div>
              <div class="inline-flex justify-between pl-2 gap-12">
                <label htmlFor="CountryN" class="form-title label text-md font-bold  text-black">Country</label>
                <select id="country_name" value={country_name} onChange={handleOnchange} class=" input input-sm w-[200px] pr-30 ml-19 hover:bg-blue-200 text-black" placeholder="Country_Name" type="multiple" required >
                        <option value=""></option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="United K">United K</option>
                        <option value="United S">United S</option>
                        <option value="Canada">Canada</option>
                </select>
              </div>
              <div class="inline-flex  p-3 gap-16">
                <label htmlFor="StateName" class="form-title label text-md font-bold  text-black">State</label>
                <select id="state_name" value={state_name} onChange={handleOnchange} class="input input-sm w-[200px] pr-30 mr-0 ml-19 hover:bg-blue-200 text-black" placeholder="State_Name" type="multiple" required>
                  <option value=""></option>
                  <option value="Delta">Delta</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Lagos">Lagos</option>
                  <option value="England">England</option>
                  <option value="Scotland">Scotland</option>
                  <option value="Wales">Wales</option>
                  <option value="California">California</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Florida">Florida</option>
                  <option value="Manitoba">Manitoba</option>
                  <option value="Ontario">Ontario</option>
                  <option value="Quebec">Quebec</option>
                </select>
              </div>
              <div class="inline-flex justify-between pl-2 gap-14">
                <label htmlFor="Picture" class="form-title label text-md font-bold  text-black">Picture</label>
                <input id="files" class="input input-sm w-[200px] pr-0 mr-0 ml-19 hover:bg-blue-200 text-black" type="file" 
                accept='.jpg,.png,.jpeg' onChange={handleEditImage} />
              </div>
            </div>
            <div class="flex inlineflex mb-5 mr-5 float-right ">
              <button class="btn btn-sm ghost hover:bg-gradient-to-l from-green-500 via-orange-500 to-blue-500 font-bold text-black hover:text-white align-middle rounded-full">
                Edit Contact
              </button>
            </div>
          </form>
          <button onClick={clearDetails} class="btn btn-sm ml-5 ghost hover:bg-gradient-to-l from-green-500 via-orange-500 to-blue-500 text-black font-bold hover:text-white inline rounded-full" >
            Cancel
          </button>
        </div>
      </div>
    </div>
    }
  </div>
}
export default EditingForm
