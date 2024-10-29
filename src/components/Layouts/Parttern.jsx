import React from 'react'
import Banner from '../assets/svg/pattern.png'
import Logo from '../assets/svg/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6'
import { FaMobileAlt } from 'react-icons/fa'

const BannerImage = {
  backgroundImage:`url(${Banner})`,
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  height:'100%',
  width:'100%'
}
const FooterLinks = [
  {
    title:'Home',
    link:'/#',
  },
  {
    title:'About',
    link:'/#about',
  },
  {
    title:'Contact',
    link:'/#contact',
  },
  {
    title:'Blog',
    link:'/#blog',
  },
]

const Parttern = () => {
  return (
    <div style={BannerImage} className='text-white bg-slate-950'>
      <div className='container'>
        <div data-aos='zoom-in'
            data-aos-offset='100'
            data-aos-delay='200'
            data-aos-duration='2000'
            data-aos-easing='ease-in-sine' className='grid md:grid-cols-3 pb-44 pt-5'>
          <div className='py-8 px-5'>
            <h1 className=' text-xl lg:text-2xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-blue-500'>
              <img src={Logo} alt='LogoImage' className='max-w-[50px] lg:text-2xl '/>teeContactApp</h1>
            <p className='lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium cupiditate inventore expedita officiis voluptatibus earum animi nostrum illo quas.</p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 px-5'>
            <div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl lg:text-2xl font-bold sm:text-left text-justify mb-3'>Important Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map((link)=>(
                      <li key={link.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 lg:font-bold'>
                        <span>{link.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
             <div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl lg:text-2xl font-bold sm:text-left text-justify mb-3'>Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FooterLinks.map((link)=>(
                      <li key={link.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 lg:font-bold'>
                        <span>{link.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className='font-bold '>
              <div className='flex items-center gap-3 mt-6'>
                <a href="/#">
                  <FaInstagram className='text-3xl lg:text-4xl'/>
                </a>
                <a href="/#">
                  <FaLinkedin className='text-3xl lg:text-4xl'/>
                </a>
                <a href="/#">
                  <FaFacebook className='text-3xl lg:text-4xl'/>
                </a>
              </div>
              <div className='mt-6 lg:text-xl'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow/>
                  <p>Lekki, Lagos Nigeria</p>
                </div>
                <div className='flex items-center gap-3'>
                  <FaMobileAlt/>
                  <p>+234 703 2603814</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Parttern