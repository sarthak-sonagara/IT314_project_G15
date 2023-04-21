process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
chai.use(chaiHttp);

describe("conference", () => {
    // create conference
    describe("POST /org/create", () => {
      it("it should create an conference", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "xyzCZ",
            description: "first conference of org xyz",
            startDate: "2023-4-21",
            endDate:"2023-4-22",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

  });
  