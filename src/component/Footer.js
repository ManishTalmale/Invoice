import React from 'react'

export default function Footer({name,email,website,address,bankAccount,bankName,phone}) {
  return (
    <div>
      <footer className='footer border-t-2 border-grey-300 pt-5'>
      <ul className='flex items-center justify-center flex-wrap'>
        <li><span className='font-bold'>name: </span>{name}</li>
        <li><span className='font-bold'>email: </span>{email}</li>
        <li><span className='font-bold'>phone:</span>{phone}</li>
        <li><span className='font-bold'>bank:</span>{bankAccount}</li>
        <li><span className='font-bold'>account holder:</span>{name}</li>
        <li><span className='font-bold'>account:</span>{bankName}</li>
        <li><span className='font-bold'>website:</span>{" "}
        <a href={website} target='_blank' rel='noopenner noreferrer'>{website}</a>
        </li>
        <li><span className='font-bold'>address:</span>{address}</li>

      </ul>
     </footer>
    </div>
  )
}
