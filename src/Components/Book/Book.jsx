import React from 'react';
import { Link } from 'react-router-dom';


const Book = ({book}) => {
    const {bookId,author,bookName,category,image,rating,tags} = book;

    console.log(book);
    return (
       <Link to={`/books/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">   
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt={bookName}
      className="rounded-xl w-[150px] h-[200px]" />
  </figure>
 
  <div className="card-body items-center text-center">
  <div className="flex justify-center gap-5  ">
    {
      tags.map(tag => <button className="btn btn-xs text-green-600 ">{tag}</button>)
    }
  </div>
    <h2 className="card-title">{bookName}</h2>
    <p>By: {author}</p>
    <div className="divider"></div>
    <div className="card-actions flex justify-between">
      <p className='font-bold '>{category}</p>
      {/* rating */}
   <span>
   <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
</div>
   </span>
    </div>
  </div>
</div>
        </div>
       </Link>
    );
};

export default Book;