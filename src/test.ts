// console.log("Hello....");
import { ToObject } from "./basic_data_types";

// import { obj } from "./basic_data_types";

let testData = "Hello";

// console.log(testData);

// obj

const objectTwo: ToObject = {
  //   email: "sahabulislamsifat@gmail.com",

  name: "Sifat",
  age: 22,
  education: {
    institute: "University",
    level: "Undergraduate",
  },
};

console.log(objectTwo);
