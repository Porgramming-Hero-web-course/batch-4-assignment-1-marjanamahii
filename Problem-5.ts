{
  //

  // Sample Input:
  // const person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));

  type Person = {
    name: string;
    age: number;
  };
  const person: Person = {
    name: "Alice",
    age: 30,
  };

  function getProperty<Type>(obj: Type, key: keyof Type) {
    return obj[key];
  }
  console.log(getProperty(person, "name"));

  //
}
