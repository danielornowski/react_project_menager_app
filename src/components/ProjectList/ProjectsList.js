import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import FetchToken from "../../FetchToken";
import SingleProject from "./SingleProject";


function ProjectList() {

    const {refresh} = useParams()
    let [projects, setProject] = useState([])

    useEffect(()=>{
        getProject()
    }, [refresh])


    let getProject = async () => {
        let response = await FetchToken('projects/')
        let data = await response.json()
        setProject(data)
    }

    const deleteProject = async (id) => {
        FetchToken(`project/${id}/delete/`,{
            method:'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })

        getProject()
    }

    return(
    <div className=" flex flex-col text-center items-center h-screen" >   
        <h1 className= "italic text-2xl p-4">Lista Projektów</h1>
        <table className="table-auto  w-full rounded-lg">
            <thead className="bg-gray-50 border-b-2">
                <tr>
                <th>Nazwa Projektu</th>
                <th>Data Rozpoczęcia projektu</th>
                <th>Data zakończenia</th>
                <th>Status</th>
                <th>Operacje</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {projects?.length > 0 && projects.map((project) => (
                     <tr key={project.id}>
                         <SingleProject {...project} deleteProject={() => deleteProject(project.id)}/> 
                    </tr>
                 )) }
            </tbody>
        </table>
        <Link to='/AddForm'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 mt-5"> Stwórz nowy projekt </button>
        </Link>
    </div>

)
}

export default ProjectList