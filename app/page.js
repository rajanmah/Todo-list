'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
   setMainTask([...mainTask, {title, description}])

    setTitle('')
    setDescription('')
    // console.log(mainTask)
  }
const deleteHandler = (i) =>{
let copyTask = [...mainTask]
copyTask.splice(i,1)
setMainTask(copyTask)
}

let renderTask = <h2>no task available</h2>
if (mainTask.length>0){ 
renderTask = mainTask.map((t, i)=>{
return (
 
  <li key={i} className='flex items-center justify-between mb-5'>
<div className='flex justify-between mb-5 w-2/3'>
  <h3 className='text-2xl font-semibold'>{t.title} </h3>
  <h6 className='text-xl font-semibold'>{t.description} </h6>
</div>
<button 
onClick={()=>{
  deleteHandler(i)}} 
className='bg-red-400 text-white mb-5 px-4 py-2 rounded'>Delete</button>
</li>

)
})}

  return (
    <>
      <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>My Todo List</h1>
      <form onSubmit={submitHandler} >
        <input type="text" className='text-2xl border-zinc-600 border-2 m-4 px-2 py-4' 
        placeholder='enter your tasks' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <input type="text" className='text-2xl border-zinc-600 border-2 m-4 px-2 py-4' 
        placeholder='enter descriptions' 
        value={description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }} />
        <button className='bg-black text-white px-2 py-4 font-bold rounded' > add task </button>
      </form>
<hr />
<div className='p-8 bg-slate-200'>
  <ul>{renderTask}</ul>
</div>
<p className='align'>© rajan maharjan, 2023</p>
    </>
  )
}

export default page