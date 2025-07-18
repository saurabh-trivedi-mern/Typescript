const score: Array<number> = [];
const names: Array<string> = [];

// We want the return type as same data type

//! Problem is we do not know which data type will come in return
function identityOne(val: boolean | number): boolean | number {
  return val;
}

//! Problem is we do not know which data type will come in return
function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("3");

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "Cello", type: 4 });

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 1;
  return products[myIndex];
}

//! comma to identify it is generic
const getMoreProducts = <T>(products: T[]): T => {
  const myIndex = 1;
  return products[myIndex];
};

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, "5")
anotherFunction(3, 8);

interface Database {
  dbId: number;
  dbName: string;
}

function dbFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

dbFunction(3, { dbId: 759, dbName: "JK DB" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
