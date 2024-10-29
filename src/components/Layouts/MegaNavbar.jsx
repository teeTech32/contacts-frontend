import { useContext, useEffect, useRef} from "react";
import contactContext from "../../contexts/ContactContext";
import TotalContacts from "./TotalContacts";

function MegaNavbar(){
  
  const { setViewContacts, setViewProfile, fetchSingle, getbyId, setGetbyId, setIsloading, fetchContacts} = useContext(contactContext)

  const isMounted = useRef(true)
  useEffect(() => {
    if (isMounted) {
     fetchContacts()
    }
    return () => {
      isMounted.current = false
    }
    //eslint-disable-next-line
  }, [])
  
  const handleContacts =(e)=>{
    e.preventDefault()
    setIsloading(true)
    setTimeout(() => {
      setIsloading(false)
      setViewContacts(true)
    }, 2000)  
  }
  
  const getSinglecontact = (e)=>{
    e.preventDefault()
      setIsloading(true)
      setTimeout(()=>{
        setIsloading(false)
        fetchSingle(getbyId)
        setViewProfile(true)
        setGetbyId('')    
      },2000)   
  }

  return <div>
    <nav class="bg-gradient-to-l from-blue-700 via-pink-500 to-blue-700 mr-5 ml-5 rounded-t-lg hover:shadow-2xl xl:pl-60 xl:pr-10 md:pl-20 md:pr-20">
              <div class="md:flex ">
                <div class="navbar md:h-20 h-40 mx-auto max-w-7xl ">
                  <div class=" space-y-2">
                    <div class="m-4 flex flex-col space-y-2">
                      <div class="md:inline-flex md:space-x-80 xl:space-x-96">
                        <div class="flex-none">
                          <button class=" rounded-full  btn btn-ghost btn-md bg-blue-500 hover:bg-blue-800 shadow-2xl font-bold " onClick={handleContacts}>
                            <div class="inline text-5xl">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#FFA000" d="M38,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h31c1.7,0,3-1.3,3-3V16C42,13.8,40.2,12,38,12z"></path><path fill="#FFCA28" d="M42.2,18H15.3c-1.9,0-3.6,1.4-3.9,3.3L8,40h31.7c1.9,0,3.6-1.4,3.9-3.3l2.5-14C46.6,20.3,44.7,18,42.2,18z"></path></svg>
                            </div>
                            <h2 class="text-xl text-white  align-middle">View Contacts</h2>
                          </button>
                        </div>
                        <div class="">
                          <form onSubmit={getSinglecontact} >
                            <div class="form-control">
                              <div class="relative">
                                <input type="number" class="input input-md w-md shadow-2xl pl-16 bg-blue-500 text-white text-2xl hover:bg-blue-800  rounded-full xl:float-end " placeholder="Filter_By_Id" value={getbyId} onChange={(e) => setGetbyId(e.target.value)} />
                                <div class="absolute text-4xl text-white top-2 right-22 pl-5 ">
                                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path></svg>
                                </div>
                                <button class="btn-ghost btn-md btn bg-blue-800 hover:bg-blue-400 rounded-full item-center absolute text-white top-0 right-0 font-bold">search</button>
                              </div>
                            </div>
                          </form>

                        </div>
                        
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
          </nav>
          <TotalContacts/>
        </div>
};
export default MegaNavbar

