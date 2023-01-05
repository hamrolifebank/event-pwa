export default async function uploadToGoogleDrive(req, res) {
  if (req.method === "POST") {
    const { tokenResponse, userwalletaddress } = req.body;
    fetch(
      " https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
        body: JSON.stringify(userwalletaddress),
      }
    ).then((response) => {
      res.status(200).json(response.data);
    });
  }
}
