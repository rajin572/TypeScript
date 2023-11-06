"use strict";
/*
---------------------------------Asynchronous--------------------------------

_____________________________________________________________________________
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//____________Mocking______________
const makePromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve, rejcet) => {
        const data = "rajin ";
        if (data) {
            resolve(data);
        }
        else {
            rejcet("failed to find data");
        }
    });
});
const getPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    console.log(data);
});
// getPromise()
// const datafind = makePromise(1)
// console.log(getPromise());
//______________Fatching________________
const fatchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
    return yield response.json();
});
const getFatchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fatchData();
    console.log(data);
});
getFatchData();
{
    const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = yield response.json();
        return data;
        // console.log(data);
    });
    getTodo();
    // simulate
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data = { something: "something" };
            if (data) {
                resolve(data);
            }
            else {
                reject("failed to load data");
            }
        });
    };
    // calling create promise function
    const showData = () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield createPromise();
        return data;
        // console.log(data);
    });
    showData();
    //
}
