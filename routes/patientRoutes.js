const { Router } = require("express");
const {
  preview_prescription,
  get_patient,
} = require("../controllers/patientControllers");
const { requirePatientAuth } = require("../middlewares/patientAuthMiddleware");
const router = Router();

router.get("/prescription/:id", requirePatientAuth, preview_prescription);
router.get("/getpatient", requirePatientAuth, get_patient);
router.post("/bookappointment", requirePatientAuth, (req, res) => {

  const { doctorId, appointmentDate, appointmentTime } = req.body;


  if (!doctorId || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ error: "Incomplete data provided" });
  }


  res.status(200).json({ message: "Appointment booked successfully" });
});

module.exports = router;
