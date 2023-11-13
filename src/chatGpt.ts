require("dotenv").config();
const OpenAI2 = require("openai");


const OPENAI_API_KEY2 = process.env.OPENAI_API_KEY as string;

async function getOpenAICompletionRegular(systemPrompt: string, userPrompt: string, temperature = 1.5): Promise<string> {


  try {
    // v4+ OpenAI API.
    // On v3? View the migration guide here: https://github.com/openai/openai-node/discussions/217
    const openai = new OpenAI2({ apiKey: OPENAI_API_KEY2 });
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo-1106', // gpt-3.5-turbo, gpt-4
      max_tokens: 500,
      temperature: 1.5,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ]
    });

    let content = completion.choices[0]?.message?.content?.trim() ?? '';
    //console.log('OpenAI Output: \n', content);
    if (content && content.includes('{') && content.includes('}')) {
      content = extractJson2(content);
    }
    return content;
  }
  catch (e) {
    console.error('Error getting data:', e);
    throw e;
  }
}

function extractJson2(content: string) {
  const regex = /\{(?:[^{}]|{[^{}]*})*\}/g;
  const match = content.match(regex);

  if (match) {
    // If we get back pure text it can have invalid carriage returns
    return match[0].replace(/"([^"]*)"/g, (match) => match.replace(/\n/g, "\\n"));
  } else {
    return '';
  }
}


/* const systemPrompt = `
Assistant is a cost estimator expert on learning materials that returns only a JSON object with the hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time and fields) and
DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific).

hiringCost and DIYCost are mandatory and cannot have value of 0.

      The expected JSON object with sections's array with 5 elements. Each element have a title that explains the cost related to it. You have to provide the cost estimate that relates to the title and the user prompt.

      {
        "sections":
            {
                "title": "Instructions Designer or CopyWriter (Content)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            },
            {
                "title": "Voice Over (Auditory)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            },
            {
                "title": "Video Production and Editing (Visual)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            },
            {
                "title": "Learning Management System (Distribution)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            },
            {
              "title": "Total Estimate (Summary)",
              "details": "detailed context or specifics about this information",
              "hiringCost": [
                total min cost in USD,
                total max cost in USD
              ],
              "DIYCost": [
                total min cost in USD,
                total max cost in USD
              ]
          }
        ]
    }

      Rules:
      - Keep the 5 elements in the array with object and keys title, details, hiringCost, and DIYCost
      - Keep the title the same as is
      - Change the value of the details specific to prompt's context
      - Change the value of hiringCost and DIYCost with an array value containing the min and max cost
      - Return a valid JSON object. Do NOT include any text outside of the JSON object.



      - Do NOT include any text outside of the JSON object. Do not provide any additional explanations or context. Just the JSON object is needed.
    `; */

    const systemPromptRegular = `
Assistant is a cost estimator expert on learning materials that returns only a JSON object with the hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time and fields) and
DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific).

hiringCost and DIYCost are mandatory and cannot have value of 0.

      The expected JSON object with 5 object section. Each object section have a title that explains the cost related to it. You have to provide the cost estimate that relates to the title and the user prompt.

      {
        "content":
            {
                "title": "Instructions Designer or CopyWriter (Content)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            }, "auditory":  {
                "title": "Voice Over (Auditory)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            }, "visual":  {

                "title": "Video Production and Editing (Visual)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            }, "distribution":  {

                "title": "Learning Management System (Distribution)",
                "details": "detailed context or specifics about this information",
                "hiringCost": [
                  min cost in USD,
                  max cost in USD
                ],
                "DIYCost": [
                  min cost in USD,
                  max cost in USD
                ]
            }, "summary":  {

              "title": "Total Estimate (Summary)",
              "details": "detailed context or specifics about this information",
              "hiringCost": [
                total min cost in USD,
                total max cost in USD
              ],
              "DIYCost": [
                total min cost in USD,
                total max cost in USD
              ]
          }
        ]
    }

      Rules:
      - Keep the 5 object section with object and keys title, details, hiringCost, and DIYCost
      - Keep the title the same as is
      - Change the value of the details specific to prompt's context
      - Change the value of hiringCost and DIYCost with an array value containing the min and max cost
      - Return a valid JSON object. Do NOT include any text outside of the JSON object.



      - Do NOT include any text outside of the JSON object. Do not provide any additional explanations or context. Just the JSON object is needed.
    `;

const mainRegular = async () => {
  const userPrompt = "how much would a 30 min course with slides and ai voice over cost?"
  let results = '';
  let parsedResults: string | object = '';
  try {
    results = await getOpenAICompletionRegular(systemPromptRegular, userPrompt);
    //console.log("results: ", results);
    if (results) {
      parsedResults = JSON.parse(results);
    }
    console.log("parsed results: ", parsedResults);
  }
  catch (e) {
    console.log(e);
    throw e;
  }

  return parsedResults;

}

mainRegular();


module.exports = {getOpenAICompletionRegular}
