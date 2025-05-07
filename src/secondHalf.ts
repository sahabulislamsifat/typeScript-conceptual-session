{
  //* Type Narrow

  function narrow(input: "string" | "number" | "boolean" | "undefined"): void {
    if (typeof input === "number") {
      console.log(input * 2);
    } else if (typeof input === "string") {
      console.log(input.length, "The input is Number block");
    } else {
      console.log(10, "This is else block");
    }
  }
  //   narrow("number");
  //   narrow("undefined");

  //* Type and interface
  type TypeUser = {
    name: string;
    age: number;
  };

  type TypeLearner = {
    attitude: "Learning";
  };
  type combined = TypeLearner & TypeUser;

  const learning: TypeUser = {
    name: "Sifat",
    age: 22,
  };

  interface InterfaceUser {
    name: string;
    age: number;
  }

  interface InterfaceLearner extends InterfaceUser {
    attitude: "Learning";
  }

  //   const learning: InterfaceUser = {
  //     name: "Sifat",
  //     age: 22,
  //   };
  console.log(learning);
}
