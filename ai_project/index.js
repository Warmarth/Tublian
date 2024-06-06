const Groq = require("groq-sdk");
const readLine = require("readline");
require("dotenv").config();

const groq = new Groq((api_key = process.env.GROQ_API_KEY));

// create readline interface
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// message role
const messageRole = {
  USER: "USER > ",
  AI: "AI   > ",
};

// create chat
const Ai_chat = async (ques) => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: ques,
        },
      ],
      model: "llama3-8b-8192",
    });

    return chatCompletion.choices[0]?.message?.content || "";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, I couldn't process your request.";
  }
};
// ask question
async function askedQuestion() {
  rl.question(messageRole.USER, async (question) => {
    if (question === "exit") {
      console.log(".... Good Bye");
      rl.close();
    } else {
      // console.log(messageRole.USER, question);
      const aiResponse = await Ai_chat(question);
      console.log(messageRole.AI, aiResponse);
      askedQuestion();
    }
  });
}
askedQuestion();
