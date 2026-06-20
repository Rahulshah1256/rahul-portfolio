export const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: "Lloyds Technology Centre - Hyderabad, IN",
    duration: "(Dec 2023 - Present)",
    projects: [
      {
        name: "Click to Pay",
        description: "Migrated backend infrastructure from Spring 3.x to 4.x, upgrading legacy dependencies and improving application security, build stability, and access to modern framework features.",
        achievements: [
          "Engineered event-driven asynchronous workflows using Spring Kafka to seamlessly synchronize customer data changes and transaction updates in real-time with the Visa network.",
          "Developed high-performance RESTful APIs utilizing modern Java 17 features (Streams, Lambda expressions, and enhanced Collections) for efficient data manipulation and processing.",
          "Implemented Spring WebClient and REST Client to handle non-blocking, inter-service HTTP communications with external payment gateways and internal microservices."
        ]
      },
      {
        name: "Push to Wallet",
        description: "Backend APIs and scalable solutions for digital wallet provisioning",
        achievements: [
          "Designed and developed Backend APIs in Java and Spring Boot to serve aggregated financial data to the frontend application for digital wallet provisioning.",
          "Analyzed and optimized diverse data models and database queries, resulting in a 20% performance improvement and a 15% reduction in database operational costs.",
          "Designed scalable software solutions by evaluating system performance standards, ultimately increasing overall processing efficiency by 27%."
        ]
      }
    ],
    additionalAchievements: [
      "Streamlined automated deployments by configuring and maintaining CI/CD pipelines through Jenkins, ensuring consistent delivery across environments.",
      "Monitored and troubleshot microservices in production by utilizing Google Cloud Platform (GCP) to inspect system logs, Kubernetes clusters, and containerized pods, ensuring high availability and zero downtime."
    ]
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    company: "Neebal Technologies - Mumbai, IN",
    duration: "(Jun 2022 - Nov 2023)",
    achievements: [
      "Developed RESTful APIs and backend services using Java and Spring Boot for scalable enterprise applications.",
      "Enhanced application performance by 32% by creating scalable backend systems in Java and Spring Boot.",
      "Applied OOP principles and design patterns to improve maintainability and scalability.",
      "Implemented Redis-based caching to reduce database expenses and improve API performance.",
      "Employed Maven for code compilation, automated builds, and MVC-based web application development.",
      "Achieved 95% test coverage using JUnit and API testing practices.",
      "Debugged and troubleshot code related issues/defects to ensure application remained functional and 100% bug-free."
    ]
  },
  {
    id: 3,
    title: "Jr. Executive - IT (Test Engineer)",
    company: "ITC Infotech - Bengaluru, KA",
    duration: "(April 2022 - June 2022)",
    achievements: [
      "Involved in Smoke, Functional, Regression, Integration and System Testing and supported UAT.",
      "Designed and maintained automated test scripts using TestNG to implement new scenarios."
    ]
  }
]