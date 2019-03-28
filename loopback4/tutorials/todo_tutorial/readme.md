# [Todo tutorial](https://loopback.io/doc/en/lb4/todo-tutorial.html)

이번 튜토리얼에서는 LoopBack 4를 이용해서 Todo List를 위한 기본적인 API를 개발하는 방법에 대해서 설명한다. 여기서 REST API를 단 5가지 단계를 거쳐 개발할 수 있다는것을 경험하게 될 것이다.  

## Create your app scaffolding

`LoopBack 4 CLI`는 어플리케이션을 생성하기 위한 템플릿와 이미 존재하는 어플리케이션에 예제, 컨트롤러, 모델 그리고 레포지토리를 추가하기위한 기능을 포함한다. 

`LoopBack 4 CLI`를 통해서 어플리케이션을 생성하려면 다음 명령을 실향하면 된다. 

>$ lb4 app

위 명령을 수행하면 화면에 다음과 같은 질문들이 출력된다. 이번 튜토리얼에서는 `docker`를 제외한 모든 옵션을 선택해서 프로젝트를 생성하도록 한다. 

```sh
$ lb4 app
? Project name: todo-list
? Project description: A todo list API made with LoopBack 4.
? Project root directory: todo-list
? Application class name: TodoListApplication
? Select features to enable in the project Enable tslint, Enable prettier, Enable mocha, Enable loopb
ackBuild, Enable vscode, Enable repositories, Enable services
   create .npmrc
   create .prettierignore
   create .prettierrc
   create DEVELOPING.md
   create README.md
   create index.ts
   create package.json
   create tsconfig.json
   create tslint.build.json
   create tslint.json
   create .vscode/settings.json
   create .vscode/tasks.json
   create test/mocha.opts
   create .gitignore
   create index.js
   create public/index.html
   create src/application.ts
   create src/index.ts
   create src/migrate.ts
   create src/sequence.ts
   create src/__tests__/README.md
   create src/controllers/README.md
   create src/controllers/index.ts
   create src/controllers/ping.controller.ts
   create src/datasources/README.md
   create src/models/README.md
   create src/repositories/README.md
   create src/__tests__/acceptance/home-page.acceptance.ts
   create src/__tests__/acceptance/ping.controller.acceptance.ts
   create src/__tests__/acceptance/test-helper.ts
npm WARN todo-list@1.0.0 No license field.

added 681 packages from 1475 contributors and audited 4589 packages in 35.236s
found 7 vulnerabilities (1 low, 6 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details

Application todo-list was created in todo-list.

Next steps:

$ cd todo-list
$ npm start
```

### Structue

`lb4 app`명령을 통해 생성 된 어플리케이션의 구조는 다음과 같다. 

```sh
$ tree -L 1 todo-list
todo-list
├── DEVELOPING.md
├── README.md
├── index.js
├── index.ts
├── node_modules
├── package.json
├── public
├── src
├── test
├── tsconfig.json
├── tslint.build.json
└── tslint.json

4 directories, 8 files
```

