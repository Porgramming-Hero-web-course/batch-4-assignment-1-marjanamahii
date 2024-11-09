{
  //

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  // Union type Shape that can be either a Circle or a Rectangle
  type Shape = Circle | Rectangle;

  function calculateShapeArea(shape: Shape): number {
    if (shape.shape === "circle") {
      return Math.PI * shape.radius ** 2;
    }

    if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    return 0;
  }

  // Sample Input 1
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  // Sample Input 2
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);

  //
}
