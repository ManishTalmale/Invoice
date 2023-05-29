import React from 'react'

export default function Dates({invoiceNumber,invoiceDate,dueDate}) {
  return (
    <div>
      {/* dates */}
     <articles className='mt-5 flex items-end justify-end'>
      <ul >
        <li className='p-1 '><span className='font-bold'>Invoice no:</span>{invoiceNumber}</li>
        <li className='p-1 bg-gray-100'><span className='font-bold'>invoice date:</span>{invoiceDate}</li>
        <li className='p-1 '><span className='font-bold'>due date:</span>{dueDate}</li>
      </ul>
     </articles>
     {/* ends of dates */}
    </div>
  )
}
