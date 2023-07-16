import React, { useContext } from 'react'
import { GlobalState } from '../../State/State'

function Home() {
   const {count , setCount , user, setUser} =  useContext(GlobalState)
    const handleClick = ()=>{
        setCount(count + 1)
    }

    const handleChange =(e)=>{
         console.log(e.target.value , e.target.name)
         setUser({...user, [e.target.name]: e.target.value})
    }
    
    const handleSubmit =(e)=>{
         e.preventDefault()
         console.log(user)
    }
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={handleClick}>click</button>

        <div className="form">
             <form onSubmit={handleSubmit}>
                 <input onChange={handleChange} name='name' type="text" />
                 <input onChange={handleChange} name='email' type="email" />
                 <input onChange={handleChange} name='password' type="password" />
                 <button type='submit'>submit</button>
             </form>
        </div>
    </div>
  )
}

export default Home