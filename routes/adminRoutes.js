const { Router } = require("express");
const { get_admin } = require("../controllers/authControllers");
const {
  delete_doctor,
  delete_patient,
} = require("../controllers/deleteControllers");
const {
  view_patientlist,
  view_doctorlist,
} = require("../controllers/fetchlistControllers");
const { requireAdminAuth } = require("../middlewares/adminAuthMiddleware");

const router = Router();

router.delete("/deletedoctor/:id", requireAdminAuth, delete_doctor);
router.delete("/deletepatient/:healthID", requireAdminAuth, delete_patient);
router.get("/getadmin", requireAdminAuth, get_admin);

router.get("/doctorlist", requireAdminAuth, view_doctorlist);
router.get("/patientlist", requireAdminAuth, view_patientlist);

router.get("/appointments", requireAdminAuth, (req, res) => {
  // Handle logic to view all appointments
});

router.delete("/appointments/:id", requireAdminAuth, (req, res) => {
  // Handle logic to delete an appointment by ID
});

module.exports = router;
