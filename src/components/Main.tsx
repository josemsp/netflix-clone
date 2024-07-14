import { truncateString } from '@/core/helpers'
import { Movie } from '@/core/movie-types/movie-types'
import { fetchApiMovies, requests } from '@/services'
import { imageBaseURL } from '@/services/movies'
import { useEffect, useState } from 'react'

const Main = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [movies, setMovies] = useState([] as Movie[])
  const [randomMovie, setRandomMovie] = useState<Movie>()

  useEffect(() => {
    fetchApiMovies({ url: requests.popular })
      .then(response => {
        const movies: Movie[] = response?.data?.results;
        const random = movies[Math.floor(Math.random() * movies.length)]
        setMovies(movies)
        setRandomMovie(random)
      })
  }, [])

  return (
    <div className='w-full h-[550px] text-white'>
      {
        <div className='w-full h-full relative'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img
            className='w-full h-full object-cover'
            src={`${imageBaseURL}/original/${randomMovie?.backdrop_path}`}
          />
          <div className='absolute w-full bottom-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{randomMovie?.title}</h1>
            <div className='my-4'>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
              <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>{randomMovie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(randomMovie?.overview, 300)}</p>
          </div>
        </div>
      }
      {/* <div className='relative w-full h-full'>
        <img
          alt=""
          aria-hidden="true"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/8728e059-7686-4d2d-a67a-84872bd71025/76ef34d3-2b21-484b-bdb3-678a9058e3cc/MX-es-20240708-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4f7b9f55-3f01-4907-950c-68ab0f9ad0ca_large.jpg 1800w"
          className="w-full h-[550px] object-cover"
        />
        <div className='absolute w-full h-full top-0 gradient-top-custom'></div>
      </div> */}
    </div>
  )
}

export default Main