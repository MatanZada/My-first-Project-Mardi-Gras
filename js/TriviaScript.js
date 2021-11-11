function check(){
    let c=0;
    let=q1=document.quiz.question1.value;
    let=q2=document.quiz.question2.value;
    let=q3=document.quiz.question3.value;
    let=q4=document.quiz.question4.value;
    let=q5=document.quiz.question5.value;
    let=q6=document.quiz.question6.value;
    let=q7=document.quiz.question7.value;
    let=q8=document.quiz.question8.value;
    let=q9=document.quiz.question9.value;
    let=q10=document.quiz.question10.value;
    let result=document.getElementById('result');
    let quiz=document.getElementById('quiz');
    if(q1=="Mardi Gras") {c++}
    if(q2=="New Orleans") {c++}
    if(q3=="March") {c++}
    if(q4=="LaToya") {c++}
    if(q5=="Happy decor") {c++}
    if(q6=="20:00") {c++}
    if(q7=="Age 16") {c++}
    if(q8=="5 hours") {c++}
    if(q9=="All countries") {c++}
    if(q10=="Only at 20:00") {c++}
    document.write(c);
    quiz.style.display="none";
    if (c<=3){
        result.textContent='Your Result is ${c}. It is not so good please try to work on yourself.'
    }else{
    result.textContent='Your Result is ${c}. It is awesome. Keep it up!.'
    }
    result.textContent='${c}';

}