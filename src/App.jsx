

import { useState } from 'react';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header';
 

export default function App() {
    const[bookmarks,setBookmarks]=useState([]);
    const [readingTime,setReadingTime]=useState(0);

    const handleAddToBookmark=blog=>{
        const newBookmarks=[...bookmarks,blog];
        setBookmarks(newBookmarks);
    }

const handleMarkAsRead= (id,time)=>{
   const newReadingTime=readingTime+time;
   setReadingTime(newReadingTime);

//    Remove the read blog from bookmarks
   const remainingBookmarks=bookmarks.filter(bookmarks=>bookmarks.id!==id);
   setBookmarks(remainingBookmarks);
}

    return (
    
        <>
            <Header/>
            <div className='md:flex max-w-7xl mx-auto'>
            <Blogs  
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
            
            />
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime}/>
            </div>
        </>
    );
}


