import { useNavigate, useParams} from "react-router-dom";
import DeletIcon from "../ReactIcons/DeleteIcon"
 
function PopButton(){
  const params = useParams()
  const navigate = useNavigate()
  
  const username = params.username 

const handleForm = ()=>{
  navigate(`/contactForm/${username}`)  
}

  return <div class="flex justify-center" data-aos='zoom-in'
                                          data-aos-offset='300'
                                          data-aos-delay='300'
                                          data-aos-duration='3000'
                                          data-aos-easing='ease-in-sine'>
            <div class="max-w-64  card-body">
              <div class=" bg-pink-300 rounded-t-3xl hover:bg-blue-500  rounded-bl-3xl shadow-2xl text-base-content mt-5 relative">
              <DeletIcon onClick={()=>
                {navigate(`/user/${username}`)}  } class="absolute text-2xl font-bold top-1 right-0 hover:text-red-600 cursor-pointer rounded-tr-3xl" />
                <h2 class="font-bold font-sans  hover:text-white text-black text-2xl p-2 item-center inline-flex mt-2">Hi !, would you like to add more contacts?</h2>
                <button class=" btn btn-sm bg-blue-500 hover:bg-pink-300 hover:text-black rounded-full text-white font-bold m-2" onClick={handleForm}>Add</button>
              </div>
            </div>
         </div>
}
export default PopButton
