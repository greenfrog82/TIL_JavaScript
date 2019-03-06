# class

## Is it right using arrow function in class?

`arrow function`을 클래스에샤 사용하는 코드에서 보게되었는데, 이것이 옳은 방법인지 궁금해서 확인해보았다.  
참고한 문서는 다음고 같다. 

[Arrow Functions in Class Properties Might Not Be As Great As We Think](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)

위 링크 내용을 요약하면 `arrow function`을 클래스에서 사용하면 안되는 이유는 다음과 같다.

* arrow function은 property function이 아닌 instance function이기 때문에 상속해서 사용할 수 없다. (super를 통한 호출이 안됨)
* JavaScript는 prototype 함수들을 optimize합니다. 따라서 클래스의 메소드들은 빠른 성능으로 호출이 되지만 instance method인 arrow function은 상대적으로 속도가 느리다.
* 사실 arrow function을 class 내부에서 사용하는 방식은 this를 bind하기 위한 트릭 중 하나인데 bind함수를 통한 this바인드가 역시 더 빠르다. 