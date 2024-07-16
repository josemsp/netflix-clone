import Row from "@/components/Row"
import SavedShows from "@/components/SavedShows"
import { truncateString } from "@/core/helpers"
import { Movie } from "@/core/movie-types/movie-types"
import { fetchApiMovies, requests } from "@/services"
import { imageBaseURL } from "@/services/movies"
import { useEffect, useState } from "react"

const Account = () => {
  const [randomMovie, setRandomMovie] = useState<Movie>()

  useEffect(() => {
    fetchApiMovies({ url: requests.popular })
      .then(response => {
        const movies: Movie[] = response?.data?.results;
        const random = movies[Math.floor(Math.random() * movies.length)]
        setRandomMovie(random)
      })
  }, [])

  return (
    <>
      <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full relative'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img
            className='w-full h-full object-cover'
            src={`${imageBaseURL}/original/${randomMovie?.backdrop_path}`}
          />
          <div className='absolute w-full bottom-0 p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{randomMovie?.title}</h1>
            <div className='my-4'>
              <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
              <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'>{randomMovie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(randomMovie?.overview, 300)}</p>
          </div>
        </div>
      </div>
      <SavedShows />
      <Row title="Trending" fetchUrl={requests.trending} />
      <Row title="Popular" fetchUrl={requests.popular} />
      <Row title="Up coming" fetchUrl={requests.upComing} />
      <Row title="Top Rated" fetchUrl={requests.topRated} />
      <Row title="Horror" fetchUrl={requests.horror} />
    </>
  )
}

export default Account