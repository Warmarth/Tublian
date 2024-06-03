const Groq = require("groq-sdk");
const readLine = require("readline");
require("dotenv").config();

const groq = new Groq((api_key = process.env.GROQ_API_KEY));

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const Ai_chat = (ques) => {
  groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: ques,
        },
      ],
      model: "llama3-8b-8192",
    })
    .then((chatCompletion) => {
      rl.output.write(chatCompletion.choices[0]?.message?.content || "");
      console.log("\n sentiment:  ");
    });
};

function askedQuestion() {
  rl.question("ask Your question ? ", (question) => {
    if (question === "exit") {
      console.log(".... Good Bye");
      rl.close();
    } else {
      Ai_chat(question);
      askedQuestion();
    }
  });
}

askedQuestion();
