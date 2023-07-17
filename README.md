# 1. 서버 셋업

##### 파일 생성

- src/server.js 생성
- .gitignore 생성
- README.MD 생성
- nodemon.json 생성
  {
  "exec": "babel-node src/server.js"
  }

- babel.config.json 생성
  {
  "presets": ["@babel/preset-env"]
  }

##### 패키지 설치

- npm i express pug
- npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
- npm i nodemon -D

# 2. 프론트 셋업

##### Pug 설정

- /src/view/home.pug 생성
- app.set("view engine", "pug");
- app.set("views", \_\_dirname + "/views");
- controller 테스트
  app.get("/", (req, res) => { res.render("home"); });

##### static 파일 설정

- app.use("/public", express.static(\_\_dirname + "/public"));

##### nodemon이 static 수정 무시하도록 설정

- nodemon.json에 다음 추가 : "ignore": ["src/public/*"],

##### Express static files 설정
