{
  //** Spread Operator */
  const user = {
    name: "Sifat",
    age: 22,
  };

  const addUserInfo = {
    id: "0023",
    ...user,
    address: "Dhaka, Bangladesh",
    contact: "01632165523",
  };
  //   console.log(addUserInfo);

  const digit: number[] = [1, 3, 5, 7, 9];
  const addDigit: number[] = [0, 4, 6, 8, 10, ...digit, 1000];
  //   console.log(addDigit);

  //** Rest Operator */
  const restFunction = (...num: number[]) => {
    // console.log(num);
  };

  restFunction(1, 2, 3, 4, 5, 6);

  //** Destructuring */
  const { id, name, contact } = addUserInfo;
  console.log(id, name, contact);
}
