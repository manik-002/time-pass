const router = require('express').Router();
const {allUsers ,singleUser ,editUser ,deleteUser ,createUserJobsHistory} = require('./controllers/Usercontroller');;
const { ensureAuthenticated, isAdmin } = require('./middlewares/auth');


//user routes
console.log(Usercontroller); 
// /User/allusers
router.get('/allusers', ensureAuthenticated, isAdmin, allUsers);
// /User/user/id
router.get('/user/:id', ensureAuthenticated, singleUser);
// /User/user/edit/id
router.put('/user/edit/:id', ensureAuthenticated,editUser);
// /User/admin/user/delete/id
router.delete('/admin/user/delete/:id', ensureAuthenticated, isAdmin,deleteUser);
// /User/user/jobhistory
router.post('/user/jobhistory', ensureAuthenticated, createUserJobsHistory);




module.exports = router;

