const Groq = require("groq-sdk");
const readLine = require("readline");
require("dotenv").config();

const groq = new Groq((api_key = process.env.GROQ_API_KEY));

// create readline interface
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function addHistory(question, answer) {
//   let history = [];
//   history.push({ question, answer });
//   return history;
// }

// message role
const messageRole = {
  USER: "user",
  AI: "assistant ",
};
let conversationHistory = [
  {
    role: "system",
    content:
      "limited to only machine learning and AI. Any other questions will be ignored.",
  },
];

// create chat
const Ai_chat = async (ques) => {
  conversationHistory.push({
    role: messageRole.USER,
    content: ques.toLowerCase(),
  });
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: conversationHistory,
      model: "llama3-8b-8192",
    });

    const response = chatCompletion.choices[0]?.message?.content || "";
    // conversationHistory.push({
    //   role: messageRole.AI,
    //   content: response,
    // });
    return response.toLowerCase();
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I couldn't process your request.";
  }
};
// ask question
async function askedQuestion() {
  rl.question(`${messageRole.USER} > `, async (question) => {
    if (question.toLowerCase() === "exit") {
      console.log(".... Good Bye");
      rl.close();
    } else {
      const aiResponse = await Ai_chat(question);
      console.log(`${messageRole.AI} > `, aiResponse);
      // addHistory(question, aiResponse);
      askedQuestion();
    }
  });
}
askedQuestion();

// console.log(addHistory)
