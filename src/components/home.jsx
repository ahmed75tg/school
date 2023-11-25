import React from "react";
import { Link } from 'react-router-dom';
import "./home.css"

function Home() {
  return (
    <div className="main">
      <h1>الاقسام</h1>

      <div className="cards">
        <Link to={"/students"}>
        <div className="card">
          <img src="students.png" alt="" />
          <p>الطلاب</p>
        </div>
        </Link>
        <Link to={"/grades"}>
        <div className="card">
          <img src="score.png" alt="" />
          <p>الدرجات</p>
        </div>
        </Link>
        <Link to={"/"}>
        <div className="card">
          <img src="teaching.png" alt="" />
          <p>الكادر التدريسي</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
