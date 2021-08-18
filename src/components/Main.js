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
          answer: "‘편한게 짱이지’\n인터넷으로 주문한다",
          type: "I",
        },
        {
          answer: "‘와인은 직접가서 봐야지’\n마트에 간다",
          type: "E",
        },
      ],
    },
    {
      question: "길 가다 너무 예쁜 와인을 발견했을 때,\n나는",
      answer: [
        {
          answer: "‘오 예쁘네..’\n속으로만 생각한다.",
          type: "I",
        },
        {
          answer: "‘와 뭐야? 진짜 예쁘다’\n크게 말하고, 다가간다.",
          type: "E",
        },
      ],
    },
    {
      question: "와인샵에 방문했을 때,\n나는",
      answer: [
        {
          answer: "항상 먹던 와인을 고른다.",
          type: "S",
        },
        {
          answer: "오늘은 새로운 와인을 시도해 본다.",
          type: "N",
        },
      ],
    },
    {
      question: "구매한 와인이 별로일 때,\n나는",
      answer: [
        {
          answer: "“그래 뭐, 별로일 수 있지…”",
          type: "S",
        },
        {
          answer: "“어떻게 이런 와인을 팔 수가 있지?”",
          type: "N",
        },
      ],
    },
    {
      question: "와인 테이스팅 노트를 적을 때,\n나는",
      answer: [
        {
          answer: "확실한 가이드라인이 있는 테이스팅 노트를 활용한다.",
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
          answer: "“무슨 와인 먹게?”",
          type: "T",
        },
        {
          answer: "“왜 기분이 좋은데??”",
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
          answer: "맛있어 보이는 옆의 와인을 집는다.",
          type: "P",
        },
        {
          answer: "원래 구매하려던 와인과 비슷한 와인을 다시 검색해본다.",
          type: "J",
        },
      ],
    },
    {
      question: "와인을 마시기 전 가장 먼저 할 일은?",
      answer: [
        {
          answer: "조사고 뭐고 일단 까고 보자!",
          type: "P",
        },
        {
          answer:
            "와인에 대한 조사부터 해야지.\n이 와인은 프랑스 레드 와인으로.....",
          type: "J",
        },
      ],
    },
    {
      question: "우리집에서 와인 파티 후, 집 청소는?",
      answer: [
        {
          answer: "더러운 꼴은 못 봐.\n그 날 바로바로",
          type: "J",
        },
        {
          answer: "힘드니까 내일로",
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
