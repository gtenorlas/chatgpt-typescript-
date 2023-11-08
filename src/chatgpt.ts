//import Configuration from 'openai';
const { OpenAIApi, Configuration } = require('openai');
//import ChatCompletionRequestMessage from 'openai';
import * as dotenv from 'dotenv';

// Load OpenAI API key from environment variable
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const assistant = await openai.beta.assistants.create({
  name: "Math Tutor",
  instructions: "You are a personal math tutor. Write and run code to answer math questions.",
  tools: [{ type: "code_interpreter" }],
  model: "gpt-4-1106-preview"
});


const thread = await openai.beta.threads.create(assistant);


const message = await openai.beta.threads.messages.create(
  thread.id,
  {
    role: "user",
    content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
  }
);

console.log("message ", message);

const run = await openai.beta.threads.runs.create(
  thread.id,
  {
    assistant_id: assistant.id,
    instructions: "Please address the user as Jane Doe. The user has a premium account."
  }
);
console.log("run: " + run)

const check = await openai.beta.threads.runs.retrieve(
  thread.id,
  run.id
);

console.log("check: " + check);

const messages = await openai.beta.threads.messages.list(
  thread.id
);

console.log ("messages: " + messages);
