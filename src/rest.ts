{
  //   type TypeAlias = "Ovi Motors" | "Hanif Enterprise" | "KTC Hanif";
  //   const typeName: TypeAlias = "Hanif Enterprise";
  //   const typeName: TypeAlias = "Hanif Enterpris";
  //   const typeName: TypeAlias = "Ovi Motors";
  //   console.log(typeName);
  // type A = "Apple";
  //   type A = { fruitA: "Apple" };
  //   type A = string;
  // type B = "Banana";
  //   type B = { fruitB: "Banana" };
  //   type B = number;
  //   type AB = A & B;
  //   const fruit: AB = {
  // name: "Letter A",
  // num: 2,
  //     fruitA: "Apple",
  //     fruitB: "Banana",
  //   };
  //   console.log(fruit);
  //   let age;
  //   //   age = 18;
  //   age = 8;
  //   if (age >= 18) {
  //     console.log("You are adult!");
  //   } else {
  //     console.log("Not Adult!");
  //   }
  //   const status = age >= 18 ? "voter" : "Not voter";
  //   console.log(status);

  //   let age = "2025";
  //   let age = 2025;

  //   type CheckType = typeof age extends number ? number : string;

  type TypeUser = {
    id: number;
    name: string;
    email: string;
    age: number;
    address: {
      road: string;
      village: string;
      district: string;
      division: string;
    };
    isSingle: boolean;
  };

  const user: TypeUser = {
    id: 2025,
    name: "Sifat",
    email: "sahabulislamsifat@gmail.com",
    age: 22,
    address: {
      road: "23/6",
      village: "South Manda",
      district: "Dhaka",
      division: "Dhaka , Bangladesh",
    },
    isSingle: true,
  };

  //   console.log(user);
  const optionalChaining = user?.address?.division;
  //   const optionalChaining = user?.address?.division.country;
  //   console.log(optionalChaining);

  //* Nullish
  //   const input = null;
  const input = "hello";
  const userInput = input ?? "Guest Person";
  //   console.log(userInput);

  function crush(): never {
    throw new Error("The crush is error gone.....");
  }
  //   crush();

  // Type azartion
  //   let nam: unknown = "Sifat";
  let nam: any = "Sifat";
  //   console.log(nam as string);
  console.log(<string>nam);
}
