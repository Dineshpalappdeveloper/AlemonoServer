const courses = [
  {
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/150?text=React+Native",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      { name: "Alice Johnson", email: "alice@example.com" },
      { name: "Bob Smith", email: "bob@example.com" },
    ],
    likes: 10,
  },
  {
    name: "Advanced Python Programming",
    instructor: "Jane Smith",
    description:
      "Dive deep into advanced Python topics and best practices for building scalable applications.",
    enrollmentStatus: "Open",
    thumbnail: "https://via.placeholder.com/150?text=Python",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate Python knowledge",
      "Experience with Python libraries",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Advanced Functions and Lambda Expressions",
        content:
          "Exploring higher-order functions, lambda expressions, and decorators.",
      },
      {
        week: 2,
        topic: "Working with APIs",
        content: "Building and consuming APIs using Python.",
      },
    ],
    students: [
      { name: "Charlie Brown", email: "charlie@example.com" },
      { name: "David Wilson", email: "david@example.com" },
    ],
    likes: 15,
  },
  {
    name: "Full-Stack Web Development",
    instructor: "Emily Davis",
    description:
      "Learn to build modern web applications from front-end to back-end using popular technologies.",
    enrollmentStatus: "Closed",
    thumbnail: "https://via.placeholder.com/150?text=Web+Development",
    duration: "12 weeks",
    schedule: "Fridays, 5:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic HTML/CSS knowledge", "JavaScript basics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Web Development",
        content: "Overview of front-end and back-end technologies.",
      },
      {
        week: 2,
        topic: "Building a RESTful API",
        content: "Creating a back-end API using Node.js and Express.",
      },
    ],
    students: [
      { name: "Eve Parker", email: "eve@example.com" },
      { name: "Frank Wright", email: "frank@example.com" },
    ],
    likes: 25,
  },
  {
    name: "Data Science with Python",
    instructor: "Michael Johnson",
    description:
      "Master data analysis, visualization, and machine learning using Python.",
    enrollmentStatus: "Closed",
    thumbnail: "https://via.placeholder.com/150?text=Data+Science",
    duration: "14 weeks",
    schedule: "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic Python knowledge", "Understanding of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science, Python libraries for data science.",
      },
      {
        week: 2,
        topic: "Data Cleaning and Preparation",
        content: "Techniques for cleaning and preparing data for analysis.",
      },
    ],
    students: [
      { name: "Grace Lee", email: "grace@example.com" },
      { name: "Hank Green", email: "hank@example.com" },
    ],
    likes: 30,
  },
  {
    name: "UI/UX Design Fundamentals",
    instructor: "Sarah Thompson",
    description:
      "Learn the principles of user interface and user experience design to create intuitive, user-friendly apps.",
    enrollmentStatus: "Closed",
    thumbnail: "https://via.placeholder.com/150?text=UI+UX+Design",
    duration: "6 weeks",
    schedule: "Wednesdays, 6:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Basic graphic design knowledge",
      "Familiarity with design tools",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to UI/UX Design",
        content: "Understanding the difference between UI and UX design.",
      },
      {
        week: 2,
        topic: "Design Thinking Process",
        content: "Learn the design thinking process for solving user problems.",
      },
    ],
    students: [
      { name: "Ivy Bell", email: "ivy@example.com" },
      { name: "Jake Long", email: "jake@example.com" },
    ],
    likes: 40,
  },
  {
    name: "Machine Learning with TensorFlow",
    instructor: "Tom Anderson",
    description:
      "Build and train machine learning models using TensorFlow, one of the most popular ML frameworks.",
    enrollmentStatus: "In Progress",
    thumbnail: "https://via.placeholder.com/150?text=TensorFlow",
    duration: "10 weeks",
    schedule: "Mondays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Python knowledge",
      "Understanding of machine learning concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to TensorFlow",
        content: "Overview of TensorFlow, setting up the environment.",
      },
      {
        week: 2,
        topic: "Building Your First Model",
        content: "Creating and training a simple machine learning model.",
      },
    ],
    students: [
      { name: "Linda Perez", email: "linda@example.com" },
      { name: "Mark Taylor", email: "mark@example.com" },
    ],
    likes: 35,
  },
];
