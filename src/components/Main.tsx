import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/login', { state: { email } });
  }

  return (
    <div className='relative min-h-[30rem] lg:min-h-[43.75rem] flex pt-[9.8rem] pb-[5rem]'>

      <div className='absolute h-full w-full top-0 left-0'>
        <div className='relative overflow-hidden w-full h-full'>
          <img
            alt=""
            aria-hidden="true"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_large.jpg 1800w"
            className="w-full h-full object-cover"
          />
          <div className='absolute w-full bg-custom-gradient top-0 left-0 bottom-0 right-0 bg-black/40'></div>
        </div>
      </div>

      <div className='flex h-full m-auto max-w-[calc(100%-4rem)] text-white text-center'>
        <div className="z-[1]">
          <h1 className="text-[2rem] font-bold md:text-[3rem] md:font-black">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-[1.5rem]">Watch anywhere. Cancel anytime.</p>

          <div className="pt-6 px-[2rem]">
            <form onSubmit={onSubmit} className="flex flex-col gap-5" aria-label="Sign up or restart your membership with Netflix." method="post">
              <h3 className="">Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="flex gap-6 justify-center items-center ">
                <input
                  className='h-[2.5rem] max-w-[550px] rounded px-4 text-slate-800'
                  autoComplete="email"
                  placeholder='Email address'
                  minLength={5}
                  maxLength={50}
                  type="email" id=":r0:"
                  name="email"
                  data-uia="field-email"
                  onChange={handleEmailChange}
                  value={email}
                />
                <button role="button" className="bg-red-600 px-6 py-1 rounded cursor-pointer text-white inline-flex items-center min-h-[2.5rem]" type="submit">
                  Get Started
                  <div aria-hidden="true" className="default-ltr-cache-1lj9d5t e1ax5wel0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" width="24" height="24"
                      viewBox="0 0 24 24"
                      role="img" data-icon="ChevronRightStandard"
                      aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor">
                      </path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main