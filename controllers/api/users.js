const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loggedUser = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken,
  edit
};

async function create(req, res) {
  try {
    // Add the user to the db
    req.body.profilePic="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
    const user = await loggedUser.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await loggedUser.findOne({email: req.body.email});
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json('Bad Credentials');
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*--- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}

async function edit(req, res) {
  try {
    // Add the user to the db
    console.log(req.body)
    console.log(req.user._id)
    loggedUser.findById(req.user._id)
    .then((userDoc)=>{
      console.log(userDoc)
      userDoc.profilePic=req.body.profilePic
      userDoc.name=req.body.name
      console.log(userDoc)
      userDoc.save()
      res.status(200)
    })
    .catch((error=>{console.log(error)}))
  } catch (err) {
    res.status(400).json(err);
  }
}