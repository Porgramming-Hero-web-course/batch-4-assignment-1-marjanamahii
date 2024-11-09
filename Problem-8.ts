{
  //

  // Sample Input:
  // const person = { name: "Alice", age: 25, email: "alice@example.com" };
  // console.log(validateKeys(person, ["name", "age"]));
  type Person = {
    name: string;
    age: number;
    email: string;
  };

  const person: Person = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (let i = 0; i < keys.length; i++) {
      if (!(keys[i] in obj)) {
        return false;
      }
    }
    return true;
  }

  console.log(validateKeys(person, ["name", "age"]));

  //
}
