//! typeof is known as type guard | type narrowing

function detectType(val: number | string) {
  if (typeof val === "number") {
    return val + 3;
  }
  return val.toUpperCase();
}

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide an ID.");
    return;
  }
  return id.toUpperCase();
}

//! in operator for type narrowing

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//! instanceof, whenever there is a new keyword
// (if x is an object or not)

function logValue(x: Date | string) {
  if (x instanceof Date) {
    return x.toUTCString();
  }
  return x.toUpperCase();
}




type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    pet;
    return "Bird Food";
  }
}



interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.kind === "rectangle") {
    return shape.length * shape.width;
  }
  return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "rectangle":
      return shape.length * shape.width;
    case "square":
      return shape.side * shape.side;
    default:
      const _exhaustiveCase: never = shape;
      return _exhaustiveCase;
  }
}
