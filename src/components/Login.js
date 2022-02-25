import React, {useState} from 'react'
import {Link} from 'react-router-dom'
function Login() {

    const [username, SetUserName] = useState()
    const [password, setPassword] = useState()

    
    const getToken = async () => {
        fetch(`api/token/`,{
            method:'POST',
            'headers': {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({username, password})
        })
        .then (res => res.json())
        .then( res => {
            localStorage.setItem('user', JSON.stringify(res))
        })
    }
   

  return (

    <div className='w-100 flex justify-center items-center min-h-screen flex-col'>
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2 justify-center ">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Username
      </label>
      <input required onChange={(e) => SetUserName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Login"/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Password
      </label>
      <input required onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="******************" />
      <p className="text-red text-xs italic">Please choose a password.</p>
    </div>
</div>
<Link to='/ProjectList'><button className="px-2 py-2 m-1 bg-green-600 rounded text-white" onClick={getToken}>Zatwierdź</button></Link>
</div>
  )
}

export default Login