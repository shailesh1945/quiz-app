package com.shailesh.quizapp.controller;


import com.shailesh.quizapp.service.QuizService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5174")
public class QuizController {

    private final QuizService quizService;

    //GET /questions
    @GetMapping("/questions")
    public List<Map<String, Object>> getQuestions(){
        return quizService.getAllQuestions();
    }

    //POST /submit
    @PostMapping("/submit")
    public Map<String, Object> submitAnswers(@RequestBody Map<Long, Long> answers){
        return quizService.calculateScore(answers);
    }
}
