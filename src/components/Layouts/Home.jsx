import MegaNavbar from './MegaNavbar'
import PopButton from './PopButton'
import Footer from './Footer'

function Home(){  
  return <div class="bg-blue-400 hover:bg-gradient-to-r from-emerald-200 from-10% via-pink-500 via-30% to-blue-500 to-90%" >
            <MegaNavbar />
            <PopButton />
            <Footer />
          </div>
}
export default Home