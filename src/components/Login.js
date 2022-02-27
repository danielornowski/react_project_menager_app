import React, {useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
function Login() {
    const [username, SetUserName] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const [redirect, setRedirect] = useState(false)
    
    const getToken = async () => {
      setError();

        fetch(`https://django-api-projects00.herokuapp.com/api/token/`,{
            method:'POST',
            'headers': {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({username, password})
        })
        .then(async (res) => {
            if(res.status != 200){
              setError((await res.json()).non_field_errors[0])
              return;
            }

            localStorage.setItem('user', JSON.stringify(await res.json()))
            setRedirect(true)
        })
        
    }

    if(redirect){
      return <Navigate to="/ProjectList"></Navigate>
    }
   

  return (
    <div className='w-100 flex justify-center items-center min-h-screen flex-col'>
      {error && (
        <p className="bg-red-500 p-3 text-white font-bold rounded text-sm mb-3">{error}</p>
      )}
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
<button className="px-2 py-2 m-1 bg-green-600 rounded text-white" onClick={getToken}>Zatwierdź</button>
</div>
  )
}

export default Login