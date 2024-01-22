const  OpenAIApi = require("openai");

const openaiApiKey = new OpenAIApi({
    apiKey: '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'
});

const openai = new OpenAIApi(openaiApiKey);

module.exports = openai;