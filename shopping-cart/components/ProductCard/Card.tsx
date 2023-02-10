import React from 'react'
import Image from 'next/image'
const Card = ({name, description,price,img}) => {
  return (
    <div className=''>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <Image src={img} alt={'img23w'} width={300} height={300}   layout="responsive"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <div className="font-bold text-lg mb-2">Rs. {price}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </div>
  )
}

export default Card
