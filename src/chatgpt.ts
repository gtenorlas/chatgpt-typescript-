import OpenAI from 'openai'; //Open AI SDK 4
import dotenv from 'dotenv';
// Load OpenAI API key from environment variable
dotenv.config();

const createAssistantAndThread = async () => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
      });


    const assistant = await openai.beta.assistants.create({
      name: "Math Tutor",
      instructions: "You are a personal math tutor. Write and run code to answer math questions.",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4-1106-preview"
    });

    const thread = await openai.beta.threads.create(assistant);

    return { assistant, thread };
  };

  const createAndSendMessage = async (thread) => {

    const message = await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
    });

    return message;
  };

  const createAndRunAssistant = async (thread, assistant) => {

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: assistant.id,
      instructions: "Please address the user as Jane Doe. The user has a premium account."
    });

    return run;
  };

  const retrieveRun = async (thread, runId) => {


    const check = await openai.beta.threads.runs.retrieve(thread.id, runId);

    return check;
  };

  const listMessages = async (thread) => {

    const messages = await openai.beta.threads.messages.list(thread.id);

    return messages;
  };

  (async () => {
    try {
      const { assistant, thread } = await createAssistantAndThread();
      const message = await createAndSendMessage(thread);
      console.log("message: ", message);

      const run = await createAndRunAssistant(thread, assistant);
      console.log("run: ", run);

      const check = await retrieveRun(thread, run.id);
      console.log("check: ", check);

      const messages = await listMessages(thread);
      console.log("messages: ", messages);
    } catch (error) {
      console.error("Error:", error);
    }
  })();
