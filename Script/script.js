const data = [
  {
    id: 1,
    question: "Is cow have 4 legs?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 2,
    question: "Is cow have 2 legs?",
    answer: ["Yes", "No"],
    correct: [1],
  },
  {
    id: 3,
    question: "What is the capital of Italy?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 4,
    question: "What is the capital of France?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 5,
    question: "What is the capital of Germany?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 6,
    question: "What is the capital of Italy?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 7,
    question: "What is the capital of France?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 8,
    question: "What is the capital of Germany?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 9,
    question: "What is the capital of Italy?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 10,
    question: "What is the capital of France?",
    answer: ["Yes", "No"],
    correct: [0],
  },
  {
    id: 11,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 12,
    question: "What is the capital of Italy?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [2],
  },
  {
    id: 13,
    question: "What is the capital of France?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [0],
  },
  {
    id: 14,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 15,
    question: "What is the capital of Italy?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [2],
  },
  {
    id: 16,
    question: "What is the capital of France?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [0],
  },
  {
    id: 17,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 18,
    question: "What is the capital of Italy?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [2],
  },
  {
    id: 19,
    question: "What is the capital of France?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [0],
  },
  {
    id: 20,
    question: "What is the capital of Germany?",
    answer: ["Paris", "Berlin", "Rome", "London"],
    correct: [1],
  },
  {
    id: 21,
    question: "What animal have 4 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [0, 1],
  },
  {
    id: 22,
    question: "What animal have 2 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 23,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 24,
    question: "What animal have 4 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [0, 1],
  },
  {
    id: 25,
    question: "What animal have 2 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 26,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 27,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 28,
    question: "What animal have 4 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [0, 1],
  },
  {
    id: 29,
    question: "What animal have 2 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 30,
    question: "What animal have 0 legs?",
    answer: ["cat", "dog", "fish", "bird"],
    correct: [2, 3],
  },
  {
    id: 31,
    question: "What is capital of France?",
    correct: "London",
  },
  {
    id: 32,
    question: "What is capital of Germany?",
    correct: "Berlin",
  },
  {
    id: 33,
    question: "What is capital of Italy?",
    correct: "Rome",
  },
  {
    id: 34,
    question: "What is capital of France?",
    correct: "Paris",
  },
  {
    id: 35,
    question: "What is capital of Germany?",
    correct: "Berlin",
  },
  {
    id: 36,
    question: "What is capital of Italy?",
    correct: "Rome",
  },
  {
    id: 37,
    question: "What is capital of France?",
    correct: "Paris",
  },
  {
    id: 38,
    question: "What is capital of Germany?",
    correct: "Berlin",
  },
  {
    id: 39,
    question: "What is capital of Italy?",
    correct: "Rome",
  },
  {
    id: 40,
    question: "What is capital of France?",
    correct: "Paris",
  },
];

const LoadData = () => {
  questionList = document.getElementById("question-list");
  for (let i = 0; i < data.length; i++) {
    if (i < 10) {
      if (i === 0)
        questionList.innerHTML += `<h3 id="type1" >Type 1: True/False<h3>`;
      questionList.innerHTML += TrueFalseQuestion(data[i]);
    } else if (i < 20) {
      if (i === 10)
        questionList.innerHTML += `<h3 id="type2">Type 2: Chose on<h3>`;
      questionList.innerHTML += OneCorrectQuestion(data[i]);
    } else if (i < 30) {
      if (i === 20)
        questionList.innerHTML += `<h3 id="type3">Type 3: Multiple choice<h3>`;
      questionList.innerHTML += MultipleCorrectQuestion(data[i]);
    } else if (i < 40) {
      if (i === 30) questionList.innerHTML += `<h3 id="type4">Type 4: Text<h3>`;
      questionList.innerHTML += TextQuestion(data[i]);
    }
  }
};

