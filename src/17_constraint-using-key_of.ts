type vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = keyof vehicle;

const owner1: vehicle = {
  bike: "Hero",
  car: "Volvo",
  ship: "Titanic",
};

const owner2: Owner = "bike";

{
  // generic constraint with keyof operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "ctg",
  };

  const car = {
    model: "Toyota 100",
    year: 200,
  };

  const result1 = getPropertyValue(car, "model");

  // obj[key]   26

  //

  const getkey = <T, Y extends keyof T>(data: T, key: Y) => {
    return data[key];
  };

  const user2 = {
    name: "Mr. Rajin",
    age: 22,
    address: "Dhaka",
  };

  const data = getkey(user2, "age");
  console.log(data);
}
