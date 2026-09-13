import { Program, AgeGroup, Project, FAQItem, GalleryItem } from '../types';

export const programs: Program[] = [
  {
    id: 'robotics',
    title: 'Robotics',
    shortDescription: 'Build and program robots while learning engineering, logic, and problem-solving.',
    description: 'Our robotics program takes students on an exciting journey from building simple mechanical structures to programming autonomous robots. Students learn how hardware and software work together to solve real-world problems.',
    icon: 'Bot',
    skills: ['Engineering', 'Logic', 'Problem Solving', 'Mechanics'],
    activities: ['Building robot chassis', 'Programming movement', 'Using sensors'],
    ageGroup: '8-16 Years'
  },
  {
    id: 'coding',
    title: 'Coding',
    shortDescription: 'Develop programming skills through fun, interactive projects and challenges.',
    description: 'Learn the language of the future. From visual block-based programming for beginners to text-based languages like Python and C++, our coding curriculum is designed to make programming accessible and fun.',
    icon: 'Code',
    skills: ['Computational Thinking', 'Algorithms', 'Logic', 'Creativity'],
    activities: ['Game development', 'App creation', 'Logic puzzles'],
    ageGroup: '6-18 Years'
  },
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    shortDescription: 'Introduce young learners to AI concepts through age-appropriate activities and projects.',
    description: 'Demystify AI by exploring how machines learn and make decisions. Students will train simple models, understand image and speech recognition, and learn the ethics of artificial intelligence.',
    icon: 'BrainCircuit',
    skills: ['Machine Learning Basics', 'Data Analysis', 'Critical Thinking'],
    activities: ['Training simple AI models', 'Exploring computer vision', 'AI ethics discussions'],
    ageGroup: '12-20 Years'
  },
  {
    id: 'electronics',
    title: 'Electronics',
    shortDescription: 'Understand circuits, sensors, components, and how everyday technology works.',
    description: 'Get hands-on with breadboards, LEDs, resistors, and sensors. Students learn the fundamentals of electricity and circuitry to understand the hardware that powers our digital world.',
    icon: 'Cpu',
    skills: ['Circuit Design', 'Hardware Troubleshooting', 'Physics Concepts'],
    activities: ['Building basic circuits', 'Using multimeters', 'Designing logic gates'],
    ageGroup: '10-18 Years'
  },
  {
    id: 'lego-robotics',
    title: 'LEGO Robotics',
    shortDescription: 'Learn robotics and engineering through engaging LEGO-based projects.',
    description: 'Combining the familiarity of LEGO bricks with powerful motors and sensors, this program is the perfect introduction to robotics and mechanical engineering for younger students.',
    icon: 'Blocks',
    skills: ['Spatial Awareness', 'Basic Mechanics', 'Visual Programming'],
    activities: ['Building LEGO mechanisms', 'Programming LEGO hubs', 'Solving physical challenges'],
    ageGroup: '6-12 Years'
  },
  {
    id: 'arduino',
    title: 'Arduino',
    shortDescription: 'Build real-world electronics and robotics projects using Arduino.',
    description: 'Dive deep into microcontrollers. Students learn C++ programming and electronics integration to build smart devices, home automation prototypes, and complex robots.',
    icon: 'Microchip',
    skills: ['C++ Programming', 'Microcontrollers', 'Hardware Integration'],
    activities: ['Programming Arduino boards', 'Integrating sensors', 'Building smart devices'],
    ageGroup: '12-20 Years'
  },
  {
    id: 'stem',
    title: 'STEM Learning',
    shortDescription: 'Explore science, technology, engineering, and mathematics through practical activities.',
    description: 'Our comprehensive STEM program breaks down the silos between subjects, encouraging students to use a multidisciplinary approach to solve complex problems and understand scientific phenomena.',
    icon: 'Microscope',
    skills: ['Scientific Method', 'Data Collection', 'Analytical Thinking'],
    activities: ['Physics experiments', 'Mathematical modeling', 'Engineering challenges'],
    ageGroup: '6-16 Years'
  },
  {
    id: 'creative-thinking',
    title: 'Creative Thinking',
    shortDescription: 'Develop imagination, innovation, teamwork, and problem-solving skills.',
    description: 'We believe creativity is just as important as technical skill. This program focuses on design thinking, ideation, and collaborative problem-solving to turn wild ideas into feasible prototypes.',
    icon: 'Lightbulb',
    skills: ['Design Thinking', 'Ideation', 'Collaboration', 'Innovation'],
    activities: ['Brainstorming sessions', 'Rapid prototyping', 'Team challenges'],
    ageGroup: '6-20 Years'
  }
];

