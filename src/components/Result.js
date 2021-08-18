import { useEffect, useState } from "react";

function Result({ location }) {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);

      setVisible(true);
    }, 500);
  }, []);
  // const wineList = [
  //   "바롱드 보삭 샤르도네",
  //   "바롱드 보삭 메를로",
  //   "베를루끼 네이처 브뤼",
  //   "베를루끼 61 브뤼",
  //   "베를루끼 네이처 사텐",
  //   "돈 파스칼",
  //   "마쏘 안티코 피아노",
  //   "마쏘 안티코 프리미티보",
  //   "마쏘 안티코 일뽀떼레",
  //   "롱 디스턴스",
  //   "챔피언",
  //   "니어핀",
  //   "티오프",
  //   "초카팔라 틴토",
  //   "끼안티 클라시크 리저르바",
  //   "페리퀴타 리저르바",
  //   "샹 플뢰리 피노누아",
  //   "캐빗 피노누아",
  //   "조제 드 쏘자",
  //   "퀸타 도 틴토",
  //   "탈레 트레비아노 다부르쪼",
  //   "떼레 시칠리아네",
  //   "끌로 라 꾸딸",
  //   "빠쇼네",
  //   "까잘 가르시아 스파클링 화이트",
  //   "까잘 가르시아 스파클링 로제",
  //   "샤또 모우락",
  //   "보테가 비나이 피노그리지오",
  //   "샤또 레 그라브 드 비오드",
  //   "알램브레 모스카텔 드 세투발",
  //   "까잘리 델 바로네 150+1",
  //   "산비질리오 모스카토 돌체",
  // ];
  return (
    <div className={"content-wrapper result"}>
      {/* 추천와인: {wineList[`${location.state - 1}`]} */}
      <div className={`content fade-in-section ${isVisible && "is-visible"}`}>
        <div className={`titleWrapper`}>
          <img src={`/img/result/title/001.jpg`} />
        </div>
        <div
          className={`tastingnoteWrapper fade-in-section ${
            isVisible && "is-visible"
          }`}
        >
          <img src={`/img/result/tastingnote/001.jpg`} />
        </div>
      </div>
    </div>
  );
}

export default Result;
/*${
            location.state >= 10 ? location.state : "0" + location.state
          }*/
