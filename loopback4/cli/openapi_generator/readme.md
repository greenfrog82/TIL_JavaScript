# [OpenAPI generator](https://loopback.io/doc/en/lb4/OpenAPI-generator.html)

`LoopBack4의 cli`에서 `openapi` 옵션은 `OpenAPI 2.0` 또는 `3.0.x`스펙을 통해 작성된 `API Spec`을 통해 `API`을 생성한다. 

>$ lb4 openapi [<url>] [options]

## Generate API through API Sepc

다음 `API Spec`과 위 명령을 통해 `API`를 생성해보자. 

[demo-v1.yml](./openapi-generator/openapi-spec/demo-v1.yml)
```yml
openapi: "3.0.0"
info:
  version: 1.0.0
  title: Swagger Petstore
  description: A sample API that uses a demo as an example to demonstrate features in the OpenAPI 3.0 specification
  termsOfService: http://swagger.io/terms/
  contact:
    name: Swagger API Team
    email: apiteam@swagger.io
    url: http://swagger.io
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
servers:
  - url: http://demo.swagger.io/api
paths:
  hello:
    get:
      responses:
        '200':
          description: pet response
          content:
            text/plain:
              schema:
                type: string
                example: pong
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
components:
  schemas:
    Error:
      required:
        - code
        - message
      properties:
        code:
          type: integer
          format: int32
        message:
          type: string
```

다음 명령을 통해 위 API 스펙을 LoopBack의 API로 생성한다. 

```sh
$ lb4 openapi openapi-spec/demo-v1.yml
Loading openapi-spec/demo-v1.yml...
? Select controllers to be generated: (Press <space> to select, <a> to toggle all, <i> to invert select
ion)OpenApiController
   create src/models/error.model.ts
   create src/controllers/open-api.controller.ts
```

생성 된 최초의 open-api.controller.ts의 모습은 다음과 같다. 

```javascript
/* tslint:disable:no-any */
import {operation, param, requestBody} from '@loopback/rest';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by 
 * 
 */
export class OpenApiController {
  constructor() {}

  /**
   * 
   * 

   * @returns demo response
   */
  @operation('get', 'hello/')
  async ''(): Promise<string> {
    throw new Error('Not implemented');
  }

}
```

위와같이 두고 `lb4`를 실행시키면 다음과 같이 에러가 난다. 

```sh
npm start

> openapi-generator@1.0.0 prestart /Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator
> npm run build


> openapi-generator@1.0.0 build /Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator
> lb-tsc es2017 --outDir dist


> openapi-generator@1.0.0 start /Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator
> node .

Cannot start the application. TypeError: paramTypes is not iterable
    at resolveControllerSpec (/Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator/node_modules/@loopback/openapi-v3/dist/controller-spec.js:139:25)
    at Object.getControllerSpec (/Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator/node_modules/@loopback/openapi-v3/dist/controller-spec.js:218:16)
    at RestServer._setupHandlerIfNeeded (/Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator/node_modules/@loopback/rest/dist/rest.server.js:215:42)
    at RestServer.start (/Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator/node_modules/@loopback/rest/dist/rest.server.js:530:14)
    at _forEachServer.s (/Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator/node_modules/@loopback/core/dist/application.js:129:42)
    at Promise.all.bindings.map (/Users/a201808045/github/TIL_JavaScript/loopback4/cli/openapi_generator/openapi-generator/node_modules/@loopback/core/dist/application.js:151:26)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! openapi-generator@1.0.0 start: `node .`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the openapi-generator@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above
npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/a201808045/.npm/_logs/2019-04-09T04_34_10_713Z-debug.log
```

위 에러가 발생한 이유는 함수에 이름이 없기 때문이다.  
open-api.controller.ts 파일을 다음과 같이 수정한 후 실행시키면 정상적으로 잘 동작한다. 

```javascript
@operation('get', 'hello/')
async hello(): Promise<string> {
return await 'Hello';
}
```

## Generate another API through another API Spec

앞서 demo-v1.yml을 복사해서 demo-v2.yml을 만들고 다음과 같은 API를 하나 추가해보자. 

```yml
say/:
    get:
      responses:
        '200':
          description: demo response
          content:
            text/plain:
              schema:
                type: string
                example: pong
        default:
          description: unexpected error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'
```

기존 API에는 변경이 없었고 새로운 API가 추가된것이므로 기존 API는 그대로 두고 새로 추가된 API만이 추가되길 바란다. 그렇게 될까?

실행결과를 보면 기존 API가 override되는것을 알 수 있다. 

```sh
lb4 openapi openapi-spec/demo-v2.yml
Loading openapi-spec/demo-v2.yml...
? Select controllers to be generated: (Press <space> to select, <a> to toggle all, <i> to invert select
ion)OpenApiController
identical src/models/error.model.ts
 conflict src/controllers/open-api.controller.ts
? Overwrite src/controllers/open-api.controller.ts? show the differences between the old and the new

removed added

/* tslint:disable:no-any */
- import {operation, param, requestBody, SpecificationExtension} from '@loopback/rest';
+ import {operation, param, requestBody} from '@loopback/rest';

/**
 * The controller class is generated from OpenAPI spec with operations tagged
 * by
 *
 */
export class OpenApiController {
  constructor() {}

  /**
   *
   *

   * @returns demo response
   */
-  @operation('get', 'hello/')
-  async hello(): Promise<string> {
-    return await 'Hello';
+  async ''(): Promise<string> {
+    throw new Error('Not implemented');
  }

  /**
   *
   *

   * @returns demo response
   */
+  @operation('get', 'say/')
+  async ''(): Promise<string> {
+    throw new Error('Not implemented');
+  }

}
```

위와같은 결과는 demo-v1.yml에 새로운 API를 추가해도 마찬가지이다. 

이 문제를 해결하기 위해서는 기존 open-api.controller.ts의 파일이름과 class명을 변경하고 `controllers/index.ts`에서 open-api.controller.ts를 import하는 코드를 수정해주면 된다. 

아마도 openapi 옵션을 통한 controller 생성은 형식이 정해져 있으므로 이 옵션을 통해서 API를 생성하면 생성된 controller 파일이름을 변경해주는것이 옳바른 사용법인것 같다. 

