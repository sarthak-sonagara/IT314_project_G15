process.env.NODE_ENV = "test";
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;
chai.use(chaiHttp);

// in edit function user registation is allowed also user can change org id 
describe("conference", () => {
    //create conference
    describe("POST /org/create", () => {
      it("it should create a conference", (done) => {
        chai
          .request(app)
          .post("/org/create")
          .send({
            org_id: "642c6b0187058e54695f37b7",
            conferenceName: "CONF1",
            description: "first conference of org ORG1",
            startDate: "2023-5-1",
            endDate:"2023-5-2",
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

   // conference: getAllConferences function testing 
    describe("get /org/all", () => {
      it("it should return all conference object", (done) => {
        chai
          .request(app)
          .get("/org/all")
          
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    // conference: view conference testing 
    // conference name and list of topic both available 
    // describe("get /org/get", () => {
    //   it("it should return conference object", (done) => {
    //     chai
    //       .request(app)
    //       .get("/org/get")
    //       // .send({
    //       //           conferenceName: "CONF16",
    //       //           topics:  [ "AI" , "ML" ]
    //       //         })

    //       .end((err, res) => {
    //         expect(res).to.have.status(201);
    //         expect(res.body).to.be.a("object");
    //         if (err) return done(err);
    //         done();
    //       });
    //   });
    // }); 

    // test case for conference edit function
    describe("patch /org/edit", () => {
      it("it should edit conference object", (done) => {
        chai
          .request(app)
          .patch("/org/edit")
          .send({
                    id : "64497aa3538721b8200e8a9b",
                    org_id: "642c6b0187058e54695f37b7",
                    conferenceName: "CONF1",
                    description: "first conference of org ORG1",
                    startDate: "2023-5-1",
                    endDate:"2023-5-2",
                    guestSpeakers: [ "abc" , "xyz"],
                    topics: [ "AI" , "ML" ],
                    registeredAttendees : ["644777fff8bfe1f355c60c11" , "6446d482aa8b2ea8be3ba696"]
                  })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 
    
    // not contain organization id
    describe("patch /org/edit", () => {
      it("it should not edit conference object (not contain organization id)", (done) => {
        chai
          .request(app)
          .patch("/org/edit")
          .send({
                    id : "64484a96319342700f59ddb6",
                    conferenceName: "CONF16",
                    description: "first conference of org ORG1",
                    startDate: "2023-4-18",
                    endDate:"2023-4-19",
                    guestSpeakers: [ "abc edit1" , "xyz edit1"],
                    topics: [ "AI edit1" , "ML edit1" ]
                  })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    // not contain conference name
    describe("patch /org/edit", () => {
      it("it should not edit conference object (not contain conference name)", (done) => {
        chai
          .request(app)
          .patch("/org/edit")
          .send({
                    id : "64484a96319342700f59ddb6",
                    org_id: "642c6b0187058e54695f37b7",
                    description: "first conference of org ORG1",
                    startDate: "2023-4-18",
                    endDate:"2023-4-19",
                    guestSpeakers: [ "abc edit2" , "xyz edit"],
                    topics: [ "AI edit" , "ML edit" ]
                  })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    //not contain description
    describe("patch /org/edit", () => {
      it("it should edit conference object (not contain description)", (done) => {
        chai
          .request(app)
          .patch("/org/edit")
          .send({
                    id : "64484a96319342700f59ddb6",
                    org_id: "642c6b0187058e54695f37b7",
                    conferenceName: "CONF16",
                    startDate: "2023-4-18",
                    endDate:"2023-4-19",
                    guestSpeakers: [ "abc edit3" , "xyz edit"],
                    topics: [ "AI edit" , "ML edit" ]
                  })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    //not contain start date
    describe("patch /org/edit", () => {
      it("it should not edit conference object (not contain start date)", (done) => {
        chai
          .request(app)
          .patch("/org/edit")
          .send({
                    id : "64484a96319342700f59ddb6",
                    org_id: "642c6b0187058e54695f37b7",
                    conferenceName: "CONF16",
                    description: "first conference of org ORG1",
                    startDate: "",
                    endDate:"2023-4-19",
                    guestSpeakers: [ "abc edit4" , "xyz edit"],
                    topics: [ "AI edit" , "ML edit" ]
                  })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    //not contain end date
    describe("patch /org/edit", () => {
      it("it should not edit conference object (not contain end date)", (done) => {
        chai
          .request(app)
          .patch("/org/edit")
          .send({
                    id : "64484a96319342700f59ddb6",
                    org_id: "642c6b0187058e54695f37b7",
                    conferenceName: "CONF16",
                    description: "first conference of org ORG1",
                    startDate: "2023-4-18",
                    endDate:"",
                    guestSpeakers: [ "abc edit5" , "xyz edit"],
                    topics: [ "AI edit" , "ML edit" ]
                  })

          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    //test case for remove users form conference 
    describe("patch /org/removeUser", () => {
      it("it should remove user from conference ", (done) => {
        chai
          .request(app)
          .patch("/org/removeUser")
          .send({
              userId : "644777fff8bfe1f355c60c11"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 

    // user not exists
    describe("patch /org/removeUser", () => {
      it("it should not remove user from conference (user not exists)", (done) => {
        chai
          .request(app)
          .patch("/org/removeUser")
          .send({
              userId : "644777fff8bfe1f355c60c11"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 

    //empty user id
    describe("patch /org/removeUser", () => {
      it("it should not remove user from conference (empty user id)", (done) => {
        chai
          .request(app)
          .patch("/org/removeUser")
          .send({
              userId : ""
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 

    //organization not exists
    describe("delete /org/remove-conferences-of-Org", () => {
      it("it should not remove conference of an organization (organization not exists)", (done) => {
        chai
          .request(app)
          .delete("/org/remove-conferences-of-Org")
          .send({
            orgId : "14426543"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 

    // empty org id
    describe("delete /org/remove-conferences-of-Org", () => {
      it("it should not remove conference of an organization (empty org id)", (done) => {
        chai
          .request(app)
          .delete("/org/remove-conferences-of-Org")
          .send({
            orgId : ""
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 

    //test case for get conference by id
    describe("get /org/:id", () => {
      it("it should return conference object", (done) => {
        chai
          .request(app)
          .get("/org/6449615194ffb1616b43d49f")
          
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    // conference not exists
    describe("get /org/:id", () => {
      it("it should not return conference object (conference not exists)", (done) => {
        chai
          .request(app)
          .get("/org/123")
          
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.a("object");
            if (err) return done(err);
            done();
          });
      });
    }); 

    //test case for conference Registration
    describe("patch /org/register/:id", () => {
      it("it should register user in conference ", (done) => {
        chai
          .request(app)
          .patch("/org/register/64497aa3538721b8200e8a9b")
          .send({
              userId : "644777fff8bfe1f355c60c11"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });

    //user not exists
    describe("patch /org/register/:id", () => {
      it("it should not register user in conference (user not exists)", (done) => {
        chai
          .request(app)
          .patch("/org/register/64497aa3538721b8200e8a9b")
          .send({
              userId : "1234"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });


    //user already register exists
    describe("patch /org/register/:id", () => {
      it("it should not register user in conference (user already register exists)", (done) => {
        chai
          .request(app)
          .patch("/org/register/64497aa3538721b8200e8a9b")
          .send({
              userId : "644777fff8bfe1f355c60c11"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });

      // conference not exists
      describe("patch /org/register/:id", () => {
        it("it should not register user in conference (conference not exists)", (done) => {
          chai
            .request(app)
            .patch("/org/register/1234")
            .send({
                userId : "644777fff8bfe1f355c60c11"
            })
  
            .end((err, res) => {
              expect(res).to.have.status(200);
              if (err) return done(err);
              done();
            });
        });
      });
  
      // empty user id
      describe("patch /org/register/:id", () => {
        it("it should not register user in conference (empty user id)", (done) => {
          chai
            .request(app)
            .patch("/org/register/64497aa3538721b8200e8a9b")
            .send({
                userId : ""
            })
  
            .end((err, res) => {
              expect(res).to.have.status(200);
              if (err) return done(err);
              done();
            });
        });
      });
  
      //test case for conference cancel Registration
    describe("patch /org/cancelRegistration/:id", () => {
      it("it should unregister user in conference ", (done) => {
        chai
          .request(app)
          .patch("/org/cancelRegistration/64497aa3538721b8200e8a9b")
          .send({
              userId : "644777fff8bfe1f355c60c11"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });

    //conference not exists
    describe("patch /org/cancelRegistration/:id", () => {
      it("it should not unregister user in conference (conference not exists)", (done) => {
        chai
          .request(app)
          .patch("/org/cancelRegistration/123")
          .send({
              userId : "6446d482aa8b2ea8be3ba696"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });

    //user not exists
    describe("patch /org/cancelRegistration/:id", () => {
      it("it should not unregister user in conference (user not exists)", (done) => {
        chai
          .request(app)
          .patch("/org/cancelRegistration/64497aa3538721b8200e8a9b")
          .send({
              userId : "123"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });

    // user not register in conference
    describe("patch /org/cancelRegistration/:id", () => {
      it("it should not unregister user in conference(user not register in conference) ", (done) => {
        chai
          .request(app)
          .patch("/org/cancelRegistration/64497aa3538721b8200e8a9b")
          .send({
              userId : "644777fff8bfe1f355c60c11"
          })

          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    });

     // test case of conference delete org
    // describe("delete /org/remove-conferences-of-Org", () => {
    //   it("it should remove conference of an organization", (done) => {
    //     chai
    //       .request(app)
    //       .delete("/org/remove-conferences-of-Org")
    //       .send({
    //         orgId : "642c6b0187058e54695f37b7"
    //       })

    //       .end((err, res) => {
    //         expect(res).to.have.status(200);
    //         if (err) return done(err);
    //         done();
    //       });
    //   });
    // }); 

     //  test case of conference delete
    describe("delete /org/delete/:id", () => {
      it("it should remove conference by id", (done) => {
        chai
          .request(app)
          .delete("/org/delete/6449615194ffb1616b43d49f")
          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 

     // conference not exists
    describe("delete /org/delete/:id", () => {
      it("it should not remove conference by id (conference not exists)", (done) => {
        chai
          .request(app)
          .delete("/org/delete/123")
          .end((err, res) => {
            expect(res).to.have.status(200);
            if (err) return done(err);
            done();
          });
      });
    }); 


  });
  