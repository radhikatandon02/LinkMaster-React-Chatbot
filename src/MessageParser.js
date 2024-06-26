class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()

      if (lowerCaseMessage.includes("custom question")) {
          // Extract the question from the message and pass it to handleCustomQuestion
          const question = lowerCaseMessage.replace("custom question", "").trim();
          this.actionProvider.handleCustomQuestion(question);
      }
      
      if (lowerCaseMessage.includes("hello how are you?")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
      if (lowerCaseMessage.includes("data visualization")) {
        this.actionProvider.handleDataVisualList();
      }
      if (lowerCaseMessage.includes("api")) {
        this.actionProvider.handleAPIList();
      }
      if (lowerCaseMessage.includes("interview prep")) {
        this.actionProvider.handleInterviewPrepList();
      }
    }
  }
  export default MessageParser;
  