# 📝 Online Quiz Application  

A full-stack web application where users can take a quiz and see their final score.  
Built with **Spring Boot (Java)** for the backend, **React + Tailwind** for the frontend, and **MySQL** as the database.  

---

## 📌 Features
- User-friendly quiz interface (one question at a time).  
- Navigation with **Next / Previous** buttons.  
- Final **Submit** button → calculates score.  
- Responsive modern UI with Tailwind.  
- REST API backend with Spring Boot + MySQL.  

---

## ⚙️ Tech Stack
- **Backend:** Spring Boot, JPA, MySQL  
- **Frontend:** React, Vite, Tailwind CSS  
- **Build Tools:** Maven, npm  
- **Other:** Axios for API calls, Framer Motion for animations  

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shailesh1945/quiz-app.git
cd quiz-app
```
---
### 1️⃣ Backend Setup(Sring Boot)
Update src/main/resources/application.properties with your MySQL credentials:
```bash
spring.application.name=quizapp

#DataSource Config
spring.datasource.url=jdbc:mysql://localhost:3306/quizedb
spring.datasource.username=root
spring.datasource.password=Stark@1945
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update

# Show SQL queries in console (useful for debugging)
spring.jpa.show-sql=true

# Use MySQL dialect
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

server.port=8080
```
---
Run the backend
```bash
mvn spring-boot:run
```
Backend runs on -> http://localhost:8080
---
### Frontend Setup (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on -> http://localhost:5173
---
### Running the Application

- Start MySQL server and ensure DB is created (quizdb).
- Run the Spring Boot backend (mvn spring-boot:run).
- Run the React frontend (npm run dev).
- Open http://localhost:5173 in your browser.
---
### Prioject Structure
```bash
quiz-app/
│
├── backend/ # Spring Boot backend
│ ├── src/main/java/com/shailesh/quizapp
│ │ ├── controller/
│ │ │ └── QuizController.java # REST endpoints
│ │ ├── model/
│ │ │ ├── Question.java # Question entity
│ │ │ └── Option.java # Option entity
│ │ ├── repository/
│ │ │ ├── QuestionRepository.java # Repository for questions
│ │ │ └── OptionRepository.java # Repository for options
│ │ ├── service/
│ │ │ └── QuizService.java # Business logic
│ │ └── QuizappApplication.java # Spring Boot entry point
│ │
│ └── src/main/resources/
│ ├── application.properties # DB + Spring configs
│ 
│ 
│
├── frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── assets/ # Images, icons
│ │ ├── components/
│ │ │ └── QuestionCard.jsx # Renders a single question
│ │ ├── pages/
│ │ │ ├── StartPage.jsx # Landing page
│ │ │ ├── QuizPage.jsx # Quiz flow page
│ │ │ └── ResultPage.jsx # Shows final score
│ │ ├── App.jsx # Router setup
│ │ ├── App.css # Global styles
│ │ ├── index.css # Tailwind + base styles
│ │ └── main.jsx # React entry point
│ │
│ ├── index.html # Root HTML
│ ├── vite.config.js # Vite config
│ 
│ 
│
└── README.md # Main project documentation
```
---
### Assumptions & Design Choices
- Only one quiz is available (can be extended for multiple).
- User authentication is not included (focus on quiz flow).
- Backend validates answers and calculates score.
- Clean separation between frontend & backend for scalability.
---
