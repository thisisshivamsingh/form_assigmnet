import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";

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
      <div className="div-center">
        <ul>
          {userInfoArr.map((elem, id) => (
            <li key={id}>
              <h3>{elem}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
