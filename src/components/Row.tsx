import { Movie } from '@/core/movie-types/movie-types'
import { fetchApiMovies } from '@/services'
import { useEffect, useRef, useState } from 'react'
import { MovieItem } from './MovieItem'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Row {
  title: string,
  fetchUrl: string
}

const Row = ({ title, fetchUrl }: Row) => {
  const [movies, setMovies] = useState([] as Movie[])
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchApiMovies({ url: fetchUrl })
      .then((response) => {
        const list: Movie[] = response?.data.results;
        setMovies(list.filter(movie => movie.backdrop_path))
      })
  }, [fetchUrl])

  const handleSlideLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft -= 500;
  }

  const handleSlideRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft += 500;
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <ChevronRight onClick={handleSlideRight} width={50} height={50} className='bg-white right-0 rounded-full absolute  opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div ref={scrollRef} id={`slider-${title}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((m, i) => (
            <MovieItem key={`title-${i}`} data={m} />
          ))}
        </div>
        <ChevronLeft onClick={handleSlideLeft} width={50} height={50} className='bg-white left-0 rounded-full absolute  opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
      </div>
    </>
  )
}

export default Row