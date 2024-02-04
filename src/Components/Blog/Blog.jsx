import { BsBookmarks } from "react-icons/bs";
import PropTypes from 'prop-types'; 
export default function Blog({blog,handleAddToBookmark,handleMarkAsRead}) {
    const{id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
           
            <img className='w-full mb-8 ' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button className="ml-2 text-2xl text-red-600"
                    onClick={()=>handleAddToBookmark(blog)}
                    > <BsBookmarks /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx)=> <span key={idx} > <a href="">{hash}</a> </span> )
                }
                <button className="text-purple-600 font-bold underline"
                onClick={()=>handleMarkAsRead(id,reading_time)}>Mark as Read</button>
            </p>
        </div>
    );

    
}



Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

