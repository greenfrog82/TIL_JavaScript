# Selector


## [Multiple Selector](https://api.jquery.com/multiple-selector/)

`Multiple Selector`를 사용하면 여러개의 Eelement를 동시에 선택할 수 있다.   

다음 예제는 `Multiple Selector`를 통해 두개의 체크박스를 한번에 찾아 숨기도록한 예제이다.

[./multiple-selector.html]
```html
<!DOCTYPE HTML>
<html>
    <head>
        <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
        <script>   
            $(function() {
                $('#btn').click(function() {
                    $('#chk_a, #chk_b').hide();
                });
            });
        </script>
    </head>
    <body>
        <div id='container'>
            <input type='checkbox' id='chk_a' class='input' value='name : ' />
            <input type='checkbox' id='chk_b' class='input' value='name : ' />
            <input type='button' id='btn' class='input' value='click' />
        </div>
    </body>
</html>
```