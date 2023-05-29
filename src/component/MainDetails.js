import React from 'react'

export default function MainDetails({name,address}) {
  return (
    <div>
     <section className='flex flex-col items-end justify-end '>
{/* <input type="text" name="text" id="text" placeholder='Enter your name' required /> */}
<h2 className='text-4xl uppercase font-bold'>{name}</h2>
<p>{address}</p>
     </section>
    </div>
  )
}
