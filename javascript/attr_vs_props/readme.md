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

# Reference

* [JavaScript: What's the difference between HTML attribute and DOM property?](http://joji.me/en-us/blog/html-attribute-vs-dom-property)