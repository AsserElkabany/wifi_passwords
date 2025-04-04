const router=require('express').Router();
const userController=require('../controller/user');




router.post('/getpasswords',userController.getpasswords);

module.exports=router;