package com.shailesh.quizapp.service;

import com.shailesh.quizapp.model.Option;
import com.shailesh.quizapp.model.Question;
import com.shailesh.quizapp.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuestionRepository questionRepository;

    //Fetch all questions but hide the "isCorrect" field
    public List<Map<String, Object>> getAllQuestions() {
        List<Question> questions = questionRepository.findAll();

        List<Map<String, Object>> response = new ArrayList<>();
        for (Question q : questions) {
            Map<String, Object> questionMap = new HashMap<>();
            questionMap.put("id", q.getId());
            questionMap.put("text", q.getText());

            List<Map<String, Object>> optionsList = new ArrayList<>();
            for (Option o : q.getOptions()) {
                Map<String, Object> optionMap = new HashMap<>();
                optionMap.put("id", o.getId());
                optionMap.put("text", o.getText());
                // Do NOT include isCorrect
                optionsList.add(optionMap);
            }
            questionMap.put("options", optionsList);

            response.add(questionMap);
        }
        return response;
    }

    //Calculate score based on submitted answers
    public Map<String, Object> calculateScore(Map<Long, Long> userAnswers) {
        List<Question> questions = questionRepository.findAll();

        int score = 0;
        for (Question q : questions) {
            for (Option o : q.getOptions()) {
                if (o.isCorrect() && Objects.equals(userAnswers.get(q.getId()), o.getId())) {
                    score++;
                }
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("score", score);
        result.put("total", questions.size());
        return result;
    }
}