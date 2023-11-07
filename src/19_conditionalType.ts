type a1 = string;
type a2 = a1 extends string ? number : null;

type b1 = string;
type b2 = number;
type b3 = boolean;

type c = b1 extends number ? number : b2 extends number ? null : never;

// _______________________________________________________________________

// check typing

type sheikh = {
  house: boolean;
  car: "string";
  wife: boolean;
};

type res1<T, K> = K extends keyof T ? true : false;

type result1 = res1<sheikh, "carz">;

//------------------------------------------------------------

// remove value

type Girlfriend = "x" | "y" | "z";
type remove<T, X> = T extends X ? never : T;

type checking1 = remove<Girlfriend, "x">;
