import { useContext, useState, useEffect, useRef} from "react";
import { GrEdit } from "react-icons/gr";
import { Link, useParams} from "react-router-dom";
import contactContext from "../../contexts/ContactContext";
import { BiSolidUser } from "react-icons/bi";
import { toast } from "react-toastify";
import Spinner from "../Layouts/Spinner";

const apiUrl = process.env.REACT_APP_API_URL;

function User(){
  const [editName, setEditName] = useState(false)
  const [editUserImage, setEditUserImage] = useState(null)
  const [editUser, setEditUser] = useState({
    full_name: '',
  })

  const { user, setRemoveUser, userContacts, fetchUser, isloading, setIsloading, fetchUsercontacts }=useContext(contactContext)
  const  {username, date_created, user_image} = user
  const {full_name} = editUser

  const params = useParams()
  const isMounted = useRef(true)

  useEffect(()=>{
    if(isMounted){
      fetchUser(params.username)
      fetchUsercontacts(params.username)
    }
    return ()=>{
      isMounted.current = false
    }
    // eslint-disable-next-line
  },[])
 
  const onImage = (e) =>{
    setEditUserImage(e.target.files[0]) 
  }
  const onChange = (e) =>{
    setEditUser({
      ...editUser,
      [e.target.id]:e.target.value
    })
  }

  const onSubmit = async(username)=>{
    try{
      if (editUser.full_name === '' && editUserImage!==null){
        setIsloading(true)
        const formData = new FormData();
        formData.append('file', editUserImage, editUserImage.name)
        await fetch(`${apiUrl}/UpdateUser/${username}`, {
          method: "PATCH",
          body: formData
        })
        setIsloading(false)
        toast.success('Image Successfully Updated')
        fetchUser(username)
        setEditUserImage(null)
        return
      }
      if (editUserImage === null && editUser.full_name!==''){
        setIsloading(true)
        await fetch(`${apiUrl}/UpdateUserName/${username}?`, {
          method: "PATCH",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editUser),
        })
        setIsloading(false)
        toast.success('Name Successfully Updated')
        fetchUser(username)
        setEditUser({
          full_name:''
        })
        return
      }
      if (editUserImage !== null && editUser.full_name !== '' ){
        setIsloading(true)
        await fetch(`${apiUrl}/UpdateUserName/${username}?`, {
          method: "PATCH",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(editUser),
        })
        const formData = new FormData();
        formData.append('file', editUserImage, editUserImage.name)
        await fetch(`${apiUrl}/UpdateUser/${username}`, {
          method: "PATCH",
          body: formData
        })
        setIsloading(false)
        toast.success('UserDetails Successfully Updated')
        fetchUser(username)
        setEditUser({
          full_name: ''
        })
        setEditUserImage(null)
      }
    }catch(error){
      if(error.response){
        toast.error('Something whent wrong')
      }else if(error.request){
        toast.error('Something whent wrong')
      }else{
        setIsloading(true)
        setTimeout(()=>{
          setIsloading(false)
          toast.error('Check your internet connectivity')
          setEditUser({
            full_name: ''
          })
          setEditUserImage(null)
        }, 2000)
      }
    }
  }

  return <div class='bg-blue-950/75 bg-opacity-50 py-20'>
   { isloading ? <Spinner/> : <div class=" flex justify-center ">
      <div>
          <div class="bg-gradient-to-tr from-[#41606d] to-[#041218] rounded-md">
            <div class="hover:cursor-pointer " onClick={() => {
              onSubmit(username)
              setEditName((prevState) => !prevState)
            }}>
              <GrEdit class="text-xl text-white float-right m-2 hover:cursor-pointer"/>
            </div>
            <div class="md:grid md:m-5 m-5">
              <div class=" pt-2 justify-center flex ">
                <div class="h-10 w-52 bg-black rounded  shadow-xl">
                  <div class="text-white font-bold ">
                    <h1 class="pt-2 pl-3 text-center" >
                      User DashBoard
                    </h1>
                  </div>
                </div>
              </div>
              <div class='flex justify-center md:float-left'>
                <div class="flex justify-center flex-col md:flex-row md:inline-flex">
                  <div class="flex md:col-span-2 md:inline">
                    <div class=" md:mb-4 md:mt-7 md:mx-2">
                      <div class=" image-full md:float-left">
                        <button onClick={()=>setEditName(true)}>
                          <figure class="mt-10 md:mt-0 md:mb-5 ">
                            {editName ? <BiSolidUser class="text-8xl text-gray-300 border-double border-4 border-gray-300 rounded-md ml-2" /> : <img src={`https://mybucketcontacts.s3.amazonaws.com/${user_image}`} alt='ProfileImage' class="object-cover h-40 w-30 rounded-md border-double border-4 border-gray-300" /> }
                          </figure>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="md:align-middle text-black">
                    <div class=" mt-5 mb-5 font-bold p-2">
                      {editName ? <div class="pb-2">Full_Name : <input id="full_name" type="text" value={full_name} class='bg-slate-500 text-white input input-sm rounded-md' onChange={onChange}/> 
                      </div> : <div class="pb-2">Full_Name : <span class="text-white">{user.full_name}</span></div> }
                      <div class="pb-2">Email : <span class="text-white">{username}</span></div>
                    </div>
                     {editName ? <input type="file" id="file" class="input input-sm mt-2 cursor-pointer w-30 mr-5 ml-5 mb-5 rounded-md bg-slate-500" onChange={onImage} accept='.jpg,.png,.jpeg'/> : ''}
                  </div>
                </div>
              </div>
              <div class='flex md:justify-start'>
                <div class="pr-0 pl-5 ">
                  <div class="h-20 lg:h-10 w-[250px] lg:w-[400px] mr-1 bg-gray-300 rounded  shadow-xl leading-10">
                    <div class="text-black font-bold ">
                      <h1 class="pl-2" >
                        Date & Time : {new Date(date_created).toLocaleString('en-US')}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class='flex md:justify-start'>
                <div class="pr-3 pl-5 pt-5 pb-5">
                  <div class="h-10 w-56 bg-gray-300 rounded shadow-xl">
                    <div class="text-black font-bold ">
                      <h1 class="pt-2 pl-3" >
                        Registered Contacts : {userContacts.length}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inline-flex flex-row mb-8 md:mt-10 lg:ml-2 ml-2 relative">
                <div className="center">
                  <div className="outer but">
                    <div class='lg:ml-10'>
                      <button onClick={() => {
                        setRemoveUser(true)
                      }}>LogOut</button>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <Link to={`/contact/${username}`} class='absolute top-0 left-32 ml-2 md:top-2'>
                    <div class='md:ml-20 lg:ml-24'>
                      <div className="outer cir">
                        <button >CreateContact</button>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </div>
}

    
    export default User
