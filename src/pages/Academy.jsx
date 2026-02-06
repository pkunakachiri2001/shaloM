import { useEffect, useMemo, useState } from 'react';
import { useData } from '../context/DataContext';

const COMPLETION_STORAGE_KEY = 'academy-completed-lessons';
const LAST_POSITION_KEY = 'academy-last-position';

const courses = [
  {
    id: 1,
    title: 'Cyber Law Fundamentals',
    level: 'Beginner',
    duration: '4 hours',
    modules: 8,
    rating: 4.8,
    enrolled: 12450,
    description: 'Master the basics of cyber law, understand legal frameworks, and learn how to protect your digital rights.',
    instructor: 'CyberGuard Pro Academy',
    image: '📚',
    color: '#3b82f6',
    syllabus: [
      {
        moduleId: 1,
        title: 'Module 1: Introduction to Cyber Law',
        duration: '30 min',
        lessons: [
          {
            id: 1,
            title: 'What is Cyber Law?',
            type: 'reading',
            duration: '10 min',
            content: `
              <div class="lesson-content">
                <h3>Understanding Cyber Law</h3>
                <p class="lead">Cyber law, also known as IT law or internet law, is the legal framework that governs digital activities, internet usage, and computer-related crimes.</p>

                <div class="info-card">
                  <h4>🌐 Why Cyber Law Matters</h4>
                  <ul>
                    <li><strong>Rapid Digitalization:</strong> 5 billion+ internet users worldwide</li>
                    <li><strong>Rising Cybercrime:</strong> $10.5 trillion annual damage by 2025</li>
                    <li><strong>Digital Economy:</strong> E-commerce, fintech, remote work explosion</li>
                    <li><strong>Privacy Concerns:</strong> Data breaches affecting millions daily</li>
                  </ul>
                </div>

                <h4>🔍 Key Areas of Cyber Law</h4>
                <div class="topic-grid">
                  <div class="topic-card">
                    <span class="topic-icon">🔒</span>
                    <h5>Data Protection</h5>
                    <p>Privacy rights, GDPR, national data protection laws</p>
                  </div>
                  <div class="topic-card">
                    <span class="topic-icon">⚖️</span>
                    <h5>Cybercrime Law</h5>
                    <p>Hacking, fraud, identity theft, cyberbullying</p>
                  </div>
                  <div class="topic-card">
                    <span class="topic-icon">🛒</span>
                    <h5>E-Commerce Law</h5>
                    <p>Online contracts, consumer rights, digital payments</p>
                  </div>
                  <div class="topic-card">
                    <span class="topic-icon">©️</span>
                    <h5>Intellectual Property</h5>
                    <p>Copyright, patents, trademarks in digital space</p>
                  </div>
                </div>

                <div class="example-box">
                  <h4>📌 Real-World Example</h4>
                  <p><strong>Scenario:</strong> A company's customer database containing 1 million records is hacked and sold on the dark web.</p>
                  <p><strong>Cyber Law Application:</strong></p>
                  <ul>
                    <li>Company liable under data protection laws (DPDP Act 2023 penalties can reach ₹250 crore)</li>
                    <li>Hackers prosecuted under IT Act Section 66 (hacking)</li>
                    <li>Victims can claim compensation under Section 43A</li>
                    <li>Company must notify affected users and authorities as required by law</li>
                  </ul>
                </div>

                <h4>📊 Global Cyber Law Frameworks</h4>
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Region/Country</th>
                      <th>Primary Law</th>
                      <th>Year</th>
                      <th>Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>🇮🇳 India</td>
                      <td>IT Act 2000, DPDP Act 2023</td>
                      <td>2000, 2023</td>
                      <td>Cybercrime & Data Protection</td>
                    </tr>
                    <tr>
                      <td>🇪🇺 European Union</td>
                      <td>GDPR</td>
                      <td>2018</td>
                      <td>Privacy & Data Rights</td>
                    </tr>
                    <tr>
                      <td>🇿🇼 Zimbabwe</td>
                      <td>Cyber & Data Protection Act</td>
                      <td>2021</td>
                      <td>Cybersecurity & Privacy</td>
                    </tr>
                    <tr>
                      <td>🇺🇸 USA</td>
                      <td>CFAA, State laws</td>
                      <td>1986+</td>
                      <td>Computer Fraud & Abuse</td>
                    </tr>
                  </tbody>
                </table>

                <div class="key-takeaway">
                  <h4>🎯 Key Takeaways</h4>
                  <ol>
                    <li>Cyber law protects individuals, businesses, and governments in digital space</li>
                    <li>It covers crimes, privacy, commerce, and intellectual property</li>
                    <li>Every country has different cyber laws - understand your jurisdiction</li>
                    <li>Cyber law is constantly evolving with technology</li>
                  </ol>
                </div>

                <div class="quiz-preview">
                  <p><strong>✅ Check Your Understanding:</strong> Complete the quiz at the end of this module to test your knowledge!</p>
                </div>
              </div>
            `
          },
          {
            id: 2,
            title: 'India IT Act 2000 - Overview',
            type: 'reading',
            duration: '12 min',
            content: `
              <div class="lesson-content">
                <h3>The Information Technology Act, 2000</h3>
                <p class="lead">India's primary law governing electronic governance, e-commerce, and cybercrimes. Amended in 2008 to include more comprehensive provisions.</p>

                <div class="timeline">
                  <div class="timeline-item">
                    <div class="timeline-date">May 2000</div>
                    <div class="timeline-content">
                      <h5>IT Act 2000 Enacted</h5>
                      <p>President K.R. Narayanan gave assent, making India one of the first countries with cyber law</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-date">October 2008</div>
                    <div class="timeline-content">
                      <h5>IT Amendment Act 2008</h5>
                      <p>Major update adding Sections 66A-66F, addressing cyber terrorism and child pornography</p>
                    </div>
                  </div>
                  <div class="timeline-item">
                    <div class="timeline-date">March 2015</div>
                    <div class="timeline-content">
                      <h5>Section 66A Struck Down</h5>
                      <p>Supreme Court declared Section 66A unconstitutional (Shreya Singhal case)</p>
                    </div>
                  </div>
                </div>

                <h4>🔑 Key Sections of IT Act 2000</h4>

                <div class="section-card important">
                  <div class="section-number">43</div>
                  <div class="section-details">
                    <h5>Section 43: Penalty for Damage to Computer Systems</h5>
                    <p><strong>Offense:</strong> Unauthorized access, data download, virus introduction, damage to computer system</p>
                    <p><strong>Penalty:</strong> Compensation up to ₹1 crore to affected party</p>
                    <p><strong>Example:</strong> Employee deletes company data before leaving - liable under Section 43</p>
                  </div>
                </div>

                <div class="section-card critical">
                  <div class="section-number">66</div>
                  <div class="section-details">
                    <h5>Section 66: Hacking with Computer System</h5>
                    <p><strong>Offense:</strong> Intentionally destroys, deletes, alters information, or diminishes its value</p>
                    <p><strong>Punishment:</strong> Up to 3 years imprisonment and/or fine up to ₹5 lakh</p>
                    <p><strong>Example:</strong> Hacking into someone's email and deleting messages</p>
                  </div>
                </div>

                <div class="section-card critical">
                  <div class="section-number">66C</div>
                  <div class="section-details">
                    <h5>Section 66C: Identity Theft</h5>
                    <p><strong>Offense:</strong> Fraudulently using someone's password, digital signature, or unique identification</p>
                    <p><strong>Punishment:</strong> Up to 3 years imprisonment and/or fine up to ₹1 lakh</p>
                    <p><strong>Example:</strong> Creating fake Facebook profile using someone's photos and name</p>
                  </div>
                </div>

                <div class="section-card critical">
                  <div class="section-number">66D</div>
                  <div class="section-details">
                    <h5>Section 66D: Cheating by Personation</h5>
                    <p><strong>Offense:</strong> Cheating by impersonation using computer resources</p>
                    <p><strong>Punishment:</strong> Up to 3 years imprisonment and/or fine up to ₹1 lakh</p>
                    <p><strong>Example:</strong> Sending phishing emails pretending to be a bank</p>
                  </div>
                </div>

                <div class="section-card high">
                  <div class="section-number">66E</div>
                  <div class="section-details">
                    <h5>Section 66E: Violation of Privacy</h5>
                    <p><strong>Offense:</strong> Capturing, publishing, transmitting images of private areas without consent</p>
                    <p><strong>Punishment:</strong> Up to 3 years imprisonment and/or fine up to ₹2 lakh</p>
                    <p><strong>Example:</strong> Hidden camera in changing room, revenge porn</p>
                  </div>
                </div>

                <div class="section-card high">
                  <div class="section-number">66F</div>
                  <div class="section-details">
                    <h5>Section 66F: Cyber Terrorism</h5>
                    <p><strong>Offense:</strong> Terrorist acts using computer resources to threaten national security</p>
                    <p><strong>Punishment:</strong> Life imprisonment</p>
                    <p><strong>Example:</strong> Hacking into defense systems, spreading terror propaganda</p>
                  </div>
                </div>

                <div class="section-card moderate">
                  <div class="section-number">67</div>
                  <div class="section-details">
                    <h5>Section 67: Publishing Obscene Material</h5>
                    <p><strong>Offense:</strong> Publishing sexually explicit material in electronic form</p>
                    <p><strong>Punishment:</strong> First offense: Up to 3 years + ₹5 lakh fine; Subsequent: Up to 5 years + ₹10 lakh</p>
                  </div>
                </div>

                <div class="section-card moderate">
                  <div class="section-number">67A</div>
                  <div class="section-details">
                    <h5>Section 67A: Sexually Explicit Material</h5>
                    <p><strong>Offense:</strong> Publishing material containing sexually explicit acts</p>
                    <p><strong>Punishment:</strong> First: Up to 5 years + ₹10 lakh; Subsequent: Up to 7 years + ₹10 lakh</p>
                  </div>
                </div>

                <div class="section-card moderate">
                  <div class="section-number">67B</div>
                  <div class="section-details">
                    <h5>Section 67B: Child Pornography</h5>
                    <p><strong>Offense:</strong> Publishing or transmitting material depicting children in sexually explicit acts</p>
                    <p><strong>Punishment:</strong> First: Up to 5 years + ₹10 lakh; Subsequent: Up to 7 years + ₹10 lakh</p>
                  </div>
                </div>

                <div class="comparison-box">
                  <h4>⚖️ Civil vs Criminal Liability</h4>
                  <div class="comparison-grid">
                    <div>
                      <h5>Civil (Section 43)</h5>
                      <ul>
                        <li>Compensation to victim</li>
                        <li>No imprisonment</li>
                        <li>Monetary damages</li>
                        <li>Sued in civil court</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Criminal (Section 66+)</h5>
                      <ul>
                        <li>Imprisonment possible</li>
                        <li>Fines to government</li>
                        <li>Criminal record</li>
                        <li>Tried in criminal court</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="practice-scenario">
                  <h4>💡 Practice Scenario</h4>
                  <p><strong>Case:</strong> Raj logs into his colleague Priya's laptop (she left it unlocked) and sends a fake resignation email to her boss as a "prank".</p>
                  <p><strong>Question:</strong> Which sections of IT Act apply?</p>
                  <details>
                    <summary>Click to see answer</summary>
                    <div class="answer">
                      <ul>
                        <li><strong>Section 43:</strong> Unauthorized access to computer system (civil liability)</li>
                        <li><strong>Section 66C:</strong> Identity theft (fraudulent use of Priya's digital identity)</li>
                        <li><strong>Section 66D:</strong> Cheating by personation (impersonating Priya to mislead her employer)</li>
                        <li><strong>Punishment:</strong> Up to 3 years imprisonment + fines + compensation to Priya</li>
                      </ul>
                      <p class="warning"><strong>Lesson:</strong> Even "pranks" can trigger real criminal liability under the IT Act.</p>
                    </div>
                  </details>
                </div>

                <div class="key-takeaway">
                  <h4>🎯 Key Takeaways</h4>
                  <ol>
                    <li>IT Act 2000 covers both civil and criminal cyber offenses</li>
                    <li>Penalties range from fines to life imprisonment depending on severity</li>
                    <li>Section 66A (offensive messages) was struck down as unconstitutional</li>
                    <li>Know your rights - and your responsibilities online</li>
                  </ol>
                </div>
              </div>
            `
          },
          {
            id: 3,
            title: 'Landmark Case: Shreya Singhal v. Union of India',
            type: 'case-study',
            duration: '10 min',
            content: `
              <div class="lesson-content">
                <div class="case-header">
                  <h3>📋 Shreya Singhal v. Union of India (2015)</h3>
                  <div class="case-meta">
                    <span><strong>Court:</strong> Supreme Court of India</span>
                    <span><strong>Citation:</strong> AIR 2015 SC 1523</span>
                    <span><strong>Judges:</strong> J. Chelameswar & R.F. Nariman</span>
                    <span><strong>Date:</strong> March 24, 2015</span>
                  </div>
                </div>

                <h4>📖 Background</h4>
                <p>Section 66A of the IT Act, 2000 made it a criminal offense to send "offensive" or "menacing" messages through communication services. Many people were arrested for posting critical comments on social media about politicians and public figures.</p>

                <div class="incident-box">
                  <h5>Trigger Incident (2012)</h5>
                  <p>Two girls in Mumbai were arrested for a Facebook post questioning the shutdown of the city after a political leader's death. One girl posted the comment, the other just "liked" it. Both faced charges under Section 66A.</p>
                  <p><strong>Charged under:</strong> Section 66A (offensive messages) + Section 505(2) IPC (promoting enmity)</p>
                  <p><strong>Public Reaction:</strong> Massive outrage over arrest for simply expressing an opinion</p>
                </div>

                <h4>🔍 What was Section 66A?</h4>
                <div class="law-text">
                  <p><em>"Any person who sends, by means of a computer resource or a communication device,—</em></p>
                  <ul>
                    <li>(a) any information that is grossly offensive or has menacing character; or</li>
                    <li>(b) any information which he knows to be false, but for the purpose of causing annoyance, inconvenience, danger, obstruction, insult, injury, criminal intimidation, enmity, hatred or ill will..."</li>
                  </ul>
                  <p><em>Punishment: Up to 3 years imprisonment + fine</em></p>
                </div>

                <div class="problem-box">
                  <h5>⚠️ Problems with Section 66A</h5>
                  <ul>
                    <li><strong>Vague Terms:</strong> "Grossly offensive," "menacing," "annoyance" - not clearly defined</li>
                    <li><strong>Chilling Effect:</strong> People afraid to express opinions online</li>
                    <li><strong>Misuse:</strong> Used by police to arrest critics of government and politicians</li>
                    <li><strong>No Safeguards:</strong> Arrests made without proper inquiry</li>
                    <li><strong>Disproportionate:</strong> 3 years jail for posting an opinion</li>
                  </ul>
                </div>

                <h4>⚖️ Court's Reasoning</h4>
                <div class="judgment-points">
                  <div class="point">
                    <span class="point-number">1</span>
                    <div>
                      <h5>Violates Freedom of Speech (Article 19(1)(a))</h5>
                      <p>Section 66A imposed unreasonable restrictions on free speech without falling under the exceptions in Article 19(2) of the Constitution.</p>
                    </div>
                  </div>
                  <div class="point">
                    <span class="point-number">2</span>
                    <div>
                      <h5>Terms Were Vague and Overbroad</h5>
                      <p>"Grossly offensive" and "causing annoyance" have no clear legal meaning, allowing arbitrary interpretation and misuse.</p>
                    </div>
                  </div>
                  <div class="point">
                    <span class="point-number">3</span>
                    <div>
                      <h5>No Procedural Safeguards</h5>
                      <p>Unlike defamation laws, Section 66A had no requirement to prove actual harm or malicious intent.</p>
                    </div>
                  </div>
                  <div class="point">
                    <span class="point-number">4</span>
                    <div>
                      <h5>Online Speech = Offline Speech</h5>
                      <p>The Court held that freedom of expression applies equally online and offline. No special restrictions for internet speech.</p>
                    </div>
                  </div>
                </div>

                <div class="verdict-box">
                  <h4>⚡ The Verdict</h4>
                  <p class="verdict-text"><strong>Section 66A was struck down as UNCONSTITUTIONAL and void.</strong></p>
                  <p>The Supreme Court held that it violated Article 19(1)(a) - the fundamental right to freedom of speech and expression.</p>
                </div>

                <h4>🌟 Impact & Legacy</h4>
                <ul>
                  <li><strong>Landmark Victory:</strong> Huge win for free speech and civil liberties in India</li>
                  <li><strong>International Recognition:</strong> Cited globally as a model judgment on internet freedom</li>
                  <li><strong>All Pending Cases Dropped:</strong> People arrested under 66A were freed</li>
                  <li><strong>Precedent Set:</strong> Online speech enjoys constitutional protection</li>
                  <li><strong>Continuing Challenge:</strong> Despite judgment, some police still try to use 66A (illegally)</li>
                </ul>

                <div class="comparison-box">
                  <h4>Before vs After Section 66A</h4>
                  <div class="comparison-grid">
                    <div>
                      <h5>❌ Before (with Section 66A)</h5>
                      <ul>
                        <li>21,000+ arrests in 2 years</li>
                        <li>Political criticism led to jail</li>
                        <li>Self-censorship on social media</li>
                        <li>Vague, arbitrary arrests</li>
                      </ul>
                    </div>
                    <div>
                      <h5>✅ After (without Section 66A)</h5>
                      <ul>
                        <li>Free political discourse online</li>
                        <li>Criticism not a crime</li>
                        <li>Protection for online speech</li>
                        <li>Still liable for: defamation, threats, hate speech</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="important-note">
                  <h5>⚠️ Important: What's Still Illegal?</h5>
                  <p>While Section 66A is gone, you can still be prosecuted for:</p>
                  <ul>
                    <li><strong>Defamation:</strong> False statements harming someone's reputation (IPC 499)</li>
                    <li><strong>Hate Speech:</strong> Promoting enmity between groups (IPC 153A)</li>
                    <li><strong>Threats:</strong> Criminal intimidation (IPC 506)</li>
                    <li><strong>Obscenity:</strong> IT Act Sections 67, 67A, 67B</li>
                    <li><strong>Incitement to Violence:</strong> Constitutional exception</li>
                  </ul>
                  <p><strong>Key Difference:</strong> These have clear legal definitions and require proof of harm or intent.</p>
                </div>

                <div class="quiz-preview">
                  <h4>🎓 Discussion Questions</h4>
                  <ol>
                    <li>Why was Section 66A considered a threat to democracy?</li>
                    <li>How does the Shreya Singhal judgment protect your rights as an internet user?</li>
                    <li>Can you think of examples where online speech should still be restricted?</li>
                  </ol>
                </div>

                <div class="key-takeaway">
                  <h4>🎯 Key Takeaways</h4>
                  <ol>
                    <li>Freedom of speech applies equally online and offline</li>
                    <li>Laws restricting speech must be clear, not vague</li>
                    <li>You can criticize government and politicians without fear of arrest</li>
                    <li>However, defamation, threats, and hate speech remain illegal</li>
                    <li>Know your rights - the Supreme Court has your back on free expression!</li>
                  </ol>
                </div>
              </div>
            `
          }
        ],
        quiz: {
          questions: [
            {
              question: 'Which Supreme Court case struck down Section 66A of the IT Act?',
              options: ['Shreya Singhal v. Union of India', 'Anuradha Bhasin v. Union of India', 'K.S. Puttaswamy v. Union of India', 'Maneka Gandhi v. Union of India'],
              correct: 0,
              explanation: 'Shreya Singhal v. Union of India (2015) struck down Section 66A as it violated the fundamental right to freedom of speech and expression.'
            },
            {
              question: 'Under Section 66 of the IT Act, what is the maximum imprisonment for hacking?',
              options: ['1 year', '2 years', '3 years', '5 years'],
              correct: 2,
              explanation: 'Section 66 prescribes imprisonment up to 3 years and/or a fine up to ₹5 lakh for hacking with computer systems.'
            },
            {
              question: 'Which section deals with identity theft?',
              options: ['Section 66A', 'Section 66B', 'Section 66C', 'Section 66D'],
              correct: 2,
              explanation: 'Section 66C deals with identity theft - fraudulently using someone\'s password, digital signature, or unique identification.'
            },
            {
              question: 'What is the punishment for cyber terrorism under Section 66F?',
              options: ['3 years', '7 years', '10 years', 'Life imprisonment'],
              correct: 3,
              explanation: 'Section 66F prescribes life imprisonment for acts of cyber terrorism that threaten national security.'
            },
            {
              question: 'Which fundamental right was violated by Section 66A?',
              options: ['Right to Equality', 'Right to Freedom of Speech', 'Right to Life', 'Right to Education'],
              correct: 1,
              explanation: 'Section 66A violated Article 19(1)(a) - the fundamental right to freedom of speech and expression.'
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Cybercrime Investigation & Prevention',
    level: 'Intermediate',
    duration: '6 hours',
    modules: 10,
    rating: 4.9,
    enrolled: 8750,
    description: 'Learn to identify, investigate, and prevent cybercrimes. Understand digital forensics, evidence collection, and reporting procedures.',
    instructor: 'CyberGuard Pro Academy',
    image: '🔍',
    color: '#8b5cf6',
    syllabus: [
      {
        moduleId: 1,
        title: 'Module 1: Types of Cybercrimes',
        duration: '45 min',
        lessons: [
          {
            id: 1,
            title: 'Hacking & Unauthorized Access',
            type: 'reading',
            duration: '18 min',
            content: `
              <div class="lesson-content">
                <h3>Hacking & Unauthorized Access</h3>
                <p class="lead">Understanding different types of hacking, their legal implications, and how to protect yourself.</p>

                <div class="hacker-types">
                  <div class="hacker-card black-hat">
                    <div class="hacker-icon">🎩</div>
                    <h4>Black Hat Hackers</h4>
                    <p><strong>Motivation:</strong> Financial gain, malicious intent, revenge</p>
                    <p><strong>Activities:</strong> Stealing data, spreading malware, identity theft, ransomware</p>
                    <p><strong>Legal Status:</strong> ILLEGAL - Criminal prosecution under IT Act</p>
                  </div>

                  <div class="hacker-card white-hat">
                    <div class="hacker-icon">👨‍💻</div>
                    <h4>White Hat Hackers (Ethical Hackers)</h4>
                    <p><strong>Motivation:</strong> Security improvement, protecting systems</p>
                    <p><strong>Activities:</strong> Penetration testing, bug bounties, security audits</p>
                    <p><strong>Legal Status:</strong> LEGAL - With proper authorization</p>
                  </div>

                  <div class="hacker-card grey-hat">
                    <div class="hacker-icon">🕵️</div>
                    <h4>Grey Hat Hackers</h4>
                    <p><strong>Motivation:</strong> Curiosity, recognition, ethical ambiguity</p>
                    <p><strong>Activities:</strong> Finding vulnerabilities without permission, reporting for reward</p>
                    <p><strong>Legal Status:</strong> ILLEGAL (no authorization) but often not malicious</p>
                  </div>
                </div>

                <h4>🚨 Common Hacking Techniques</h4>
                <div class="technique-list">
                  <div class="technique">
                    <h5>1. Phishing</h5>
                    <p>Fake emails/websites to steal login credentials</p>
                    <div class="example">
                      <strong>Example:</strong> Email claiming "Your bank account will be closed. Click here to verify."
                    </div>
                  </div>

                  <div class="technique">
                    <h5>2. Brute Force Attack</h5>
                    <p>Trying thousands of password combinations until finding the right one</p>
                    <div class="example">
                      <strong>Protection:</strong> Use strong passwords (12+ characters, mixed case, numbers, symbols)
                    </div>
                  </div>

                  <div class="technique">
                    <h5>3. SQL Injection</h5>
                    <p>Injecting malicious code into website databases to access data</p>
                    <div class="example">
                      <strong>Impact:</strong> Can expose entire databases of user information
                    </div>
                  </div>

                  <div class="technique">
                    <h5>4. Man-in-the-Middle (MitM)</h5>
                    <p>Intercepting communication between two parties</p>
                    <div class="example">
                      <strong>Common Scenario:</strong> Public WiFi networks at cafes, airports
                    </div>
                  </div>

                  <div class="technique">
                    <h5>5. Malware/Ransomware</h5>
                    <p>Malicious software that steals data or locks files for ransom</p>
                    <div class="example">
                      <strong>Example:</strong> WannaCry ransomware attack (2017) - 200,000+ computers in 150 countries
                    </div>
                  </div>

                  <div class="technique">
                    <h5>6. Social Engineering</h5>
                    <p>Manipulating people to reveal confidential information</p>
                    <div class="example">
                      <strong>Example:</strong> Caller pretending to be IT support asking for passwords
                    </div>
                  </div>
                </div>

                <div class="warning-box">
                  <h4>🚨 Warning Signs You've Been Hacked</h4>
                  <ul class="checklist">
                    <li>✓ Unauthorized transactions in your accounts</li>
                    <li>✓ Passwords suddenly not working</li>
                    <li>✓ Strange emails sent from your account</li>
                    <li>✓ Unfamiliar activity on social media</li>
                    <li>✓ New programs or toolbars installed</li>
                    <li>✓ Antivirus disabled or removed</li>
                    <li>✓ Slow computer performance</li>
                    <li>✓ Frequent crashes or freezes</li>
                    <li>✓ Friends receiving spam from your account</li>
                    <li>✓ Unexpected password reset emails</li>
                  </ul>
                </div>

                <div class="action-plan">
                  <h4>📋 Immediate Action Plan If Hacked</h4>
                  <div class="step-by-step">
                    <div class="step">
                      <div class="step-number">1</div>
                      <div class="step-content">
                        <h5>Disconnect & Secure</h5>
                        <p>Disconnect from internet. Change all passwords from a DIFFERENT device.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">2</div>
                      <div class="step-content">
                        <h5>Notify Financial Institutions</h5>
                        <p>Call your bank immediately if financial information compromised. Freeze accounts/cards.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">3</div>
                      <div class="step-content">
                        <h5>File Police Complaint</h5>
                        <p>Go to cybercrime.gov.in or visit local cyber cell. File FIR with evidence.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">4</div>
                      <div class="step-content">
                        <h5>Scan & Clean</h5>
                        <p>Run full antivirus scan. Remove malware. Consider fresh OS install if severely infected.</p>
                      </div>
                    </div>
                    <div class="step">
                      <div class="step-number">5</div>
                      <div class="step-content">
                        <h5>Enable 2FA Everywhere</h5>
                        <p>Turn on two-factor authentication on all accounts. Use authenticator apps (not SMS).</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="prevention-tips">
                  <h4>🛡️ Prevention is Better Than Cure</h4>
                  <div class="tips-grid">
                    <div class="tip">
                      <span class="tip-icon">🔒</span>
                      <h5>Strong Passwords</h5>
                      <p>12+ characters, mixed case, numbers, symbols. Unique for each account.</p>
                    </div>
                    <div class="tip">
                      <span class="tip-icon">📱</span>
                      <h5>2-Factor Authentication</h5>
                      <p>Add extra layer of security. Use authenticator apps (Google/Microsoft Authenticator).</p>
                    </div>
                    <div class="tip">
                      <span class="tip-icon">🔄</span>
                      <h5>Regular Updates</h5>
                      <p>Keep OS, browsers, and software updated. Patches fix security vulnerabilities.</p>
                    </div>
                    <div class="tip">
                      <span class="tip-icon">🚫</span>
                      <h5>Avoid Public WiFi</h5>
                      <p>Don't do banking/shopping on public networks. Use VPN if necessary.</p>
                    </div>
                    <div class="tip">
                      <span class="tip-icon">📧</span>
                      <h5>Email Vigilance</h5>
                      <p>Don't click suspicious links. Verify sender before opening attachments.</p>
                    </div>
                    <div class="tip">
                      <span class="tip-icon">💾</span>
                      <h5>Regular Backups</h5>
                      <p>Backup important data to external drive or cloud. Protection against ransomware.</p>
                    </div>
                  </div>
                </div>

                <div class="case-example">
                  <h4>📌 Real Case: 2020 Twitter Hack</h4>
                  <p><strong>Incident:</strong> High-profile Twitter accounts (Obama, Biden, Elon Musk, Bill Gates) hacked simultaneously.</p>
                  <p><strong>Method:</strong> Social engineering attack on Twitter employees to gain access to admin tools.</p>
                  <p><strong>Impact:</strong> Bitcoin scam tweets posted, $120,000+ stolen from victims.</p>
                  <p><strong>Arrests:</strong> 17-year-old mastermind arrested in Florida, charged under CFAA.</p>
                  <p><strong>Lesson:</strong> Even tech giants vulnerable. Social engineering is powerful. Be skeptical of urgent requests.</p>
                </div>

                <div class="key-takeaway">
                  <h4>🎯 Key Takeaways</h4>
                  <ol>
                    <li>Hacking without authorization is ALWAYS illegal, regardless of intent</li>
                    <li>Most hacks succeed due to weak passwords or social engineering, not technical brilliance</li>
                    <li>Early detection is crucial - know the warning signs</li>
                    <li>Report to authorities immediately - every hour matters in cybercrime investigation</li>
                    <li>Prevention through good cyber hygiene is far easier than recovery</li>
                  </ol>
                </div>
              </div>
            `
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Digital Privacy & Data Protection',
    level: 'Intermediate',
    duration: '5 hours',
    modules: 8,
    rating: 4.7,
    enrolled: 10200,
    description: 'Master data privacy laws, GDPR, India DPDP Act 2023, and learn practical strategies to protect your digital footprint.',
    instructor: 'CyberGuard Pro Academy',
    image: '🔐',
    color: '#10b981'
  },
  {
    id: 4,
    title: 'E-Commerce & Digital Contracts',
    level: 'Advanced',
    duration: '4 hours',
    modules: 6,
    rating: 4.6,
    enrolled: 5600,
    description: 'Understand online contracts, consumer rights, digital signatures, and legal framework for e-commerce transactions.',
    instructor: 'CyberGuard Pro Academy',
    image: '🛒',
    color: '#f59e0b'
  }
];

export default function EnhancedAcademy() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);
  const [completedLessons, setCompletedLessons] = useState(() => (
    JSON.parse(localStorage.getItem(COMPLETION_STORAGE_KEY) || '{}')
  ));
  const [completionPrompt, setCompletionPrompt] = useState(null);
  const [lastPosition, setLastPosition] = useState(() => (
    JSON.parse(localStorage.getItem(LAST_POSITION_KEY) || 'null')
  ));
  const { updateProgress } = useData();

  useEffect(() => {
    localStorage.setItem(COMPLETION_STORAGE_KEY, JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    if (lastPosition) {
      localStorage.setItem(LAST_POSITION_KEY, JSON.stringify(lastPosition));
    }
  }, [lastPosition]);

  const getLessonKey = (courseId, moduleId, lessonId) => `${courseId}-${moduleId}-${lessonId}`;

  const getNextStep = (course, module, lesson) => {
    const lessonIndex = module.lessons.findIndex(item => item.id === lesson.id);
    const nextLesson = module.lessons[lessonIndex + 1];

    if (nextLesson) {
      return { type: 'lesson', label: nextLesson.title, target: nextLesson };
    }

    if (module.quiz) {
      return { type: 'quiz', label: 'Module Quiz', target: null };
    }

    return { type: 'modules', label: 'Back to Modules', target: null };
  };

  const handleLessonComplete = (courseId, moduleId, lesson) => {
    const key = getLessonKey(courseId, moduleId, lesson.id);
    setCompletedLessons(prev => ({ ...prev, [key]: true }));
    updateProgress(courseId, moduleId, lesson.id);
    setLastPosition({ courseId, moduleId, lessonId: lesson.id });
    const nextStep = getNextStep(selectedCourse, selectedModule, lesson);
    setCompletionPrompt({ key, nextStep });
  };

  const handleContinueFromCompletion = (nextStep) => {
    if (!nextStep) return;
    setCompletionPrompt(null);

    if (nextStep.type === 'lesson') {
      setSelectedLesson(nextStep.target);
      return;
    }

    if (nextStep.type === 'quiz') {
      setQuizMode(true);
      return;
    }

    setSelectedModule(null);
  };

  const resumeData = useMemo(() => {
    if (!lastPosition) return null;
    const course = courses.find(item => item.id === lastPosition.courseId);
    if (!course) return null;
    const module = course.syllabus?.find(item => item.moduleId === lastPosition.moduleId);
    if (!module) return null;
    const lesson = module.lessons?.find(item => item.id === lastPosition.lessonId);
    if (!lesson) return null;
    return { course, module, lesson };
  }, [lastPosition]);

  const getModuleProgress = (course, module) => {
    const total = module.lessons.length;
    const completed = module.lessons.filter((lesson) =>
      completedLessons[getLessonKey(course.id, module.moduleId, lesson.id)]
    ).length;
    const percentage = total ? Math.round((completed / total) * 100) : 0;
    return { completed, total, percentage };
  };

  const handleQuizSubmit = () => {
    const quiz = selectedModule.quiz;
    let score = 0;
    quiz.questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    setQuizScore({ score, total: quiz.questions.length, percentage: (score / quiz.questions.length * 100).toFixed(0) });
  };

  // Course List View
  if (!selectedCourse) {
    return (
      <div className="page academy-page-enhanced">
        <div className="page-header academy-header-enhanced">
          <div className="header-content-enhanced">
            <h1>🎓 Cyber Law Academy</h1>
            <p className="lead">Professional learning platform with comprehensive courses, interactive quizzes, and certificates</p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">50,000+</span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Courses</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Completion Rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="courses-container">
          {resumeData && (
            <div className="resume-card">
              <div>
                <h3>Continue learning</h3>
                <p>
                  {resumeData.course.title} · {resumeData.module.title} · {resumeData.lesson.title}
                </p>
              </div>
              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedCourse(resumeData.course);
                  setSelectedModule(resumeData.module);
                  setSelectedLesson(resumeData.lesson);
                  setQuizMode(false);
                }}
              >
                Resume →
              </button>
            </div>
          )}
          <div className="courses-grid-enhanced">
            {courses.map(course => (
              <div key={course.id} className="course-card-enhanced" onClick={() => setSelectedCourse(course)}>
                <div className="course-badge" style={{ backgroundColor: course.color }}>{course.level}</div>
                <div className="course-image" style={{ backgroundColor: `${course.color}20` }}>
                  <span className="course-emoji">{course.image}</span>
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-meta">
                    <span>⏱️ {course.duration}</span>
                    <span>📚 {course.modules} modules</span>
                    <span>⭐ {course.rating}</span>
                  </div>
                  <div className="course-stats">
                    <span className="enrolled">👥 {course.enrolled.toLocaleString()} enrolled</span>
                    <span className="instructor">👨‍🏫 {course.instructor}</span>
                  </div>
                  <button className="btn-primary btn-course" style={{ backgroundColor: course.color }}>
                    Start Learning →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-learn-section">
          <h2>Why Learn Cyber Law?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <span className="benefit-icon">💼</span>
              <h4>Career Opportunities</h4>
              <p>Cyber law experts are in high demand across law firms, tech companies, and government agencies.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🛡️</span>
              <h4>Protect Yourself</h4>
              <p>Know your rights and legal protections in the digital world. Prevent becoming a victim.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">⚖️</span>
              <h4>Stay Compliant</h4>
              <p>Businesses must comply with data protection laws. Avoid penalties and legal issues.</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🌍</span>
              <h4>Global Relevance</h4>
              <p>Cyber law applies worldwide. Learn international frameworks and standards.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Module List View (when course selected but no module)
  if (selectedCourse && !selectedModule) {
    return (
      <div className="page academy-page-enhanced">
        <div className="course-detail-header" style={{ background: `linear-gradient(135deg, ${selectedCourse.color} 0%, ${selectedCourse.color}dd 100%)` }}>
          <button className="btn-back" onClick={() => setSelectedCourse(null)}>← Back to Courses</button>
          <div className="course-detail-content">
            <div className="course-detail-badge">{selectedCourse.level}</div>
            <h1>{selectedCourse.title}</h1>
            <p className="course-detail-desc">{selectedCourse.description}</p>
            <div className="course-detail-meta">
              <span>⏱️ {selectedCourse.duration}</span>
              <span>📚 {selectedCourse.modules} modules</span>
              <span>⭐ {selectedCourse.rating} ({selectedCourse.enrolled.toLocaleString()} students)</span>
              <span>👨‍🏫 {selectedCourse.instructor}</span>
            </div>
          </div>
        </div>

        <div className="modules-container">
          <h2>📚 Course Modules</h2>
          <div className="modules-list">
            {selectedCourse.syllabus.map((module, idx) => {
              const progress = getModuleProgress(selectedCourse, module);

              return (
                <div key={module.moduleId} className="module-card" onClick={() => setSelectedModule(module)}>
                <div className="module-number">{idx + 1}</div>
                <div className="module-content">
                  <h3>{module.title}</h3>
                  <div className="module-meta">
                    <span>⏱️ {module.duration}</span>
                    <span>📖 {module.lessons.length} lessons</span>
                    {module.quiz && <span>✅ Quiz included</span>}
                  </div>
                  <div className="module-progress">
                    <div className="progress-label">Progress: {progress.completed}/{progress.total}</div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${progress.percentage}%` }} />
                    </div>
                  </div>
                </div>
                <div className="module-arrow">→</div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Lesson/Quiz View (when module selected)
  if (selectedModule) {
    const allLessonsCompleted = selectedModule.lessons.every((lesson) =>
      completedLessons[getLessonKey(selectedCourse.id, selectedModule.moduleId, lesson.id)]
    );
    const moduleProgress = getModuleProgress(selectedCourse, selectedModule);
    if (quizMode && selectedModule.quiz) {
      return (
        <div className="page academy-page-enhanced">
          <div className="lesson-header">
            <button className="btn-back" onClick={() => { setQuizMode(false); setQuizScore(null); setQuizAnswers({}); }}>← Back to Module</button>
            <h2>📝 Module Quiz</h2>
          </div>

          <div className="quiz-container">
            {quizScore ? (
              <div className="quiz-results">
                <div className={`score-card ${quizScore.percentage >= 80 ? 'pass' : 'fail'}`}>
                  <div className="score-circle">
                    <div className="score-percentage">{quizScore.percentage}%</div>
                  </div>
                  <h3>{quizScore.percentage >= 80 ? '🎉 Congratulations!' : '💪 Keep Learning!'}</h3>
                  <p>You scored {quizScore.score} out of {quizScore.total}</p>
                  {quizScore.percentage >= 80 ? (
                    <p className="pass-message">Great job! You've mastered this module.</p>
                  ) : (
                    <p className="fail-message">Review the lessons and try again.</p>
                  )}
                  <div className="quiz-actions">
                    <button className="btn-secondary" onClick={() => { setQuizMode(false); setSelectedModule(null); }}>Back to Modules</button>
                    <button className="btn-primary" onClick={() => { setQuizScore(null); setQuizAnswers({}); }}>Retake Quiz</button>
                  </div>
                </div>

                <div className="answers-review">
                  <h4>📋 Review Your Answers</h4>
                  {selectedModule.quiz.questions.map((q, idx) => (
                    <div key={idx} className={`question-review ${quizAnswers[idx] === q.correct ? 'correct' : 'incorrect'}`}>
                      <div className="question-number">Question {idx + 1}</div>
                      <p className="question-text">{q.question}</p>
                      <div className="answer-options">
                        {q.options.map((opt, optIdx) => (
                          <div key={optIdx} className={`option ${optIdx === q.correct ? 'correct-answer' : ''} ${quizAnswers[idx] === optIdx ? 'selected' : ''}`}>
                            {optIdx === q.correct && <span className="icon">✓</span>}
                            {quizAnswers[idx] === optIdx && optIdx !== q.correct && <span className="icon">✗</span>}
                            {opt}
                          </div>
                        ))}
                      </div>
                      <div className="explanation">
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="quiz-questions">
                {selectedModule.quiz.questions.map((q, idx) => (
                  <div key={idx} className="quiz-question">
                    <h4>Question {idx + 1} of {selectedModule.quiz.questions.length}</h4>
                    <p className="question-text">{q.question}</p>
                    <div className="options-list">
                      {q.options.map((option, optIdx) => (
                        <label key={optIdx} className="option-label">
                          <input
                            type="radio"
                            name={`question-${idx}`}
                            checked={quizAnswers[idx] === optIdx}
                            onChange={() => setQuizAnswers({ ...quizAnswers, [idx]: optIdx })}
                          />
                          <span className="option-text">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <button 
                  className="btn-primary btn-submit-quiz" 
                  onClick={handleQuizSubmit}
                  disabled={Object.keys(quizAnswers).length < selectedModule.quiz.questions.length}
                >
                  Submit Quiz →
                </button>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (selectedLesson) {
      const completionKey = getLessonKey(selectedCourse.id, selectedModule.moduleId, selectedLesson.id);
      const isCompleted = Boolean(completedLessons[completionKey]);
      const promptForLesson = completionPrompt?.key === completionKey ? completionPrompt : null;

      return (
        <div className="page academy-page-enhanced">
          <div className="lesson-header">
            <button className="btn-back" onClick={() => setSelectedLesson(null)}>← Back to Lessons</button>
            <div className="lesson-meta-header">
              <h2>{selectedLesson.title}</h2>
              <div className="lesson-badges">
                <span className="badge-type">{selectedLesson.type}</span>
                <span className="badge-duration">⏱️ {selectedLesson.duration}</span>
              </div>
            </div>
          </div>

          <div className="lesson-content-container">
            <div className="lesson-body" dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />
            <div className="lesson-footer">
              {isCompleted && !promptForLesson ? (
                <div className="completion-banner">
                  <div>
                    <strong>Completed</strong> · This lesson is marked as done.
                  </div>
                  <button className="btn-secondary" onClick={() => setSelectedLesson(null)}>Back to Lessons</button>
                </div>
              ) : null}

              {promptForLesson ? (
                <div className="completion-banner">
                  <div>
                    <strong>Completed</strong> · Next: {promptForLesson.nextStep.label}
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => handleContinueFromCompletion(promptForLesson.nextStep)}
                  >
                    Continue →
                  </button>
                </div>
              ) : (
                <button
                  className="btn-primary"
                  onClick={() => handleLessonComplete(selectedCourse.id, selectedModule.moduleId, selectedLesson)}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="page academy-page-enhanced">
        <div className="lesson-header">
          <button className="btn-back" onClick={() => setSelectedModule(null)}>← Back to Modules</button>
          <h2>{selectedModule.title}</h2>
          <p>⏱️ {selectedModule.duration}</p>
          <div className="module-progress-header">
            <span>
              Progress: {moduleProgress.completed}/{moduleProgress.total}
            </span>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${moduleProgress.percentage}%` }}
              />
            </div>
          </div>
        </div>

        <div className="lessons-container">
          <h3>📖 Lessons</h3>
          <div className="lessons-list">
            {selectedModule.lessons.map((lesson, idx) => {
              const lessonKey = getLessonKey(selectedCourse.id, selectedModule.moduleId, lesson.id);
              const done = Boolean(completedLessons[lessonKey]);

              return (
                <div
                  key={lesson.id}
                  className={`lesson-item ${done ? 'completed' : ''}`}
                  onClick={() => {
                    setSelectedLesson(lesson);
                    setLastPosition({ courseId: selectedCourse.id, moduleId: selectedModule.moduleId, lessonId: lesson.id });
                  }}
                >
                <div className="lesson-number">{idx + 1}</div>
                <div className="lesson-details">
                  <h4>{lesson.title}</h4>
                  <div className="lesson-meta">
                    <span className="lesson-type">{lesson.type}</span>
                    <span>⏱️ {lesson.duration}</span>
                    {done && <span className="lesson-status">✓ Completed</span>}
                  </div>
                </div>
                <div className="lesson-arrow">▶</div>
              </div>
              );
            })}
          </div>

          {selectedModule.quiz && (
            <div className="quiz-section">
              <h3>✅ Module Quiz</h3>
              <p>Test your understanding with {selectedModule.quiz.questions.length} questions</p>
              <button
                className="btn-primary"
                onClick={() => setQuizMode(true)}
                disabled={!allLessonsCompleted}
                title={!allLessonsCompleted ? 'Complete all lessons to unlock the quiz.' : 'Start quiz'}
              >
                Start Quiz →
              </button>
              {!allLessonsCompleted && (
                <p className="quiz-lock-note">Complete all lessons to unlock the quiz.</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}
