/*
--------------------------Type Assertion------------------------

Type Assertion: Type assertion is a Typescript technique that tells the compiler the variable type. Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.


_________________________________________________________________
*/

let emni : any;

emni = 'next level web developement';

(emni as string).length;
// or
<string>emni.length



type customeError = {
    massage: string
}

try{

}catch(err){
    console.log((err as customeError).massage);
    
}
