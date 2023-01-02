// const path = require("path");
// const fs = require("fs");

// const clientId =
//   "27150830036-8p5j941rqteiet6eed3tir991911eajs.apps.googleusercontent.com";
// const clientSecret = "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";
// const redirectURI = "https://developers.google.com/oauthplayground";

// const refreshToken =
//   "1//045offq5eQRYUCgYIARAAGAQSNwF-L9IrgUhHy67dmbQS_u9ZRJIhLGURp0Fu9LTTsjencXhDfRiWBa87cxo4r_Np0JivPm03UFM";

// const oauth2client = new google.auth.OAuth2(
//   clientId,
//   clientSecret,
//   redirectURI
// );

// oauth2client.setCredentials({ refresh_token: refreshToken });

// const drive = google.drive({
//   version: "v3",
//   auth: oauth2client,
// });

export const uploadFile = async (userwalletaddress) => {
  // const { google } = require("googleapis");

  try {
    console.log("the try in upload entered");
    const response = await drive.files.create({
      requestBody: {
        name: "stones.jpg",
        mimeType: "application/json",
      },
      media: {
        mimeType: "application/json",
        body: fs.createReadStream(userwalletaddress),
      },
    });
    console.log(response.data);
  } catch (error) {}
};
