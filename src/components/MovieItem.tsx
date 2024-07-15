import { Movie } from "@/core/movie-types/movie-types"
import { imageBaseURL } from "@/services/movies"
import HeartFulled from '@/assets/heart-fulled.svg?react'
import HeartUnFulled from '@/assets/heart-unfulled.svg?react'
import { useState } from "react"
import { UserAuth } from "@/core/context/AuthContext"
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "@/services/firebase"

interface Props {
  data: Movie
}

export const MovieItem = ({ data }: Props) => {
  const { title, name, backdrop_path } = data
  const [like, setLike] = useState(false)
  const { user } = UserAuth()

  const movieID = doc(db, 'users', `${user?.email}`);

  const handleSaveShow = async () => {
    if (user?.email) {
      setLike(!like)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: data.id,
          title: data.title || data.name,
          img: data.backdrop_path
        })
      })
    } else {
      alert('Please login')
    }
  }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-auto block'
        src={`${imageBaseURL}/w500/${backdrop_path}`}
        alt={title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full'>{title || name}</p>
        <div onClick={handleSaveShow}>
          {like ?
            <HeartFulled className='absolute top-4 left-4 text-gray-300' /> :
            <HeartUnFulled className='absolute top-4 left-4 text-gray-300' />}
        </div>
      </div>
    </div>
  )
}
