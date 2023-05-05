<h1>TypeScript</h1>
<h5>--------------------</h5>
<br/>
<br/>
<br/>
<br/>



Installation :
------------------

=> At first install TypeScript using this command “npm i -g typescript”
<br/>
=> Now create a file using .ts and write your code and run the code by typing “tsc ./filename”. By using this command it will convert into a JS file
<br/>
=> Then we need to initialize TS. For that we write the command “tsc - -init”. This will give us a TS config file.
<br/>
=> Now if I want to run our code using nodemon we can install nodemon on this project. But there will still be a problem. The problem is every time we need to use tsc ./filename to convert the code into JS. 
<br/>
=> To fix this problem we need to install a TS compiler that's name is “npm i ts-node-dev”. And set this “ts-node-dev --respawn --transpile-only server.ts”in package.json
<br/>
=> Now we need to upgrade ts.config file. But before that we need to create 2 folders one for TS and another for JS which is automatically converted by the TS compiler. Now we need to change the rootDir value into the ts folder name and also we need to change the outDir value into the folder name where all the js files will be stored. 

<br/>
<br/>
<br/>


Primitive type:
String
Number
Boolean 
Undefined 
Null



