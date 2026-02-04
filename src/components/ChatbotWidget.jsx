import { useEffect, useMemo, useRef, useState } from 'react';

const quickPrompts = [
  'What can I do in IndoZim Legal Guard?',
  'My phone was hacked',
  'Show emergency contacts',
  'Account hacked - what to do?',
  'How to report cyber crime?',
  'Money stolen from account',
  'Fake profile using my photo',
  'Suspicious link received',
  'Online shopping fraud',
  'Harassment or blackmail'
];

const knowledgeBase = [
  {
    match: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response:
      "Hello! I'm the IndoZim Legal Guard Assistant. Ask me about any feature or cyber incident - phone hacking, account theft, online fraud, harassment, etc."
  },
  {
    match: ['what is indozim', 'what is legal guard', 'what can i do', 'features', 'app do', 'about app', 'lexguard', 'indozim'],
    response:
      'IndoZim Legal Guard is your digital legal companion connecting Zimbabwe and India legal frameworks. It offers Cyber Law Academy lessons, a Crime Identifier to classify incidents, Emergency Tools with reporting templates and contacts, Legal News updates, and a Career hub.'
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
      'For fake profiles: 1) Screenshot the fake profile as evidence 2) Report to the platform directly 3) Alert friends/family not to interact 4) File complaint at cybercrime.gov.in 5) Call 1930 for serious cases 6) Use Crime Identifier in IndoZim Legal Guard for legal info 7) May fall under IT Act Sec 66C/66D'
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
      'IndoZim Legal Guard covers common cyber crime scenarios like identity theft, phishing, harassment, fake profiles, account hacking, and online fraud. Use Crime Identifier to classify your situation.'
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
      'The IT Act 2000 is a core cyber law framework in India. IndoZim Legal Guard links to official resources in the footer.'
  },
  {
    match: ['dpdp', 'data protection', 'privacy law'],
    response:
      'IndoZim Legal Guard references data protection topics including the DPDP Act 2023 in the About and learning sections.'
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
      'IndoZim Legal Guard is built as a PWA, so you can add it to your home screen and use some features offline.'
  },
  {
    match: ['about', 'project', 'why lexguard', 'why indozim'],
    response:
      'The About page explains the mission, tech stack, and how IndoZim Legal Guard bridges Zimbabwe and India legal frameworks to help students and citizens navigate cyber law.'
  },
  {
    match: ['developer', 'creator', 'who made', 'author'],
    response:
      'IndoZim Legal Guard is a collaborative Law & Technology educational project bridging Zimbabwe and India legal systems to empower digital citizens.'
  },
  {
    match: ['thanks', 'thank you', 'thx', 'great'],
    response:
      'You are welcome! Ask me anything else about IndoZim Legal Guard or cyber safety. Stay safe online!'
  }
];

