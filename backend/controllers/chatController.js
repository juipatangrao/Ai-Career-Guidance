const generateResponse = require("../services/geminiService");
exports.chat = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { message } = req.body;

    const reply = await generateResponse(message);

    res.json({
      success: true,
      reply,
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
// exports.chat = async (req, res) => {
//   try {
//     const { message } = req.body;

//     const reply = await generateResponse(message);

//     res.json({
//       success: true,
//       reply,
//     });

//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//     });
//   }
// };