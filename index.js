const quizDB = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        option1: "<script>",
        option2: "<javascript>",
        option3: "<js>",
        option4: "<scripting>",
        answers: "ans1",
    },
    {
        question:    "What is the correct syntax for referring to an external script called 'xxx.js'?",
        option1: "<script href='xxx.js'>",
        option2: "<script name='xxx.js'>",
        option3: "<script src='xxx.js'>",
        option4: "<script file='xxx.js'>",
        answers: "ans3",
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        option1: "msgBox('Hello World');",
        option2: "alertBox('Hello World');",
        option3: "msg('Hello World');",
        option4: "alert('Hello World');",
        answers: "ans4",
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer')

let questionCount = 0;
const loadQuestion = () =>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.option1;
    option2.innerText = questionList.option2;
    option3.innerText = questionList.option3;
    option4.innerText = questionList.option4;
    
}

loadQuestion();

submit.addEventListener('click',()=>{
    const checkedAnswer = getAnswert();
    console.log(checkedAnswer);
})

const getAnswert = () =>{
    let answer;  
    answers.forEach((currentAns) =>{
        if(currentAns.checked){
            answer = currentAns.id;
         }
      
    });
    return answer;
}


