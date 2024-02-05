const User = require('../Modals/Userschema');
const Crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
//create user
exports.createUser = async (req, res)=>{
    const newUser = new User({
        firstname: req.body.Firstname,
        lastname: req.body.Lastname,
        email: req.body.Email,
        // dob : req.body.Dob,
        password: Crypto.AES.encrypt(req.body.Password,process.env.Crypto_js).toString()
        
    });
    try{
      console.log(newUser);
        const saveUser = await newUser.save()
        res.status(201).json(saveUser);
    }catch(err){
        res.status(400).json({message : err.message});
    }
}
//login and verify

exports.verifyLogin = async (req, res)=>{
  try{
    const dataBaseData = await User.findOne({email: req.body.Email})
    !dataBaseData && res.status(401).json({response : 'please check ur email'})

    const hashedPassword = Crypto.AES.decrypt(dataBaseData.password,process.env.Crypto_js)
    console.log('hashed pasword',hashedPassword);
    const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
    console.log('original passwod', originalPassword);

    const accessToken = jwt.sign(
      { 
        id : dataBaseData._id
      },process.env.jwt_sec,
      {  
        expiresIn: '4h'
      }
    );

    const { password, ...others} = dataBaseData._doc;
    res.status(200).json({ ...others, accessToken});
    console.log('login succcess');

  }catch(err){
    res.status(500).json(err)
    console.log('token err');
  }
}


// exports.getAllUsers = async (req, res) => {
//     try {
//       const users = await User.find();
//       res.json(users);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   };
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'id firstname lastname');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.getUserById = async (req, res) => {
//     let user;
//     try {
//       user = await User.findById(req.params.id);
//       if (user == null) {
//         return res.status(404).json({ message: 'Cannot find user' });
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message });
//     }
  
//     res.json(user);
//   };
exports.friendReqestsId = async (req, res)=>{
  try{
   const user = await User.findById(req.params.id);
   const fReq = req.body
   user.friendrequest.push(fReq)
  }catch(err){
    
    res.status(500).json({ message: err.message });
  }
}
exports.getUserById = async (req, res) => {
  let user;
  try {
    user = await User.findById(req.params.id)
      .select('firstname lastname friends posts')
      .populate('friends', 'firstname lastname') 
      .populate('posts'); 
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteUser = async (req, res) => {
    let user;
    try {
      user = await User.findById(req.params.id);
      if (user == null) {
        return res.status(404).json({ message: 'Cannot find user' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    try {
      await User.deleteOne();
      res.json({ message: 'Deleted user' });
    } catch (err){
        return res.status(500).json({ message: err.message });
    }
}