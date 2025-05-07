{
  //** Asynchronous */
  async function fetchUser(): Promise<string> {
    // return "Str";
    return "Freelancers IT";
  }

  try {
    // throw new Error("This is know Error.....");
    console.log("Explore Asynchronous Typescript");
  } catch (error) {
    console.log(error);
  }
  // console.log(fetchUser());
  // fetchUser().then((user) => console.log(user));
  // fetchUser();

  //Promise
  const myPromise = new Promise((resolve, reject) => {
    // const success = true;
    const success = false;
    if (success) {
      resolve("This is resolve block");
    } else {
      reject("This is reject / error block");
    }
  });

  try {
    myPromise.then((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}
