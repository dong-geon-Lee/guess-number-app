<img width="100" height="100" alt="bank" src="https://user-images.githubusercontent.com/69576865/207801780-be3f75b6-0bb6-42c1-bcb8-950e32cd1cad.png">


## :mag_right: &nbsp; 프로젝트 소개

> 1에서 10사이의 숫자를 맞추는 간단한 게임 앱입니다.   
> 숫자는 랜덤으로 주어지며 유저는 그 숫자를 추측하여 숫자를 맞추면 점수가 반영됩니다.  
> 틀리면 라이프 역할을 하는 숫자가 내려가고 0이 되면
> 게임이 종료됩니다. 

</br>

### ( 1 ) &nbsp;프로젝트 목적 
- :white_check_mark: &nbsp; 리액트 컴포넌트 사용법 이해하기
- :white_check_mark: &nbsp; useState 이해하기
- :white_check_mark: &nbsp; props 이해하기
- :white_check_mark: &nbsp; styled-components 적용하기
- :white_check_mark: &nbsp; 리팩토링 연습하기 

### ( 2 ) &nbsp;프로젝트 설치 & 실행
#### 터미널에서 다음 명령어를 입력합니다. 

```
$ git clone https://github.com/dong-geon-Lee/guess-number-app.git
$ cd guess-number-app 
$ code .
$ npm install
$ npm start
```

<br/>

## :link: &nbsp; 배포 링크 
- https://dong-geon-lee.github.io/guess-number-app
#### - 깃페이지를 이용하여 배포하였습니다.
<br/>  

## :alarm_clock: &nbsp; 프로젝트 기간
 - 2022.11.29 - 2022.11.30
<br/>

## :seedling: &nbsp; 기술 스택
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=fff)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-343a40?style=for-the-badge&logo=JavaScript&logoColor=F7DF1E)  
![React](https://img.shields.io/badge/React-444444?style=for-the-badge&logo=React)
![styled-components](https://img.shields.io/badge/styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=fff)
<br/>
<br/>
### 선택 이유
#### - HTML / CSS / JS : 웹개발을 이루는 기본적인 요소라서 채용하였습니다.
#### - React: 리액트를 사용하면 컴포넌트를 이용해 UI를 쉽고 간결하게 만들 수 있어 예측 가능한 개발이 가능했습니다.
#### - Styled-components: css 충돌을 방지하고 재사용성이 높아 유지보수가 용이하여 선택하였습니다.  
<br/>

## :notebook_with_decorative_cover: &nbsp; 프로젝트 구조
<img width="208" alt="스크린샷 2023-03-16 오후 3 26 32" src="https://user-images.githubusercontent.com/69576865/225532953-64365ce7-694b-4485-9632-8a623f837158.png">

### 폴더의 목적 및 역할 
#### components : 컴포넌트의 파일과 스타일을 각각 관리합니다.  
#### constants: 고정되어 있는 상수값을 관리하기 위해 사용하였습니다. </br>
#### helpers: 특정 결과값을 얻는 데 도와주는 헬퍼 함수들을 모아두었습니다. </br>
#### pages: 완성된 컴포넌트를 나열하여 전체적인 UI를 동적으로 파악하기 위해 사용하였습니다. </br> 
#### styles: 글로벌 스타일을 관리합니다. </br>
</br>


## :herb: &nbsp; 프로젝트 설명
### 1. 프로젝트에서 이벤트를 일으키는 버튼은 check와 Retry 버튼입니다. 
![스크린샷 2023-03-19 오전 10 49 29](https://user-images.githubusercontent.com/69576865/226149303-2ebefbcd-46cb-49a3-b558-00cc57adadba.png)

### 1-1. 함수

- handleGameReset(): number, randomNum, numCheck, score, highScore, text 상태 변수를 초기값으로 설정하여 게임을 초기화하는 함수.

```js
  const handleGameReset = () => {
    setNumber(0);
    setRandomNum(calcRandomNumber());
    setNumCheck(false);
    setScore(10);
    setHighScore(0);
    setText("Start guessing...");
  };
```
- handleCheckNumber(): 유저가 예상한 num과 randomNum을 비교하고 그에 따라 피드백 메시지와 score 및 highScore 상태 변수를 업데이트하는 함수입니다.
num이 randomNum과 일치하면 numCheck 상태 변수가 true로 설정됩니다.

```js
  const handleCheckNumber = (num) => {
    if (num === randomNum) {
      setNumCheck(true);
      setHighScore(score);
      setText("🎉 Correct Number");
    } else {
      if (num > randomNum) setText("📈 Too high!");
      if (num < randomNum) setText("📉 Too low!");
      setScore((prevState) => prevState - 1);
    }
  };
```
### 1-2. 상태변수
- number: 플레이어가 추측한 현재 숫자를 나타내는 상태 변수입니다. useState() 후크를 사용하여 0으로 초기화됩니다.
- randomNum: calcRandomNumber() 함수에 의해 생성된 난수를 나타내는 상태 변수입니다. useState() 후크를 사용하여 임의의 값으로 초기화됩니다.
- numCheck: 플레이어가 올바른 숫자를 추측했는지 여부를 나타내는 상태 변수입니다. useState() 후크를 사용하여 false로 초기화됩니다.
- score: 플레이어의 현재 점수를 나타내는 상태 변수. useState() 후크를 사용하여 10으로 초기화됩니다.
- highScore: 지금까지 플레이어가 달성한 최고 점수를 나타내는 상태 변수입니다. useState() 후크를 사용하여 0으로 초기화됩니다.
- text: 플레이어에게 보여지는 피드백 메시지를 나타내는 상태 변수. useState() 후크를 사용하여 "추측 시작..."으로 초기화됩니다.

</br>

## :eyes: &nbsp; 프로젝트 시연
<details>
<summary>랜딩페이지</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/207805522-3b09a6eb-3913-40e6-be1e-c5e0b526b2bc.gif">
</details>

<details>
<summary>숫자 Up & Down</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/207806123-c7748590-9148-47bc-8805-b9711ee8e9c3.gif">
</details>

<details>
<summary>숫자 맞추기</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/207806722-d09302bb-2153-423e-821e-b8dbfd59c605.gif">
</details>

<details>
<summary>게임 재시작</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/207807285-87c3c743-af32-4e68-88bd-ba88f77900f8.gif">
</details>

<details>
<summary>게임 종료</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/207808425-8f8992bf-6f19-4446-b5f1-1f3d87015743.gif">
</details>

<details>
<summary>반응형(모바일)</summary>  
<div markdown="1">
</div>
<img width="600" alt=""
 src="https://user-images.githubusercontent.com/69576865/208074511-9ad9fa05-85a2-4dcc-ac6c-0f57157b12fd.gif">
</details>
<br/>

## :white_check_mark: &nbsp; 프로젝트 후기

#### 리액트의 기본적인 사용법을 적용 할 수 있었습니다. 


</br>

## :bust_in_silhouette: &nbsp; Crew
Crew | Role | GitHub
----- | ----- | -----
💻 이동건 | Front-end | https://github.com/dong-geon-Lee
<br/>
