import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userInfo = useSelector((state) => state.data);
  let userInfoArr = [];
  for (let key in userInfo) {
    userInfoArr.push(userInfo[key]);
  }
  // console.log("state", name, email, number, address);
  return (
    <div>
      <h1>Home</h1>
      {userInfoArr.map((elem, id) => (
        <ul key={id}>
          <li>
            <h3>{elem}</h3>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
