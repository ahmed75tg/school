import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import { v4 as uuidv4 } from "uuid";
import "./primary.css"


function Primary() {

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const docRef = useRef();
  const dateRef = useRef();
  const birthRef = useRef();
  const genderRef = useRef();
  const phaseRef = useRef();

  const [students, setStudents] = useState(()=>{
    const storedData = localStorage.getItem("students");
    return storedData
      ? JSON.parse(storedData)
      : [
          {
            ids: uuidv4(),
            names: "",
            emails: "",
            phones: 0,
            docs: "",
            dates: "",
            births: "",
            genders: "",
            phases: "",
          },
        ];
  })

  const handleAddStudent = () => {
    const names = nameRef.current.value;
    const emails = emailRef.current.value;
    const phones = phoneRef.current.value;
    const docs = docRef.current.value;
    const dates = dateRef.current.value;
    const births = birthRef.current.value;
    const genders = genderRef.current.value;
    const phases = phaseRef.current.value;

    setStudents([
      ...students,
      {
        ids: uuidv4(),
        names: names,
        emails: emails,
        phones: phones,
        docs: docs,
        dates: dates,
        births: births,
        genders: genders,
        phases: phases
      }
    ])
  }

  useEffect(() => {
    // حفظ البيانات في Local Storage عند تحديث الحالة
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const handleRemove = (ids) => {
    setStudents((oldValues) => {
      return oldValues.filter((students) => students.ids !== ids);
    });
    console.log(ids);
  };


  return (
    <div className="container">
     <header>
        <a href="#">الابتدائية</a>
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
          trigger={<button>اضافة طالب</button>}
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
                  <input type="text" placeholder="الايميل ان وجد" ref={emailRef}/>
                  <input type="tel" placeholder="رقم هاتف الاب" ref={phoneRef}/>
                  <input type="text" placeholder="رقم الوثيقة" ref={docRef}/>
                  <label htmlFor="date"> تاريخ التسجيل :</label>
                  <input type="date" placeholder="تاريخ التسجيل" ref={dateRef}/>
                  <label htmlFor="birth">تاريخ الميلاد : </label>
                  <input type="date" placeholder="السنة الدراسية" ref={birthRef}/>    
                  <select className="gender" ref={genderRef}>
                    <option value="desabled" disabled>الجنس</option>
                    <option value="male">ذكر</option>
                    <option value="female">انثى</option>
                  </select>
                  <select ref={phaseRef}>
                    <option value="الاول ابتدائي">الاول ابتدائي</option>
                    <option value="الثاني ابتدائي">الثاني ابتدائي</option>
                    <option value="الثالث ابتدائي">الثالث ابتدائي</option>
                    <option value="الرابع ابتدائي">الرابع ابتدائي</option>
                    <option value="الخامس ابتدائي">الخامس ابتدائي</option>
                    <option value="السادس ابتدائي">السادس ابتدائي</option>
                  </select>
                </div>
                <div className="buttons">
                  <button onClick={handleAddStudent}>اضـافة الطـالـب</button>
                  <button onClick={() => close()}>اغلاق</button>
                </div>
              </form>
            </div>
          )}
        </Popup>
      </header>

          <table>
            <tr>
              <th>حذف</th>
              <th>الاسم</th>
              <th>رقم الهاتف</th>
              <th>الايميل</th>
              <th>رقم الوثيقة</th>
              <th>المرحلة</th>
            </tr>
            {
              students.map(student => (
                <tr key={student.ids}>
                  <td><button onClick={() => handleRemove(student.ids)} className="delete-item"><i class="fa-solid fa-trash-can"></i></button></td>
                  <td><Link to={"/"} className="name">{student.names}</Link></td>
                  <td>{student.phones}</td>
                  <td>{student.emails}</td>
                  <td>{student.docs}</td>
                  <td>{student.phases}</td>
                </tr>
              ))
            }
          </table>
      </div>
  );
}

export default Primary;
