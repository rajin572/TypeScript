<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a><h1> TypeScript</h1>

[Copy Text](#const user = {
name: "John",
address: {
city: "New York",
},
};

const street = user.address?.street;

console.log(street); // Output: undefined (no error))

TypeScript is a syntactic superset of JavaScript which adds static typing. This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
<br/>
TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

<br/>
<br/>
<br/>

<h2>Installation :</h2>

=> At first install TypeScript using this command “npm i -g typescript” (This command will install TypeScript gobally)
<br/>

=> Then we need to initialize TS. For that write the command “tsc - -init” in your terminal. This will give us a TS config file.
<br/>

=> Now you need to run our code by using nodemon. Before install nodemon you nee To install npm. By run this command "npm init -y" you are able to install package.js and to install nodemon you need to run the command "npm i -D nodemon". Now browser can run our code by using nodemon.
<br/>

=> We need to install another thing that is TS compiler that's name is “npm i ts-node-dev”. And set this “ts-node-dev --respawn --transpile-only server.ts” in scripts object as a start proparty from package.json
<br/>

=> Now we need to upgrade tsconfig.json file. But before that we need to create 2 folders one for TS and another for JS which is automatically converted by the TS compiler. Now we need to change the rootDir: value into the ts folder name and also we need to change the outDir: value into the folder name where all the js files will be stored. Now if we run "tsc" command on our terminal it convert all the ts file into js file
<br/>

=> Now run "ts-node-dev --respawn --transpile-only filename.ts" this command in your terminal to run the ts code.

<br/>
<br/>
<br/>

<!-- <h3>Types</h3>
<h6>Primitive type:</h6>

=> String <br/>
=> Number <br/>
=> Boolean <br/>
=> Undefined <br/>
=> Null <br/> -->
