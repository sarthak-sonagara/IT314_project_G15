process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const { describe } = require("mocha");
const expect = chai.expect;
chai.use(chaiHttp);

describe("Org", () => {
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

  // signup org
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
          expect(res).to.have.status(201);
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
          expect(res.body).to.be.a("array");
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
