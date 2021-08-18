import { useState, useEffect } from "react";
import Loader from "./Loader";
const result = {};

function Test({ history, location }) {
  const QA = location.state;
  let CE = [1, 2, 7, 8, 18, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
  let EX = [3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21];
  let E = [3, 4, 6, 8, 9, 10, 13, 14, 15, 22, 24, 25, 26, 27, 30, 32];
  let I = [1, 2, 5, 7, 11, 12, 16, 17, 18, 19, 20, 21, 23, 28, 29, 31];
  let S = [1, 2, 4, 5, 11, 13, 14, 15, 20, 21, 25, 26, 27, 28, 29, 32];
  let N = [3, 6, 7, 8, 9, 10, 12, 16, 17, 18, 19, 22, 23, 24, 30, 31];
  let T = [2, 6, 8, 10, 11, 14, 15, 17, 19, 20, 22, 23, 25, 27, 28, 31];
  let F = [1, 3, 4, 5, 7, 9, 12, 13, 16, 18, 21, 24, 26, 29, 30, 32];
  let P = [3, 5, 6, 7, 13, 14, 16, 17, 20, 22, 25, 28, 29, 30, 31, 32];
  let J = [1, 2, 4, 8, 9, 10, 11, 12, 15, 18, 19, 21, 23, 24, 26, 27];

  const [presentStep, setStep] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [btnAnime, setBtnAnime] = useState({ 0: false, 1: false });
  useEffect(() => {
    console.log("버튼들", btnAnime);
    setBtnAnime({ 0: false, 1: false });
    setFadeOut(false);
    setFadeIn(true);
    setTimeout(() => {
      setFadeIn(false);
    }, 1000);
  }, [presentStep]);
  const analysis = () => {
    let intersection;
    if (result.CE === 1) {
      intersection =
        result.I >= 2
          ? CE.filter((x) => I.includes(x))
          : CE.filter((x) => E.includes(x));
    } else {
      intersection =
        result.I >= 2
          ? EX.filter((x) => I.includes(x))
          : EX.filter((x) => E.includes(x));
    }
    intersection =
      result.S >= 2
        ? intersection.filter((x) => S.includes(x))
        : intersection.filter((x) => N.includes(x));
    intersection =
      result.T >= 2
        ? intersection.filter((x) => T.includes(x))
        : intersection.filter((x) => F.includes(x));
    intersection =
      result.P >= 2
        ? intersection.filter((x) => P.includes(x))
        : intersection.filter((x) => J.includes(x));

    return intersection[0];
    //EX or CE확인 나머지 I/E, N/S, T/F,P/J
  };

  return (
    <div className={"content-wrapper test"}>
      <div className={"content"}>
        <div className={"progressbar-wrapper"}>
          <p>
            {presentStep + 1}/{QA.length}
          </p>
          <div>
            <span className="progressbar">
              <span className="gauge" />
            </span>
          </div>
        </div>
        <div className="questionWrapper">
          <h1 className={`${fadeIn && "fadeInLeft"} ${fadeOut && "fadeOut"}`}>
            Q{presentStep + 1}.
          </h1>
          <p
            className={`${fadeIn && "fadeInLeft"} ${fadeOut && "fadeOut"}`}
            style={{ textAlign: "center", fontSize: "1rem" }}
          >
            {QA[`${presentStep}`].question.split("\n").map((split) => (
              <>
                {split}
                <br />
              </>
            ))}
          </p>
        </div>

        <div className={`selectBtnWrapper ${fadeIn && "fadeInLeft"}`}>
          {QA[`${presentStep}`].answer.map((answer, idx) => (
            <div key={`${presentStep}-${idx}`}>
              <button
                className={`answerBtn ${
                  fadeOut && (btnAnime[`${idx}`] ? "fadeInBig" : "blur")
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.documentElement.style.setProperty(
                    "--gauge-value",
                    `${7.7 * (presentStep + 1)}%`
                  );
                  setBtnAnime({ ...btnAnime, [`${idx}`]: true });
                  result[`${answer.type}`] = Object.keys(result).includes(
                    answer.type
                  )
                    ? result[`${answer.type}`] + 1
                    : 1;
                  setFadeOut(true);
                  setTimeout(() => {
                    presentStep < QA.length - 1
                      ? setStep(presentStep + 1)
                      : history.push({
                          pathname: "/loading",
                          state: analysis(),
                        });
                  }, 700);
                }}
              >
                {answer.answer}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
