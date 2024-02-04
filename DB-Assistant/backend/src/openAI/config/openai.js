const  OpenAIApi = require("openai");

const openaiApiKey = new OpenAIApi({
    apiKey: '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'
});

const openai = new OpenAIApi(openaiApiKey);

module.exports = openai;