import { useState, useEffect } from "react";

export default function Loader({ history, location }) {
  const [loading, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
    setTimeout(() => {
      history.push({ pathname: "/result", state: location.state });
    }, 5500);
  }, []);
  return (
    <div className={`content-wrapper ${loading ? "fadeInUp" : "fadeIn"}`}>
      {loading && (
        <>
          <img
            src={`${process.env.PUBLIC_URL}/loading.gif`}
            className="loadingImg"
          ></img>
          <div style={{ width: "50%", height: "50%" }}></div>
        </>
      )}
      {!loading && (
        <img
          className="complete_img"
          src={`${process.env.PUBLIC_URL}/complete.svg`}
        ></img>
      )}
      <div className={loading ? "loader" : "complete"}></div>
      <h5>{loading ? "결과 분석중" : "완료"}</h5>
    </div>
  );
}
