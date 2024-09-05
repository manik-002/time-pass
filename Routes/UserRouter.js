const router = require('express').Router();
const Usercontroller = require('./controllers/Usercontroller.js');
const { ensureAuthenticated, isAdmin } = require('./middlewares/auth');


//user routes
console.log(Usercontroller); 
// /User/allusers
router.get('/allusers', ensureAuthenticated, isAdmin, Usercontroller.allUsers);
// /User/user/id
router.get('/user/:id', ensureAuthenticated, Usercontroller.singleUser);
// /User/user/edit/id
router.put('/user/edit/:id', ensureAuthenticated, Usercontroller.editUser);
// /User/admin/user/delete/id
router.delete('/admin/user/delete/:id', ensureAuthenticated, isAdmin, Usercontroller.deleteUser);
// /User/user/jobhistory
router.post('/user/jobhistory', ensureAuthenticated, Usercontroller.createUserJobsHistory);




module.exports = router;