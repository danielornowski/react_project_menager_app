import React, { useState } from "react";
import { Link } from "react-router-dom";
import FetchToken from "../../FetchToken";


function AddForm (){

    const [name, setName] = useState('')
    const [status, setStatus] = useState('Nowy')
    const [end_date, setEndDate] = useState() 
    const created = ''
    
    let createProject = async () => {
        FetchToken(`/project/create/`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, status, end_date, created})
        })
    }

    let handleSubmit = () => {
        createProject()
    }
    
    return (
        <div className="flex flex-col items-center w-screen py-4">

            <div className="mb-6 p-2">
                <label  className="inputLabel">Nazwa Projektu</label>
                <input type="text" required onChange={(e) => setName(e.target.value)} className='inputContent' />
            </div>

            <div className="mb-6 p-2">
                <label  className="inputLabel">Data zakończenia</label>
                <input type="text" required onChange={(e) => setEndDate(e.target.value)} type='date' className="inputContent" />
            </div>

            <div className="mb-6 p-2">
                <label  className="inputLabel">Staus</label>
                <select required onChange={(e) => setStatus(e.target.value)}  className="inpuntContent" >
                    <option>Nowy</option>
                    <option>Zakończony</option>
                </select>
            </div>
            <div>
                <Link to='/ProjectList'>
                    <button className="px-2 py-2 m-1 bg-green-600 rounded text-white" onClick={handleSubmit}>Zatwierdź</button>
                </Link>
                <Link to='/ProjectList'>
                    <button className="px-2 py-2 m-1 bg-red-600 rounded text-white">Anuluj</button>
                </Link>
            </div>

        </div>
    );
}

export default AddForm;
