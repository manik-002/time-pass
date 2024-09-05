const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


//job type routes

// /api/type/create
router.post('/type/create', isAuthenticated, isAdmin, createJobType);
// /api/type/jobs
router.get('/type/jobs', allJobsType);
// /api/type/update/type_id
router.put('/type/update/:type_id', isAuthenticated, isAdmin, updateJobType);
// /api/type/delete/type_id
router.delete('/type/delete/:type_id', isAuthenticated, isAdmin, deleteJobType);

module.exports = router;