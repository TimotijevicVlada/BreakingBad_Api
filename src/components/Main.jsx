import React from "react";
import ReactPaginate from "react-paginate";

const Main = ({ displayItems, pageCount, changePage }) => {

  return (
    <div className="items_wrapper">
      <div className="items">
        {displayItems.map((item) => (
          <div className="item_wrapper">
            <img className="img" src={item.img} alt={item.name} />
            <div className="item_info">
                <h3>{item.name}</h3>
                <p><span>Actor name:</span> {item.portrayed}</p>
                <p><span>Nick name:</span> {item.nickname}</p>
                <p><span>Birthday:</span> {item.birthday}</p>
                <p><span>Status:</span> {item.status}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationContainer"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Main;
