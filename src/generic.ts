{
  interface InterfaceUser {
    name: string;
    age: number;
  }

  //** Generic */
  function identity<T>(value: T): T[] {
    return [value];
  }

  interface InterfaceLearner<T> extends InterfaceUser {
    attitude: T;
  }

  const user2025: InterfaceLearner<string | number> = {
    name: "Sifat",
    age: 22,
    attitude: "Hello There",
    // attitude: 2024,
    // attitude: true
  };
  // console.log(user2025);

  //* Constraints
  function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return object[key];
  }
  // const names = getProperty(user2025, "name");
  const names = getProperty(user2025, "attitude");
  // const names = getProperty(user2025, "age");
  // console.log(names);
  console.log(typeof names);
}
