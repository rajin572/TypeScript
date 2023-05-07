/*
---------------------------------Asynchronous--------------------------------

_____________________________________________________________________________
*/

//____________Mocking______________

const makePromise = async (): Promise<string> => {
    return await new Promise<string>((resolve, rejcet) => {
        const data: string = 'rajin '
        if (data) {
            resolve(data)
        } else {
            rejcet('failed to find data')
        }
    })
}

const getPromise = async (): Promise<void> => {
    const data = await makePromise();
    console.log(data);
}

// getPromise()
// const datafind = makePromise(1)
// console.log(getPromise());





//______________Fatching________________


const fatchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return await response.json();
}

const getFatchData = async (): Promise<void> => {
    const data = await fatchData();
    console.log(data);

}
getFatchData()
