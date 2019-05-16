const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();

//@route GET api/auth/
//@desc Test API
//@access Public
//@role Guest
router.get("/", (req, res) => {
  res.send("Auth Route ");
});

// SAMPLE REST CLIENT CODES

// 1 AXIOS

// const githubClientID = "a2170420b7e77a612f17";
// const githubSecret = "a1419aefaea2ded436032b9bac9a96841bbdfa35";

// // Declare the redirect route
// router.get("/oauth/redirect", (req, res) => {
//     // The req.query object has the query params that
//     // were sent to this route. We want the `code` param
//     const requestToken = req.query.code;
//     axios({
//       // make a POST request
//       method: "post",
//       // to the Github authentication API, with the client ID, client secret
//       // and request token
//       url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
//       // Set the content type header, so that we get the response in JSOn
//       headers: {
//         accept: "application/json"
//       }
//     }).then(response => {
//       // Once we get the response, extract the access token from
//       // the response body
//       const accessToken = response.data.access_token;
//       // redirect the user to the welcome page, along with the access token
//       res.redirect(`/welcome.html?access_token=${accessToken}`);
//     });
//   });

// 2. REQUEST

// //@route GET api/auth/redirect/
// //@desc Test API
// //@access Public
// //@role Guest
// router.get("/redirect", (req, res) => {
//   try {
//     const requestToken = req.query.code;

//     const options = {
//       uri: `https://github.com/login/oauth/access_token?client_id=${config.get(
//         "githubClientID"
//       )}&client_secret=${config.get("githubSecret")}&code=${requestToken}`,
//       method: `POST`,
//       headers: {
//         accept: "application/json"
//       }
//     };

//     request(options, (error, response, body) => {
//       if (error) {
//         console.log(error);
//       }
//       if (response.statusCode !== 200) {
//         res.status(404).json({ message: "NOT AUTHNTICATED" });
//       }

//       res.json(JSON.parse(body));
//     });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;
