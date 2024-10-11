//회원가입..?
fetch("https://eduapi.weniv.co.kr/7777/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "test123",
    password: "test1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

//로그인?
fetch("https://eduapi.weniv.co.kr/7777/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: "test123",
    password: "test1234",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 글 가져오기
fetch("https://eduapi.weniv.co.kr/7777/blog")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 생성 fetch를 이용한 POST 요청
fetch("https://eduapi.weniv.co.kr/7777/blog", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "test",
    content: "test",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));

// 블로그 수정 fetch를 이용한 PUT 요청
fetch("https://eduapi.weniv.co.kr/7777/blog/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "test put",
    content: "test put",
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
