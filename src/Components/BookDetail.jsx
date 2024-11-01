import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../Utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();
  console.log(data);

  const book = data.find((book) => book.bookId === id);
  console.log(book);
  const { bookId: currentbookId, image } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleMarkAsWish = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="my-12">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-10 p-10">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline btn-accent mr-5"
            >
              Read
            </button>
            <button
              onClick={() => addToStoredWishList(bookId)}
              className="btn btn-accent"
            >
              WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
