import { useState, useEffect } from "react";

export default function Loader({ history, location }) {
  const [loading, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
    setTimeout(() => {
      history.push({ pathname: "/result", state: location.state });
    }, 4000);
  }, []);
  return (
    <div className={`content-wrapper ${loading ? "fadeInUp" : "fadeIn"}`}>
      <div className={loading ? "loader" : "complete"}></div>
      <h5>{loading ? "결과 분석중" : "완료"}</h5>
    </div>
  );
}
