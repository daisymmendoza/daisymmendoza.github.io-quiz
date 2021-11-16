/* Score */
function check() {
    var score=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q4=document.quiz.q4.value;
    var q5=document.quiz.q5.value;
    var q6B = document.getElementById("q6B").checked;
    var q6C = document.getElementById("q6C").checked;
    var q7A = document.getElementById("q7A").checked;
    var q7C = document.getElementById("q7C").checked;
    var q8A = document.getElementById("q8A").checked;
    var q8B = document.getElementById("q8B").checked;
    var q9B = document.getElementById("q9B").checked;
    var q9C = document.getElementById("q9C").checked;
    var q10A = document.getElementById("q10A").checked;
    var q10C = document.getElementById("q10C").checked;

    if(q1=="A"){score++;}
    if(q2=="B"){score++;}
    if(q3=="C"){score++;}
    if(q4=="C"){score++}
    if(q5=="A"){score++}
    if(q6B && q6C){score++;}
    if(q7A && q7C){score++;}
    if(q8A && q8B){score++;}
    if(q9B && q9C){score++;}
    if(q10A && q10C){score++;}

    
    var percent= (score/10)*100;
  
    document.getElementById('result').innerHTML= "Your Score is: " + parseInt(percent)+"%";
}

/*
if (q6 == "B" && q6 == "C") 
{score++;}
}
*/