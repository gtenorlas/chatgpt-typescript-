const promptFunction = {
  "name": "getEstimate",
  "description": "Assistant is a cost estimator expert on learning materials that returns only a JSON object with the hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time and fields) and DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). hiringCost and DIYCost are mandatory and cannot have value of 0.",
  "parameters": {
    "type": "object",
    "properties": {
      "content": {
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Instructions Designer or CopyWriter (Content)",
        "properties": {
          "title": {
            "type": "string",
            "constant value": "Instructions Designer or CopyWriter (Content)",
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
              "description": "Value must be >  0. DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). Price must be related to the fields or subject specific to prompt's context, Instructions Designer or CopyWriter (Content), and in USD. No 0 allowed, must have value for both min and max cost"
            }
          }
        }
      },
      "auditory": {
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Voice Over (Auditory)",
        "properties": {
          "title": {
            "type": "string",
            "constant value": "Voice Over (Auditory)",
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
              "description": "Value must be >  0. DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). Price must be related to the fields or subject specific to prompt's context, Voice Over (Auditory) and in USD. No 0 allowed, must have value for both min and max cost"
            }
          }
        }
      },
      "visual": {
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Video Production and Editing (Visual)",
        "properties": {
          "title": {
            "type": "string",
            "constant value": "Video Production and Editing (Visual)",
            "description": "constant value (do not change) = Video Production and Editing (Visual)"
          },
          "details": {
            "type": "string",
            "description": "Change the value of the details specific to the visual's title and the prompt's context"
          },
          "hiringCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time, Video Production and Editing (Visual), and fields or subject specific to prompt's context) price must be in USD"
            }
          },
          "DIYCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "Value must be >  0. DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). Price must be related to the fields or subject specific to prompt's context, Video Production and Editing (Visual) and in USD. No 0 allowed, must have value for both min and max cost"
            }
          }
        }
      },
      "distribution": {
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Learning Management System (Distribution)",
        "properties": {
          "title": {
            "type": "string",
            "constant value": "Learning Management System (Distribution)",
            "description": "constant value (do not change) = Learning Management System (Distribution)"
          },
          "details": {
            "type": "string",
            "description": "Change the value of the details specific to the distribution's title and the prompt's context"
          },
          "hiringCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "hiring cost [min cost in USD, max cost in USD] (find cost amount as if the user is hiring someone from Upwork or fiverr for a specific time, Learning Management System (Distribution), and fields or subject specific to prompt's context) price must be in USD"
            }
          },
          "DIYCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "Value must be >  0. DIY (Do it yourself) cost [min cost in USD, max cost in USD] (find the cost amount as if the user will be using the platform not limited to cohere, jasper, speechify, elevenlabs, descript, canva, nas.io, mighty networks, thinkific). Price must be related to the fields or subject specific to prompt's context, Learning Management System (Distribution) and in USD. No 0 allowed, must have value for both min and max cost"
            }
          }
        }
      },
      "summary": {
        "type": "object",
        "description": "This section provides title, details, hiringCost, and DIYCost related to Total Estimate (Summary)",
        "properties": {
          "title": {
            "type": "string",
            "constant value": "Total Estimate (Summary)",
            "description": "constant value (do not change) = Total Estimate (Summary)"
          },
          "details": {
            "type": "string",
            "description": "Change the value of the details specific to the summary's title and the prompt's context"
          },
          "hiringCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "Required field. The total cost of min and max of the sum of hiringCost from content, auditory, visual, and distribution"
            }
          },
          "DIYCost": {
            "type": "array",
            "items": {
              "type": "number",
              "description": "Required field. The total cost of min and max of the sum of DIYCost from content, auditory, visual, and distribution"
            }
          }
        }
      }
    },
    "required": [
      "content", "auditory", "visual", "title", "details", "hiringCost", "DIYCost", "distribution", "summary"
    ]
  }
};


module.exports= { promptFunction }
