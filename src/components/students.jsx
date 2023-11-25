import React from "react";
import "./student.css";
import { Link } from "react-router-dom";

function Students() {
  return (
    <div className="main">
      <header>
        <Link to={"/"}>الطلاب</Link>

        <nav>
          <button className="filter">
            <i class="fa-solid fa-filter"></i>
          </button>
          <div className="search-box">
            <input type="text" placeholder="اكتب اسم الطالب" />
            <button>البحث</button>
          </div>
        </nav>
      </header>

      <div className="cards">
        <Link to={"/primary"}>
          <div className="card">
            <img src="studying.png" alt="" />
            <p>الابتدائي</p>
          </div>
        </Link>
        <Link to={"/"}>
          <div className="card">
            <img src="middle.png" alt="" />
            <p>المتوسطة</p>
          </div>
        </Link>
        <Link to={"/"}>
          <div className="card">
            <img src="classmates.png" alt="" />
            <p>الاعدادية</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Students;
