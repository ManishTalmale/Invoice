import React from 'react'
import './Header.css'

export default function Header() {

    const handlePrint = () => {
        window.print();
      }

    return (
        <div>
            {/* header */}
            <header className='flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between'>
                <div>
                    <h2 className='uppercase tracking-wide text-4xl mb-3'><b>Invoice</b></h2>
                </div>
                <div>
                    <ul className='flex items-center justify-between flex-wrap'>
                        <li><button className='pdf noprint bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 
                            border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300' style={{marginRight:"2em"}} onClick={handlePrint}>Print</button></li>
                        
                        {/* <li className='mx-2'><button className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
                            border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Download</button></li>
                         */}
                        {/* <li><button className='bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 
                            border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300'>Send</button></li> */}
                    </ul>
                </div>
            </header >
            {/* end of header  */}
        </div>
    )
}
