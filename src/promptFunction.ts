const promptFunction ={
  "name": "getEstimate",
  "description": "Assistant is a cost estimator expert on learning materials that returns only a JSON object with the hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time and fields) and DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). hiringCost and DIYCost are mandatory and cannot have value of 0.",
  "parameters": {
    "type": "object",
    "properties": {
      "content":{
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Instructions Designer or CopyWriter (Content)",
        "properties": {
          "title": {
            "type": "string",
            "constant value":"Instructions Designer or CopyWriter (Content)",
            "description": "constant value (do not change) = Instructions Designer or CopyWriter (Content)"
          },
          "details": {
            "type": "string",
            "description": "Change the value of the details specific to the content's title and the prompt's context"
          },
          "hiringCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time, Instructions Designer or CopyWriter (Content), and fields or subject specific to prompt's context) price must be in USD"
            }
          },
          "DIYCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). Price must be related to the fields or subject specific to prompt's context, Instructions Designer or CopyWriter (Content), and in USD. No 0 allowed, must have value for both min and max cost"
            }
          }
        }
      },
      "auditory":{
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Voice Over (Auditory)",
        "properties": {
          "title": {
            "type": "string",
            "constant value":"Voice Over (Auditory)",
            "description": "constant value (do not change) = Voice Over (Auditory)"
          },
          "details": {
            "type": "string",
            "description": "Change the value of the details specific to the auditory's title and the prompt's context"
          },
          "hiringCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time, Voice Over (Auditory), and fields or subject specific to prompt's context) price must be in USD"
            }
          },
          "DIYCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). Price must be related to the fields or subject specific to prompt's context, Voice Over (Auditory) and in USD. No 0 allowed, must have value for both min and max cost"
            }
          }
        }
      }
    },
    "required": [
      "content","auditory","title","details","hiringCost","DIYCost"
    ]
  }
};


module.exports ={promptFunction}
