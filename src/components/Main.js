import firebase from "firebase/app";
import "firebase/database";
//import firebase from "firebase/app";
import { useState, useEffect } from "react";
function Main({ history }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [value, setValue] = useState(0);
  let database;

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAmxNeX-u7tnUvsZSXu05XM1ClGmLX4ATU",
      authDomain: "mbti-cdfdd.firebaseapp.com",
      databaseURL: "https://mbti-cdfdd-default-rtdb.firebaseio.com",
      projectId: "mbti-cdfdd",
      messagingSenderId: "212405074444",
      appId: "1:212405074444:web:537767c363431211b34c29",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    database = firebase.database();
    database
      .ref("visitor")
      .once("value")
      .then((snapshot) => setValue(snapshot.val()));
  }, []);

  const QA = [
    {
      question: "평소 와인을 고르는 스타일은?",
      answer: [
        {
          answer:
            "가격 대비 퀄리티!\n꼼꼼하게 따진 뒤 가성비 좋은 와인을 고른다.",
          type: "CE",
        },
        {
          answer:
            "와인을 마실 때만큼은 행복하게!\n지출이 있더라도  가격 대비 마음의 만족을 추구한다.",
          type: "EX",
        },
      ],
    },
    {
      question: "오늘은 꼭 와인을 먹어야겠어! 라고 마음 먹은 날,\n나는",
      answer: [
        {
          answer: "집에서 넷플릭스를 틀어놓고 홈술을 즐긴다.",
          type: "I",
        },
        {
          answer: "친구들에게 전화를 돌리며 나오라고 한다.",
          type: "E",
        },
      ],
    },
    {
      question: "이번 주말에 마실 와인을 고를 때,\n나는",
      answer: [
        {
          answer: "‘편한게 짱!’,\n집에서 핸드폰으로 여유롭게 주문한다",
          type: "I",
        },
        {
          answer: "‘와인은 직접 골라야 제 맛!’,\n와인샵에 간다",
          type: "E",
        },
      ],
    },
    {
      question: "여럿이 있는 자리에서 와인 사진을 찍고 싶을 때, \n나는",
      answer: [
        {
          answer: "눈치보다가 한 장 찍지만 그마저도 흔들린다.",
          type: "I",
        },
        {
          answer: "‘조금만 기다려~’\n잘 나올 때까지 여러 장 찍는다",
          type: "E",
        },
      ],
    },
    {
      question: "와인샵에 방문했을 때,\n나는",
      answer: [
        {
          answer:
            "‘저번에 그게 맛있었지…’\n둘러보다가 항상 먹던 와인을 고른다.",
          type: "S",
        },
        {
          answer: "‘오늘은 이걸 먹어볼까?\n새로운 와인을 시도해 본다.",
          type: "N",
        },
      ],
    },
    {
      question: "구매한 와인이 별로일 때,\n나는",
      answer: [
        {
          answer: "‘그래 뭐, 별로일 수 있지…’",
          type: "S",
        },
        {
          answer: "‘어떻게 이런 와인을 팔 수가 있지?’",
          type: "N",
        },
      ],
    },
    {
      question: "와인 테이스팅 노트를 적을 때,\n나는",
      answer: [
        {
          answer: "확실한 가이드라인이 있는\n테이스팅 노트를 활용한다.",
          type: "S",
        },
        {
          answer: "자유롭게 내가 느낀 점을 적는다.",
          type: "N",
        },
      ],
    },

    {
      question: "식사 중 웨이터가 와인잔을 깼다.\n가장 먼저 든 생각은?",
      answer: [
        {
          answer: "‘바쁜데 저거 언제 다 치우나,,’",
          type: "T",
        },
        {
          answer: "‘헉 ㅜㅜ 다치지는 않으셨으려나’",
          type: "F",
        },
      ],
    },
    {
      question:
        "친구가 오늘 기분이 좋아서 비싼 와인을 먹겠다고 말한다.\n나의 반응은?",
      answer: [
        {
          answer: "‘오~ 비싼 와인? 얼마 짜린데?’",
          type: "T",
        },
        {
          answer: "‘오~ 왜 기분이 좋아? 무슨 일인데??’",
          type: "F",
        },
      ],
    },
    {
      question: "친구가 내가 선물한 와인이 별로라고 한다,\n나의 반응은?",
      answer: [
        {
          answer: "별로인 이유를 먼저 들어보고 납득할만하면 수용한다.",
          type: "T",
        },
        {
          answer: "와인을 고르던 내 모습이 주마등처럼 지나가며 상처를 받는다.",
          type: "F",
        },
      ],
    },
    {
      question: "원래 구매하려고 했던 와인이 보이지 않는다.\n나의 선택은?",
      answer: [
        {
          answer: "옆에 와인도 맛있어 보이네! 이걸로 살까?",
          type: "P",
        },
        {
          answer:
            "계획이 틀어져서 짜증이 나지만\n두 번째로 봐두었던 와인을 구매한다",
          type: "J",
        },
      ],
    },
    {
      question: "와인을 마시기 전 가장 먼저 할 일은?",
      answer: [
        {
          answer: "와인 정보? 마시면서 알아가는 편",
          type: "P",
        },
        {
          answer: "그래도 기본적인 정보는 알고 마시자!",
          type: "J",
        },
      ],
    },
    {
      question: "우리집에서 와인 파티 후, 집 청소는?",
      answer: [
        {
          answer:
            "‘어차피 내일 해야 할 청소,\n오늘 좀 피곤해도 후다닥 해버리자’",
          type: "J",
        },
        {
          answer: "‘일단 오늘은 힘드니까 쉬고,\n내일 천천히 치워야지’",
          type: "P",
        },
      ],
    },
  ];

  const shuffleArray = () => {
    for (let i = 0; i < QA.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [QA[i], QA[j]] = [QA[j], QA[i]];
    }
  };

  return (
    <div className={"content-wrapper"}>
      <div className={"content main"}>
        <img
          src={`${process.env.PUBLIC_URL}/img/main_title.jpg`}
          style={{ width: "100%" }}
          alt="타이틀 이미지"
          className={`${fadeOut ? "fadeOut" : "fadeInUp"}`}
        ></img>
        <p className={`${fadeOut ? "fadeOut" : "fadeInUp"}`}>
          현재 총 {value}명이 참여했습니다.
        </p>
        <button
          className={`answerBtn ${fadeOut ? "fadeOut" : "fadeInUp"}`}
          onClick={(e) => {
            e.preventDefault();
            firebase
              .database()
              .ref("visitor")
              .set(value + 1);
            setFadeOut(true);
            shuffleArray();
            setTimeout(() => {
              history.push({
                pathname: "/test",
                state: QA,
              });
            }, 400);
          }}
        >
          테스트 시작하기
        </button>
      </div>
    </div>
  );
}

export default Main;
