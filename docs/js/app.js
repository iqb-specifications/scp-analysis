
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "scp-analysis",
    "description": "Specification for processing survey output.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "survey-content-analysis": {
        "$id": "scp-analysis@0.2",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Survey output analysis",
        "description": "Specification for processing survey output.",
        "type": "object",
        "properties": {
          "id": {
            "description": "Identifier to handle different analysis definitions.",
            "type": "string",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "name": {
            "description": "Language tagged text",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "lang": {
                  "description": "ISO-language code",
                  "type": "string",
                  "minLength": 1,
                  "pattern": "^[a-z]{2}$",
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "value": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-5>"
                }
              },
              "required": [
                "lang",
                "value"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-3>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "description": "$ref:$.components.schemas.survey-content-analysis.properties.name",
          "items": {
            "description": "Definition of all items from all modules.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "description": "Identifier used in all other definitions of this document",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "name": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                "sources": {
                  "description": "This item will get its value from various sources throughout the survey",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "moduleId": {
                        "description": "Refers to the module used by an instrument of the surveyPart",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-11>"
                      },
                      "unitId": {
                        "description": "Refers to the unit data (UI definition, coding scheme, metadata etc.)",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-12>"
                      },
                      "unitAlias": {
                        "description": "Refers to the unit id used in response data",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-13>"
                      },
                      "sourceVariable": {
                        "description": "Refers to the variable providing its score as item value",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-14>"
                      }
                    },
                    "required": [
                      "moduleId",
                      "unitId",
                      "sourceVariable"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-9>"
                }
              },
              "required": [
                "id",
                "name",
                "sources"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-7>"
            },
            "minItems": 1,
            "x-parser-schema-id": "<anonymous-schema-6>"
          },
          "statusMapping": {
            "description": "Rules how to translate response status into item value",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "itemValue": {
                  "type": "integer",
                  "x-parser-schema-id": "<anonymous-schema-17>"
                },
                "status": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "enum": [
                      "UNSET",
                      "NOT_REACHED",
                      "DISPLAYED",
                      "VALUE_CHANGED",
                      "DERIVE_ERROR",
                      "NO_CODING",
                      "INVALID",
                      "CODING_INCOMPLETE",
                      "CODING_ERROR",
                      "PARTLY_DISPLAYED",
                      "DERIVE_PENDING",
                      "INTENDED_INCOMPLETE",
                      "CODE_SELECTION_PENDING"
                    ],
                    "x-parser-schema-id": "<anonymous-schema-19>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-18>"
                }
              },
              "required": [
                "itemValue",
                "status"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-16>"
            },
            "x-parser-schema-id": "<anonymous-schema-15>"
          },
          "itemScales": {
            "description": "Scales based directly on item values, providing one numeric value per test taker",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "description": "Identifier referred by other scales and survey output.",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-22>"
                },
                "name": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                "description": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                "method": {
                  "description": "Way how to process the item values.",
                  "type": "string",
                  "enum": [
                    "SUM",
                    "RATIO",
                    "MEAN",
                    "MEDIAN"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-23>"
                },
                "methodParameters": {
                  "description": "Depending on the method, different parameters specify the processing.",
                  "oneOf": [
                    {
                      "description": "Parameters for the processing method RATIO.",
                      "type": "object",
                      "properties": {
                        "maxValue": {
                          "description": "If methodParameters is not given, the number of items will be taken as maxValue",
                          "type": "number",
                          "x-parser-schema-id": "<anonymous-schema-26>"
                        }
                      },
                      "required": [
                        "maxValue"
                      ],
                      "additionalProperties": false,
                      "x-parser-schema-id": "<anonymous-schema-25>"
                    }
                  ],
                  "x-parser-schema-id": "<anonymous-schema-24>"
                },
                "items": {
                  "description": "List of all items providing it's value to this specific scale",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "itemId": {
                        "description": "This parameter refers to one entry of the surveyPart item list.",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-29>"
                      },
                      "weight": {
                        "description": "Modifies the item value before processing - works as a multiplier.",
                        "type": "number",
                        "default": 1,
                        "x-parser-schema-id": "<anonymous-schema-30>"
                      }
                    },
                    "required": [
                      "itemId"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-28>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-27>"
                }
              },
              "required": [
                "id",
                "name",
                "method",
                "items"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-21>"
            },
            "x-parser-schema-id": "<anonymous-schema-20>"
          },
          "derivedScales": {
            "description": "Scales based on other scale's value, providing one alphanumeric value per test taker",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "description": "Identifier referred by other scales and survey output.",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-33>"
                },
                "name": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                "description": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                "source": {
                  "description": "Id of the scale providing the value for this derived scale",
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-34>"
                },
                "preProcessing": {
                  "description": "Modifies the value before mapping.",
                  "type": "string",
                  "enum": [
                    "TO_LOWER_CASE",
                    "ROUND_TO_INTEGER"
                  ],
                  "x-parser-schema-id": "<anonymous-schema-35>"
                },
                "mappings": {
                  "description": "Applies the method to the value. The first match will go.",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "method": {
                        "type": "string",
                        "description": "Condition for evaluation",
                        "enum": [
                          "MATCH",
                          "MATCH_REGEX",
                          "LESS_THAN",
                          "MORE_THAN",
                          "MAX",
                          "MIN"
                        ],
                        "x-parser-schema-id": "<anonymous-schema-38>"
                      },
                      "parameters": {
                        "type": "array",
                        "description": "Depending on the method, additional parameter(s) is needed.",
                        "items": {
                          "type": "string",
                          "x-parser-schema-id": "<anonymous-schema-40>"
                        },
                        "minItems": 1,
                        "x-parser-schema-id": "<anonymous-schema-39>"
                      },
                      "newValue": {
                        "description": "Value as outcome of this scale",
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-41>"
                      },
                      "valueLabel": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                      "valueDescription": "$ref:$.components.schemas.survey-content-analysis.properties.name"
                    },
                    "required": [
                      "method",
                      "parameters",
                      "newValue"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-37>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-36>"
                },
                "elseValue": {
                  "description": "Value if no mapping matches",
                  "type": "string",
                  "default": "0",
                  "x-parser-schema-id": "<anonymous-schema-42>"
                },
                "elseValueLabel": "$ref:$.components.schemas.survey-content-analysis.properties.name",
                "elseValueDescription": "$ref:$.components.schemas.survey-content-analysis.properties.name"
              },
              "required": [
                "id",
                "name",
                "source",
                "mappings"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-32>"
            },
            "x-parser-schema-id": "<anonymous-schema-31>"
          }
        },
        "required": [
          "id",
          "items"
        ],
        "additionalProperties": false,
        "$defs": {
          "languageTaggedText": "$ref:$.components.schemas.survey-content-analysis.properties.name",
          "metadata": {
            "$id": "metadata-values@iqb-standard@3.0",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Metadata Values",
            "description": "Data structure to store metadata",
            "type": "object",
            "properties": {
              "profileId": {
                "type": "string",
                "description": "Identifier for the metadata profile",
                "minLength": 1
              },
              "order": {
                "type": "integer",
                "description": "Specifies the position of this profile if more than one are used. Set to -1 if you want to hide/disable the profile."
              },
              "entries": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "Id of the profile entry related to these data",
                      "minLength": 1
                    },
                    "label": {
                      "type": "array",
                      "description": "Used for storing the input of texts. This type applies also in cases when only one language is used.",
                      "items": {
                        "type": "object",
                        "properties": {
                          "lang": {
                            "type": "string",
                            "minLength": 1,
                            "description": "ISO-language code",
                            "pattern": "^[a-z]{2}$"
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "lang",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      "minItems": 1
                    },
                    "value": {
                      "anyOf": [
                        "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.label",
                        {
                          "type": "array",
                          "description": "Used for storing selected vocabulary entries and (optional) additional texts.",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string",
                                "minLength": 1,
                                "description": "Full id of the vocabulary entry as url - including the vocabulary url"
                              },
                              "label": "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.label",
                              "annotation": "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.label"
                            },
                            "required": [
                              "id"
                            ],
                            "additionalProperties": false
                          },
                          "minItems": 1
                        },
                        {
                          "type": "object",
                          "description": "Used for uncoded text, numbers and boolean.",
                          "properties": {
                            "raw": {
                              "type": "string",
                              "description": "Pure value. Numbers and boolean in JavaScript toString() notation ('true', 'false', '23.566')."
                            },
                            "asText": "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.label"
                          },
                          "required": [
                            "raw"
                          ],
                          "additionalProperties": false
                        }
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "value"
                  ]
                },
                "minItems": 1
              }
            },
            "required": [
              "profileId",
              "entries"
            ],
            "additionalProperties": false,
            "$defs": {
              "language_coded_texts": "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.label",
              "vocabulary_entries": "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.value.anyOf[1]",
              "simple_value": "$ref:$.components.schemas.survey-content-analysis.$defs.metadata.properties.entries.items.properties.value.anyOf[2]"
            }
          },
          "item": "$ref:$.components.schemas.survey-content-analysis.properties.items.items",
          "methodParametersRatio": "$ref:$.components.schemas.survey-content-analysis.properties.itemScales.items.properties.methodParameters.oneOf[0]"
        },
        "x-parser-schema-id": "scp-analysis@0.2"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  