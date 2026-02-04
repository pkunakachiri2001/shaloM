import { useEffect, useMemo, useRef, useState } from 'react';

const quickPrompts = [
  'What can I do in LexGuard?',
  'My phone was hacked',
  'Show emergency contacts',
  'Account hacked - what to do?',
  'How to report cyber crime?',
  'Money stolen from account',
  'Fake profile using my photo'
];

const knowledgeBase = [
  {
    match: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response:
      "Hello! I'm the LexGuard Assistant. Ask me about any feature or cyber incident - phone hacking, account theft, online fraud, harassment, etc."
  },
  {
    match: ['what is lexguard', 'what can i do', 'features', 'app do', 'about app', 'lexguard'],
    response:
      'LexGuard is your digital legal companion. It offers Cyber Law Academy lessons, a Crime Identifier to classify incidents, Emergency Tools with reporting templates and contacts, Legal News updates, and a Career hub.'
  },
  
  // PHONE & DEVICE HACKING
  {
    match: ['phone hacked', 'mobile hacked', 'phone hack', 'device hacked', 'phone compromised', 'someone hacked my phone', 'my phone'],
    response:
      'If your phone is hacked: 1) Turn on airplane mode immediately 2) Change all passwords from another device 3) Enable 2FA everywhere 4) Run antivirus scan 5) Check installed apps & remove suspicious ones 6) Factory reset if needed 7) Call 1930 to report 8) File complaint at cybercrime.gov.in'
  },
  {
    match: ['strange apps', 'unknown apps', 'apps i didnt install', 'suspicious app'],
    response:
      "Unknown apps may be malware. Immediately: 1) Don't open the app 2) Uninstall it 3) Run antivirus 4) Change passwords 5) Check bank accounts 6) Report to 1930 if financial data was accessed"
  },
  {
    match: ['phone slow', 'phone acting weird', 'phone behaving strange', 'battery draining'],
    response:
      'These could be hacking signs. Check: 1) Installed apps for unknown ones 2) Data usage for spikes 3) Battery usage for suspicious apps 4) Run antivirus 5) Update OS & apps 6) If continues, factory reset & report to 1930'
  },
  
  // ACCOUNT HACKING
  {
    match: ['account hacked', 'instagram hacked', 'facebook hacked', 'whatsapp hacked', 'social media hacked', 'email hacked', 'gmail hacked', 'twitter hacked', 'linkedin hacked'],
    response:
      "Account hacked? Act fast: 1) Try 'Forgot Password' to recover 2) Check recovery email/phone 3) Enable 2FA immediately 4) Review recent activity & revoke suspicious sessions 5) Alert friends not to click links from your account 6) Report to platform & file complaint at cybercrime.gov.in"
  },
  {
    match: ['cant login', 'password changed', 'locked out', 'account locked'],
    response:
      "If locked out: 1) Use 'Forgot Password' or account recovery 2) Check recovery email for alerts 3) Contact platform support immediately 4) If hacker changed recovery details, file complaint at cybercrime.gov.in with proof of ownership 5) Call 1930 for guidance"
  },
  {
    match: ['two factor', '2fa', 'otp', 'verification code'],
    response:
      'Enable 2FA on all accounts: email, banking, social media. Use authenticator apps (Google Authenticator, Microsoft Authenticator) instead of SMS when possible. Never share OTP/verification codes with anyone, even if they claim to be from bank/company.'
  },
  
  // IDENTITY THEFT & FAKE PROFILES
  {
    match: ['fake profile', 'fake account', 'someone using my photo', 'impersonation', 'identity theft', 'using my name', 'duplicate account'],
    response:
      'For fake profiles: 1) Screenshot the fake profile as evidence 2) Report to the platform directly 3) Alert friends/family not to interact 4) File complaint at cybercrime.gov.in 5) Call 1930 for serious cases 6) Use Crime Identifier in LexGuard for legal info 7) May fall under IT Act Sec 66C/66D'
  },
  {
    match: ['deepfake', 'morphed photo', 'fake video', 'edited photo'],
    response:
      'Deepfakes/morphed content is serious. Immediately: 1) Do NOT share or forward 2) Screenshot & save as evidence 3) Report to cybercrime.gov.in 4) File police complaint (IT Act Sec 66E, 67) 5) Contact platform to remove content 6) Seek legal help for defamation case if needed'
  },
  
  // FINANCIAL FRAUD
  {
    match: ['money stolen', 'bank account hacked', 'unauthorized transaction', 'fraud payment', 'upi fraud', 'credit card fraud', 'lost money', 'paytm fraud', 'gpay fraud', 'phonepe fraud'],
    response:
      "Financial fraud? Act within minutes: 1) Call bank immediately to freeze account/card 2) Note transaction ID & time 3) File complaint at cybercrime.gov.in within 24hrs 4) Call 1930 (cyber helpline) 5) Email bank's fraud team 6) DO NOT wait - quick action can recover money"
  },
  {
    match: ['lottery scam', 'prize scam', 'won lottery', 'kbc lottery', 'tax scam', 'won prize'],
    response:
      `This is a scam. No real lottery/prize requires advance payment. Never pay "processing fees" or "taxes". If you already paid: 1) File complaint at cybercrime.gov.in immediately 2) Call 1930 3) Inform your bank 4) Block contact 5) Save all messages as evidence`
  },
  {
    match: ['qr code scam', 'payment qr', 'scanner app', 'scan to receive'],
    response:
      `Beware QR code scams! Never scan QR codes sent by strangers to "receive" money - QR codes are only for PAYING, not receiving. If scammed: 1) Contact bank 2) File complaint at cybercrime.gov.in 3) Call 1930 4) Note transaction details`
  },
  
  // PHISHING & SCAMS
  {
    match: ['phishing', 'suspicious link', 'fake website', 'fake email', 'spam message', 'suspicious sms', 'suspicious email'],
    response:
      "Phishing attempt! Do NOT click links or share info. Signs: urgent tone, spelling errors, suspicious sender. If you clicked: 1) Don't enter any details 2) Change passwords immediately 3) Run antivirus 4) Monitor bank accounts 5) Report to cybercrime.gov.in"
  },
  {
    match: ['job scam', 'fake job', 'work from home scam', 'job offer scam', 'recruitment fraud'],
    response:
      'Job scams trick victims into paying fees. Red flags: upfront payment, too-good salary, no interview, WhatsApp-only contact. If scammed: 1) File complaint at cybercrime.gov.in 2) Call 1930 3) Report on job portal 4) Warn others 5) Try to recover money via bank'
  },
  {
    match: ['online shopping fraud', 'fake seller', 'product not received', 'olx fraud', 'fake website', 'amazon fraud', 'flipkart fraud'],
    response:
      'Online shopping fraud: 1) Save all transaction records, chats, screenshots 2) Contact seller & platform 3) If no response, file complaint at cybercrime.gov.in 4) Contact payment gateway/bank for refund 5) Call 1930 6) Use only trusted platforms with buyer protection'
  },
  
  // HARASSMENT & THREATS
  {
    match: ['cyberbullying', 'online harassment', 'threatening messages', 'blackmail', 'sextortion', 'revenge porn', 'harassing me'],
    response:
      "This is serious. Safety first: 1) Do NOT engage or pay 2) Screenshot everything as evidence 3) Block immediately 4) File complaint at cybercrime.gov.in 5) Call 1930 or 181 (women) 6) Contact police if threatened 7) Covered under IT Act Sec 66A, 67, 354C, 509 IPC"
  },
  {
    match: ['stalking', 'cyber stalking', 'following me online', 'tracking me'],
    response:
      "Cyber stalking is illegal. Protect yourself: 1) Don't respond to stalker 2) Block on all platforms 3) Make profiles private 4) Screenshot evidence 5) File police complaint (IPC 354D) 6) Report at cybercrime.gov.in 7) Call 181 (women helpline) 8) Inform family/employer if serious"
  },
  
  // RANSOMWARE & MALWARE
  {
    match: ['ransomware', 'files locked', 'virus', 'malware', 'trojan', 'files encrypted'],
    response:
      'Ransomware/malware detected: 1) Disconnect from internet immediately 2) Do NOT pay ransom 3) Run antivirus in safe mode 4) Contact IT expert for decryption 5) File complaint at cybercrime.gov.in 6) Call 1930 7) Restore from backup if available 8) Report to CERT-In'
  },
  
  // DATA BREACH & PRIVACY
  {
    match: ['data breach', 'data leak', 'privacy breach', 'personal info leaked', 'aadhaar leak'],
    response:
      'Data breach response: 1) Change passwords immediately 2) Enable 2FA everywhere 3) Monitor bank/credit accounts 4) Check if breach is public (Have I Been Pwned) 5) File complaint if financial loss 6) Alert contacts if contact data leaked 7) Report to CERT-In & cybercrime.gov.in'
  },
  
  // PASSWORD & SECURITY
  {
    match: ['password security', 'strong password', 'password tips', 'secure password', 'create password'],
    response:
      `Password best practices: 1) Use 12+ characters with mix of letters, numbers, symbols 2) Never reuse passwords 3) Use password manager 4) Enable 2FA everywhere 5) Change if compromised 6) Never share passwords 7) Use passphrases like "MyDog@te3Bones!" instead of "password123"`
  },
  {
    match: ['how to secure', 'protect account', 'security tips', 'stay safe online', 'cyber safety', 'protect myself'],
    response:
      "Cyber safety tips: 1) Enable 2FA on all accounts 2) Use strong unique passwords 3) Don't click suspicious links 4) Verify sender before sharing info 5) Keep software updated 6) Use antivirus 7) Back up important data 8) Be cautious on public WiFi 9) Check app permissions"
  },
  
  // EVIDENCE & LEGAL
  {
    match: ['evidence', 'proof', 'how to collect evidence', 'screenshots', 'save proof'],
    response:
      "Collecting evidence: 1) Take screenshots with date/time visible 2) Save all messages, emails, transaction records 3) Note URLs & usernames 4) Record phone calls (if legal) 5) Keep original files untouched 6) Get witness statements 7) Submit to cybercrime.gov.in 8) Don't delete anything"
  },
  {
    match: ['legal action', 'file case', 'lawyer', 'court', 'fir', 'police complaint'],
    response:
      'Legal steps: 1) File online complaint at cybercrime.gov.in 2) Visit nearest police station with evidence 3) Get FIR copy 4) Note complaint/FIR number 5) For serious cases, consult cyber law lawyer 6) Track complaint status online 7) Call 1930 for guidance on legal process'
  },
  
  // APP-SPECIFIC GUIDANCE
  {
    match: ['navigate', 'menu', 'where', 'find page', 'open page'],
    response:
      'Use the top menu or the bottom navigation to open pages like Academy, Identifier, Emergency Tools, News, Career, and About.'
  },
  {
    match: ['academy', 'learn', 'course', 'cyber law academy', 'education'],
    response:
      'The Cyber Law Academy provides learning modules on cyber law concepts, key acts, and practical guidance. Open the Academy page from the menu or bottom navigation.'
  },
  {
    match: ['crime types', 'types of cyber crime', 'examples', 'what counts as', 'cyber crime list'],
    response:
      'LexGuard covers common cyber crime scenarios like identity theft, phishing, harassment, fake profiles, account hacking, and online fraud. Use Crime Identifier to classify your situation.'
  },
  {
    match: ['identifier', 'crime identifier', 'analyze', 'classify', 'situation'],
    response:
      'Crime Identifier helps you describe a cyber incident and get a likely category, legal references, and immediate action steps. Go to Identifier and enter your situation.'
  },
  {
    match: ['how to use identifier', 'use crime identifier'],
    response:
      'Open Identifier, type your situation in detail, then select "Analyze Situation". You will receive a category, legal context, and immediate actions.'
  },
  {
    match: ['emergency', 'contacts', 'helpline'],
    response:
      'Emergency Tools provides quick reporting templates and contacts like Cyber Crime Helpline 1930, Police 100, and Women Helpline 181, plus useful portals such as cybercrime.gov.in.'
  },
  {
    match: ['report', 'file complaint', 'complaint template', 'how to report', 'incident report'],
    response:
      'Use Emergency Tools then "Report Incident" to draft a complaint and capture evidence details. For official filing, visit cybercrime.gov.in or call 1930 for guidance.'
  },
  {
    match: ['cybercrime.gov.in', 'cyber crime portal', 'national cyber crime portal'],
    response:
      'The National Cyber Crime Portal (cybercrime.gov.in) is the official site to file and track complaints in India.'
  },
  {
    match: ['1930', 'cyber helpline', 'cybercrime helpline'],
    response:
      'The Cyber Crime Helpline number is 1930 (India). Use it for urgent guidance on cyber incidents. Available 24/7.'
  },
  {
    match: ['100', 'police', 'emergency police'],
    response:
      'Police emergency number is 100 (India). Use it for immediate danger situations.'
  },
  {
    match: ['181', 'women helpline', 'women safety'],
    response:
      'Women Helpline number is 181 (India). Available 24/7 for support in harassment or safety concerns.'
  },
  {
    match: ['news', 'latest', 'updates'],
    response:
      'The News section aggregates legal and cyber safety updates from sources like Supreme Court, CERT-In, and government portals.'
  },
  {
    match: ['cert-in', 'cert in', 'alerts', 'advisory'],
    response:
      'CERT-In provides cybersecurity advisories and alerts. You can access it from the News or Resources links.'
  },
  {
    match: ['it act', 'information technology act', 'it act 2000'],
    response:
      'The IT Act 2000 is a core cyber law framework in India. LexGuard links to official resources in the footer.'
  },
  {
    match: ['dpdp', 'data protection', 'privacy law'],
    response:
      'LexGuard references data protection topics including the DPDP Act 2023 in the About and learning sections.'
  },
  {
    match: ['career', 'jobs', 'internship'],
    response:
      'The Career Hub offers guidance and resources for law and tech careers, including skill-building and opportunities.'
  },
  {
    match: ['skills', 'learn skills', 'career path', 'opportunities'],
    response:
      'Check the Career Hub for skills guidance, resources, and growth paths in cyber law and legal tech.'
  },
  {
    match: ['contact', 'help', 'support'],
    response:
      'For urgent help, use Emergency Tools or call 1930 (cyber helpline) or 100 (police). For non-urgent guidance, explore Academy and Identifier.'
  },
  {
    match: ['offline', 'pwa', 'install app', 'add to home screen', 'app on phone'],
    response:
      'LexGuard is built as a PWA, so you can add it to your home screen and use some features offline.'
  },
  {
    match: ['about', 'project', 'why lexguard'],
    response:
      'The About page explains the mission, tech stack, and why LexGuard helps students and citizens navigate cyber law.'
  },
  {
    match: ['developer', 'creator', 'who made', 'author'],
    response:
      'LexGuard was created by Shalom Chikaka, a BBALLB student at Vishwakarma University Pune, as a Law & Technology educational project.'
  },
  {
    match: ['thanks', 'thank you', 'thx', 'great'],
    response:
      'You are welcome! Ask me anything else about LexGuard or cyber safety. Stay safe online!'
  }
];

