import jwt from "jsonwebtoken";
import User from "../models/User";
import Cofig from "../config";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const forgetPassword = (req, res) => {
  const user = User.findOne({ where: { email: req.body.email } });
  if (user) {
    const tokenEmails = jwt.sign({ id: user._id }, Cofig.SECRET, {
      expiresIn: 84000,
    });
    user.update({ tokenEmail: tokenEmails });

    const CLIENT_ID =
      "760871443698-68itjhusdnq7apfm9njd8b3ecl7dosib.apps.googleusercontent.com";
    const CLIENT_SECRET = "fhDjBRxW_kjkGKSlTYyRJ8Dr";
    const REDIREC_URI = "https://developers.google.com/oauthplayground";
    const REFRESH_TOKEN =
      "1//040DI5oN9qhLuCgYIARAAGAQSNwF-L9Irbv0bzIGX7JpyzweM3vAWjoKly3Kch16t07EQVBnpjeTF70vLCYSjK95ElirdTSx928w";
    const oAuth2Client = new google.auth.OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      REDIREC_URI
    );

    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    async function sendEmail() {
      try {
        const accessToken = await oAuth2Client.getAccessToken();
        const trasporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            type: "OAuth2",
            user: "laubusgestoremail@gmail.com",
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessToken,
          },
          //   tls: {
          //     rejectUnauthorized: false,
          //   },
        });
        const emailOptions = {
          from: "Libreria tu sueño",
          to: "lautaroaws@gmail.com",
          subjet: `Link para cambiar la contraseña`,
          text:
            `Tu has recivido este email para poder recuperar su contraseña de su cuenta.\n\n` +
            `Por fabort clickee en el siguien link o copie la url en su navegador y siga los pasos.\n\n` +
            `http://localhost:3000/forgetPassword/${tokenEmails}\n\n` +
            `Si no necesita esto, por favor disculpe e ingnore el email.`,
        };
        const result = await trasporter.sendMail(emailOptions);
        return result;
      } catch (error) {
        console.log(error);
      }
    }
    sendEmail();
  }
};
