import Netflix from '@/assets/netflix.svg?react'
import { UserAuth } from '@/core/context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logOut();
    navigate('/')
  }

  return (
    <header
      className="flex justify-center  z-[100] w-full absolute"
    >
      <div className='flex items-center justify-between w-full md:max-w-screen-lg flex-wrap px-8 py-6 gap-5'>
        <Link to='/'>
          <Netflix className='text-red-600 block fill-current w-[5.5625rem] h-6 md:w-[9.25rem] md:h-[2.5rem]' />
        </Link>
        <div className=''>
          {
            user ? <>
              <Link to='/account'>
                <button className="text-white pr-4 ">Account</button>
              </Link>
              <Link to='/logout'>
                <button onClick={handleLogout} className="bg-red-600 px-6 py-1 rounded cursor-pointer text-white">Logout</button>
              </Link>
            </> :
              <>
                <Link to='/signup'>
                  <button className="text-white pr-4 ">Sign Up</button>
                </Link>
                <Link to='/login'>
                  <button className="bg-red-600 px-6 py-1 rounded cursor-pointer text-white">Sign In</button>
                </Link>
              </>
          }
        </div>
      </div>
    </header>
  )
}

export default Navbar