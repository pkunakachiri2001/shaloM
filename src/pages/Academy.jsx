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
    instructor: 'Amicus IPR Academy',
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

                const courses = [
                  {
                    id: 1,
                    title: 'Intellectual Property Fundamentals',
                    level: 'Beginner',
                    duration: '4 hours',
                    modules: 2,
                    rating: 4.9,
                    enrolled: 14200,
                    description: 'Learn the core IP rights, why they matter, and how creators and businesses protect innovations, brands, and content.',
                    instructor: 'Amicus IPR Academy',
                    image: '📘',
                    color: '#3b82f6',
                    syllabus: [
                      {
                        moduleId: 1,
                        title: 'Module 1: IP Rights Overview',
                        duration: '35 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'What Is Intellectual Property?',
                            type: 'reading',
                            duration: '12 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Understanding Intellectual Property</h3>
                                <p class="lead">Intellectual property (IP) protects creations of the mind—innovations, artistic works, and distinctive brand identifiers.</p>

                                <div class="info-card">
                                  <h4>📌 Why IP Matters</h4>
                                  <ul>
                                    <li><strong>Incentive to Innovate:</strong> Rewards creators and investors</li>
                                    <li><strong>Brand Trust:</strong> Protects reputation and goodwill</li>
                                    <li><strong>Economic Value:</strong> IP assets can be licensed or sold</li>
                                    <li><strong>Consumer Protection:</strong> Reduces counterfeits and confusion</li>
                                  </ul>
                                </div>

                                <h4>🧭 Core IP Categories</h4>
                                <div class="topic-grid">
                                  <div class="topic-card">
                                    <span class="topic-icon">💡</span>
                                    <h5>Patents</h5>
                                    <p>Protect new, useful, and non-obvious inventions</p>
                                  </div>
                                  <div class="topic-card">
                                    <span class="topic-icon">™️</span>
                                    <h5>Trademarks</h5>
                                    <p>Protect brand names, logos, and distinctive signs</p>
                                  </div>
                                  <div class="topic-card">
                                    <span class="topic-icon">©️</span>
                                    <h5>Copyright</h5>
                                    <p>Protects original literary, artistic, and software works</p>
                                  </div>
                                  <div class="topic-card">
                                    <span class="topic-icon">🧪</span>
                                    <h5>Trade Secrets</h5>
                                    <p>Protects confidential business information</p>
                                  </div>
                                </div>

                                <div class="example-box">
                                  <h4>📎 Example</h4>
                                  <p><strong>Scenario:</strong> A startup builds a unique water‑filter design and a brand name for its product line.</p>
                                  <p><strong>IP Strategy:</strong></p>
                                  <ul>
                                    <li>File a patent for the filter mechanism</li>
                                    <li>Register a trademark for the brand name/logo</li>
                                    <li>Copyright the product manual and marketing visuals</li>
                                    <li>Keep supplier lists and formulas as trade secrets</li>
                                  </ul>
                                </div>
                              </div>
                            `
                          },
                          {
                            id: 2,
                            title: 'Global IP Systems at a Glance',
                            type: 'reading',
                            duration: '10 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Key IP Institutions & Treaties</h3>
                                <p class="lead">IP rights are territorial, but global systems help streamline protection across borders.</p>

                                <table class="data-table">
                                  <thead>
                                    <tr>
                                      <th>System</th>
                                      <th>Focus</th>
                                      <th>Purpose</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>WIPO</td>
                                      <td>Global IP coordination</td>
                                      <td>Treaties, standards, and global guidance</td>
                                    </tr>
                                    <tr>
                                      <td>PCT</td>
                                      <td>Patents</td>
                                      <td>Single international patent filing route</td>
                                    </tr>
                                    <tr>
                                      <td>Madrid System</td>
                                      <td>Trademarks</td>
                                      <td>International trademark registration</td>
                                    </tr>
                                    <tr>
                                      <td>Berne Convention</td>
                                      <td>Copyright</td>
                                      <td>Automatic protection across member states</td>
                                    </tr>
                                  </tbody>
                                </table>

                                <div class="key-takeaway">
                                  <h4>🎯 Key Takeaways</h4>
                                  <ol>
                                    <li>IP protection is territorial—register where you operate</li>
                                    <li>Treaties simplify filing but do not replace national rights</li>
                                    <li>Enforcement depends on local laws and courts</li>
                                  </ol>
                                </div>
                              </div>
                            `
                          }
                        ],
                        quiz: {
                          questions: [
                            {
                              question: 'Which IP right protects brand names and logos?',
                              options: ['Patent', 'Trademark', 'Copyright', 'Trade Secret'],
                              correct: 1,
                              explanation: 'Trademarks protect brand identifiers such as names, logos, and slogans.'
                            },
                            {
                              question: 'Which treaty system streamlines international trademark filing?',
                              options: ['Berne Convention', 'Madrid System', 'PCT', 'TRIPS'],
                              correct: 1,
                              explanation: 'The Madrid System provides an international route for trademark registration.'
                            },
                            {
                              question: 'IP rights are primarily:',
                              options: ['Global by default', 'Territorial by default', 'Unlimited in scope', 'Only for large companies'],
                              correct: 1,
                              explanation: 'IP rights are territorial and depend on each country’s law.'
                            }
                          ]
                        }
                      },
                      {
                        moduleId: 2,
                        title: 'Module 2: IP Ownership & Commercialization',
                        duration: '30 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Ownership, Assignment & Licensing',
                            type: 'reading',
                            duration: '15 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Who Owns IP?</h3>
                                <p class="lead">Ownership depends on creator status, employment contracts, and written assignments.</p>

                                <div class="info-card">
                                  <h4>📑 Common Scenarios</h4>
                                  <ul>
                                    <li><strong>Employee IP:</strong> Often owned by the employer if created within scope of work</li>
                                    <li><strong>Freelancers:</strong> Creator owns unless rights are assigned in writing</li>
                                    <li><strong>Collaborations:</strong> Joint ownership unless otherwise agreed</li>
                                  </ul>
                                </div>

                                <div class="topic-grid">
                                  <div class="topic-card">
                                    <span class="topic-icon">📝</span>
                                    <h5>Assignments</h5>
                                    <p>Transfer ownership of IP rights</p>
                                  </div>
                                  <div class="topic-card">
                                    <span class="topic-icon">🤝</span>
                                    <h5>Licensing</h5>
                                    <p>Grant permission to use IP while retaining ownership</p>
                                  </div>
                                  <div class="topic-card">
                                    <span class="topic-icon">💼</span>
                                    <h5>Royalty Models</h5>
                                    <p>Revenue sharing, fixed fees, or usage‑based royalties</p>
                                  </div>
                                </div>
                              </div>
                            `
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 2,
                    title: 'Patents & Innovation Protection',
                    level: 'Intermediate',
                    duration: '5 hours',
                    modules: 2,
                    rating: 4.8,
                    enrolled: 7800,
                    description: 'From patentability to enforcement—learn how to protect inventions, draft claims, and build filing strategy.',
                    instructor: 'Amicus IPR Academy',
                    image: '🔬',
                    color: '#8b5cf6',
                    syllabus: [
                      {
                        moduleId: 1,
                        title: 'Module 1: Patentability & Prior Art',
                        duration: '40 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Patentability Criteria',
                            type: 'reading',
                            duration: '15 min',
                            content: `
                              <div class="lesson-content">
                                <h3>What Can Be Patented?</h3>
                                <p class="lead">Most jurisdictions require novelty, inventive step, and industrial applicability.</p>
                                <ul>
                                  <li><strong>Novelty:</strong> Not publicly disclosed anywhere in the world</li>
                                  <li><strong>Inventive Step:</strong> Not obvious to a skilled person</li>
                                  <li><strong>Utility:</strong> Practical, industrial application</li>
                                </ul>
                                <div class="example-box">
                                  <h4>🧠 Prior Art Search</h4>
                                  <p>Search existing patents, publications, and products before filing to assess novelty and reduce risk.</p>
                                </div>
                              </div>
                            `
                          }
                        ]
                      },
                      {
                        moduleId: 2,
                        title: 'Module 2: Filing Strategy & Enforcement',
                        duration: '45 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Claims, Scope & Enforcement',
                            type: 'reading',
                            duration: '15 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Drafting Strong Patent Claims</h3>
                                <p class="lead">Claims define the legal boundary of protection and are central in enforcement.</p>
                                <div class="info-card">
                                  <h4>✅ Best Practices</h4>
                                  <ul>
                                    <li>Define core inventive concept clearly</li>
                                    <li>Include dependent claims to cover variants</li>
                                    <li>Align claim scope with business strategy</li>
                                  </ul>
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
                    title: 'Trademarks & Brand Protection',
                    level: 'Intermediate',
                    duration: '4 hours',
                    modules: 2,
                    rating: 4.7,
                    enrolled: 9100,
                    description: 'Protect brand identity, conduct clearance searches, and enforce rights against confusion and counterfeits.',
                    instructor: 'Amicus IPR Academy',
                    image: '™️',
                    color: '#10b981',
                    syllabus: [
                      {
                        moduleId: 1,
                        title: 'Module 1: Trademark Basics',
                        duration: '35 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Distinctiveness & Clearance',
                            type: 'reading',
                            duration: '12 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Choosing a Strong Mark</h3>
                                <p class="lead">Fanciful and arbitrary marks are strongest; descriptive marks are hardest to protect.</p>
                                <div class="example-box">
                                  <h4>🔍 Clearance Search</h4>
                                  <p>Search registries, marketplaces, and domain names before adopting a brand.</p>
                                </div>
                              </div>
                            `
                          }
                        ]
                      },
                      {
                        moduleId: 2,
                        title: 'Module 2: Enforcement & Online Protection',
                        duration: '40 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Opposition, Infringement & Takedowns',
                            type: 'reading',
                            duration: '14 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Defending Your Brand</h3>
                                <p class="lead">Use opposition proceedings, infringement claims, and platform takedowns to curb misuse.</p>
                                <ul>
                                  <li>Monitor for confusingly similar marks</li>
                                  <li>Document evidence of use and reputation</li>
                                  <li>Leverage marketplace and social platform tools</li>
                                </ul>
                              </div>
                            `
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: 4,
                    title: 'Copyright & Digital Rights',
                    level: 'Advanced',
                    duration: '4 hours',
                    modules: 2,
                    rating: 4.6,
                    enrolled: 6200,
                    description: 'Understand copyright scope, fair use exceptions, licensing, and enforcement in digital platforms.',
                    instructor: 'Amicus IPR Academy',
                    image: '🎨',
                    color: '#f59e0b',
                    syllabus: [
                      {
                        moduleId: 1,
                        title: 'Module 1: Copyright Basics',
                        duration: '30 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Scope, Duration & Exceptions',
                            type: 'reading',
                            duration: '12 min',
                            content: `
                              <div class="lesson-content">
                                <h3>What Copyright Protects</h3>
                                <p class="lead">Original expression in literary, artistic, musical, and software works.</p>
                                <div class="info-card">
                                  <h4>⚖️ Exceptions</h4>
                                  <p>Fair use/fair dealing allows limited use for criticism, education, and news reporting.</p>
                                </div>
                              </div>
                            `
                          }
                        ]
                      },
                      {
                        moduleId: 2,
                        title: 'Module 2: Licensing & Enforcement',
                        duration: '35 min',
                        lessons: [
                          {
                            id: 1,
                            title: 'Takedowns, Licensing & Royalties',
                            type: 'reading',
                            duration: '15 min',
                            content: `
                              <div class="lesson-content">
                                <h3>Monetizing Creative Works</h3>
                                <p class="lead">Use licenses to enable lawful use and enforce rights on platforms when infringed.</p>
                                <ul>
                                  <li>Exclusive vs non‑exclusive licenses</li>
                                  <li>Collecting royalties through CMOs</li>
                                  <li>Notice‑and‑takedown workflows</li>
                                </ul>
                              </div>
                            `
                          }
                        ]
                      }
                    ]
                  }
                ];
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
    instructor: 'Amicus IPR Academy',
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
    instructor: 'Amicus IPR Academy',
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

    const course = selectedCourse ?? courses.find(item => item.id === courseId);
    const module = selectedModule ?? course?.syllabus?.find(item => item.moduleId === moduleId);
    const nextStep = course && module
      ? getNextStep(course, module, lesson)
      : { type: 'modules', label: 'Back to Modules', target: null };

    setCompletionPrompt({ key, nextStep });
  };

  const handleContinueFromCompletion = (nextStep) => {
    if (!nextStep) return;
    setCompletionPrompt(null);

    if (nextStep.type === 'lesson' && nextStep.target) {
      setQuizMode(false);
      setSelectedLesson(nextStep.target);
      setLastPosition({
        courseId: selectedCourse.id,
        moduleId: selectedModule.moduleId,
        lessonId: nextStep.target.id
      });
      return;
    }

    if (nextStep.type === 'quiz') {
      setSelectedLesson(null);
      setQuizAnswers({});
      setQuizScore(null);
      setQuizMode(true);
      return;
    }

    setSelectedLesson(null);
    setQuizMode(false);
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
            <h1>🎓 IPR Academy</h1>
            <p className="lead">Professional learning platform with IPR courses, interactive quizzes, and practical certificates</p>
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
          <h2>Why Learn IPR?</h2>
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
              <p>IPR applies worldwide. Learn international frameworks and standards.</p>
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
