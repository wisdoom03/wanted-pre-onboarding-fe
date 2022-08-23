# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 목차
1. 사용 언어와 라이브러리
2. 실행 방법
3. Assignment Demo

### 1. 사용 언어와 라이브러리
JavaScript, React, React-router-dom, Emotion, Axios

### 2. 설치 및 실행 방법

```zsh
$ npm install
$ npm start
```

### 3. Assignment Demo
#### Assignment1, Assignment2 (로그인 / 회원가입)

- 이메일과 비밀번호의 유효성 검사기능(이메일 조건: `@` 포함, 비밀번호 조건: 8자 이상)을 구현했습니다.
- 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 했습니다.
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동했습니다.
    ![wanted-signup](https://user-images.githubusercontent.com/96907831/186284208-89cb7a0c-067b-4c02-8812-b93ed4c62107.gif)
    ![wanted-signin](https://user-images.githubusercontent.com/96907831/186284269-49caa5e7-e385-4dff-8a63-8e740162e945.gif)
  

  

### Assignment3 (로그인 리다이렉트)
- 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켰습니다
    ![wanted-redirect1](https://user-images.githubusercontent.com/96907831/186284336-2a36f51d-ad20-4d82-868d-85cae950e280.gif)
    
- 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켰습니다
    ![wanted-redirect2](https://user-images.githubusercontent.com/96907831/186284394-a3c91bda-1266-43aa-9550-afe32db95391.gif)


#### Assignment4, 5 (투두 리스트)

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 했습니다.
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되도록 했습니다.
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 했습니다.
- 투두 리스트의 수정, 삭제 기능을 구현했습니다.
    ![wanted-todo](https://user-images.githubusercontent.com/96907831/186284435-fa9e21b1-0a1d-4c65-99fc-2b0f52422cc6.gif)

