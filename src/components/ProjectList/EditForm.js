import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import FetchToken from '../../FetchToken';

    const EditForm = () => {

    let { id } = useParams()

    const [name, setName] = useState()
    const [status, setStatus] = useState()
    const [end_date, setEndDate] = useState() 
    const [created, setCreated] = useState()


    let getProject = async () => {
        
        let response = await FetchToken(`project/${id}/`)
        let data = await response.json()
        setName(data.name)
        setStatus(data.status)
        setCreated(data.created)
        setEndDate(data.end_date)
    }
    
    useEffect(() => {
        getProject()
    }, [])



    let updateProject = async (props) => {
        FetchToken(`project/${id}/update/`, {
            method: 'PUT',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify(props)

        })
    }

    let handleSubmit = () => {
        const project = {name, created, end_date, status}
        updateProject(project)
        console.log(project)
    }

  return (
    <div className="flex flex-col items-center w-screen py-4">

        <div className="mb-6 p-2">
            <label className="inputLabel">Nazwa Projektu</label>
            <input type="text" required onChange={(e) => setName(e.target.value)} className='inputContent' defaultValue={name || ""}  />
        </div>

        <div className="mb-6 p-2">
            <label className="inputLabel">Data rozpoczęcia</label>
            <input required onChange={(e) => setCreated(e.target.value)} type='date' className="inputContent" defaultValue={created || ""} />
        </div>

        <div className="mb-6 p-2">
            <label className="inputLabel">Data zakończenia</label>
            <input required onChange={(e) => setEndDate(e.target.value)} type='date' className="inputContent" defaultValue={end_date || ""} />
        </div>

        <div className="mb-6 p-2">
            <label  className="inputLabel" > Staus</label>
            <select required onChange={(e) => setStatus(e.target.value)} className="inpuntContent" defaultValue={status || ""} >
            <option> Nowy </option>
            <option> Zakończony </option>
            </select>
        </div>
        <div>
        <Link to='/ProjectList'>
            <button className="px-2 py-2 m-1 bg-green-600 rounded text-white" onClick={handleSubmit}> Zatwierdź </button>
        </Link>
        <Link to='/ProjectList'>
            <button className="px-2 py-2 m-1 bg-red-600 rounded text-white"> Anuluj </button>
        </Link>
        </div>

    </div>
    );
  
}

export default EditForm