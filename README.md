# Vanilla_JS

## HTML

- HTML(Hyper Text Markup Language)

```
마크업 언어: 태그 등을 이용해 문서나 데이터를 명시하는 언어
```
```
<!DOCTYPE> -> 문서간의 호환성을 높이기 위해 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할

<head> -> 브라우저 화면에 직접적으로 보이지 않으며, 숨은 데이터를 정의하는 태그들이 존재

<body> -> 모든 콘텐츠를 포함하는 영역
```

## CSS

- CSS(Cascading Style Sheet)
- 마크업 언어가 실제 표시되는 방법을 기술하는 스타일 언어

## JavaScript

- 객체 기반의 스크립트 프로그래밍 언어
```
스크립트 프로그래밍 언어: 응용 소프트웨어를 제어하는 컴퓨터 프로그래밍 언어
```

## 브라우저 작동원리
<img width="701" alt="스크린샷 2022-05-11 오전 12 03 40" src="https://user-images.githubusercontent.com/89058117/167660451-2f21e802-766a-4cc8-b2e6-67a64aa1ad1a.png">

```
'DOM트리'와 '스타일 규칙'을 합쳐서 '렌더 트리'를 만든다.
'렌더 트리'는 DOM 요소를 기반으로 만들어지지만 완전히 대응하는 구조로 만들어 지지는 않는다.

'DOM트리'가 문서의 구조를 나타낸다면 '렌더 트리'는 문서의 시각적 구조를 나타낸다.
display: none 일 때 DOM에는 물론 존재하지만, 시각적으로는 없는 것이기 때문에 '렌더 트리'에는 할당되지 않는다.

Reflow(배치): 최초에 한번 실행이 되고, 이후에 요소들의 레이아웃에 변화가 생기면 다시 '렌더 트리'를 구성하는 것을 Reflow라고 한다.

Repaint(그리기): Reflow가 발생하면 Repaint도 발생, 레이아웃에 영향을 주지 않는 엘리먼트 변화(color, background-color)에서는 Reflow가 발생하지 않고 Repaint만 발생한다.

Reflow, Repaint를 줄여서 랜더링 최적화 시키는 법: https://seokzin.tistory.com/entry/JavaScript-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94-Reflow%EC%99%80-Repaint
```

## 웹 스토리지(localStorage, sessionStorage)
```
SessionStorage는 데이터가 지속적으로 보관되지 않는다.
현재 페이지가 브라우징되고 있는 브라우저 컨텍스트 내에서만 데이터가 유지된다(브라우저를 종료하면 데이터 삭제).

LocalStorage는 브라우저를 종료해도 데이터는 보관되어 다음번 접속에도 그 데이터를 사용할 수 있다.
```

## 웹 스토리지와 쿠키 차이점
```
https://velog.io/@hs0217/%EC%BF%A0%ED%82%A4-%EB%A1%9C%EC%BB%AC-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%84%B8%EC%85%98-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80
```
## JavaScript(변수) 메모리 구조, 데이터 저장/참조 원리 (참고할 블로그)
```
https://curryyou.tistory.com/275
https://www.howdy-mj.me/redux/right-way-to-update-state
```

## JavaScript 디자인 패턴 (싱글톤 패턴 공부하기 - 클래스형 사용?)
## JavaScript 객체지향, 함수형 차이
