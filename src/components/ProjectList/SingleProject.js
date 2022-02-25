import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import CommentSection from "./CommentSection";
import EditForm from "./EditForm";
import ProjectDetails from "./ProjectDetails";
import FetchToken from "../../FetchToken";

const  SingleProject = (props) => {
    
    const deleteProject = async () => {
        FetchToken(`/project/${props.id}/delete`,{
            method:'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload(false);
    }
    
    return(

        <Fragment>
                    <td>{props.name} </td>
                    <td>{props.created}</td>
                    <td>{props.end_date}</td>
                    <td>{props.status}</td>
                    <td>
                        <Link to={`/EditForm/${props.id}`} element={<EditForm/>} ><button className="px-1 py-2 m-1 bg-green-600 rounded text-white"> Edycja </button> </Link>
                        <Link to={`/project/${props.id}`} element={<ProjectDetails/>} ><button className="px-1 py-2 m-1 bg-blue-600 rounded text-white"> Szczegóły </button> </Link>
                        <Link to={`/CommentSection/${props.id}`} element={<CommentSection />} ><button className="px-1 py-2 m-1 bg-purple-600 rounded text-white"> Dodaj komentarz </button> </Link>
                        <button className="px-1 py-2 m-1 bg-red-600 rounded text-white" onClick={deleteProject}> Usuń </button>
                    </td>
        </Fragment>
    )
}

export default SingleProject