import React, {useState} from "react";
import { Link, useParams } from 'react-router-dom'
import FetchToken from "../../FetchToken";

function CommentSection () {

    const { id } = useParams() 
    const [comment, setComment] = useState()

    let createComment = async () => {
        FetchToken(`project/${ id }/comment`, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment})   
        })
    }

    return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="h-80 px-7 w-[700px] rounded-[12px] bg-gray-300 p-4">
            <p className="text-xl font-semibold text-blue-900 cursor-pointer transition-all hover:text-black"> Dodaj komentarz </p> 
            <textarea required  onChange={(e) => setComment(e.target.value)} className="h-40 px-3 text-sm py-1 mt-5 outline-none border-pink-300 w-full resize-none border rounded-lg placeholder:text-sm" placeholder="Dodaj komentarz">
            </textarea>
            <div className="flex justify-center mt-2"> 
                <Link to={`/project/${id}`}> <button className="px-2 py-2 m-1 bg-green-600 rounded text-white" onClick={createComment}> Zatwierdź </button> </Link>
                <Link to='/ProjectList'>  <button className="px-2 py-2 m-1 bg-red-600 rounded text-white">Wstecz</button></Link>
            </div>
        </div>
    </div>
    )
}

export default CommentSection;