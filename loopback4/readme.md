# [Getting started](https://v4.loopback.io/getting-started.html)

## Have you installed Node.js?

LoopBack을 설치하기 전 반드시 Node.js(ver 8.9.x 또는 그 이상) 버전이 설치되어 있어야한다.

```sh
$ brew search node.js
==> Formulae
node.js ✔                                        nodejs ✔
$ node --version
v11.5.0
```

## Install LoopBack 4 CLI

>$ npm i -g @loopback/cli

## Create a new project

다음 명령을 실행 후, 몇가지 질문에 적절한 답을하여 새로운 프로젝트를 생성한다. 

>$ lb4 app

```sh
$ lb4 app
? Project name: sample
? Project description: loopback4
? Project root directory: sample
? Application class name: SampleApplication
? Select features to enable in the project (Press <space> to select, <a> to toggle all, <i> to invert
 selection)Enable tslint, Enable prettier, Enable mocha, Enable loopbackBuild, Enable vscode, Enable
docker, Enable repositories, Enable services
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
   create .dockerignore
   create Dockerfile
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
npm WARN sample@1.0.0 No license field.

added 681 packages from 1475 contributors and audited 4589 packages in 46.759s
found 7 vulnerabilities (1 low, 6 moderate)
  run `npm audit fix` to fix them, or `npm audit` for details

Application sample was created in sample.

Next steps:

$ cd sample
$ npm start
```

### Staring the project

기본으로 생성되는 프로젝트는 테스트를 위한 'ping' 라우터를 포함하고 있다. 다음 명령을 통해 LoopBack을 실행한 후 브라우저를 통해 http://127.0.0.1:3000/ping에 접속해보자. 

>$ cd getting-started
>$ npm start

