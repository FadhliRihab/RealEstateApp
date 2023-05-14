const collection = require("./userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendConfirmationEmail } = require("./nodemailer");

exports.Register = async (req, res) => {
  const { password, email, firstName, lastName } = req.body;

  try {
    const found = await collection.findOne({ email });
    if (found) {
      res.status(400).send({ errors: [{ msg: "email already exists" }] });
    } else {
      const characters =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let randomCode = "";
      for (let i = 0; i < 25; i++) {
        randomCode +=
          characters[Math.floor(Math.random() * characters.length)];
      }
      const user = new collection({
        firstName,
        lastName,
        email,
        password,
        activationCode: randomCode,
        
      });
      const salt = 10;
      const hashpassword = bcrypt.hashSync(password, salt);
      user.password = hashpassword;
      const payload = { id: user._id };
      const token = jwt.sign(payload, process.env.secretKey);
      await user.save();
      sendConfirmationEmail(user.email, user.activationCode, password);
      return res.status(200).send({ msg: "user added", user, token });
    } 
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.Login=async(req,res)=>{
    const {password,email}=req.body
    try {
        const user=await collection.findOne({email})
        if (!user){
            res.status(400).send({errors:[{msg:"email doesn't  exist"}]})
        }else {
            const match=await bcrypt.compare(password,user.password)
            if (!match){
                res.status(400).send({errors:[{msg:"wrong password"}]})
            }else {
                const payload={id:user._id}
                const token=jwt.sign(payload,process.env.secretKey)
                return res.status(200).send({msg:"user logged in",user,token})
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.GetUserProfile = async (req, res) => {
  try {
    const token = req.user.token; // Assuming you have authentication middleware to get the authenticated user's ID

    const user = await collection.findById(token);

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send(error);
  }
};
exports.UpdateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have authentication middleware to get the authenticated user's ID
    const { firstName, lastName, email } = req.body;

    const user = await collection.findById(userId);

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;

    await user.save();

    return res.status(200).send({ msg: "User profile updated", user });
  } catch (error) {
    return res.status(500).send(error);
  }
};
exports.DeleteUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have authentication middleware to get the authenticated user's ID

    const user = await collection.findById(userId);

    if (!user) {
      return res.status(404).send({ msg: "User not found" });
    }

    await user.remove();

    return res.status(200).send({ msg: "User profile deleted" });
  } catch (error) {
    return res.status(500).send(error);
  }
};
