let quizData = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
                "question": "Who wrote 'To Kill a God'?",
                "options": ["Papaji", "Betaji", "harshit", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
            {
                "question": "Who wrote 'Vander Matram'?",
                "options": ["Gurdeiff", "Tagore", "Vishal", "Gaurang"],
                "answer": "Tagore"
            }
            // more questions...
        ]
    },
    // more category...
]
let ques = document.getElementById('header');
let next = document.getElementById('next')
let prev =document.getElementById('prev');
let op1 = document.getElementById('option1');
let op2 =document.getElementById('option2')
let op3 =document.getElementById('option3')
let op4 =document.getElementById('option4')
let question_count = 0;
function updatequestion(question_count)
{
ques.innerText =quizData[0]['questions'][question_count]['question'];
op1.innerText=quizData[0]['questions'][question_count]['options'][0];
op2.innerText =quizData[0]['questions'][question_count]['options'][1];
op3.innerText =quizData[0]['questions'][question_count]['options'][2]
op4.innerText = quizData[0]['questions'][question_count]['options'][3];
}
updatequestion(0);
next.addEventListener('click',(e)=>
{
    if(question_count<quizData[0]['questions'].length)
    {
        question_count++;
        updatequestion(question_count);
    }
})
prev.addEventListener('click',()=>
{
    if(question_count>=1)
    {
        question_count--;
        updatequestion(question_count);
    }
})

let a = document.getElementById('options');
