import React, {useContext} from 'react'
import className from '../utils/className'
import {Context} from '../context/Context'
import Image from '../components/Image'
import '../App.css'

export default function Photos() {

  const {photos} = useContext(Context)
    
  const imageElements = photos.map((img, i) => (
      <Image key={img.id} img={img} className={className(i)} />
  ))

  return (
    <main className="photos">
        {imageElements}
    </main>
  )
}
