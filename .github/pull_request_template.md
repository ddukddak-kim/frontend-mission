# 1주차 미션 제출 (김경민)

## 📌 접근 방법

미션 코드를 구현하기 위해서 어떤 생각들을 했는지 정리해보세요.

- [x] TDD 방법론 적용 방법에 대해서 고민했다. 
- [x] 직관적인 git commit convention에 대해서 생각함. (가능한 짧고 명확했으면 🤔)
- [x] ESLint를 통해 이전에는 내가 알지 못했던, 코드악취를 잡아내주어 좀더 좋은 코드를 작성 할수 있어 좋았다.

## 📌 특이사항

구현하면서 궁금했던 점이나, 아쉬웠던 부분이 있으면 적어주세요.
- [x] 첫 TEST 코드 작성이었는데 생각했던 테스트 case를 코드로 풀어가는 것이 어려웠다. `yarn test:unit`을 하고 테스트 결과를 기다리고 있으니 은근히 두근거리는 맛이 있었다..💓 
- [x] 기능 별 더 세분화된 컴포넌트 분리가 가능했을텐데 아쉽다.

    ### 💬궁금해요
- test 코드 작성시, multiple click을 표현 할 경우, $button.trigger를 여러번 반복 입력하는 방법 외 코드중복을 줄일 수 있는 방법이 있나요? 
 

## ✨ 새롭게 배운 점
- 알림 횟수 count 계산시 평소 사용하던 ++ 방식으로 구현하니 오류발생. esLint docs 참고하니 ++ 해당 방식은 권장하지 않는다고 함.
    * 이유) ++ 혹은 -- 연산자 사용시, 세미콜론 누락시. [자동줄바꿈(ASI, Automatic Semicolon Insertion)](https://velog.io/@exploit017/JS-%EC%84%B8%EB%AF%B8%EC%BD%9C%EB%A1%A0-%EC%9E%90%EB%8F%99-%EC%82%BD%EC%9E%85ASI)되어 비즈니스 로직의 의도와 달리 연산될 수 있다. 
    * 리팩토링 방안) += 1 
 (참고_[ESLint 공식 Doc](https://eslint.org/docs/rules/no-plusplus#rule-details))

## 📌 제출 후 확인

* [x] 본인의 구현 결과를 `dev` 브랜치에 구현하고, `dev` 브랜치에서 `submission` 브랜치로 PR을 보내주세요.
* [x] Pull Request 생성 후 Reivewer에 @externship-master 와 @lkaybob 을 추가해주세요.