const defaultReplies = [
  "I can help with cyber incidents like phone hacking, account theft, fraud, harassment. I also guide you through IndoZim Legal Guard features. What do you need help with?",
  "Ask me about cyber safety, reporting incidents, or navigating IndoZim Legal Guard features.",
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

const appFaqs = [
  {
    id: 'features',
    patterns: [/\bfeatures?\b/i, /what can i do/i, /what does (the )?app do/i, /about (lexguard|indozim|app)/i],
    reply:
      'IndoZim Legal Guard offers: Cyber Law Academy lessons, Crime Identifier for incident classification, Emergency Tools for reporting and helplines, Legal News updates, and a Career Hub.'
  },
  {
    id: 'navigation',
    patterns: [/\bwhere\b.*\b(open|find|go)\b/i, /how do i open/i, /navigate/i],
    reply:
      'Use the top menu or bottom navigation to open Academy, Identifier, Emergency Tools, News, Career, and About.'
  },
  {
    id: 'academy',
    patterns: [/\bacademy\b/i, /learn|course|lesson|module/i],
    reply:
      'The Cyber Law Academy has bite-sized lessons on cyber laws, offences, and reporting steps. Open Academy from the menu or bottom navigation.'
  },
  {
    id: 'identifier',
    patterns: [/\bidentifier\b/i, /classify|analyze|diagnose/i],
    reply:
      'Crime Identifier helps you describe an incident and returns the likely category, legal references, and immediate steps. Open Identifier and paste your situation.'
  },
  {
    id: 'emergency',
    patterns: [/\bemergency\b/i, /helpline|contacts?/i],
    reply:
      'Emergency Tools includes helplines like 1930 (cyber), 100 (police), and 181 (women), plus reporting templates.'
  },
  {
    id: 'news',
    patterns: [/\bnews\b/i, /updates?|alerts?/i],
    reply:
      'The News section shows legal and cybersecurity updates from trusted sources such as CERT-In and official portals.'
  },
  {
    id: 'career',
    patterns: [/\bcareer\b/i, /jobs?|internships?|skills?/i],
    reply:
      'The Career Hub provides skill paths, resources, and opportunities for law and tech careers.'
  },
  {
    id: 'offline',
    patterns: [/\boffline\b/i, /pwa|install/i, /add to home screen/i],
    reply:
      'IndoZim Legal Guard supports PWA install. Open the app in your browser and choose "Add to Home Screen" for quick access.'
  },
  {
    id: 'privacy',
    patterns: [/privacy|data protection|dpdp/i],
    reply:
      'IndoZim Legal Guard references privacy and data protection topics (DPDP Act 2023). Check About and Academy for details.'
  }
];

const STOPWORDS = new Set([
  'the', 'a', 'an', 'to', 'of', 'in', 'on', 'for', 'and', 'or', 'is', 'are', 'am', 'was', 'were',
  'do', 'does', 'did', 'what', 'which', 'where', 'when', 'why', 'how', 'can', 'could', 'should',
  'i', 'me', 'my', 'mine', 'we', 'our', 'you', 'your', 'yours', 'it', 'this', 'that', 'these', 'those',
  'please', 'plz', 'help', 'need', 'want', 'urgent', 'now', 'asap'
]);

const TEXT_REPLACEMENTS = [
  { pattern: /\bpaise\b|\bpaisa\b|\brupees\b/gi, replace: 'money' },
  { pattern: /\bdhokha\b|\bthagi\b|\bthag\b|\bcheating\b/gi, replace: 'fraud' },
  { pattern: /\bchori\b|\bstolen\b/gi, replace: 'stolen' },
  { pattern: /\bmobile\b|\bcell\b|\bhandset\b/gi, replace: 'phone' },
  { pattern: /\bhacked\b|\bhack\b|\bhacker\b|\bcompromised\b/gi, replace: 'hacked' },
  { pattern: /\bupi\b|\bgpay\b|\bpaytm\b|\bphonepe\b/gi, replace: 'upi' },
  { pattern: /\bwhatsapp\b/gi, replace: 'whatsapp' },
  { pattern: /\binsta\b|\binstagram\b/gi, replace: 'instagram' },
  { pattern: /\bfb\b|\bfacebook\b/gi, replace: 'facebook' },
  { pattern: /\btwitter\b|\bx\b/gi, replace: 'twitter' },
  { pattern: /\botp\b|\bverification\b|\bcode\b/gi, replace: 'otp' }
];

const SYNONYMS = {
  hacked: ['hacked', 'compromised', 'breach', 'breached'],
  phone: ['phone', 'mobile', 'device', 'handset'],
  account: ['account', 'profile', 'id', 'login', 'credential'],
  fraud: ['fraud', 'scam', 'thagi', 'dhokha', 'cheating'],
  money: ['money', 'funds', 'balance', 'cash', 'rupees'],
  harassment: ['harassment', 'abuse', 'bully', 'bullying', 'troll', 'trolling', 'threat', 'threats'],
  blackmail: ['blackmail', 'sextortion'],
  phishing: ['phishing', 'phish', 'fake', 'spoof'],
  link: ['link', 'url', 'website'],
  otp: ['otp', 'verification', 'code', 'pin'],
  report: ['report', 'complaint', 'file', 'fir'],
  emergency: ['emergency', 'urgent', 'immediately', 'asap'],
  shop: ['shopping', 'seller', 'product', 'order', 'delivery'],
  fake: ['fake', 'impersonation', 'duplicate'],
  deepfake: ['deepfake', 'morphed', 'edited']
};

const SYNONYM_INDEX = Object.entries(SYNONYMS).reduce((acc, [canonical, words]) => {
  words.forEach(word => {
    acc[word] = canonical;
  });
  acc[canonical] = canonical;
  return acc;
}, {});

function normalizeText(text) {
  let normalized = text.toLowerCase();
  TEXT_REPLACEMENTS.forEach(({ pattern, replace }) => {
    normalized = normalized.replace(pattern, replace);
  });
  normalized = normalized
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return normalized;
}

function tokenize(text) {
  return text
    .split(' ')
    .map(token => SYNONYM_INDEX[token] || token)
    .filter(token => token && !STOPWORDS.has(token));
}

function editDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const matrix = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[0][j] = j;
  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[a.length][b.length];
}

function isFuzzyMatch(token, keyword) {
  if (token.length < 4 || keyword.length < 4) return false;
  const distance = editDistance(token, keyword);
  return distance <= 1;
}

