import hamburger from "../../assets/images/hamburger.png";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="home-page container d-flex bg-secondary rounded-3 mt-4 p-3">
      <div className="container d-flex row align-items-center justify-content-center gap-0">
        <h1 className="h1">سفارش آنلاین غذا</h1>
        <div>
          <p>ساعت کاری: همه روزه از ساعت 12 ظهر تا 12 شب</p>
          <p>آدرس: خیابان ولیعصر، جنب بانک ملی</p>
        </div>
        <div className="d-flex justify-content-start ">
          <button className="btn m-2 rounded-4 buttons">مشاهده منو</button>
          <button className="btn btn-outline-warning m-2 buttons-outline">
            تماس با ما
          </button>
        </div>
      </div>
      <img src={hamburger} className="img-fluid hamburger" alt="hamburger" />
    </div>
  );
};

export default LandingPage;
