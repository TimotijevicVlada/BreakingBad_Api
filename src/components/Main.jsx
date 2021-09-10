import React from "react";

const Main = ({ data }) => {
  return (
    <div className="items_wrapper">
      <div className="items">
        {data.map((item) => (
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
    </div>
  );
};

export default Main;
