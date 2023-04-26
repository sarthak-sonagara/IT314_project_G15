// process.env.NODE_ENV = "test";
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const app = require("../server");
// const expect = chai.expect;
// chai.use(chaiHttp);

// //errors
// // set default role in userSchema but put condition in signup function on empty role 
// // password constrains not working for all functions 

// // describe("User", () => {
  
// //   // valid login
// //   describe("POST /auth/user/login", () => {
// //     it("it should login a user (valid login )", (done) => {
// //       chai
// //         .request(app)
// //         .post("/auth/user/login")
// //         .send({
// //           email: "shreeji@gmail.com",
// //           password: "Shreeji@01",
// //           role: "admin",
// //         })
// //         .end((err, res) => {
// //           expect(res).to.have.status(200);
// //           expect(res.body).to.be.a("object");
// //           expect(res.body).to.have.property("email");
// //           expect(res.body).to.have.property("role");
// //           expect(res.body).to.have.property("token");
// //           done();
// //         });
// //     });
// //   });

// //    // invalid role 
// //   describe("POST /auth/user/login", () => {
// //     it("it should login a user (invalid role)", (done) => {
// //       chai
// //         .request(app)
// //         .post("/auth/user/login")
// //         .send({
// //           email: "shreeji@gmail.com",
// //           password: "Shreeji@01",
// //           role: "attendee",     
// //         })
// //         .end((err, res) => {
// //           expect(res).to.have.status(200);
// //           expect(res.body).to.be.a("object");
// //           expect(res.body).to.have.property("email");
// //           expect(res.body).to.have.property("role");
// //           expect(res.body).to.have.property("token");
// //           done();
// //         });
// //     });
// //   });
// // });
 

// //    // valid signup
// //   describe("POST /auth/user/signup", () => {
// //     it("it should signup a user (valid signup)", (done) => {
// //       chai
// //         .request(app)
// //         .post("/auth/user/signup")
// //         .send({
// //           username: "harsh@test",
// //           email: "harsh@test.com",
// //           password: "Harsh@test1",
// //           role: "attendee",
// //         })
// //         .end((err, res) => {
// //           expect(res).to.have.status(201);
// //           expect(res.body).to.be.a("object");
// //           expect(res.body).to.have.property("email");
// //           expect(res.body).to.have.property("role");
// //           expect(res.body).to.have.property("token");
// //           done();
// //         });
// //     });
// //   });

// //    // invalid email address
// //   describe("POST /auth/user/signup", () => {
// //     it("it should signup a user (invalid email address)", (done) => {
// //       chai
// //         .request(app)
// //         .post("/auth/user/signup")
// //         .send({
// //           username: "harsh@test",
// //           email: "harshtest",         
// //           password: "Harsh@test1",
// //           role: "attendee",
// //         })
// //         .end((err, res) => {
// //           expect(res).to.have.status(201);
// //           expect(res.body).to.be.a("object");
// //           expect(res.body).to.have.property("email");
// //           expect(res.body).to.have.property("role");
// //           expect(res.body).to.have.property("token");
// //           done();
// //         });
// //     });
// //   });

  
// //   //(valid update)
// //   describe("PATCH /auth/user/update", () => {
// //     it("it should update user password (valid update)", (done) => {
// //       chai
// //         .request(app)
// //         .patch("/auth/user/update")
// //         .send({
// //           email: "harsh@test.com",
// //           password: "Harsh@test2",
// //         })
// //         .end((err, res) => {
// //           expect(res).to.have.status(200);
// //           expect(res.body).to.be.a("object");
// //           expect(res.body).to.have.property("user");
// //           done();
// //         });
// //     });
// //   });


// //    // wrong email address
// // describe("PATCH /auth/user/update", () => {
// //   it("it should update user password (  wrong email address)", (done) => {
// //     chai
// //       .request(app)
// //       .patch("/auth/user/update")
// //       .send({
// //         email: "harsh@testtttt.com",     
// //         password: "Harsh@test2",
// //       })
// //       .end((err, res) => {
// //         expect(res).to.have.status(200);
// //         expect(res.body).to.be.a("object");
// //         expect(res.body).to.have.property("user");
// //         done();
// //       });
// //   });
// // });

// //   // valid delete
// //   describe("DELETE /auth/user/delete", () => {
// //     it("it should delete a user", (done) => {
// //       chai
// //         .request(app)
// //         .delete("/auth/user/delete")
// //         .send({
// //           email: "harsh@test.com",
// //         })
// //         .end((err, res) => {
// //           expect(res).to.have.status(200);
// //           expect(res.body).to.be.a("object");
// //           expect(res.body).to.have.property("user");
// //           done();
// //         });
// //     });
// //   });


// describe("User", () => {
// ///signup test cases
// //(valid signup)
// describe("POST /auth/user/signup", () => {
//   it("it should signup a user (valid signup)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN",
//         email: "UN@gmail.com",
//         password: "UNnnnnn0)",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });


