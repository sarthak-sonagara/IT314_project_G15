process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
chai.use(chaiHttp);

describe("Org", () => {
  // signup org
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org",
          email: "org1@abc.com",
          password: "Org@1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });

  //duplicate org email
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org1",
          email: "org1@abc.com",
          password: "Org1!1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  // empty org name
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "",
          email: "org2@abc.com",
          password: "Org2@1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  //empty email
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org3",
          email: "",
          password: "Org3#1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  // empty password
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org4",
          email: "org4@abc.com",
          password: "",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
   
  // invalid email
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org5",
          email: "org5abc.com",
          password: "Org5%1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });

  //password contain less than 8 char  
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org6",
          email: "org6@abc.com",
          password: "Org6^12",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  // password not contain uppercase char
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org7",
          email: "org7@abc.com",
          password: "org7&1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
 
   // password not contain lowercase char
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org8",
          email: "org8@abc.com",
          password: "ORG8*1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
 
   // password not contain any number
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org9",
          email: "org9@abc.com",
          password: "Orga(bcde",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  //password not contain any symbol 
  describe("POST /auth/org/signup", () => {
    it("it should signup an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/signup")
        .send({
          orgname: "org10",
          email: "org10@abc.com",
          password: "Org101234",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
   
  // login org 
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
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });

   // empty email
  describe("POST /auth/org/login", () => {
    it("it should login an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "",
          password: "Org@1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  // empty password
  describe("POST /auth/org/login", () => {
    it("it should login an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abc.com",
          password: "",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
   
  // wrong password
  describe("POST /auth/org/login", () => {
    it("it should login an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abc.com",
          password: "Org@123456",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          done();
        });
    });
  });
  
  //wrong email
  describe("POST /auth/org/login", () => {
    it("it should login an org", (done) => {
      chai
        .request(app)
        .post("/auth/org/login")
        .send({
          email: "org1@abcd.com",
          password: "Org@1234",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
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
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          done();
        });
    });
  });

  // delete org
  describe("DELETE /auth/org/delete", () => {
    it("it should delete an org", (done) => {
      chai
        .request(app)
        .delete("/auth/org/delete")
        .send({
          email: "org1@abc.com",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("org");
          done();
        });
    });
  });


});
