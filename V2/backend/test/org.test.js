process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
chai.use(chaiHttp);



 // password constrains not working for all functions 
  describe("Org", () => {
  //signup org
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "ABC",
          email: "org1@abc.com",
          password: "Org@1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
         // expect(res.body).to.have.property("email");
          done();
        });
    });
  });

  //duplicate org email
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (duplicate organization email)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org1",
          email: "org1@abc.com",
          password: "Org1!1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  // empty org name
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org ( empty organization name)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "",
          email: "org2@abc.com",
          password: "Org2@1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  //empty email
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (empty email)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org3",
          email: "",
          password: "Org3#1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  // empty password
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (empty password)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org4",
          email: "org4@abc.com",
          password: "",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
   
  // invalid email
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org ( invalid email)" , (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org5",
          email: "org5abc.com",
          password: "Org5%1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //password contain less than 8 char  
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (password contain less than 8 char )", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org6",
          email: "org6@abc.com",
          password: "Org6^12",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  // password not contain uppercase char
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org ( password not contain uppercase char)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org7",
          email: "org7@abc.com",
          password: "org7&1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
 
   // password not contain lowercase char
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (password not contain lowercase char)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org8",
          email: "org8@abc.com",
          password: "ORG8*1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
 
   // password not contain any number
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (password not contain any number)", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org9",
          email: "org9@abc.com",
          password: "Orga(bcde",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  //password not contain any symbol 
  describe("POST /auth/org/signup", () => {
    it("it should not signup an org (password not contain any symbol )", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org10",
          email: "org10@abc.com",
          password: "Org101234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //login org
  describe("POST /auth/org/login", () => {
    it("it should login an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abc.com",
          password: "Org@1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          //expect(res.body).to.have.property("email");
          done();
        });
    });
  });

  // empty email
  describe("POST /auth/org/login", () => {
    it("it should not login an org (empty email)", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "",
          password: "Org@1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  // empty password
  describe("POST /auth/org/login", () => {
    it("it should not login an org (empty password)", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abc.com",
          password: "",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
   
  // wrong password
  describe("POST /auth/org/login", () => {
    it("it should not login an org (wrong password)", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abc.com",
          password: "Org@123456",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  
  //wrong email
  describe("POST /auth/org/login", () => {
    it("it should not login an org (wrong email)", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abcd.com",
          password: "Org@1234",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

    // invalid email 
describe("POST /auth/org/login", () => {
  it("it should not login an org (invalid email )", (done) => {
    chai
      .request(app)
      .post("/auth/org/login")
      .send({
        email: "org1@abccom",
        password: "Org@1234",
      })
      .end((err, res) => {
        if(err) console.log(err);
        console.log(res.body);
        expect(res).to.have.status(400);
        done();
      });
  });
});

  // get all orgs
  describe("GET /auth/org", () => {
    it("it should get all orgs", (done) => {
      chai
        .request(app)
        .get("/auth/org")
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });


 // organization update function testing 
  describe("patch /auth/org/update", () => {
    it("it should update password of an org", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update")
        .send({
          email: "org1@abc.com",
          password: "Org@1234PassChange",
        })
        .end((err, res) => {
          if(err) console.log(err);
             console.log(res.body);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  // empty email
  describe("patch /auth/org/update", () => {
    it("it should not update password of an org (empty email)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update")
        .send({
          email: "",
          password: "Org@1234PassChange",
        })
        .end((err, res) => {
          if(err) console.log(err);
             console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //wrong email
  describe("patch /auth/org/update", () => {
    it("it should not update password of an org (wrong email)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update")
        .send({
          email: "org1@abcd.com",
          password: "Org@1234PassChange",
        })
        .end((err, res) => {
          if(err) console.log(err);
             console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

   // invalid email
   describe("patch /auth/org/update", () => {
    it("it should not update password of an org (invalid email)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update")
        .send({
          email: "org1@abccom",
          password: "Org@1234PassChange",
        })
        .end((err, res) => {
          if(err) console.log(err);
             console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

   // empty password
   describe("patch /auth/org/update", () => {
    it("it should not update password of an org (empty password)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update")
        .send({
          email: "org1@abc.com",
          password: "",
        })
        .end((err, res) => {
          if(err) console.log(err);
             console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  // password contain less than 8 characters
  describe("patch /auth/org/update", () => {
    it("it should not update password of an org (password contain less than 8 characters)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update")
        .send({
          email: "org1@abc.com",
          password: "@1234P",
        })
        .end((err, res) => {
          if(err) console.log(err);
             console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

    // password not contain uppercase character
    describe("patch /auth/org/update", () => {
      it("it should not update password of an org ( password not contain uppercase character)", (done) => {
        chai
          .request(app)
          .patch("/auth/org/update")
          .send({
            email: "org1@abc.com",
            password: "org@1234passchange",
          })
          .end((err, res) => {
            if(err) console.log(err);
             console.log(res.body);
            expect(res).to.have.status(400);
            done();
          });
      });
    });

    //password not contain lowercase character
    describe("patch /auth/org/update", () => {
      it("it should not update password of an org (password not contain lowercase character)", (done) => {
        chai
          .request(app)
          .patch("/auth/org/update")
          .send({
            email: "org1@abc.com",
            password: "ORG@1234PASSCHANGE",
          })
          .end((err, res) => {
            if(err) console.log(err);
             console.log(res.body);
            expect(res).to.have.status(400);
            done();
          });
      });
    });

    //password not contain any number
    describe("patch /auth/org/update", () => {
      it("it should not update password of an organization (password not contain any number)", (done) => {
        chai
          .request(app)
          .patch("/auth/org/update")
          .send({
            email: "org1@abc.com",
            password: "Org@PassChange",
          })
          .end((err, res) => {
            if(err) console.log(err);
             console.log(res.body);
            expect(res).to.have.status(400);
            done();
          });
      });
    });

    // password not contain any symbol
    describe("patch /auth/org/update", () => {
      it("it should not update password of an organization (password not contain any symbol)", (done) => {
        chai
          .request(app)
          .patch("/auth/org/update")
          .send({
            email: "org1@abc.com",
            password: "Org1234PassChange",
          })
          .end((err, res) => {
            if(err) console.log(err);
             console.log(res.body);
            expect(res).to.have.status(400);
            done();
          });
      });
    });

    // organization delete function testing 
 // empty email
  describe("DELETE /auth/org/delete", () => {
    it("it should not delete an organization (empty email)", (done) => {
      chai
        .request(app)
        .delete("/auth/org/delete")
        .send({
          email: "",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //wrong email
  describe("DELETE /auth/org/delete", () => {
    it("it should not delete an organization (wrong email)", (done) => {
      chai
        .request(app)
        .delete("/auth/org/delete")
        .send({
          email: "org1@abcd.com",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //invalid email
  describe("DELETE /auth/org/delete", () => {
    it("it should not delete an organization (invalid email)", (done) => {
      chai
        .request(app)
        .delete("/auth/org/delete")
        .send({
          email: "org1@abccom",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

   //delete org
   describe("DELETE /auth/org/delete", () => {
    it("it should delete an organization", (done) => {
      chai
        .request(app)
        .delete("/auth/org/delete")
        .send({
          email: "org1@abc.com",
        })
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

    //test case get organization by id
  describe("GET /auth/org/:emailid", () => {
    it("it should return organization ", (done) => {
      chai
        .request(app)
        .get("/auth/org/org1@abc.com")
        .end((err, res) => {
          if(err) console.log(err);
               console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  // organization not exists
  describe("GET /auth/org/:emailid", () => {
    it("it should not return organization (organization not exists)", (done) => {
      chai
        .request(app)
        .get("/auth/org/org123@gmail.com")
        .end((err, res) => {
          if(err) console.log(err);
               console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  // invalid email
  describe("GET /auth/org/:emailid", () => {
    it("it should not return organization (invalid email) ", (done) => {
      chai
        .request(app)
        .get("/auth/org/org1@abccom")
        .end((err, res) => {
          if(err) console.log(err);
               console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

   //test case get organization's conference by id
   describe("GET /auth/org/:id/myConferences", () => {
    it("it should return conference ", (done) => {
      chai
        .request(app)
        .get("/auth/org/644b31d6c6a497bce006434b/myConferences")
        .end((err, res) => {
          if(err) console.log(err);
            console.log(res.body);
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

   // organization not exists
  describe("GET /auth/org/:id/myConferences", () => {
    it("it not should return conference ( organization not exists)", (done) => {
      chai
        .request(app)
        .get("/auth/org/1234/myConferences")
        .end((err, res) => {
          if(err) console.log(err);
          console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //test case for update org accepted status
  describe("patch /auth/org/update/accepted", () => {
    it("it should update status of an org", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update/accepted")
        .send({
          email: "org1@abc.com",
        })
        .end((err, res) => {
          if(err) console.log(err);
              console.log(res.body);
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  // org not exists
  describe("patch /auth/org/update/accepted", () => {
    it("it should not update status of an org (org not exists)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update/accepted")
        .send({
          email: "org2@abc.com",
        })
        .end((err, res) => {
          if(err) console.log(err);
              console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //email is not valid
  describe("patch /auth/org/update/accepted", () => {
    it("it should not update status of an org (email is not valid)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update/accepted")
        .send({
          email: "org1@abccom",
        })
        .end((err, res) => {
          if(err) console.log(err);
              console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  //email is empty
  describe("patch /auth/org/update/accepted", () => {
    it("it should not update status of an org (email is empty)", (done) => {
      chai
        .request(app)
        .patch("/auth/org/update/accepted")
        .send({
          email: "",
        })
        .end((err, res) => {
          if(err) console.log(err);
              console.log(res.body);
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  

  });