function detectFaqReply(text) {
  for (const faq of appFaqs) {
    if (faq.patterns.some(pattern => pattern.test(text))) {
      return faq.reply;
    }
  }
  return null;
}

function detectIntent(tokens, normalized) {
  const has = (list) => list.some(item => tokens.includes(item));
  if (normalized.includes('1930') || normalized.includes('helpline')) return 'helpline';
  if (has(['report', 'complaint', 'fir'])) return 'report';
  if (has(['hacked', 'account', 'phone'])) return 'hack';
  if (has(['fraud', 'upi', 'money'])) return 'fraud';
  if (has(['phishing', 'link', 'fake'])) return 'phishing';
  if (has(['harassment', 'blackmail'])) return 'harassment';
  if (has(['deepfake'])) return 'deepfake';
  if (has(['password', 'otp'])) return 'security';
  if (has(['privacy', 'dpdp'])) return 'privacy';
  return 'general';
}

function buildFollowUp(intent) {
  const followUps = {
    hack: 'Which account or device is affected (phone, email, Instagram, WhatsApp)?',
    fraud: 'Was it UPI, card, or netbanking? Do you have transaction ID/time?',
    phishing: 'Did you click the link or share any OTP/password?',
    harassment: 'Is the threat ongoing or do you have screenshots/evidence?',
    report: 'Do you want the online complaint steps or a report template?',
    security: 'Do you want steps for 2FA setup or password recovery?',
    general: 'Can you describe the issue in one or two sentences?'
  };
  return followUps[intent] || followUps.general;
}

function scoreEntry(entry, normalizedText, tokens) {
  let score = 0;
  entry.match.forEach(rawKey => {
    const key = normalizeText(rawKey);
    if (!key) return;
    if (key.includes(' ')) {
      if (normalizedText.includes(key)) score += 6;
      return;
    }
    const canonical = SYNONYM_INDEX[key] || key;
    if (tokens.includes(canonical)) {
      score += 2;
      return;
    }
    if (tokens.some(token => isFuzzyMatch(token, canonical))) {
      score += 1;
    }
  });
  return score;
}

function getSmartReply(userText, lastTopic) {
  const normalized = normalizeText(userText);
  const tokens = tokenize(normalized);

  const faqReply = detectFaqReply(userText);
  if (faqReply) return { text: faqReply, topic: 'app' };

  const pageHint = pageHints.find(item => item.keywords.some(key => normalized.includes(key)));
  if (pageHint && normalized.includes('where')) return { text: pageHint.reply, topic: 'navigation' };

  const scored = knowledgeBase
    .map(entry => ({ entry, score: scoreEntry(entry, normalized, tokens) }))
    .sort((a, b) => b.score - a.score);

  if (scored.length && scored[0].score >= 4) {
    const urgent = tokens.includes('emergency') || normalized.includes('urgent') || normalized.includes('immediately');
    const base = scored[0].entry.response;
    if (urgent) {
      return { text: `${base} If this is urgent or involves financial loss, call 1930 immediately.`, topic: 'urgent' };
    }
    return { text: base, topic: 'kb' };
  }

  const intent = detectIntent(tokens, normalized);
  if (lastTopic && intent === 'general') {
    const followUp = buildFollowUp(lastTopic);
    return { text: followUp, topic: lastTopic };
  }

  if (normalized.length <= 4 || tokens.length === 0) {
    return { text: 'Tell me what happened in 1-2 sentences (e.g., "UPI fraud", "fake Instagram profile", "phone hacked").', topic: 'clarify' };
  }

  const fallback = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
  return {
    text: `${fallback} You can mention keywords like hacked, fraud, phishing, harassment, fake profile, or report.`,
    topic: intent
  };
}

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [lastTopic, setLastTopic] = useState(null);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm IndoZim Legal Guard Assistant. Ask me about cyber incidents (phone hacked, account theft, fraud) or app features.",
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
    const replyPayload = getSmartReply(trimmed, lastTopic);
    const assistantReply = {
      role: 'assistant',
      text: replyPayload.text,
      time: getTimeStamp()
    };

    setMessages(prev => [...prev, userMessage, assistantReply]);
    if (replyPayload.topic && replyPayload.topic !== 'kb' && replyPayload.topic !== 'app') {
      setLastTopic(replyPayload.topic);
    } else if (replyPayload.topic === 'app') {
      setLastTopic('app');
    }
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
        <span className="chatbot-toggle-label">Ask IndoZim</span>
      </button>

      <div className="chatbot-panel" role="dialog" aria-label="IndoZim Legal Guard Assistant">
        <div className="chatbot-header">
          <div>
            <h3>IndoZim Legal Assistant</h3>
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
