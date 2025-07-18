console.log("I am here");
console.log("I am typescript");

// class User{
//     public email: string
//     name: string
//     city: string = ""
//     readonly _id: number = 456
//     private address: string
//     constructor(email: string, name: string, address: string){
//         this.email = email,
//         this.name = name
//         this.address = address
//     }
// }

class User {
  city: string = "";
  readonly _id: number = 456;
  constructor(
    public email: string,
    public name: string,
    private address: string
  ) {}
}

const saurabh = new User("jk@jk.com", "jk", "Adarsh Nagar");
saurabh.city = "JK";

//! Getters & Setters(No Return Type)
// private(only in the class)
// protected(in class, as well as child class)
// public(even outside the class)

class User2 {
  protected _courseCount = 1;
  private readonly _id: number = 456;
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("Token Deleted");
  }

  get getUserEmail(): string {
    return this.email;
  }

  get getCourseCount(): number {
    return this._courseCount;
  }

  set setCourseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Very Big Error");
    }
    this._courseCount = courseNum;
  }
}

const saurabh2 = new User2("jk@jk.com", "jk");

class SubUser extends User2 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}
