{
  function fn(input: string | number): void | null | undefined {
    const multiplication = 2 * 4;
    console.log(input, multiplication);
  }

  fn(20);

  const arrowFunction = (input: string | number): void | null | undefined => {
    const multi = 4 * 4;
    console.log(input, multi);
  };
  arrowFunction(33);
}
