import { UserAuth } from '@/core/context/AuthContext'
import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await signIn(email, password)
      navigate('/')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <div className="w-full h-screen">
        <img
          alt=""
          aria-hidden="true"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_large.jpg 1800w"
          className="w-full h-full object-cover absolute hidden sm:block"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl  font-bold">Sign In</h1>

              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4 gap-5">
                <input onChange={(e) => setEmail(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" />
                <input onChange={(e) => setPassword(e.target.value)} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input id='Remember' className="mr-2" type="checkbox" />
                    <label htmlFor="Remember" className='select-none'>Remember me</label>
                  </p>
                  <p>Need help?</p>
                </div>
              </form>

              <p className="py-4 flex gap-5">
                <span className="text-gray-600 select-none">New to Netflix?</span>
                <Link to='/signup'>Sign Up</Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn