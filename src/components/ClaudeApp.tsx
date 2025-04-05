
import React, { useState } from 'react';
import ClaudeHeader from './ClaudeHeader';
import ClaudeMessageList from './ClaudeMessageList';
import ClaudeInputBox from './ClaudeInputBox';
import ClaudeEmptyState from './ClaudeEmptyState';

interface Message {
  id: string;
  content: string;
  isHuman: boolean;
}

const ClaudeApp = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      isHuman: true,
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: `claude-${Date.now()}`,
        content: getAIResponse(content),
        isHuman: false,
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  // Simple AI response generator
  const getAIResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello! I'm Claude, an AI assistant created by Anthropic. How can I help you today?";
    }
    
    if (lowerCaseMessage.includes('who are you') || lowerCaseMessage.includes('what are you')) {
      return "I'm Claude, an AI assistant made by Anthropic. I'm designed to be helpful, harmless, and honest. I can help with various tasks like answering questions, creative writing, summarizing information, and more.";
    }
    
    if (lowerCaseMessage.includes('help')) {
      return "I'd be happy to help! You can ask me questions, request creative content, seek information on various topics, get writing assistance, or just chat. What would you like to explore today?";
    }
    
    return "Thank you for your message. I'm Claude, an AI assistant by Anthropic. I'm here to provide helpful, harmless, and honest assistance. Could you provide more details about what you're looking for so I can better assist you?";
  };

  return (
    <div className="claude-container">
      <ClaudeHeader />
      <main className="claude-main">
        {messages.length === 0 ? (
          <ClaudeEmptyState />
        ) : (
          <ClaudeMessageList messages={messages} />
        )}
      </main>
      <ClaudeInputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ClaudeApp;
