import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import FetchToken from '../../FetchToken';

const ProjectDetails = () => {

    let { id } = useParams();
    const [project, setProject] = useState({})
    const [comments, setComments] = useState([])

    let getProject = async () => {
        
        let response = await FetchToken(`/project/${id}/`)
        let data = await response.json()
        setProject(data)
    }
    
    useEffect(() => {
        getProject()
        getComment()
    }, [])
    

    let getComment = async () => {
        
        let response = await FetchToken(`/project/${id}/comments`)
        let data = await response.json()
        setComments(data)
    }


    return(
        <div className=" flex flex-col text-center items-center h-screen" >   
            <h1 className= "italic text-2xl p-4">Szczegóły projektu {project.name}</h1>
            <table className="table-auto  w-full rounded-lg">
                <thead className="bg-gray-100 border-b-2">
                    <tr>
                    <th>Nazwa Projektu</th>
                    <th>Data Rozpoczęcia projektu</th>
                    <th>Data zakończenia</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    <tr>
                    <td>{project.name}</td>
                    <td>{project.created}</td>
                    <td>{project.end_date}</td>
                    <td>{project.status}</td>
                    </tr>
                </tbody>
            </table>

               

        <div className="pt-4 w-screen flex flex-col items-center pt-12">
            {comments.map((comment)=>
                <div key={comment.id} className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4 p-6 w-1/2">
                    <div className="flex mr-2 min-w-full h-10">
                        <div className='flex justify-between w-full'>
                            <h3 className="text-blue-600 font-semibold text-lg text-center md:text-left mr-2">Author</h3>
                            <label className='text-blue-600 font-semibold text-lg text-center md:text-left mr-2'>{comment.add_date}</label>
                        </div>
                    </div>
                        <p className='text-gray-600 text-lg text-center md:text-left'>{comment.body}</p>
                    </div>
                 )}
        </div>
        <Link to='/ProjectList'>
            <button className="px-2 py-2 m-1 bg-red-600 rounded text-white">Wstecz</button>
        </Link>
    </div>
        
    )
}

export default ProjectDetails