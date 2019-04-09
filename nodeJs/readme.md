# Node.js

## Install latest version on Ubuntu Linux

>$ curl -sL https://deb.nodesource.com/setup_11.x | sudo bash

```sh
curl -sL https://deb.nodesource.com/setup_11.x | sudo bash -

## Installing the NodeSource Node.js 11.x repo...


## Populating apt-get cache...

+ apt-get update
Hit:1 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic InRelease
Hit:2 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates InRelease
Hit:3 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu bionic-security InRelease
Reading package lists... Done

## Confirming "bionic" is supported...

+ curl -sLf -o /dev/null 'https://deb.nodesource.com/node_11.x/dists/bionic/Release'

## Adding the NodeSource signing key to your keyring...

+ curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -
OK

## Creating apt sources list file for the NodeSource Node.js 11.x repo...

+ echo 'deb https://deb.nodesource.com/node_11.x bionic main' > /etc/apt/sources.list.d/nodesource.list
+ echo 'deb-src https://deb.nodesource.com/node_11.x bionic main' >> /etc/apt/sources.list.d/nodesource.list

## Running `apt-get update` for you...

+ apt-get update
Hit:1 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic InRelease
Hit:2 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-updates InRelease
Hit:3 http://us-east-2.ec2.archive.ubuntu.com/ubuntu bionic-backports InRelease
Hit:4 http://security.ubuntu.com/ubuntu bionic-security InRelease
Get:5 https://deb.nodesource.com/node_11.x bionic InRelease [4,584 B]
Get:6 https://deb.nodesource.com/node_11.x bionic/main amd64 Packages [766 B]
Fetched 5,350 B in 0s (10.9 kB/s)
Reading package lists... Done

## Run `sudo apt-get install -y nodejs` to install Node.js 11.x and npm
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
     echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn
$
$ sudo apt-get install -y nodejs
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  gyp javascript-common libc-ares2 libhttp-parser2.7.1 libjs-async libjs-inherits libjs-jquery
  libjs-node-uuid libjs-underscore libssl1.0-dev libuv1-dev nodejs-doc python-pkg-resources
Use 'sudo apt autoremove' to remove them.
The following NEW packages will be installed:
  nodejs
0 upgraded, 1 newly installed, 0 to remove and 72 not upgraded.
Need to get 16.1 MB of archives.
After this operation, 77.7 MB of additional disk space will be used.
Get:1 https://deb.nodesource.com/node_11.x bionic/main amd64 nodejs amd64 11.13.0-1nodesource1 [16.1 MB]
Fetched 16.1 MB in 1s (14.7 MB/s)
Selecting previously unselected package nodejs.
(Reading database ... 63215 files and directories currently installed.)
Preparing to unpack .../nodejs_11.13.0-1nodesource1_amd64.deb ...
Unpacking nodejs (11.13.0-1nodesource1) ...
Setting up nodejs (11.13.0-1nodesource1) ...
Processing triggers for man-db (2.8.3-2ubuntu0.1) ...
$
$ node -v
v11.13.0
```

## Useful Tools

### [Nesh](https://danielgtaylor.github.io/nesh/)

Python의 `ipython`이나 `ptpython`과 같이 향상된 기능을 제공하는 Node.js를 위한 인터렉티브 쉘 프로그램이다.

**설치**

>npm install -g nesh

**실행**

>nesh
