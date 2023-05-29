import React,{useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import './TableForm.css'

export default function TableForm({description,setDescription ,
    quantity ,setQuantity,
    price, setPrice,
    amount, setAmount,
    list,setList,
  total,setTotal}) {

const [isEditing , setIsEditing] = useState(false)
      
      //submit Function
      const handleSubmit =(e)=>{
        e.preventDefault()

//         if(!description || !quantity || !!price) {
// alert("please enter all field")
//         }
        // else{
          const newItems ={
            id:uuidv4(),
            description,
           quantity,
           price,
            amount
          }
          setDescription("")
          setQuantity("")
          setPrice("")
          setAmount("")
          setList([...list, newItems])
          setIsEditing(false)
          // console.log(list)
        }
        // }


      // calculate amount function
      useEffect(() =>{
        const calculateAmount = (amount) =>{
          setAmount(quantity*price)
      }
      calculateAmount(amount)
      },[amount,price,quantity,setAmount])
            
          
        // calculate  total amount function
// after using useeffect its not working properly
//4th 23.30

 let rows=document.querySelectorAll(".amount")
 let sum=0
 for(let i = 0; i < rows.length; i++){
   if(rows[i].className==="amount"){
     sum += isNaN (rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
 setTotal(sum)
   }
 }

        // edit button Function
        const editRow=(id) => {
          const editingRow = list.find((row)=>row.id === id)
          setList(list.filter((row)=> row.id !==id))
          setIsEditing(true)
          setDescription(editingRow.description)
          setQuantity(editingRow.quantity)
          setPrice(editingRow.price)
        }
   
        //delet button function
const deleteRow =(id)=> setList(list.filter((row)=> row.id !==id))
 


  return (
    <div>
      <form onSubmit={handleSubmit}>
       <div className='flex flex-col md:mt-16'>
            <lable htmlFor="description">Items description</lable>
            <input type='text'
              name='description'
              id='description'
              placeholder='Items description'
              autoComplete='off'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            </div>

<div className='md:grid grid-cols-3 gap-10'>
            <div className='flex flex-col'>
            <lable htmlFor="quantity">Enter quantity</lable>
            <input type='quantity'
              name='quantity'
              id='quantity'
              placeholder='Enter quantity'
              autoComplete='off'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <lable htmlFor="price">Enter price</lable>
            <input type='price'
              name='price'
              id='price'
              placeholder='Enter price'
              autoComplete='off'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            </div>

            <div className='flex flex-col'>
            <lable htmlFor="amount">Enter amount</lable>
            <p>{amount}</p>
            </div>
            </div>
            <button onClick={list.newItems} type='submit' className='mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
                            border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300'>
                              {isEditing ? "Editing Row Items":"Add Table Items"}
                            </button>
            </form>
{/* ///////////////////////////////////////////////////////////////////////////// */}
            <table width="100%" className='mb-10 table '>
            <thead>
            <tr className='bg-gray-100 p-1 '>
                <td className='font-bold vl vl-left'>Items Description</td>
                <td className='font-bold vl'>Quantity</td>
                <td className='font-bold vl'>Price</td>
                <td className='font-bold vl'>Amount</td>
            </tr> 
            </thead>
              {list.map(({id,description,quantity,price,amount})=>
              <React.Fragment key={id}>

            <tbody>
            <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td className='amount'>{amount}</td>
                <td><button onClick={()=>deleteRow(id)}><AiOutlineDelete className='text-red-500'/></button></td>
                <td><button onClick={()=>editRow(id)}><AiOutlineEdit className='text-green-500 font-bold text-xl'/></button></td>
            </tr> 
            </tbody>
  
              </React.Fragment>
              )}
              </table>

            <div>
              <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>Rupees($).{total}</h2>
              </div>   
            
    </div>
  )
}
