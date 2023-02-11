import React from 'react'
import Image from 'next/image'
const Card = ({name, description,price,img}) => {
  return (
    <div className='m-10 mx-auto max-w-sm '>
  <div className=" max-w-sm rounded m-0 shadow-lg bg-gray-700">
    <div className='h-60 w-96'>
  <Image src={img} alt={'img23w'} width={500} height={200} className="h-full"  />
  </div>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name.toUpperCase()}</div>
    <div className="font-bold text-lg mb-2">Rs. {price}</div>
    <p className="text-gray-400 text-base line-clamp-2">
      {description}
    </p>
  </div>
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>
    </div>
  )
}

export default Card
