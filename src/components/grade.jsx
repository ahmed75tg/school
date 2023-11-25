/* eslint-disable jsx-a11y/anchor-is-valid */
import "./grade.css";
import { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from "uuid";

function Grades() {
  // const unique_id = uuid();
  const nameRef = useRef();
  const islamRef = useRef();
  const arabicRef = useRef();
  const mathRef = useRef();
  const geoRef = useRef();
  const phyRef = useRef();
  const englishRef = useRef();

  const [grades, setGrades] = useState(() => {
    // استرجاع البيانات من Local Storage عند تحميل المكون
    const storedData = localStorage.getItem("grades");
    return storedData
      ? JSON.parse(storedData)
      : [
          {
            id: uuidv4(),
            name: "",
            islam: 0,
            arabic: 0,
            math: 0,
            geo: 0,
            phy: 0,
            english: 0,
            total: 0,
            state: "",
          },
        ];
  });

  const calc = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const islam = parseInt(islamRef.current.value);
    const arabic = parseInt(arabicRef.current.value);
    const math = parseInt(mathRef.current.value);
    const geo = parseInt(geoRef.current.value);
    const phy = parseInt(phyRef.current.value);
    const english = parseInt(englishRef.current.value);
    let total = Math.round((islam + arabic + math + geo + phy + english) / 6);
    let state =
      total >= 50 &&
      islam >= 50 &&
      arabic >= 50 &&
      math >= 50 &&
      geo >= 50 &&
      phy >= 50 &&
      english >= 50
        ? "مؤهل"
        : "غير مؤهل";
    if (state === "غير مؤهل") {
      total = "-";
    }

    setGrades([
      ...grades,
      {
        id: uuidv4(),
        name: name,
        islam: islam,
        arabic: arabic,
        math: math,
        geo: geo,
        phy: phy,
        english: english,
        total: total,
        state: state,
      },
    ]);
  };

  const showAdd = () => {
    if (document.getElementById("add-form").classList.value === "active") {
      document.getElementById("add-form").classList.remove("active");
    } else {
      document.getElementById("add-form").classList.add("active");
    }
  };

  const handleRemove = (id) => {
    setGrades((oldValues) => {
      return oldValues.filter((grades) => grades.id !== id);
    });
    console.log(id);
  };

  const handleShow = () => {};

    useEffect(() => {
    // حفظ البيانات في Local Storage عند تحديث الحالة
    localStorage.setItem("grades", JSON.stringify(grades));
  }, [grades]);

  // console.log(calc())

  return (
    <div className="App">
      <header>
        <a href="#">الدرجات</a>
        <nav>
        <button className="filter">
            <i class="fa-solid fa-filter"></i>
          </button>
          <div className="search-box">
            <input type="text" placeholder="اكتب اسم الطالب" />
            <button>البحث</button>
          </div>
        </nav>
        <Popup
          trigger={<button onClick={showAdd}>اضافة درجات</button>}
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <form className="" id="add-form">
                <div className="inputs">
                  <input
                    type="text"
                    placeholder="الاسم الثلاثي"
                    ref={nameRef}
                  />
                  <input type="number" placeholder="الاسلامية" ref={islamRef} />
                  <input type="number" placeholder="عربي" ref={arabicRef} />
                  <input type="number" placeholder="اجتماعيات" ref={geoRef} />
                  <input type="number" placeholder="انجليزي" ref={englishRef} />
                  <input type="number" placeholder="الرياضيات" ref={mathRef} />
                  <input type="number" placeholder="العلوم" ref={phyRef} />
                </div>
                <div className="buttons">
                  <button onClick={calc}>اضـافة الطـالـب</button>
                  <button onClick={() => close()}>اغلاق</button>
                </div>
              </form>
            </div>
          )}
        </Popup>
      </header>

      <table>
        <tr>
          <th>الاسم</th>
          <th>اسلامية</th>
          <th>عربي</th>
          <th>انجليزي</th>
          <th>علوم</th>
          <th>اجتماعيات</th>
          <th>رياضيات</th>
          <th>المعدل</th>
          <th>النتيجة</th>
        </tr>
        {grades.map((grade) => (
          <tr key={grade.id} onClick={handleShow}>
            <td>
              <button onClick={() => handleRemove(grade.id)} className="delete-item"><i class="fa-solid fa-trash-can"></i></button>
              {grade.name}
            </td>
            <td>{grade.islam}</td>
            <td>{grade.arabic}</td>
            <td>{grade.english}</td>
            <td>{grade.phy}</td>
            <td>{grade.geo}</td>
            <td>{grade.math}</td>
            <td>{grade.total}</td>
            <td>{grade.state}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Grades;
