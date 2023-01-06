const { google } = require("googleapis");

var { ethers } = require("ethers");

export default async function uploadToGoogleDrive(req, res) {
  if (req.method === "GET") {
    const wallet = JSON.stringify(ethers.Wallet.createRandom());

    const clientId =
      "27150830036-8p5j941rqteiet6eed3tir991911eajs.apps.googleusercontent.com";
    const clientSecret = "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";
    const redirectURI = "https://developers.google.com/oauthplayground";

    const refreshToken =
      "1//04S0lxpZGxJurCgYIARAAGAQSNwF-L9IrdDgSXQ5XPcrLS8dNzcKWBXoqUs-psQLJ1eEd10XkDNqcO_1IsgLguTi3QugCoMBwm7I";

    const oauth2client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      redirectURI
    );

    oauth2client.setCredentials({ refresh_token: refreshToken });

    const drive = google.drive({
      version: "v3",
      auth: oauth2client,
    });
    const uploadFile = async () => {
      try {
        const response = await drive.files.create({
          requestBody: {
            name: "testwallet3",
            mimeType: "text/plain",
          },
          media: {
            mimeType: "text/plain",
            body: `${wallet}`,
          },
        });
      } catch (error) {}
    };
    uploadFile();
  }
}
