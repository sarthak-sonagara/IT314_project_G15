process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
chai.use(chaiHttp);

describe("User", () => {
  // login module
  describe("POST /auth/user/login", () => {
    it("it should login a user", (done) => {
      chai
        .request(app)
        .post("/auth/user/login")
        .send({
          email: "shreeji@gmail.com",
          password: "Shreeji@01",
          role: "admin",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          expect(res.body).to.have.property("role");
          expect(res.body).to.have.property("token");
          done();
        });
    });
  });

  describe("POST /auth/user/signup", () => {
    it("it should signup a user", (done) => {
      chai
        .request(app)
        .post("/auth/user/signup")
        .send({
          username: "harsh@test",
          email: "harsh@test.com",
          password: "Harsh@test1",
          role: "attendee",
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("email");
          expect(res.body).to.have.property("role");
          expect(res.body).to.have.property("token");
          done();
        });
    });
  });

  describe("PATCH /auth/user/update", () => {
    it("it should update user password", (done) => {
      chai
        .request(app)
        .patch("/auth/user/update")
        .send({
          email: "harsh@test.com",
          password: "Harsh@test2",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("user");
          done();
        });
    });
  });

  describe("DELETE /auth/user/delete", () => {
    it("it should delete a user", (done) => {
      chai
        .request(app)
        .delete("/auth/user/delete")
        .send({
          email: "harsh@test.com",
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("user");
          done();
        });
    });
  });
});
