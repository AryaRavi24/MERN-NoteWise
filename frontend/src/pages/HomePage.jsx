import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimit from '../components/RateLimit'
import axios from 'axios';
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard';
import NotesNoteFound from '../components/NotesNotFound'

function HomePage() {

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchNotes = async ()=>{
      try {
        const res = await axios.get("http://localhost:3000/api/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes",error)
        if(error.response?.status === 429){
          setIsRateLimited(true);
        }else{
          toast.error("Failed to load notes")
        }
      }finally{
        setLoading(false);
      }
    };

    fetchNotes();
  },[])

  return (
    <div className='min-h-screen'>
      <Navbar/>

      {isRateLimited && <RateLimit/>}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

        {notes.length === 0 && !isRateLimited && <NotesNoteFound/>}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
              notes.map((note)=>(

                // <div className="">
                //   {note.title} | {note.content}
                // </div>
                <NoteCard key={note._id} note={note} />
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage