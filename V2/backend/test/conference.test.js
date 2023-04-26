process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
chai.use(chaiHttp);

describe("conference", () => {
    // create conference
    describe("POST /org/create", () => {
      it("it should create a conference", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF1",
            description: "first conference of org ORG1",
            startDate: "2023-4-1",
            endDate:"2023-4-2",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //type on conference name is not string 
    describe("POST /org/create", () => {
      it("it should not create a conference (type on conference name is not string )", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: 1.1,
            description: "first conference of org ORG1",
            startDate: "2023-4-21",
            endDate:"2023-4-22",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

     // empty org id
    describe("POST /org/create", () => {
      it("it should not create a conference (empty org id)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "",
            conferenceName: "CONF1",
            description: "first conference of org ORG1",
            startDate: "2023-4-2",
            endDate:"2023-4-3",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
            //expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    // organization not exists
    describe("POST /org/create", () => {
      it("it should not create a conference (organization not exists)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "orgid",
            conferenceName: "CONF2",
            description: "first conference of org ORG1",
            startDate: "2023-4-3",
            endDate:"2023-4-4",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //empty conference name
    describe("POST /org/create", () => {
      it("it should not create a conference (empty conference name)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "",
            description: "first conference of org ORG1",
            startDate: "2023-4-4",
            endDate:"2023-4-5",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    // empty description
    describe("POST /org/create", () => {
      it("it should not create a conference (empty description)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF3",
            description: "",
            startDate: "2023-4-5",
            endDate:"2023-4-6",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //start date not included
    describe("POST /org/create", () => {
      it("it should not create a conference(start date not included)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF4",
            description: "first conference of org ORG1",
            startDate: "",
            endDate:"2023-4-7",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
          //  expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //end date not included
    describe("POST /org/create", () => {
      it("it should not create a conference (end date not included)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF5",
            description: "first conference of org ORG1",
            startDate: "2023-4-6",
            endDate:"",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
          //  expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //conflict between end-date and start date
    describe("POST /org/create", () => {
      it("it should not create a conference (conflict between end-date and start date)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF6",
            description: "first conference of org ORG1",
            startDate: "2023-4-7",
            endDate:"2023-4-6",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //org id type is not valid
    describe("POST /org/create", () => {
      it("it not should create a conference (org id type is not valid)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: 1234334,
            conferenceName: "CONF7",
            description: "first conference of org ORG1",
            startDate: "2023-4-8",
            endDate:"2023-4-9",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
          //  expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //description type is not valid
    describe("POST /org/create", () => {
      it("it should not create a conference (description type is not valid)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF8",
            description: 24312,
            startDate: "2023-4-9",
            endDate:"2023-4-10",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
         //   expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //start date format are not valid
    describe("POST /org/create", () => {
      it("it should not create a conference (start date format are not valid)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF9",
            description: "first conference of org ORG1",
            startDate: "10-4-2023",
            endDate:"2023-4-10",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
          //  expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //value in start date is not valid by month
    describe("POST /org/create", () => {
      it("it should not create a conference (value in start date is not valid by month)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF10",
            description: "first conference of org ORG1",
            startDate: "2023-13-21",
            endDate:"2023-12-22",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
         //   expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    // value in start date is not valid by date
    describe("POST /org/create", () => {
      it("it should not create a conference (value in start date is not valid by date)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF11",
            description: "first conference of org ORG1",
            startDate: "2023-4-33",
            endDate:"2023-4-30",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    // end date format is not valid 
    describe("POST /org/create", () => {
      it("it should not create an conference (end date format is not valid )", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF12",
            description: "first conference of org ORG1",
            startDate: "2023-4-11",
            endDate:"12-4-2023",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
          //  expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    // value in end date is not valid by month
    describe("POST /org/create", () => {
      it("it not should create a conference (value in end date is not valid by month)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF13",
            description: "first conference of org ORG1",
            startDate: "2023-12-21",
            endDate:"2023-13-22",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //value in end date is not valid by date
    describe("POST /org/create", () => {
      it("it should not create a conference (value in end date is not valid by date)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF14",
            description: "first conference of org ORG1",
            startDate: "2023-4-21",
            endDate:"2023-4-32",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
          //  expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    // value in guestSpeakers is not valid
    describe("POST /org/create", () => {
      it("it should not create a conference ( value in guestSpeakers is not valid)", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF15",
            description: "first conference of org ORG1",
            startDate: "2023-4-17",
            endDate:"2023-4-18",
            guestSpeakers: [ abc , 123],
            topics: [ "AI" , "ML" ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
           // expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    });

    //value in topic is not valid 
    describe("POST /org/create", () => {
      it("it not should create a conference (value in topic is not valid )", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF16",
            description: "first conference of org ORG1",
            startDate: "2023-4-18",
            endDate:"2023-4-19",
            guestSpeakers: [ "abc" , "xyz"],
            topics: [ 1 , 2 ]
          })

          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body).to.be.a("object");
         //   expect(res.body).to.have.property("conferenceName");
            done();

          });
      });
    }); 

  });
  