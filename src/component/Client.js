import React from 'react'

export default function Client({clientName,clientAddress}) {
  return (
    
   
    <div>
       {/* Clients details */}
     <section className='mt-10'>
     <h2 className='text-3xl uppercase font-bold'>{clientName}</h2>
<p>{clientAddress}</p>
     </section>
     {/* end of client detail */}
    </div>
  
  )
}