// // duplicate email address
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (duplicate email address)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UNX",
//         email: "UN@gmail.com",
//         password: "UNnnnnn0)",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });

// // empty username
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (empty username)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "",
//         email: "UN2@gmail.com",  
//         password: "UNnnnnn2@",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });

// //empty email
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (empty email)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN6",
//         email: "",
//         password: "UNnnnnn6^",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });


//  // empty Password
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (empty Password)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN1",
//         email: "UN1@gmail.com",
//         password: "",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });

// // Password contain less than 8 char
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user ( Password contain less than 8 char)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN3",
//         email: "UN3@gmail.com",
//         password: "UN3",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });

//  // Password not contain uppercase char
//  describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (Password not contain uppercase char)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN4",
//         email: "UN4@gmail.com",
//         password: "unnnnnn4$",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });

// // Password not contain lowercase char
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (Password not contain lowercase char)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN5",
//         email: "UN5@gmail.com",
//         password: "UNNNNNN5%",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });


// // Password not contain number
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (Password not contain number)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN7",
//         email: "UN7@gmail.com",
//         password: "UNnnnnnn&",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });

// // password not contain symbol
// describe("POST /auth/user/signup", () => {
//   it("it should not signup a user (password not contain symbol)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN8",
//         email: "UN8@gmail.com",
//         password: "UNnnnnnn8",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });


// //check default role
// // set default role in userSchema but put condition in signup function on empty role 
//  // default role 
// describe("POST /auth/user/signup", () => {
//   it("it should signup a user (default role )", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/signup")
//       .send({
//         username: "UN9",
//         email: "UN9@gmail.com",
//         password: "UNnnnnn9(",
//         role: "",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(201);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         expect(res.body).to.have.property("token");
//         done();
//       });
//   });
// });


// //user login test cases
// describe("POST /auth/user/login", () => {
//   it("it should login a user (valid login)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@gmail.com",
//         password: "UNnnnnn0)",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// // empty email 
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (empty email)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "",
//         password: "UNnnnnn0)",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// // empty password
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (empty password)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@gmail.com",
//         password: "",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// // empty role
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (empty role)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@gmail.com",
//         password: "UNnnnnn0)",
//         role: "",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// // wrong email
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (wrong email)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@abc.com",
//         password: "UNnnnnn0)",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// // invalid email
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (invalid email)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@gmailcom",
//         password: "UNnnnnn0)",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// //wrong password
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (wrong password)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@gmail.com",
//         password: "UNnnnnn1(",
//         role: "attendee",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// // invalid role
// describe("POST /auth/user/login", () => {
//   it("it should not login a user (invalid role)", (done) => {
//     chai
//       .request(app)
//       .post("/auth/user/login")
//       .send({
//         email: "UN@gmail.com",
//         password: "UNnnnnn0)",
//         role: "publisher",
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         expect(res.body).to.be.a("object");
//         expect(res.body).to.have.property("email");
//         expect(res.body).to.have.property("role");
//         done();
//       });
//   });
// });

// //user update test cases
//   describe("patch /auth/user/update", () => {
//     it("it should update a user (valid update)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "UNnnnnn0)PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   // empty email
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (empty email)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "",
//           password: "UNnnnnn0)PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //wrong email
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (wrong email)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@abc.com",
//           password: "UNnnnnn0)PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //invalid email
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (invalid email)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmailcom",
//           password: "UNnnnnn0)PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //empty password
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (empty password)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "UNnnnnn0)PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //password contain less than 8 characters 
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (password contain less than 8 characters)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "UNnn0)",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //password not contain uppercase character
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (password not contain uppercase character)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "unnnnnn0)passchange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //password not contain lowercase character
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (password not contain lowercase character)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "UNNNNN0)PASSCHANGE",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //password not contain any number
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (password not contain any number)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "UNnnnnn)PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   //password not contain any symbol
//   describe("patch /auth/user/update", () => {
//     it("it should not update a user (password not contain any symbol)", (done) => {
//       chai
//         .request(app)
//         .patch("/auth/user/update")
//         .send({
//           email: "UN@gmail.com",
//           password: "UNnnnnn0PassChange",
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });

//   // //Update User Profile test cases
//   // var id = "64482bdfae81d3aac89f4504";
//   // describe("patch /auth/user/updateProfile/?id=", () => {
//   //   it("it should update a user profile (valid update)", (done) => {
//   //     chai
//   //       .request(app)
//   //       .patch("/auth/user/updateProfile/?id='64482bdfae81d3aac89f4504'")
//   //       .send({
//   //         username: "UN_update", 
//   //         role : "publisher",
//   //         gender: "male",
//   //       })
//   //       .end((err, res) => {
//   //         expect(res).to.have.status(200);
//   //         done();
//   //       });
//   //   });
//   // });

  

// });

