process.env.NODE_ENV = "test";
const app = require("../server");
const sinon = require("sinon");
const faker = require("faker");
const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
const userModel = require("../models/user");
chai.use(chaiHttp);
const mongoose = require("mongoose");

// Test1 : Valid User Signup
describe("UserCRUDtest", () => {
    it("it should signup a user", (done) => {
        const stubValue =
        {
            username: "parth1205",
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: "attendee"
        };

        //Mocking signup method of userModel
        const stub = sinon.stub(userModel, "signup").returns(stubValue);

        const signedupUser = userModel.signup(stubValue.username, stubValue.email, stubValue.password, stubValue.role);

        console.log(signedupUser);

        // signup function of userModel must be called once.
        expect(stub.calledOnce).to.be.true;

        expect(signedupUser.username).to.equal(stubValue.username);
        expect(signedupUser.email).to.equal(stubValue.email);
        expect(signedupUser.password).to.equal(stubValue.password);

        done();
    })
})