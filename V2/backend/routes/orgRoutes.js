const express = require("express");

const router = express.Router();

// controllers
const {
  loginOrg,
  signupOrg,
  updateOrg,
  deleteOrg,
  allOrgs,
  getOrgById,
  updateOrgAcceptedStatus,
  myConferences,
} = require("../controllers/orgController");

// all orgs
router.get("/", allOrgs);

//OrgById route
router.get("/:emailid", getOrgById);

// organization's conference routes
router.get("/:id/myConferences", myConferences);

// signup route
router.post("/signup", signupOrg);

// login route
router.post("/login", loginOrg);

// update route
router.patch("/update", updateOrg);

// delete route
router.delete("/delete", deleteOrg);

// update org accepted status
router.patch("/update/accepted", updateOrgAcceptedStatus);

module.exports = router;
