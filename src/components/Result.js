import { useEffect, useState } from "react";

function Result({ location, history }) {
  const [isVisible, setVisible] = useState(false);
  const cUrl = "https://bebusl.github.io/mbti-wine/#/";
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("c2ab5dc35f2403c282565ed01b0c145c");
    }
    window.Kakao.Link.createScrapButton(
      {
        container: "#kakao-link-btn",
        requestUrl: cUrl,
      },
      []
    );
    setTimeout(() => {
      window.scrollTo(0, 0);
      setVisible(true);
    }, 300);
  }, []);

  return (
    <div className={"content-wrapper result"}>
      {/* 추천와인: {wineList[`${location.state - 1}`]} */}
      <div className={`content fade-in-section ${isVisible && "is-visible"}`}>
        <div className={`titleWrapper`}>
          <img
            src={`${process.env.PUBLIC_URL}/img/result/title/0${
              location.state >= 10 ? location.state : "0" + location.state
            }.jpg`}
          />
        </div>
        <div
          className={`tastingnoteWrapper fade-in-section ${
            isVisible && "is-visible"
          }`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/result/tastingnote/${location.state}.jpg`}
          />
        </div>
        <div className="content">
          <a
            className="answerBtn"
            style={{ width: "50%", textDecoration: "none" }}
            href={`${process.env.PUBLIC_URL}/img/result/title/0${
              location.state >= 10 ? location.state : "0" + location.state
            }.jpg`}
            download="recommand_wine.jpg"
          >
            사진 저장하기
          </a>

          <div className="shareBtnWrapper">
            <h5>친구와 테스트 공유하기</h5>
            <div className="shareBtns">
              <div
                className="shareBtn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "http://www.facebook.com/sharer/sharer.php?u=" + cUrl
                  );
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/shareIcon/facebook.png`}
                ></img>
              </div>
              <div className="shareBtn" id="kakao-link-btn">
                <img
                  src={`${process.env.PUBLIC_URL}/shareIcon/kakaotalk.png`}
                ></img>
              </div>
              <div
                className="shareBtn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://twitter.com/intent/tweet?text=mbti별와인추천:&url=" +
                      cUrl
                  );
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/shareIcon/twitter.png`}
                ></img>
              </div>
              <div
                className="shareBtn"
                onClick={(e) => {
                  e.preventDefault();
                  let textarea = document.createElement("textarea");
                  document.body.appendChild(textarea);
                  textarea.value = cUrl;
                  textarea.select();
                  document.execCommand("copy");
                  document.body.removeChild(textarea);
                  window.alert("URL이 복사되었습니다.");
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/shareIcon/clipboard.png`}
                ></img>
              </div>
            </div>
          </div>
          <button
            className="answerBtn"
            onClick={(e) => {
              e.preventDefault();
              document.documentElement.style.setProperty(
                "--gauge-value",
                `${7.7}%`
              );
              history.push("/");
            }}
          >
            테스트 다시하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
