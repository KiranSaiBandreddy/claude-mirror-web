
import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface ClaudeInputBoxProps {
  onSendMessage: (message: string) => void;
}

const ClaudeInputBox = ({ onSendMessage }: ClaudeInputBoxProps) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <footer className="claude-footer">
      <form onSubmit={handleSubmit} className="claude-input-container">
        <textarea
          className="claude-textarea"
          placeholder="Message Claude..."
          value={input}
          onChange={handleTextareaChange}
          onKeyDown={handleKeyDown}
          rows={3}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="claude-send-button"
          aria-label="Send message"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </form>
      <div className="text-xs text-center mt-3 text-gray-500">
        Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest.
      </div>
    </footer>
  );
};

export default ClaudeInputBox;
