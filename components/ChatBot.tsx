import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Hello! I am the Hydrixon AI assistant. How can I help you learn more about our company today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    // Note: The current message is sent via sendMessage, so it shouldn't be added to history here.

    const responseText = await generateChatResponse(userMsg.text, history);

    const modelMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setLoadingState(LoadingState.IDLE);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden animate-fade-in-up transition-all" style={{ maxHeight: '600px', height: '500px' }}>
          
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-white" />
              <div>
                <h3 className="text-white font-semibold text-sm">Hydrixon Assistant</h3>
                <span className="flex items-center text-xs text-brand-100">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brand-100 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-br-none'
                      : 'bg-slate-700 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-slate-700 rounded-2xl rounded-bl-none px-4 py-2 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                  <span className="text-xs text-slate-400">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-slate-800 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about Hydrixon..."
                className="w-full bg-slate-900 text-white rounded-full py-2.5 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 border border-slate-700"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || loadingState === LoadingState.LOADING}
                className="absolute right-1 top-1 p-1.5 bg-brand-600 rounded-full text-white hover:bg-brand-700 disabled:opacity-50 disabled:hover:bg-brand-600 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-brand-500/30 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
          isOpen ? 'bg-slate-700 text-white' : 'bg-brand-600 text-white'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6 group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default ChatBot;