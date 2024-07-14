import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { imageBaseURL } from "@/services/movies"
import { useEffect, useRef, useState } from "react"
import { MovieDB, UserDB } from "@/core/movie-types/movie-types"
import { UserAuth } from "@/core/context/AuthContext"
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "@/services/firebase"


const SavedShows = () => {
  const [movies, setMovies] = useState([] as MovieDB[])
  const scrollRef = useRef<HTMLDivElement>(null)
  const { user } = UserAuth()
  const movieRef = doc(db, 'users', `${user?.email}`)

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      const userData = doc.data() as UserDB;
      setMovies(userData.savedShows)
    })

    return () => unsubscribe()
  }, [user?.email])

  const handleSlideLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft -= 500;
  }
  const handleSlideRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollLeft += 500;
  }

  const handleRemove = async (movieId: string) => {
    try {
      const newMovies = movies.filter(m => m.id !== movieId);
      await updateDoc(movieRef, {
        savedShows: newMovies
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>My shows</h2>
      <div className='relative flex items-center group'>
        <ChevronRight onClick={handleSlideRight} width={50} height={50} className='bg-white right-0 rounded-full absolute  opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div ref={scrollRef} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {movies.map((item, i) => (
            // <MovieItem key={`title-${i}`} data={m} />
            <div key={`title-${i}`} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
              <img
                className='w-full h-auto block'
                src={`${imageBaseURL}/w500/${item.img}`}
                alt={item.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full'>{item.title}</p>
                <X onClick={() => handleRemove(item.id)} className="absolute text-gray-300 top-4 right-4" />
              </div>
            </div>
          ))}
        </div>
        <ChevronLeft onClick={handleSlideLeft} width={50} height={50} className='bg-white left-0 rounded-full absolute  opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
      </div>
    </>
  )
}

export default SavedShows