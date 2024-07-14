import SavedShows from "@/components/SavedShows"

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          alt=""
          aria-hidden="true"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_large.jpg 1800w"
          className="w-full h-[400px] object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>

        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account