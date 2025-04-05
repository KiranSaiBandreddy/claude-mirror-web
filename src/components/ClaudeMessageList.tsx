
import React from 'react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isHuman: boolean;
}

interface ClaudeMessageListProps {
  messages: Message[];
}

const ClaudeAvatar = ({ isHuman }: { isHuman: boolean }) => {
  return (
    <div className={cn(
      "claude-avatar",
      isHuman ? "bg-gray-400" : "bg-claude-purple"
    )}>
      {isHuman ? 'Y' : 'C'}
    </div>
  );
};

const ClaudeMessage = ({ message }: { message: Message }) => {
  return (
    <div className={cn(
      message.isHuman ? "claude-message-human" : "claude-message-ai"
    )}>
      <ClaudeAvatar isHuman={message.isHuman} />
      <div 
        className={cn(
          message.isHuman 
            ? "claude-message-bubble-human" 
            : "claude-message-bubble-ai"
        )}
      >
        {message.content}
      </div>
    </div>
  );
};

const ClaudeMessageList = ({ messages }: ClaudeMessageListProps) => {
  return (
    <div className="claude-messages">
      {messages.map((message) => (
        <ClaudeMessage key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ClaudeMessageList;
