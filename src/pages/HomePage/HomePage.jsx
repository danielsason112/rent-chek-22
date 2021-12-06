import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="home">
        <h4 className="title">חוזה שכירות דיגיטלי חותמים בצ׳יק</h4>
        <p>
          {" "}
          Rent-chik מאפשרת לך ליצור ולחתום על חוזה שכירות סטנדרטי בכמה
          צעדיםפשוטים ובחינם!
        </p>
        <p>עונים על שאלון קצר- שולחים לשוכר להחתמה- ומקבלים עותק למייל.</p>
      </div>
      <button type="button" className="btn btn-dark">
        צור חוזה בצ׳יק
      </button>
    </div>
  );
};
export default HomePage;
