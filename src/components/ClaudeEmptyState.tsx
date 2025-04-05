
import React from 'react';

const ClaudeEmptyState = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
      <div className="h-16 w-16 rounded-full bg-claude-purple flex items-center justify-center text-white text-2xl mb-6">
        C
      </div>
      <h2 className="text-2xl font-semibold mb-2">How can I help you today?</h2>
      <p className="text-claude-darkGray max-w-md mb-8">
        I'm Claude, an AI assistant created by Anthropic. I'm designed to be helpful, harmless, and honest.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <SuggestionCard 
          title="Write something creative"
          description="I can help with poetry, stories, scripts, and other creative content."
        />
        <SuggestionCard 
          title="Answer questions"
          description="Ask me about history, science, cooking, or nearly any topic."
        />
        <SuggestionCard 
          title="Summarize content"
          description="I can condense articles, papers, or lengthy text into key points."
        />
        <SuggestionCard 
          title="Brainstorm ideas"
          description="Let's collaborate on projects, business ideas, or solutions."
        />
      </div>
    </div>
  );
};

const SuggestionCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="border border-claude-border rounded-xl p-4 hover:bg-claude-gray/50 transition-colors cursor-pointer text-left">
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-claude-darkGray">{description}</p>
    </div>
  );
};

export default ClaudeEmptyState;
