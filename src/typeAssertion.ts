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
