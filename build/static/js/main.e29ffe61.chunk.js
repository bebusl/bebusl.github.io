(this.webpackJsonpmbti=this.webpackJsonpmbti||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(19),a=n(25),i=n.n(a),r=(n(31),n(32),n(33),n(4)),o=n(8),l=n(15),u=(n(34),n(1));var b=function(e){var t=e.history,n=Object(c.useState)(!1),s=Object(o.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)(0),b=Object(o.a)(r,2),d=b[0],j=b[1];Object(c.useEffect)((function(){l.a.apps.length||l.a.initializeApp({apiKey:"AIzaSyAmxNeX-u7tnUvsZSXu05XM1ClGmLX4ATU",authDomain:"mbti-cdfdd.firebaseapp.com",databaseURL:"https://mbti-cdfdd-default-rtdb.firebaseio.com",projectId:"mbti-cdfdd",messagingSenderId:"212405074444",appId:"1:212405074444:web:537767c363431211b34c29"}),l.a.database().ref("visitor").once("value").then((function(e){return j(e.val())}))}),[]);var p=[{question:"\ud3c9\uc18c \uc640\uc778\uc744 \uace0\ub974\ub294 \uc2a4\ud0c0\uc77c\uc740?",answer:[{answer:"\uac00\uaca9 \ub300\ube44 \ud004\ub9ac\ud2f0!\n\uaf3c\uaf3c\ud558\uac8c \ub530\uc9c4 \ub4a4 \uac00\uc131\ube44 \uc88b\uc740 \uc640\uc778\uc744 \uace0\ub978\ub2e4.",type:"CE"},{answer:"\uc640\uc778\uc744 \ub9c8\uc2e4 \ub54c\ub9cc\ud07c\uc740 \ud589\ubcf5\ud558\uac8c!\n\uc9c0\ucd9c\uc774 \uc788\ub354\ub77c\ub3c4  \uac00\uaca9 \ub300\ube44 \ub9c8\uc74c\uc758 \ub9cc\uc871\uc744 \ucd94\uad6c\ud55c\ub2e4.",type:"EX"}]},{question:"\uc624\ub298\uc740 \uaf2d \uc640\uc778\uc744 \uba39\uc5b4\uc57c\uaca0\uc5b4! \ub77c\uace0 \ub9c8\uc74c \uba39\uc740 \ub0a0,\n\ub098\ub294",answer:[{answer:"\uc9d1\uc5d0\uc11c \ub137\ud50c\ub9ad\uc2a4\ub97c \ud2c0\uc5b4\ub193\uace0 \ud648\uc220\uc744 \uc990\uae34\ub2e4.",type:"I"},{answer:"\uce5c\uad6c\ub4e4\uc5d0\uac8c \uc804\ud654\ub97c \ub3cc\ub9ac\uba70 \ub098\uc624\ub77c\uace0 \ud55c\ub2e4.",type:"E"}]},{question:"\uc774\ubc88 \uc8fc\ub9d0\uc5d0 \ub9c8\uc2e4 \uc640\uc778\uc744 \uace0\ub97c \ub54c,\n\ub098\ub294",answer:[{answer:"\u2018\ud3b8\ud55c\uac8c \uc9f1!\u2019,\n\uc9d1\uc5d0\uc11c \ud578\ub4dc\ud3f0\uc73c\ub85c \uc5ec\uc720\ub86d\uac8c \uc8fc\ubb38\ud55c\ub2e4",type:"I"},{answer:"\u2018\uc640\uc778\uc740 \uc9c1\uc811 \uace8\ub77c\uc57c \uc81c \ub9db!\u2019,\n\uc640\uc778\uc0f5\uc5d0 \uac04\ub2e4",type:"E"}]},{question:"\uc5ec\ub7ff\uc774 \uc788\ub294 \uc790\ub9ac\uc5d0\uc11c \uc640\uc778 \uc0ac\uc9c4\uc744 \ucc0d\uace0 \uc2f6\uc744 \ub54c, \n\ub098\ub294",answer:[{answer:"\ub208\uce58\ubcf4\ub2e4\uac00 \ud55c \uc7a5 \ucc0d\uc9c0\ub9cc \uadf8\ub9c8\uc800\ub3c4 \ud754\ub4e4\ub9b0\ub2e4.",type:"I"},{answer:"\u2018\uc870\uae08\ub9cc \uae30\ub2e4\ub824~\u2019\n\uc798 \ub098\uc62c \ub54c\uae4c\uc9c0 \uc5ec\ub7ec \uc7a5 \ucc0d\ub294\ub2e4",type:"E"}]},{question:"\uc640\uc778\uc0f5\uc5d0 \ubc29\ubb38\ud588\uc744 \ub54c,\n\ub098\ub294",answer:[{answer:"\u2018\uc800\ubc88\uc5d0 \uadf8\uac8c \ub9db\uc788\uc5c8\uc9c0\u2026\u2019\n\ub458\ub7ec\ubcf4\ub2e4\uac00 \ud56d\uc0c1 \uba39\ub358 \uc640\uc778\uc744 \uace0\ub978\ub2e4.",type:"S"},{answer:"\u2018\uc624\ub298\uc740 \uc774\uac78 \uba39\uc5b4\ubcfc\uae4c?\n\uc0c8\ub85c\uc6b4 \uc640\uc778\uc744 \uc2dc\ub3c4\ud574 \ubcf8\ub2e4.",type:"N"}]},{question:"\uad6c\ub9e4\ud55c \uc640\uc778\uc774 \ubcc4\ub85c\uc77c \ub54c,\n\ub098\ub294",answer:[{answer:"\u2018\uadf8\ub798 \ubb50, \ubcc4\ub85c\uc77c \uc218 \uc788\uc9c0\u2026\u2019",type:"S"},{answer:"\u2018\uc5b4\ub5bb\uac8c \uc774\ub7f0 \uc640\uc778\uc744 \ud314 \uc218\uac00 \uc788\uc9c0?\u2019",type:"N"}]},{question:"\uc640\uc778 \ud14c\uc774\uc2a4\ud305 \ub178\ud2b8\ub97c \uc801\uc744 \ub54c,\n\ub098\ub294",answer:[{answer:"\ud655\uc2e4\ud55c \uac00\uc774\ub4dc\ub77c\uc778\uc774 \uc788\ub294\n\ud14c\uc774\uc2a4\ud305 \ub178\ud2b8\ub97c \ud65c\uc6a9\ud55c\ub2e4.",type:"S"},{answer:"\uc790\uc720\ub86d\uac8c \ub0b4\uac00 \ub290\ub080 \uc810\uc744 \uc801\ub294\ub2e4.",type:"N"}]},{question:"\uc2dd\uc0ac \uc911 \uc6e8\uc774\ud130\uac00 \uc640\uc778\uc794\uc744 \uae7c\ub2e4.\n\uac00\uc7a5 \uba3c\uc800 \ub4e0 \uc0dd\uac01\uc740?",answer:[{answer:"\u2018\ubc14\uc05c\ub370 \uc800\uac70 \uc5b8\uc81c \ub2e4 \uce58\uc6b0\ub098,,\u2019",type:"T"},{answer:"\u2018\ud5c9 \u315c\u315c \ub2e4\uce58\uc9c0\ub294 \uc54a\uc73c\uc168\uc73c\ub824\ub098\u2019",type:"F"}]},{question:"\uce5c\uad6c\uac00 \uc624\ub298 \uae30\ubd84\uc774 \uc88b\uc544\uc11c \ube44\uc2fc \uc640\uc778\uc744 \uba39\uaca0\ub2e4\uace0 \ub9d0\ud55c\ub2e4.\n\ub098\uc758 \ubc18\uc751\uc740?",answer:[{answer:"\u2018\uc624~ \ube44\uc2fc \uc640\uc778? \uc5bc\ub9c8 \uc9dc\ub9b0\ub370?\u2019",type:"T"},{answer:"\u2018\uc624~ \uc65c \uae30\ubd84\uc774 \uc88b\uc544? \ubb34\uc2a8 \uc77c\uc778\ub370??\u2019",type:"F"}]},{question:"\uce5c\uad6c\uac00 \ub0b4\uac00 \uc120\ubb3c\ud55c \uc640\uc778\uc774 \ubcc4\ub85c\ub77c\uace0 \ud55c\ub2e4,\n\ub098\uc758 \ubc18\uc751\uc740?",answer:[{answer:"\ubcc4\ub85c\uc778 \uc774\uc720\ub97c \uba3c\uc800 \ub4e4\uc5b4\ubcf4\uace0 \ub0a9\ub4dd\ud560\ub9cc\ud558\uba74 \uc218\uc6a9\ud55c\ub2e4.",type:"T"},{answer:"\uc640\uc778\uc744 \uace0\ub974\ub358 \ub0b4 \ubaa8\uc2b5\uc774 \uc8fc\ub9c8\ub4f1\ucc98\ub7fc \uc9c0\ub098\uac00\uba70 \uc0c1\ucc98\ub97c \ubc1b\ub294\ub2e4.",type:"F"}]},{question:"\uc6d0\ub798 \uad6c\ub9e4\ud558\ub824\uace0 \ud588\ub358 \uc640\uc778\uc774 \ubcf4\uc774\uc9c0 \uc54a\ub294\ub2e4.\n\ub098\uc758 \uc120\ud0dd\uc740?",answer:[{answer:"\uc606\uc5d0 \uc640\uc778\ub3c4 \ub9db\uc788\uc5b4 \ubcf4\uc774\ub124! \uc774\uac78\ub85c \uc0b4\uae4c?",type:"P"},{answer:"\uacc4\ud68d\uc774 \ud2c0\uc5b4\uc838\uc11c \uc9dc\uc99d\uc774 \ub098\uc9c0\ub9cc\n\ub450 \ubc88\uc9f8\ub85c \ubd10\ub450\uc5c8\ub358 \uc640\uc778\uc744 \uad6c\ub9e4\ud55c\ub2e4",type:"J"}]},{question:"\uc640\uc778\uc744 \ub9c8\uc2dc\uae30 \uc804 \uac00\uc7a5 \uba3c\uc800 \ud560 \uc77c\uc740?",answer:[{answer:"\uc640\uc778 \uc815\ubcf4? \ub9c8\uc2dc\uba74\uc11c \uc54c\uc544\uac00\ub294 \ud3b8",type:"P"},{answer:"\uadf8\ub798\ub3c4 \uae30\ubcf8\uc801\uc778 \uc815\ubcf4\ub294 \uc54c\uace0 \ub9c8\uc2dc\uc790!",type:"J"}]},{question:"\uc6b0\ub9ac\uc9d1\uc5d0\uc11c \uc640\uc778 \ud30c\ud2f0 \ud6c4, \uc9d1 \uccad\uc18c\ub294?",answer:[{answer:"\u2018\uc5b4\ucc28\ud53c \ub0b4\uc77c \ud574\uc57c \ud560 \uccad\uc18c,\n\uc624\ub298 \uc880 \ud53c\uace4\ud574\ub3c4 \ud6c4\ub2e4\ub2e5 \ud574\ubc84\ub9ac\uc790\u2019",type:"J"},{answer:"\u2018\uc77c\ub2e8 \uc624\ub298\uc740 \ud798\ub4dc\ub2c8\uae4c \uc26c\uace0,\n\ub0b4\uc77c \ucc9c\ucc9c\ud788 \uce58\uc6cc\uc57c\uc9c0\u2019",type:"P"}]}];return Object(u.jsx)("div",{className:"content-wrapper",children:Object(u.jsxs)("div",{className:"content main",children:[Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/img/main_title.jpg"),style:{width:"100%"},alt:"\ud0c0\uc774\ud2c0 \uc774\ubbf8\uc9c0",className:"".concat(a?"fadeOut":"fadeInUp")}),Object(u.jsxs)("p",{className:"".concat(a?"fadeOut":"fadeInUp"),children:["\ud604\uc7ac \ucd1d ",d,"\uba85\uc774 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4."]}),Object(u.jsx)("button",{className:"answerBtn ".concat(a?"fadeOut":"fadeInUp"),onClick:function(e){e.preventDefault(),l.a.database().ref("visitor").set(d+1),i(!0),function(){for(var e=0;e<p.length;e++){var t=Math.floor(Math.random()*(e+1)),n=[p[t],p[e]];p[e]=n[0],p[t]=n[1]}}(),setTimeout((function(){t.push({pathname:"/test",state:p})}),400)},children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791\ud558\uae30"})]})})};var d=function(e){var t=e.location,n=e.history,s=Object(c.useState)(!1),a=Object(o.a)(s,2),i=a[0],r=a[1],l="https://bebusl.github.io/mbti-wine/#/";return Object(c.useEffect)((function(){window.Kakao.isInitialized()||window.Kakao.init("c2ab5dc35f2403c282565ed01b0c145c"),window.Kakao.Link.createScrapButton({container:"#kakao-link-btn",requestUrl:l},[]),setTimeout((function(){window.scrollTo(0,0),r(!0)}),300)}),[]),Object(u.jsx)("div",{className:"content-wrapper result",children:Object(u.jsxs)("div",{className:"content fade-in-section ".concat(i&&"is-visible"),children:[Object(u.jsx)("div",{className:"titleWrapper",children:Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/img/result/title/0").concat(t.state>=10?t.state:"0"+t.state,".jpg")})}),Object(u.jsx)("div",{className:"tastingnoteWrapper fade-in-section ".concat(i&&"is-visible"),children:Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/img/result/tastingnote/").concat(t.state,".jpg")})}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)("a",{className:"answerBtn",style:{width:"50%",textDecoration:"none"},href:"".concat("https://bebusl.github.io/mbti-wine","/img/result/title/0").concat(t.state>=10?t.state:"0"+t.state,".jpg"),download:"recommand_wine.jpg",children:"\uc0ac\uc9c4 \uc800\uc7a5\ud558\uae30"}),Object(u.jsxs)("div",{className:"shareBtnWrapper",children:[Object(u.jsx)("h5",{children:"\uce5c\uad6c\uc640 \ud14c\uc2a4\ud2b8 \uacf5\uc720\ud558\uae30"}),Object(u.jsxs)("div",{className:"shareBtns",children:[Object(u.jsx)("div",{className:"shareBtn",onClick:function(e){e.preventDefault(),window.open("http://www.facebook.com/sharer/sharer.php?u="+l)},children:Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/shareIcon/facebook.png")})}),Object(u.jsx)("div",{className:"shareBtn",id:"kakao-link-btn",children:Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/shareIcon/kakaotalk.png")})}),Object(u.jsx)("div",{className:"shareBtn",onClick:function(e){e.preventDefault(),window.open("https://twitter.com/intent/tweet?text=mbti\ubcc4\uc640\uc778\ucd94\ucc9c:&url="+l)},children:Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/shareIcon/twitter.png")})}),Object(u.jsx)("div",{className:"shareBtn",onClick:function(e){e.preventDefault();var t=document.createElement("textarea");document.body.appendChild(t),t.value=l,t.select(),document.execCommand("copy"),document.body.removeChild(t),window.alert("URL\uc774 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/shareIcon/clipboard.png")})})]})]}),Object(u.jsx)("button",{className:"answerBtn",onClick:function(e){e.preventDefault(),document.documentElement.style.setProperty("--gauge-value","".concat(7.7,"%")),n.push("/")},children:"\ud14c\uc2a4\ud2b8 \ub2e4\uc2dc\ud558\uae30"})]})]})})},j=n(16),p=n(21);function m(e){var t=e.history,n=e.location,s=Object(c.useState)(!0),a=Object(o.a)(s,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){setTimeout((function(){r(!1)}),4e3),setTimeout((function(){t.push({pathname:"/result",state:n.state})}),5500)}),[]),Object(u.jsxs)("div",{className:"content-wrapper ".concat(i?"fadeInUp":"fadeIn"),children:[i&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("img",{src:"".concat("https://bebusl.github.io/mbti-wine","/loading.gif"),className:"loadingImg"}),Object(u.jsx)("div",{style:{width:"50%",height:"50%"}})]}),!i&&Object(u.jsx)("img",{className:"complete_img",src:"".concat("https://bebusl.github.io/mbti-wine","/complete.svg")}),Object(u.jsx)("div",{className:i?"loader":"complete"}),Object(u.jsx)("h5",{children:i?"\uacb0\uacfc \ubd84\uc11d\uc911":"\uc644\ub8cc"})]})}var h={};var f=function(e){var t=e.history,n=e.location.state,s=[1,2,7,8,18,22,23,24,25,26,27,28,29,30,31,32],a=[3,4,5,6,9,10,11,12,13,14,15,16,17,19,20,21],i=[3,4,6,8,9,10,13,14,15,22,24,25,26,27,30,32],r=[1,2,5,7,11,12,16,17,18,19,20,21,23,28,29,31],l=[1,2,4,5,11,13,14,15,20,21,25,26,27,28,29,32],b=[3,6,7,8,9,10,12,16,17,18,19,22,23,24,30,31],d=[2,6,8,10,11,14,15,17,19,20,22,23,25,27,28,31],m=[1,3,4,5,7,9,12,13,16,18,21,24,26,29,30,32],f=[3,5,6,7,13,14,16,17,20,22,25,28,29,30,31,32],w=[1,2,4,8,9,10,11,12,15,18,19,21,23,24,26,27],O=Object(c.useState)(0),g=Object(o.a)(O,2),x=g[0],v=g[1],y=Object(c.useState)(!1),N=Object(o.a)(y,2),I=N[0],k=N[1],S=Object(c.useState)(!1),q=Object(o.a)(S,2),B=q[0],E=q[1],C=Object(c.useState)({0:!1,1:!1}),T=Object(o.a)(C,2),U=T[0],D=T[1];Object(c.useEffect)((function(){console.log("\ubc84\ud2bc\ub4e4",U),D({0:!1,1:!1}),E(!1),k(!0),setTimeout((function(){k(!1)}),1300)}),[x]);var L=function(){var e;return e=1===h.CE?h.I>=2?s.filter((function(e){return r.includes(e)})):s.filter((function(e){return i.includes(e)})):h.I>=2?a.filter((function(e){return r.includes(e)})):a.filter((function(e){return i.includes(e)})),e=h.S>=2?e.filter((function(e){return l.includes(e)})):e.filter((function(e){return b.includes(e)})),e=h.T>=2?e.filter((function(e){return d.includes(e)})):e.filter((function(e){return m.includes(e)})),(e=h.P>=2?e.filter((function(e){return f.includes(e)})):e.filter((function(e){return w.includes(e)})))[0]};return Object(u.jsx)("div",{className:"content-wrapper test",children:Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"progressbar-wrapper",children:[Object(u.jsxs)("p",{children:[x+1,"/",n.length]}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:"progressbar",children:Object(u.jsx)("span",{className:"gauge"})})})]}),Object(u.jsxs)("div",{className:"questionWrapper",children:[Object(u.jsxs)("h1",{className:"".concat(I&&"fadeInLeft"," ").concat(B&&"fadeOut"),children:["Q",x+1,"."]}),Object(u.jsx)("p",{className:"".concat(I&&"fadeInLeft"," ").concat(B&&"fadeOut"),style:{textAlign:"center",fontSize:"0.8rem"},children:n["".concat(x)].question.split("\n").map((function(e){return Object(u.jsxs)(u.Fragment,{children:[e,Object(u.jsx)("br",{})]})}))})]}),Object(u.jsx)("div",{className:"selectBtnWrapper ".concat(I&&"fadeInLeft"),children:n["".concat(x)].answer.map((function(e,c){return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"answerBtn ".concat(B&&(U["".concat(c)]?"fadeInBig":"blur")),onClick:function(s){s.preventDefault(),document.documentElement.style.setProperty("--gauge-value","".concat(7.7*(x+1),"%")),D(Object(p.a)(Object(p.a)({},U),{},Object(j.a)({},"".concat(c),!0))),h["".concat(e.type)]=Object.keys(h).includes(e.type)?h["".concat(e.type)]+1:1,E(!0),setTimeout((function(){x<n.length-1?v(x+1):t.push({pathname:"/loading",state:L()})}),900)},children:Object(u.jsx)("p",{style:{fontSize:"0.7rem"},children:e.answer.split("\n").map((function(e){return Object(u.jsxs)(u.Fragment,{children:[e,Object(u.jsx)("br",{})]})}))})})},"".concat(x,"-").concat(c))}))})]})})};var w=function(){return Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(u.jsx)(r.a,{path:"/test",component:f}),Object(u.jsx)(r.a,{path:"/result",component:d}),Object(u.jsx)(r.a,{path:"/loading",component:m})]})};i.a.render(Object(u.jsx)(s.a,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e29ffe61.chunk.js.map