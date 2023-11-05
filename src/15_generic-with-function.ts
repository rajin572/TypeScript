{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}

//* Function diclear with type

{
  type TArray = (param: string) => string[];

  const createArray: TArray = (param) => {
    return [param];
  };

  type TArrayWithGeneric = <T>(param: T) => T[];

  const createArrayWithGeneric: TArrayWithGeneric = (param) => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Mr. Pashan",
  });

  //*Ex: 2

  type TArrayWithTuple = <T, Q>(param1: T, param2: Q) => [T, Q];

  const createArrayWithTuple: TArrayWithTuple = (param1, param2) => {
    return [param1, param2];
  };

  const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);

  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "Asia",
  });
  //* Ex: 3
  type Tstudent = <T>(studentDetails: T) => object;

  const createStudent: Tstudent = (studentDetails) => {
    const course = "next level developer";
    return {
      ...studentDetails,
      course,
    };
  };

  const student = createStudent({
    name: "rajin",
    roll: "ph0516168",
    level1: true,
  });
}
