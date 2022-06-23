const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.send("authRouter")
})

// /api/auth/register
router.post('/register',(req,res,next)=>{
  res.send("register")
})

// /api/auth/login
router.post('/login',(req,res,next)=>{
  res.send("login")
})

// /api/auth/logout
router.get('/logout', (req, res, next) => {
  req.session.member = null;
  res.sendStatus(202);
});

module.exports = router;