# Attribute vs Property 

JavaScript로 DOM Object를 다룰때 `attribute`와 `property`는 늘 혼란의 대상이다.   
다음 예제를 살펴보자. div태그의 id값을 가져오기 위해서 각각 `attribute`와 `property`를 사용하고 있다.

[ex1.html](./ex1.html)
```html
<div id="test" class="button" custom-attr="1"></div>
<script>
    var attrId = document.getElementById('test').getAttribute('id');
    var propId = document.getElementById('test').id;

    console.log(`attrId : ${attrId}`);
    console.log(`propId : ${propId}`);
</script>
```

출력 결과는 다음과 같다. 두 결과 모두 같은 결과를 출력하고 있다.  
그러면, `attribute`와 `property`의 차이가 뭘까?

```
attrId :  test
propId :  test
```

## Attribute

`attribute`들은 HTML에 의해 정의된다. HTML태그 내부에 정의 된 모든것들을 `attribute`라고한다.  

다음 예제를 보면, div태그의 모든 `attribute`들을 출력하고 있다.

[ex2.html](./ex2.html)
```html
<div id="test" class="button" custom-attr="1"></div>
<script>
    var attrs = document.getElementById('test').attributes;
    console.log(attrs);
</script>
```

출력 결과는 다음과 같다. div태그 내부에 정의 된 모든것들이 출력되는것을 확인할 수 있다. 

```
NamedNodeMap {0: id, 1: class, 2: custom-attr, id: id, class: class, custom-attr: custom-attr, length: 3}
```

`attribute`의 타입은 언제나 `string`이다.   
다음 예제를 보자. `custom-attr` attribute의 타입을 출력하고 있다.  

[ex2.html](./ex2.html)
```html
<div id="test" class="button" custom-attr="1"></div>
<script>
    var customAttr = document.getElementById('test').getAttribute('custom-attr');
    console.log(typeof(customAttr));
</script>
```

출력결과를 보면 다음과 같다. `custom-attr` attribute의 값은 1이지만, 타입은 `string`인것을 알 수 있다.  

```
string
```

## Property

`Document Object Model(DOM)`은 HTML과 XML 문서를 위한 프로그래밍 인터페이스이다. `Property`는 `DOM`의 속성으로 `JavaScript`를 통해 접근(읽고, 쓰기)할 수 있고, 모든 타입을 사용할 수 있다.  

다음 예제를 보자. foo라는 Property에 숫자 1을 저장한 후, 이 값과 타입을 출력하고 있다.  

[ex3.html](./ex3.html)
```html
<div id="test" class="button"></div>
<script>
    document.getElementById('test').foo = 1;
    var foo = document.getElementById('test').foo;
    console.log(`foo : ${foo}, ${typeof(foo)}`);
</script>
```

출력결과를 보면, 다음과 같이 타입이 `number`인것을 확인할 수 있다. 앞서 설명한대로 `Property`는 모든 타입을 사용할 수 있기 때문인데, `Attribute`는 `string` 타입인 것과 대조적이다.  

```
foo : 1, number
```

`Property`는 모든 타입을 사용할 수 있다고 했다. 이번에는 오브젝트 타입도 할당하고 접근해보자.   

[ex4.html](./ex4.html)
```html
<div id="test" class="button"></div>
<script>
    document.getElementById('test').foo = {
        name: 'greenfrog', 
        age: 37
    };
    var foo = document.getElementById('test').foo;
    console.log(`foo : ${foo}, ${typeof(foo)}`);
    console.log(`foo.name : ${foo.name}`);
    console.log(`foo.age: ${foo.age}`);
</script>
```

출력결과를 보면 다음과 같다. 

```
ex4.html:13 foo : [object Object], object
ex4.html:14 foo.name : greenfrog
ex4.html:15 foo.age: 37
```

`Non-custom attribute`는 `Property`와 1:1 맵핑된다.  
이를 다음 예제를 통해 확인해보자. 

[ex5.html](./ex5.html)
```html
<div id="test" class="button" foo='1'></div>
<script>
    var id = document.getElementById('test').id;
    var className = document.getElementById('test').className;
    var foo = document.getElementById('test').foo;

    console.log(`id : ${id}`);
    console.log(`className : ${className}`);
    console.log(`foo : ${foo}`);
</script>
```

출력결과를 보면 다음과 같다. id와 class는 잘 출력이되지만, `Custom Attribute`인 foo의 값은 `undefined`인것을 확인 할 수 있다. `Custom Attribute`와 `Property`는 1:1 맵핑되지 않기 때문이다. 그리고 class속성에 접근할 때 class가 아닌 className이라는 이름을 사용하고있음을 알 수 있다. 이것은 `JavaScript`에서 class가 예약어이기 때문이다.  

```
ex5.html:13 id : test
ex5.html:13 className : button
ex5.html:14 foo : undefined
```

대부분의 경우, `Non-custom Attribute`에 대응하는 `Property`를 수정하면 대응하는 `Non-custom Attribute` 역시 수정된다. (vice versa)

[ex6.html](./ex6.html)
```html
<div id="test" class="button"></div>
<script>
    var div = document.getElementById('test');
    div.className = 'red-input';
    console.log(div.getAttribute('class'));
    div.setAttribute('class', 'green-input');
    console.log(div.getAttribute('class'));
</script>
```

출력결과는 다음과 같다. 

```
ex6.html:10 red-input
ex6.html:12 green-input
```

기본값을 가지고 있는 `value`속성은 대응하는 `Property`를 통해 변경을 해도 해당 `Attribute`는 변경되지 않는다. 하지만, 반대로 `Attribute`를 수정하면 `Property`에 반영된다.  

[ex7.html](./ex7.html)
```html
<div id="test" class="button" value='foo'></div>
<script>
    var div = document.getElementById('test');
    div.value = 100;
    console.log(div.getAttribute('value'));
    div.setAttribute('value', '100');
    console.log(div.value);
</script>
```

출력결과는 다음과 같다.

```
ex7.html:10 foo
ex7.html:12 100
```

## Best Practice

`Attribute`보다 `Property`가 표현도 간단하고 성능도 좋다. 또한 타입도 가지고 있어 좀 더 로직을 짤 때 유용하다. 특히 boolean 타입 `Attribute`들('checked', 'disabled' 그리고 'selected')의 경우 `Property`에 boolean 타입값을 설정하면 자동으로 대응하는 속성값으로 전달된다.   

예를들어 다음과 같이 체크박스가 있다고 할 때, `Attribute`를 사용하기 보다는 다음과 같이 `Property`를 사용하도록하자. 

```html
<input id="test" class="control" type='checkbox'></input>
<script>
    var chk = document.getElementById('test');
    // Best Practice
    var id = chk.id;
    var className = chk.className;
    var checked = chk.checked;
    
    console.log(`id : ${id}`);
    console.log(`class : ${className}`);
    console.log(`checked : ${checked}`);

    checked = chk.checked = true;

    console.log(`checked : ${checked}`);
</script>
```

# Reference

* [JavaScript: What's the difference between HTML attribute and DOM property?](http://joji.me/en-us/blog/html-attribute-vs-dom-property)
* [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)