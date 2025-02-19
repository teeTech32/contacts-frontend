import { useContext } from "react"
import contactContext from "../../contexts/ContactContext"
function TotalContacts(){

  const {contacts} = useContext(contactContext)

  if(contacts.length!==0){
    return <div class="p-5" data-aos='fade-right'
                            data-aos-offset='300'
                            data-aos-delay='300'
                            data-aos-duration='3000'
                            data-aos-easing='ease-in-sine'>
             <div class="m-5 hover:text-white h-10 w-52 bg-pink-300 rounded hover:bg-blue-500 shadow-xl">
                <div class="text-black-800 font-bold ">
                  <h1 class="pt-2 pl-3" >
                    Total Contact : {contacts.length}
                  </h1>
                </div>
              </div>
            </div> 
  }
  return <div class="p-5" data-aos='fade-right'
                          data-aos-offset='300'
                          data-aos-delay='300'
                          data-aos-duration='3000'
                          data-aos-easing='ease-in-sine'>
          <div class="m-5 hover:text-white h-10 w-56 bg-pink-300 rounded hover:bg-blue-500 shadow-xl">
            <div class="text-black-800 font-bold text-md">
              <h1 class="pt-2 pl-1">
                No Contact is available yet!
              </h1>
            </div>
          </div>
        </div>
}
export default TotalContacts