const defaultReplies = [
  "I can help with cyber incidents like phone hacking, account theft, fraud, harassment. I also guide you through LexGuard features. What do you need help with?",
  "Ask me about cyber safety, reporting incidents, or navigating LexGuard features.",
  "Not sure? Try: 'My phone was hacked' or 'How to report cyber crime?'"
];

const pageHints = [
  { keywords: ['academy', 'cyber law academy'], reply: 'Open "Academy" from the menu or bottom navigation.' },
  { keywords: ['identifier', 'crime identifier'], reply: 'Open "Identifier" from the menu or bottom navigation.' },
  { keywords: ['emergency', 'emergency tools'], reply: 'Open "Emergency" from the menu or bottom navigation.' },
  { keywords: ['news', 'latest news'], reply: 'Open "News" from the menu or bottom navigation.' },
  { keywords: ['career', 'career hub'], reply: 'Open "Career" from the menu or bottom navigation.' },
  { keywords: ['about'], reply: 'Open "About" from the menu or bottom navigation.' }
];

function getSmartReply(userText) {
  const normalized = userText.toLowerCase();
  const pageHint = pageHints.find(item => item.keywords.some(key => normalized.includes(key)));
  if (pageHint && normalized.includes('where')) return pageHint.reply;
  const entry = knowledgeBase.find(item => item.match.some(key => normalized.includes(key)));
  if (entry) return entry.response;
  return defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
}

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm LexGuard Assistant. Ask me about cyber incidents (phone hacked, account theft, fraud) or app features.",
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
      text: getSmartReply(trimmed),
      time: getTimeStamp()
    };

    setMessages(prev => [...prev, userMessage, assistantReply]);
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
      <button className="chatbot-toggle" onClick={() => setOpen(!open)}>
        <span className="chatbot-toggle-icon">💬</span>
        <span className="chatbot-toggle-label">Ask LexGuard</span>
      </button>

      <div className="chatbot-panel" role="dialog" aria-label="LexGuard Assistant">
        <div className="chatbot-header">
          <div>
            <h3>LexGuard Assistant</h3>
            <p>Cyber safety & app guidance</p>
          </div>
          <span className="chatbot-time">Updated {lastUpdated}</span>
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
          {quickPrompts.map(prompt => (
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
