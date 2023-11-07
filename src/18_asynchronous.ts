/*
---------------------------------Asynchronous--------------------------------

_____________________________________________________________________________
*/
{
  //____________Mocking______________

  const makePromise = async (): Promise<string> => {
    return await new Promise<string>((resolve, rejcet) => {
      const data: string = "rajin ";
      if (data) {
        resolve(data);
      } else {
        rejcet("failed to find data");
      }
    });
  };

  const getPromise = async (): Promise<void> => {
    const data = await makePromise();
    console.log(data);
  };

  // getPromise()
  // const datafind = makePromise(1)
  // console.log(getPromise());

  //______________Fatching________________

  const fatchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return await response.json();
  };

  const getFatchData = async (): Promise<void> => {
    const data = await fatchData();
    console.log(data);
  };
  getFatchData();

  {
    // promise

    type Todo = {
      id: number;
      userId: number;
      title: string;
      completed: boolean;
    };

    const getTodo = async (): Promise<Todo> => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      const data = await response.json();
      return data;
      // console.log(data);
    };

    getTodo();

    type Something = { something: string };

    // simulate
    const createPromise = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "something" };
        if (data) {
          resolve(data);
        } else {
          reject("failed to load data");
        }
      });
    };

    // calling create promise function
    const showData = async (): Promise<Something> => {
      const data: Something = await createPromise();
      return data;
      // console.log(data);
    };

    showData();

    //
  }
}

{
}
