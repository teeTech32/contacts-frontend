import DeletIcon from "../ReactIcons/DeleteIcon"
import { useContext } from "react"
import contactContext from "../../contexts/ContactContext"
import {Link, useNavigate} from "react-router-dom"

function Preview({ contact: { first_name, last_name, photo_name, mobile_no, id } }){
  const navigate = useNavigate()
  const { popupProfile, onEditform, setViewContacts } = useContext(contactContext)
  
  return <div class="compact side card bg-pink-200 hover:bg-gradient-to-r from-pink-500 from-10% via-emerald-500 via-30% to-blue-500 to-90% shadow-xl hover:text-white">
            <div class="absolute inline-flex right-0 p-2 gap-1 font-bold ">
              <div onClick={()=>{
                navigate('/contactEdit/')
                onEditform(id)}}  class="inline text-xl hover:bg-green-500  cursor-pointer">
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.561 5.318l-2.879-2.879c-.293-.293-.677-.439-1.061-.439-.385 0-.768.146-1.061.439l-3.56 3.561h-9c-.552 0-1 .447-1 1v13c0 .553.448 1 1 1h13c.552 0 1-.447 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zm-10.061 9.354l-2.172-2.172 6.293-6.293 2.172 2.172-6.293 6.293zm-2.561-1.339l1.756 1.728-1.695-.061-.061-1.667zm7.061 5.667h-11v-11h6l-3.18 3.18c-.293.293-.478.812-.629 1.289-.16.5-.191 1.056-.191 1.47v3.061h3.061c.414 0 1.108-.1 1.571-.29.464-.19.896-.347 1.188-.64l3.18-3.07v6zm2.5-11.328l-2.172-2.172 1.293-1.293 2.171 2.172-1.292 1.293z"></path></svg>
              </div>
               <Link to={`/contac/${id}`}>
                  <DeletIcon onClick={() => setViewContacts(false)} class="align-middle text-xl hover:bg-red-500 cursor-pointer" />
               </Link> 
            </div>
            <button onClick={() => popupProfile(id)}>
              <div class="card-body flex-row items-center space-x-4">
                <div>
                  <div class="avatar">
                    <div class="rounded-full shadow-xl w-14 h-14 ">
                      <img src={`https://mybucketcontacts.s3.amazonaws.com/${photo_name}`} alt="Profile" class="object-cover" />
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="card-title">{first_name} {last_name}</h2>
                  <div className="text-base-content font-bold hover:text-white">
                  {mobile_no}
                  </div>
                </div>
              </div>
            </button>
          </div>
        
        
}
export default Preview