// class SuperUser {
//   canWalk() {
//     console.log("저벅저벅");
//   }
// }

// class User extends SuperUser {
//   constructor(name) {
//     this.name = name;
//   }

//   canTalk() {
//     console.log("말말말...");
//   }
// }

// const user = new User("사용자");

// __proto__

// 자바스크립트 믹스인
const sayHiMixin = {
  sayHi() {
    console.log("hi!!");
  },
  sayBye() {
    console.log("bye bye!!");
  },
};

class SuperUser {
  canWalk() {
    console.log("걷는다...");
  }
}

class User extends SuperUser {
  constructor(name) {
    super();
    this.name = name;
  }

  canTalk() {
    console.log("불라블라블라...");
  }
}

Object.assign(User.prototype, sayHiMixin);

const user = new User("재현");