const TrueFalseQuestion = (data) => {
  return ` 
            
            <li style="background-color:#dff2a6">
                <div class="question"> ${"Cau " + data.id + ": "} ${data.question
    }</div>
                <div class="answer">
                    <input type="radio" name="answer-question-${data.id
    }" value="0">${data.answer[0]}
                    <input type="radio" name="answer-question-${data.id
    }" value="1">${data.answer[1]}
            </li>
            `;
};
const OneCorrectQuestion = (data) => {
  return `
            
            <li style="background-color:#d2f9f9">
                <div class="question"> ${"Cau " + data.id + ": "} ${data.question}</div>
                <div class="answer">
                    <input type="radio" name="answer-question-${data.id}" value="0">${data.answer[0]}
                    <input type="radio" name="answer-question-${data.id
    }" value="1">${data.answer[1]}
                    <input type="radio" name="answer-question-${data.id
    }" value="2">${data.answer[2]}
                    <input type="radio" name="answer-question-${data.id
    }" value="3">${data.answer[3]}
            </li>
            `;
};
const MultipleCorrectQuestion = (data) => {
  return `
            
            <li style="background-color:#d2e9f9">
                <div class="question"> ${"Cau " + data.id + ": "} ${data.question
    }</div>
                <div class="answer">
                    <input type="checkbox" name="answer-question-${data.id
    }" value="0">${data.answer[0]}
                    <input type="checkbox" name="answer-question-${data.id
    }" value="1">${data.answer[1]}
                    <input type="checkbox" name="answer-question-${data.id
    }" value="2">${data.answer[2]}
                    <input type="checkbox" name="answer-question-${data.id
    }" value="3">${data.answer[3]}
            </li>
            `;
};
const TextQuestion = (data) => {
  return `
        
        <li style="background-color:#f9f2d2">
            <div class="question"> ${"Cau " + data.id + ": "} ${data.question
    }</div>
            <div class="answer">
                <input type="text" name="answer-question-${data.id
    }" value="" placeholder="Type your answer">
        </li>
        `;
};

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  // CheckAnswer();
});

let score = 0;
const CheckAnswer = () => {
  document.querySelectorAll("input").forEach((item) => {
    item.disabled = true;
  });
  for (let i = 1; i < data.length + 1; i++) {
    if (i < 30) {
      let answer = document.querySelectorAll(
        `input[name="answer-question-${i}"]:Checked`
      );
      let yourAnswer = [];
      for (let j = 0; j < answer.length; j++) {
        yourAnswer.push(answer[j].value);
      }
      if (yourAnswer.length == 0) continue;
      let correct = data[i - 1].correct;
      if (CheckList(yourAnswer, correct)) {
        score++;
      }
    } else {
      let answer = document.querySelector(
        `input[name="answer-question-${i}"]`
      ).value;
      let correct = data[i - 1].correct;
      if (answer == correct) {
        score++;
      }
    }
  }
  console.log(score);
  document.getElementById("score").innerHTML = "Your score: " + score;
};

const CheckList = (yourAnswer, correct) => {
  if (yourAnswer.length != correct.length) return false;
  for (let i = 0; i < yourAnswer.length; i++) {
    if (correct.indexOf(Number(yourAnswer[i])) == -1) return false;
  }
  return true;
};

// const submitBtn = document.getElementById('submit');
// const confirmPopup = document.getElementById('result-popup');
// const resultPopup = document.getElementById('result-popup');
// const confirmYesBtn = document.getElementById('confirm-yes');
// const confirmNoBtn = document.getElementById('confirm-no');

// // Hiển thị popup xác nhận submit khi click vào nút "Submit"
// submitBtn.addEventListener('click', () => {
// //   confirmPopup.classList.remove('hidden');
//   document.getElementById('score').textContent = `Your score: ${score}`;
// });

// // Ẩn popup xác nhận submit khi click vào nút "Không"
// confirmNoBtn.addEventListener('click', () => {
//   confirmPopup.classList.add('hidden');
// });

// // Hiển thị popup thông báo submit thành công và tính điểm khi click vào nút "Có"
// confirmYesBtn.addEventListener('click', () => {
//   // Hiển thị điểm (score)
//   document.getElementById('score').textContent = `Your score: ${score}`;

//   confirmPopup.classList.add('hidden');
//   resultPopup.classList.remove('hidden');
// });

const form = document.getElementById("question-form");
const results = document.getElementById("survey-results");
let count = 0;
var radioInputs = document.querySelectorAll('input[type="radio"]');
console.log(radioInputs);
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Collect answers into an object
  const answers = {};
  answers.name = form.getElementsByName["name"]?.value;
  answers.dob = form.getElementsByName["date"]?.value;
  answers.cccd = form.getElementsByName["cccd"]?.value;

  // Iterate through remaining answer elements and add them to the object
  for (let i = 1; i <= 40; i++) {
    const answerElement = form.getElementsByName[`answer-question-${i}`];
    if (answerElement) {
      answers[`answer-${i}`] = answerElement.value;
      count+=1
    }
  }

  // Create the question list using a loop and string concatenation
  let questionList = "";
  for (let i = 1; i <= 40; i++) {
    const answer = answers[`answer-${i}`];
    if (answer) {
      questionList += `<li>Question ${i}: ${answer}</li>`;
    }
  }

  // Update the results with the collected data
  results.innerHTML = `
    <h2>Your survey result:</h2>
    <p>Name: ${answers.name}</p>
    <p>Date of birth: ${answers.dob}</p>
    <p>Identity Number: ${answers.cccd}</p>
    <p>Address: ${addr}</p>

    <ul>
      ${questionList}
    </ul>
  `;

  // Increment submission count
  count++;
  console.log(questionList)
});
console.log(results)
console.log(count);

function appear() {
  document.getElementById("secret").innerHTML="Your result: 17/40";
}