export const ageGroups: AgeGroup[] = [
  {
    id: '6-8',
    title: 'Explore & Discover',
    range: '6-8 Years',
    focus: 'Curiosity, simple STEM concepts, creative exploration, and basic building.',
    description: 'At this age, children are naturally curious. We harness this curiosity through playful, hands-on activities that introduce foundational concepts in science and engineering without feeling like traditional schoolwork.',
    skills: ['Motor Skills', 'Basic Logic', 'Spatial Awareness', 'Curiosity']
  },
  {
    id: '9-12',
    title: 'Build & Create',
    range: '9-12 Years',
    focus: 'Robotics, coding, LEGO, electronics, and project-based learning.',
    description: 'As abstract thinking develops, students take on more structured challenges. They begin programming their creations, understanding cause and effect, and learning how components interact in a system.',
    skills: ['Problem Solving', 'Visual Programming', 'Basic Mechanics', 'Teamwork']
  },
  {
    id: '13-16',
    title: 'Code & Innovate',
    range: '13-16 Years',
    focus: 'Programming, robotics, electronics, AI introduction, and complex projects.',
    description: 'Teenagers are ready for real-world tools. We transition to text-based coding (like Python and C++), explore microcontrollers like Arduino, and begin applying technology to solve complex, open-ended problems.',
    skills: ['Text-Based Coding', 'Circuit Design', 'Critical Thinking', 'Project Management']
  },
  {
    id: '17-20',
    title: 'Engineer & Lead',
    range: '17-20 Years',
    focus: 'Advanced technology exploration, robotics, coding, engineering thinking, and innovation.',
    description: 'Preparing for the future, older students work on advanced, self-directed projects. They explore cutting-edge concepts like Artificial Intelligence, complex robotics algorithms, and system architecture.',
    skills: ['Advanced Programming', 'Systems Architecture', 'Innovation', 'Leadership']
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'q1',
    question: 'What age groups does RoboSTEM Academy teach?',
    answer: 'We offer programs for children and young learners from ages 6 to 20. Our curriculum is carefully tailored to be age-appropriate, ensuring students are challenged but not overwhelmed at every stage of their development.',
    category: 'Age Groups'
  },
  {
    id: 'q2',
    question: 'Does my child need previous robotics or coding experience?',
    answer: 'Not at all! We welcome students of all skill levels, from complete beginners to advanced learners. Our introductory programs are designed to build foundational knowledge from the ground up.',
    category: 'Learning'
  },
  {
    id: 'q3',
    question: 'What does a typical class involve?',
    answer: 'A typical class focuses heavily on hands-on learning. It usually begins with a brief concept introduction, followed by the majority of the time spent building, coding, experimenting, and problem-solving with physical components and software.',
    category: 'Programs'
  },
  {
    id: 'q4',
    question: 'Do students work on practical projects?',
    answer: 'Yes, project-based learning is at the core of our philosophy. Rather than just memorizing theory, students apply what they learn by building functioning robots, writing real code, and creating electronic prototypes.',
    category: 'Learning'
  },
  {
    id: 'q5',
    question: 'What technologies do students use?',
    answer: 'Depending on their age and program, students may use LEGO Education platforms, Arduino microcontrollers, various sensors and motors, block-based coding (like Scratch), text-based languages (Python, C++), and introductory AI tools.',
    category: 'Programs'
  },
  {
    id: 'q6',
    question: 'Are robotics workshops available?',
    answer: 'Yes, we regularly offer specialized workshops focused on specific themes, technologies, or challenges. Please contact RoboSTEM Academy for current availability and workshop details.',
    category: 'Workshops'
  },
  {
    id: 'q7',
    question: 'Does RoboSTEM Academy conduct competitions?',
    answer: 'We believe friendly competition fosters innovation. Students may have opportunities to participate in internal challenges and prepare for external robotics and STEM competitions. Please contact us for the current competition schedule.',
    category: 'Workshops'
  },
  {
    id: 'q8',
    question: 'Where is RoboSTEM Academy located?',
    answer: 'We are located in Rajkot, Gujarat, India. For our exact street address and visiting hours, please contact us directly to arrange a visit or trial class.',
    category: 'General'
  }
];

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Line Following Robot',
    category: 'Robotics',
    technology: 'Arduino & IR Sensors',
    skills: ['Sensor Integration', 'Logic Flow', 'Mechanics'],
    difficulty: 'Intermediate'
  },
  {
    id: 'p2',
    title: 'Smart Home Automated Light',
    category: 'Electronics',
    technology: 'Arduino & LDR Sensors',
    skills: ['Circuit Design', 'C++ Basics', 'Environmental Sensing'],
    difficulty: 'Beginner'
  },
  {
    id: 'p3',
    title: 'Obstacle Avoiding Rover',
    category: 'Robotics',
    technology: 'Ultrasonic Sensors',
    skills: ['Distance Calculation', 'Motor Control', 'Algorithms'],
    difficulty: 'Intermediate'
  },
  {
    id: 'p4',
    title: 'Interactive Chatbot',
    category: 'Artificial Intelligence',
    technology: 'Python',
    skills: ['Natural Language Processing Basics', 'Python Coding', 'Logic'],
    difficulty: 'Advanced'
  },
  {
    id: 'p5',
    title: 'LEGO Mechanical Arm',
    category: 'LEGO Robotics',
    technology: 'LEGO Education',
    skills: ['Gears & Pulleys', 'Structural Integrity', 'Motor Control'],
    difficulty: 'Beginner'
  },
  {
    id: 'p6',
    title: 'Weather Monitoring Station',
    category: 'STEM',
    technology: 'Microcontrollers & Sensors',
    skills: ['Data Collection', 'Hardware Integration', 'Analysis'],
    difficulty: 'Advanced'
  }
];

export const galleryCategories = ['All', 'Robotics', 'Coding', 'STEM Activities', 'Workshops', 'Competitions', 'Student Projects'];
