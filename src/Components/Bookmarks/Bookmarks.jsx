import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
export default function Bookmarks({bookmarks,readingTime}) {
    
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 pt-4 mt-2  ">
            <div>
            <div > 
                <h3 className='text-4xl text-center  '>Reading Time:{readingTime}</h3>
            </div>

            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            </div>
            <div >
            {
                bookmarks.map((bookmark,idx)=> <Bookmark
                key={idx}
                bookmark={bookmark}
              
                ></Bookmark> )
            }
            </div>

        </div>
    );
}

Bookmarks.propTypes={
    bookmarks:PropTypes.object,
    readingTime:PropTypes.number
}