import jwt from "jsonwebtoken";
import User from "../models/User";
import Cofig from "../config";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const forgetPassword = async (req, res) => {
  const user = await User.findOne({ email: "laubus246s8@gmail.com" });

  const tokenEmails = jwt.sign({ id: user._id }, Cofig.SECRET, {
    expiresIn: 84000,
  });
  const body = {
    roles: user.roles,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    password: user.password,
    tokenEmail: tokenEmails,
  };
  const newUser = await User.findByIdAndUpdate(user._id, body, {
    new: true,
  });

  const trasporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
      user: "laubusgestoremail@gmail.com",
      pass: "qusdobmtogarnkyn",
    },
  });

  const emailOptions = {
    from: "Libreria tu sueño",
    to: "laubus1234@gmail.com",
    subjet: `Link para cambiar la contraseña`,
    text:
      `Tu has recivido este email para poder recuperar su contraseña de su cuenta.\n\n` +
      `Por fabort clickee en el siguien link o copie la url en su navegador y siga los pasos.\n\n` +
      `http://localhost:3000/forgetPassword/${tokenEmails}\n\n` +
      `Si no necesita esto, por favor disculpe e ingnore el email.`,
  };
  await trasporter.sendMail(emailOptions);
  const endiar = trasporter.verify().then(() => {
    console.log("ready for send email");
  });
  return res.json(endiar);

  // const CLIENT_ID =
  //   "207575409861-92p82c1tfhce6ne8odn934015bn688cj.apps.googleusercontent.com";
  // const CLIENT_SECRET = "PtxyGUpYpjYXHrq9gHdRPhyF";
  // const REDIREC_URI = "https://developers.google.com/oauthplayground";
  // const REFRESH_TOKEN =
  //   "1//04nk2kLlh9E3wCgYIARAAGAQSNwF-L9IrEMLKvVNteiu5fDL2aLXCMGJ9xZ8JMDDf7fcCARdrIDiD7Y2CnKkUmGC-JyRwsrcApj8";
  // const oAuth2Client = new google.auth.OAuth2(
  //   CLIENT_ID,
  //   CLIENT_SECRET,
  //   REDIREC_URI
  // );

  // oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  // async function sendEmail() {
  //   try {
  //     const accessToken = await oAuth2Client.getAccessToken();
  //     const trasporter = nodemailer.createTransport({
  //       service: "gmail",
  //       auth: {
  //         type: "OAuth2",
  //         user: "laubusgestoremail@gmail.com",
  //         clientId: CLIENT_ID,
  //         clientSecret: CLIENT_SECRET,
  //         refreshToken: REFRESH_TOKEN,
  //         accessToken: accessToken,
  //       },
  //     });
  //     const emailOptions = {
  //       from: "Libreria tu sueño",
  //       to: "lautaroaws@gmail.com",
  //       subjet: `Link para cambiar la contraseña`,
  //       text:
  //         `Tu has recivido este email para poder recuperar su contraseña de su cuenta.\n\n` +
  //         `Por fabort clickee en el siguien link o copie la url en su navegador y siga los pasos.\n\n` +
  //         `http://localhost:3000/forgetPassword/${tokenEmails}\n\n` +
  //         `Si no necesita esto, por favor disculpe e ingnore el email.`,
  //     };
  //     const result = await trasporter.sendMail(emailOptions);
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // sendEmail();
};

export const verifyTokenForgetPassword = (req, res) => {
  const token = req.query.resetPasswordToken;
  User.findOne({ where: { tokenEmail: token } }).then((user) => {
    if (user == null) {
      res.json("El usuario no es valido");
    } else {
      res.status(200).send({
        userName: user.userName,
        message: "Link-ok",
      });
    }
  });
};

export const changePassword = (req, res) => {};
