"use strict";

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const question = document.querySelectorAll(".question");
const correctAnswer = ["D", "C", "B", "A", "A"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];
  let score = 0;

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 1;
      question[index].classList.add("correct");
      question[index].classList.remove("wrong");
    } else {
      question[index].classList.add("wrong");
      question[index].classList.remove("correct");
    }
  });
  console.log(score);

  scrollTo(0, 0);
  result.classList.remove("hide");
  const resultBoard = result.querySelector("p");
  resultBoard.textContent = `You Scored ${score} / 5`;
});

const refreshPage = () => {
  window.location.reload();
  window.preventDefault();
};
