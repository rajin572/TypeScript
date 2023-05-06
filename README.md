<h3>TypeScript</h3>
<br/>
<h3>--------------------</h3>
<br/>
<br/>




<h2>Installation :</h2>

=> At first install TypeScript using this command “npm i -g typescript” (This command will install TypeScript gobally)
<br/>

=> Then we need to initialize TS. For that we write the command “tsc - -init”. This will give us a TS config file.
<br/>

=> Now create a file using .ts and write your code and run the code by typing “tsc ./filename”. By using this command it will convert into a JS file
<br/>

=> Now if I want to run our code using nodemon we can install nodemon on this project. But there will still be a problem. The problem is every time we need to use tsc ./filename to convert the code into JS. 
<br/>

=> To fix this problem we need to install a TS compiler that's name is “npm i ts-node-dev”. And set this “ts-node-dev --respawn --transpile-only server.ts”in package.json
<br/>

=> If we want to show our logs we just need to run "ts-node-dev --respawn --transpile-only filename.ts" this command.

=> Now we need to upgrade ts.config file. But before that we need to create 2 folders one for TS and another for JS which is automatically converted by the TS compiler. Now we need to change the rootDir value into the ts folder name and also we need to change the outDir value into the folder name where all the js files will be stored. 

<br/>
<br/>
<br/>

<h3>Types</h3>
<h6>Primitive type:</h6>

=> String
=> Number
=> Boolean 
=> Undefined 
=> Null


