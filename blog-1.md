### Understanding Union and Intersection Types in TypeScript: A Beginner's Guide

TypeScript, a typed superset of JavaScript, improves code predictability and reliability through static typing and the use of union and intersection types. This blog will look at the differences between these types and how they're used.

## Union Types in TypeScript (|)

A union type allows a variable to accept values of various types, letting it to be either a string or a number, but not both at once.

#Example:

```Typescript
let value: string | number;

value = "Alice";  // This is valid
value = 30;       // This is also valid
value = true;     // 'boolean' is not assignable to 'string | number'
```

The example shows that a value can be a string or a number, but assigning a boolean or another type returns an error.
