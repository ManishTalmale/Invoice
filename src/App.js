import { useState } from 'react';
import Footer from './component/Footer';
import Notes from './component/Notes';
import Table from './component/Table';
import Header from './component/Header';
import MainDetails from './component/MainDetails';
import Client from './component/Client';
import './App.css';
import Dates from './component/Dates';
import TableForm from './component/TableForm';

function App() {

  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description,setDescription]=useState("")
  const [quantity,setQuantity]= useState("")
  const [price,setPrice]=useState("")
  const [amount,setAmount]=useState("")
  const [list,setList]=useState([])
  const [total,setTotal]=useState(0)

  // eslint-disable-next-line
  
  return (
    <main className='m-5 p-5 md:max-w md:mx-auto rounded shadow xl:max-w-4xl lg:max-w-4xl'>
      {showInvoice ?
        <div>
          <Header />
          <MainDetails name={name} address={address} />
          <Client  clientName={clientName} clientAddress={clientAddress} />
          <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
          <Table description={description} quantity={quantity} price={price} amount={amount} 
          list={list} setList={setList} total={total} setTotal={setTotal} />
          <Notes notes={notes} />
          <hr />
          <Footer name={name} address={address} website={website} email={email}
          phone={phone} bankAccount={bankAccount} bankName={bankName} />
          <button onClick={() => setShowInvoice(false)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
          border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Edit Button</button>
        </div> : (

<div>
   <p className='font-bold mt-2 mb-2'>Enter Owner Details</p>

          <div className='flex flex-col justify-center'>
            <article className='md:grid grid-cols-2 gap-10'>
              <div className='flex flex-col'>
            <lable htmlFor="name">Enter your Full Name</lable>
            <input type='text'
              name='text'
              id='name'
              placeholder='Enter your name'
              autoComplete='off'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            </div>

<div className='flex flex-col'>
            <lable htmlFor="address">Enter your address</lable>
            <input type='text'
              name='text'
              id='address'
              placeholder='Enter your address'
              autoComplete='off'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            </div>
            </article>
            
<article className='md:grid grid-cols-3 gap-10'>
  <div className='flex flex-col'>
            <lable htmlFor="email">Enter your email</lable>
            <input type='email'
              name='text'
              id='email'
              placeholder='Enter your email'
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>

<div className='flex flex-col'>
            <lable htmlFor="website">Enter your website</lable>
            <input type='url'
              name='website'
              id='website'
              placeholder='Enter your website'
              autoComplete='off'
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            </div>

<div className='flex flex-col'>
            <lable htmlFor="phone">Enter your phone</lable>
            <input type='text'
              name='phone'
              id='phone'
              placeholder='Enter your phone'
              autoComplete='off'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            </div>
            </article>

<article className='md:grid grid-cols-2 gap-10'>
  <div className='flex flex-col'>
            <lable htmlFor="bankName">Enter your bankName</lable>
            <input type='text'
              name='bankName'
              id='bankName'
              placeholder='Enter your bankName'
              autoComplete='off'
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
            </div>

<div className='flex flex-col'>
            <lable htmlFor="bankAccount">Enter your bankAccount</lable>
            <input type='text'
              name='bankAccount'
              id='bankAccount'
              placeholder='Enter your bankAccount'
              autoComplete='off'
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />
            </div>
            </article>
            </div>

<div>
   <p className='font-bold mt-5'>Enter Client Details</p>

            <article className='md:grid grid-cols-2 gap-10 mt-2'>
  <div className='flex flex-col'>
            <lable htmlFor="clientName">Enter your clientName</lable>
            <input type='text'
              name='clientName'
              id='clientName'
              placeholder='Enter your clientName'
              autoComplete='off'
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
</div>
<div className='flex flex-col'>
            <lable htmlFor="clientAddress">Enter your clientAddress</lable>
            <input type='text'
              name='clientAddress'
              id='clientAddress'
              placeholder='Enter your clientAddress'
              autoComplete='off'
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
            </div>
            </article>
            </div>

             <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
            <lable htmlFor="invoiceNumber">Enter your invoiceNumber</lable>
            <input type='text'
              name='invoiceNumber'
              id='invoiceNumber'
              placeholder='Enter your invoiceNumber'
              autoComplete='off'
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
            />
            </div>

<div className='flex flex-col'>
            <lable htmlFor="invoiceDate">Enter your invoiceDate</lable>
            <input type='date'
              name='invoiceDate'
              id='invoiceDate'
              placeholder='Enter your invoiceDate'
              autoComplete='off'
              value={invoiceDate}
              onChange={(e) => setInvoiceDate(e.target.value)}
            />
            </div>

<div className='flex flex-col'>
            <lable htmlFor="dueDate">Enter your dueDate</lable>
            <input type='date'
              name='dueDate'
              id='dueDate'
              placeholder='Enter your dueDate'
              autoComplete='off'
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
            </div>
            </article>

<article >
  <TableForm description={description} setDescription={setDescription} 
  quantity={quantity} setQuantity={setQuantity}
  price={price} setPrice={setPrice}
  amount={amount} setAmount={setAmount}
  list={list} setList={setList}
  total={total} setTotal={setTotal} /> 

</article>

<lable htmlFor="notes">Additional notes</lable>
            <textarea
             className='are' 
              name='notes'
              id='notes'
             cols="30"
             rows="10"
             placeholder='Additional notes to the clients'
              autoComplete='off'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>

            <button onClick={() => setShowInvoice(true)} className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
          border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>Preview Invoice </button>
          </div>
        )}
    </main>
  );
}

export default App;
