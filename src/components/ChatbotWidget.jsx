import { useEffect, useMemo, useRef, useState } from 'react';

const quickPrompts = [
  'What is Amicus IPR?',
  'My patent was copied',
  'Trademark infringement on a marketplace',
  'Copyrighted content reuploaded',
  'Trade secret leaked',
  'How do I report in my country?'
];

const knowledgeBase = [
  {
    match: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! I'm the Amicus IPR Assistant. Ask me about patents, trademarks, copyrights, trade secrets, or reporting steps."
  },
  {
    match: ['amicus', 'what is', 'features', 'about app'],
    response: 'Amicus IPR is your Intellectual Property Rights companion. It helps you identify IPR issues, gather evidence, and find country-specific reporting routes and laws.'
  },
  {
    match: ['patent', 'invention', 'utility'],
    response: 'Patent infringement steps: confirm your patent claims, document the infringing product/process, preserve evidence, and consult IP counsel. Use Report IPR for country guidance.'
  },
  {
    match: ['trademark', 'brand', 'logo', 'counterfeit', 'fake'],
    response: 'Trademark issues: capture listings/screenshots, show proof of registration and use, and submit platform takedowns. Consider customs recordation for counterfeits.'
  },
  {
    match: ['copyright', 'piracy', 'reupload', 'copied content'],
    response: 'Copyright infringement: document original creation, capture URLs/screenshots, and submit a takedown request (DMCA-style) to the platform or host.'
  },
  {
    match: ['trade secret', 'confidential', 'nda'],
    response: 'Trade secret misappropriation: preserve access logs and communications, document confidentiality measures, and consult legal counsel for urgent relief.'
  },
  {
    match: ['design', 'industrial design', 'product design'],
    response: 'Design infringement: collect side-by-side comparisons, verify design registration, and submit takedown requests where possible.'
  },
  {
    match: ['domain', 'cybersquatting', 'typosquatting'],
    response: 'Domain abuse: gather WHOIS records and screenshots, prove your trademark rights, and consider a UDRP dispute.'
  },
  {
    match: ['report', 'where', 'file', 'complaint'],
    response: 'Open the Report IPR page and select your country to see official IP office portals and reporting routes.'
  },
  {
    match: ['evidence', 'proof', 'screenshots'],
    response: 'Evidence tips: keep original files, save timestamps, preserve invoices and registrations, and document first use or publication dates.'
  },
  {
    match: ['law', 'laws', 'country'],
    response: 'IP laws vary by country. Use the Report IPR page to view the relevant acts for your jurisdiction.'
  }
];

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function getReply(message) {
  const normalized = message.toLowerCase().trim();
  if (!normalized) {
    return 'Please describe the issue so I can help.';
  }

  const kbMatch = knowledgeBase.find((entry) =>
    entry.match.some((term) => normalized.includes(term))
  );

  if (kbMatch) {
    return kbMatch.response;
  }

  return 'Tell me what happened in 1-2 sentences (e.g., "my patent was copied" or "trademark on a fake listing").';
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Amicus IPR Assistant. Ask me about patents, trademarks, copyrights, trade secrets, or reporting steps.",
      time: getTimeStamp()
    }
  ]);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', text: trimmed, time: getTimeStamp() };
    const assistantReply = {
      role: 'assistant',
      text: getReply(trimmed),
      time: getTimeStamp()
    };

    setMessages((prev) => [...prev, userMessage, assistantReply]);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  const handleQuickPrompt = (prompt) => {
    setOpen(true);
    setInput(prompt);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  };

  const lastUpdated = useMemo(() => new Date().toLocaleDateString(), []);

  return (
    <div className={`chatbot ${open ? 'open' : ''}`} aria-live="polite">
      <button
        className="chatbot-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="chatbot-panel"
      >
        <span className="chatbot-toggle-icon">{open ? '✖️' : '💬'}</span>
        <span className="chatbot-toggle-label">{open ? 'Close' : 'Ask Amicus'}</span>
      </button>

      <div
        id="chatbot-panel"
        className="chatbot-panel"
        role="dialog"
        aria-label="Amicus IPR Assistant"
        aria-modal="false"
      >
        <div className="chatbot-header">
          <div>
            <h3>Amicus IPR Assistant</h3>
            <p>IPR guidance & reporting help</p>
          </div>
          <div className="chatbot-header-actions">
            <span className="chatbot-time">Updated {lastUpdated}</span>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="chatbot-body" ref={bodyRef}>
          {messages.map((message, index) => (
            <div key={`${message.role}-${index}`} className={`chatbot-message ${message.role}`}>
              <div className="chatbot-bubble">
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="chatbot-actions">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              className="chatbot-chip"
              onClick={() => handleQuickPrompt(prompt)}
              type="button"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="chatbot-input">
          <input
            ref={inputRef}
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Type your question"
          />
          <button type="button" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
