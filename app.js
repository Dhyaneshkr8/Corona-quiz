var score = 0;

var clicked = 0;

var myName;

var endTimer = 0;


var presentDate = new Date().toLocaleDateString();
var presentTime = new Date().toLocaleTimeString();

var storeScore1;
var storeScore2;
var storeScore3;
var storeScore4;
var storeScore5;

var getScore1;
var getScore2;
var getScore3;
var getScore4;
var getScore5;


var storeName1;
var storeName2;
var storeName3;
var storeName4;
var storeName5;

var getName1;
var getName2;
var getName3;
var getName4;
var getName5;

var storedateTime1;
var storedateTime2;
var storedateTime3;
var storedateTime4;
var storedateTime5;

var getdateTime1;
var getdateTime2;
var getdateTime3;
var getdateTime4;
var getdateTime5;



var answer = [{
    qn: "Can washing your hands protect you from COVID-19?",
    op1: "1)   Yes – but only if you use a strong bleach",
    op2: "2)   Yes – normal soap and water or hand sanitizer is enough",
    op3: "3)   No – Washing your hands doesn’t stop COVID-19",
    op4: "4)   None of the above",
    option: "2)   Yes – normal soap and water or hand sanitizer is enough"
  },
  {
    qn: "How is COVID-19 passed on?",
    op1: "1)   Through droplets that come from your mouth and nose when you cough or breathe out",
    op2: "2)   In sexual fluids, including semen, vaginal fluids or anal mucous",
    op3: "3)   By drinking unclean water",
    op4: "4)   All of the above",
    option: "1)   Through droplets that come from your mouth and nose when you cough or breathe out"
  },
  {
    qn: "What are the common symptoms of COVID-19?",
    op1: "1)   A new and continuous cough",
    op2: "2)   Fever",
    op3: "3)   Tiredness",
    op4: "4)   All of the above",
    option: "4)   All of the above"
  },
  {
    qn: "Can you always tell if someone has COVID-19? ",
    op1: "1)   No – not everyone with COVID-19 has symptoms",
    op2: "2)   Yes – it will be obvious, a person with COVID-19 coughs a lot",
    op3: "3)   Yes – you can tell just by where a person comes from, their race and ethnicity",
    op4: "4)   No - the symptoms are never seen from outside",
    option: "1)   No – not everyone with COVID-19 has symptoms"
  },
  {
    qn: "Which of the following people is COVID-19 more dangerous for?",
    op1: "1)   Children",
    op2: "2)   Older people and those with underlying health conditions",
    op3: "3)   European people",
    op4: "4)   Forest Tribal people",
    option: "2)   Older people and those with underlying health conditions"
  },
  {
    qn: "Are people living with HIV always more at risk becoz of COVID-19 spread?",
    op1: "1)   Yes – people with HIV have weaker immune systems",
    op2: "2)   No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk",
    op3: "3)   Yes - it leads to sudden death",
    op4: "4)   No - it has no effect",
    option: "2)   No – people who adhere to antiretroviral treatment (ART) and have a high CD4 count aren’t more at risk"
  },
  {
    qn: "When should fabric face masks be worn?",
    op1: "1)   On public transport",
    op2: "2)   In confined or crowded spaces",
    op3: "3)   In small shops",
    op4: "4)   All of the above",
    option: "4)   All of the above"
  },
  {
    qn: "Can COVID-19 be cured?",
    op1: "1)   Yes – Hot drinks can cure COVID-19",
    op2: "2)   No – COVID-19 can never be cured",
    op3: "3)   No – but most people get better by themselves",
    op4: "4)   Yes - the cure is made recently",
    option: "3)   No – but most people get better by themselves"
  },
  {
    qn: "Which of the following is an example of physical distancing?",
    op1: "1)   You stop going to crowded places and visiting other people’s houses",
    op2: "2)   You stop talking to the people you live with",
    op3: "3)   You stop speaking to your friends on the phone",
    op4: "4)   You stop seeing them",
    option: "1)   You stop going to crowded places and visiting other people’s houses"
  },
  {
    qn: "How can people living with HIV protect themselves from COVID-19?",
    op1: "1)   Wash their hands regularly and follow the physical distancing advice",
    op2: "2)   Keep taking their antiretroviral treatment",
    op3: "3)   Exercise regularly, eat well and look after their mental health",
    op4: "4)   All of the above",
    option: "4)   All of the above"
  },
];




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}





function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


shuffle(answer);






for (var j = 1; j < 11; j++) {
  document.querySelector(".qn" + String(j)).innerHTML = answer[j - 1].qn;
  document.querySelector(".op1" + String(j)).innerHTML = answer[j - 1].op1;
  document.querySelector(".op2" + String(j)).innerHTML = answer[j - 1].op2;
  document.querySelector(".op3" + String(j)).innerHTML = answer[j - 1].op3;
  document.querySelector(".op4" + String(j)).innerHTML = answer[j - 1].op4;
}





document.querySelector(".start").addEventListener("click", function() {

  document.querySelector(".start").classList.add("hide");
  document.querySelector(".start").classList.remove("margin");
  document.querySelector(".enter").classList.add("hide");
  document.querySelector(".name").classList.add("hide");
  document.querySelector(".timer").classList.remove("hide");
  document.querySelector(".stat").textContent = "3";
  document.querySelector(".stat").style.fontSize = "100px";
  document.querySelector(".stat").style.color = "white";


  setTimeout(function() {
    document.querySelector(".stat").textContent = "2";
    document.querySelector(".stat").style.fontSize = "100px";
  }, 1000);

  setTimeout(function() {
    document.querySelector(".stat").textContent = "1";
    document.querySelector(".stat").style.fontSize = "100px";
  }, 2000);

  setTimeout(function() {

    document.querySelector(".stat").classList.add("hide");

    myName = String(document.querySelector(".name").value);
    document.querySelector(".slideshow-container").classList.remove("hide");
    document.querySelector(".mover").classList.remove("hide");

    document.querySelector(".submit").classList.remove("hide");
    document.querySelector(".sidebar").classList.remove("hide");
    var time_in_minutes = 3;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes * 60 * 1000);
    run_clock('clockdiv', deadline);

  }, 3000);
});




var select = 0;

for (var i = 1; i < 5; i++) {

  document.querySelector(".op" + String(i) + "1").addEventListener("click", function() {
    if (select == 0) {
      if (this.innerHTML == answer[0].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn1").style.backgroundColor = "#336633";
        select = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[0].option)) + "1").style.backgroundColor = "green";
        document.querySelector(".nqn1").style.backgroundColor = "#C80000";
        select = 1;
      }
    }
  });
}



var select2 = 0;

for (var i = 1; i < 5; i++) {

  document.querySelector(".op" + String(i) + "2").addEventListener("click", function() {
    if (select2 == 0) {
      if (this.innerHTML == answer[1].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn2").style.backgroundColor = "#336633";
        select2 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[1].option)) + "2").style.backgroundColor = "green";
        document.querySelector(".nqn2").style.backgroundColor = "#C80000";
        select2 = 1;
      }
    }
  });
}



var select3 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "3").addEventListener("click", function() {
    if (select3 == 0) {
      if (this.innerHTML == answer[2].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn3").style.backgroundColor = "#336633";
        select3 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[2].option)) + "3").style.backgroundColor = "green";
        document.querySelector(".nqn3").style.backgroundColor = "#C80000";
        select3 = 1;
      }
    }
  });
}



var select4 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "4").addEventListener("click", function() {
    if (select4 == 0) {
      if (this.innerHTML == answer[3].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn4").style.backgroundColor = "#336633";
        select4 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[3].option)) + "4").style.backgroundColor = "green";
        document.querySelector(".nqn4").style.backgroundColor = "#C80000";
        select4 = 1;
      }
    }
  });
}



var select5 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "5").addEventListener("click", function() {
    if (select5 == 0) {
      if (this.innerHTML == answer[4].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn5").style.backgroundColor = "#336633";
        select5 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[4].option)) + "5").style.backgroundColor = "green";
        document.querySelector(".nqn5").style.backgroundColor = "#C80000";
        select5 = 1;
      }
    }
  });
}



var select6 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "6").addEventListener("click", function() {
    if (select6 == 0) {
      if (this.innerHTML == answer[5].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn6").style.backgroundColor = "#336633";
        select6 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[5].option)) + "6").style.backgroundColor = "green";
        document.querySelector(".nqn6").style.backgroundColor = "#C80000";
        select6 = 1;
      }
    }
  });
}



var select7 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "7").addEventListener("click", function() {
    if (select7 == 0) {
      if (this.innerHTML == answer[6].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn7").style.backgroundColor = "#336633";
        select7 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[6].option)) + "7").style.backgroundColor = "green";
        document.querySelector(".nqn7").style.backgroundColor = "#C80000";
        select7 = 1;
      }
    }
  });
}



var select8 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "8").addEventListener("click", function() {
    if (select8 == 0) {
      if (this.innerHTML == answer[7].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn8").style.backgroundColor = "#336633";
        select8 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[7].option)) + "8").style.backgroundColor = "green";
        document.querySelector(".nqn8").style.backgroundColor = "#C80000";
        select8 = 1;
      }
    }
  });
}



var select9 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "9").addEventListener("click", function() {
    if (select9 == 0) {
      if (this.innerHTML == answer[8].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn9").style.backgroundColor = "#336633";
        select9 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[8].option)) + "9").style.backgroundColor = "green";
        document.querySelector(".nqn9").style.backgroundColor = "#C80000";
        select9 = 1;
      }
    }
  });
}



var select10 = 0;

for (var i = 1; i < 5; i++) {
  document.querySelector(".op" + String(i) + "10").addEventListener("click", function() {
    if (select10 == 0) {
      if (this.innerHTML == answer[9].option) {
        score = score + 1;
        this.style.backgroundColor = "green";
        var audio2 = new Audio("green.wav");
        audio2.play();
        document.querySelector(".nqn10").style.backgroundColor = "#336633";
        select10 = 1;
      } else {
        this.style.backgroundColor = "red";
        var audio2 = new Audio("wrong.mp3");
        audio2.play();
        document.querySelector(".op" + String(parseInt(answer[9].option)) + "10").style.backgroundColor = "green";
        document.querySelector(".nqn10").style.backgroundColor = "#C80000";
        select10 = 1;
      }
    }
  });
}



document.querySelector(".submit").addEventListener("click", myFunction2);



function myFunction2() {
  endTimer = 1;
  document.querySelector(".quiz").classList.add("hide");
  document.querySelector(".timer").classList.add("hide");
  document.querySelector(".submit").classList.add("hide");
  document.querySelector(".slideshow-container").classList.add("hide");
  document.querySelector(".mover").classList.add("hide");
  document.querySelector(".sidebar").classList.add("hide");
  document.querySelector(".scoreBoard").classList.remove("hide");

  if (myName == "") {
    document.querySelector(".nameing").innerHTML = "NAME  :    No name";
    document.querySelector(".scoring").innerHTML = "SCORE  :   " + String(score) + "  out  of  10";
    myName = "No name";
  } else {
    document.querySelector(".nameing").innerHTML = "NAME  :       " + myName.toUpperCase();
    document.querySelector(".scoring").innerHTML = "SCORE  :      " + String(score) + "  out  of  10";
  }
  document.querySelector(".crtQns").innerHTML = "No.  of   CORRECT   questions  :  " + String(score);
  document.querySelector(".ratiocrt").innerHTML = "CORRECT   to   WRONG   ratio  :  " + String(score / (10 - score));

  compare();
}



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  if (document.querySelector(".dropbtn").innerHTML == "⬇ Questions") {
    document.querySelector(".dropbtn").innerHTML = "⬆ Questions";
  } else {
    document.querySelector(".dropbtn").innerHTML = "⬇ Questions"
  }
}





function time_remaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function run_clock(id, endtime) {
  var clock = document.getElementById(id);

  function update_clock() {
    var t = time_remaining(endtime);
    clock.innerHTML = "0" + t.minutes + ' : ' + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
    if (t.minutes == 00 && t.seconds == 00 && endTimer == 0) {
      alert("Time is up");
      myFunction2();
    }
  }

  update_clock(); // run function once at first to avoid delay
  var timeinterval = setInterval(update_clock, 1000);
}








function compare() {
  // alert(document.querySelector(".score1").innerHTML);
  if (score >= parseInt(document.querySelector(".score1").innerHTML)) {
    document.querySelector(".score5").innerHTML = document.querySelector(".score4").innerHTML;
    document.querySelector(".score4").innerHTML = document.querySelector(".score3").innerHTML;
    document.querySelector(".score3").innerHTML = document.querySelector(".score2").innerHTML;
    document.querySelector(".score2").innerHTML = document.querySelector(".score1").innerHTML;
    document.querySelector(".score1").innerHTML = String(score);

    document.querySelector(".name5").innerHTML = document.querySelector(".name4").innerHTML;
    document.querySelector(".name4").innerHTML = document.querySelector(".name3").innerHTML;
    document.querySelector(".name3").innerHTML = document.querySelector(".name2").innerHTML;
    document.querySelector(".name2").innerHTML = document.querySelector(".name1").innerHTML;
    document.querySelector(".name1").innerHTML = myName;

    document.querySelector(".dateTime5").innerHTML = document.querySelector(".dateTime4").innerHTML;
    document.querySelector(".dateTime4").innerHTML = document.querySelector(".dateTime3").innerHTML;
    document.querySelector(".dateTime3").innerHTML = document.querySelector(".dateTime2").innerHTML;
    document.querySelector(".dateTime2").innerHTML = document.querySelector(".dateTime1").innerHTML;
    document.querySelector(".dateTime1").innerHTML = presentDate + " " + presentTime;

  } else if ((score < parseInt(document.querySelector(".score1").innerHTML)) && (score >= parseInt(document.querySelector(".score2").innerHTML))) {
    document.querySelector(".score5").innerHTML = document.querySelector(".score4").innerHTML;
    document.querySelector(".score4").innerHTML = document.querySelector(".score3").innerHTML;
    document.querySelector(".score3").innerHTML = document.querySelector(".score2").innerHTML;
    document.querySelector(".score2").innerHTML = String(score);

    document.querySelector(".name5").innerHTML = document.querySelector(".name4").innerHTML;
    document.querySelector(".name4").innerHTML = document.querySelector(".name3").innerHTML;
    document.querySelector(".name3").innerHTML = document.querySelector(".name2").innerHTML;
    document.querySelector(".name2").innerHTML = myName;

    document.querySelector(".dateTime5").innerHTML = document.querySelector(".dateTime4").innerHTML;
    document.querySelector(".dateTime4").innerHTML = document.querySelector(".dateTime3").innerHTML;
    document.querySelector(".dateTime3").innerHTML = document.querySelector(".dateTime2").innerHTML;
    document.querySelector(".dateTime2").innerHTML = presentDate + " " + presentTime;
  } else if ((score < parseInt(document.querySelector(".score2").innerHTML)) && (score >= parseInt(document.querySelector(".score3").innerHTML))) {
    document.querySelector(".score5").innerHTML = document.querySelector(".score4").innerHTML;
    document.querySelector(".score4").innerHTML = document.querySelector(".score3").innerHTML;
    document.querySelector(".score3").innerHTML = String(score);

    document.querySelector(".name5").innerHTML = document.querySelector(".name4").innerHTML;
    document.querySelector(".name4").innerHTML = document.querySelector(".name3").innerHTML;
    document.querySelector(".name3").innerHTML = myName;

    document.querySelector(".dateTime5").innerHTML = document.querySelector(".dateTime4").innerHTML;
    document.querySelector(".dateTime4").innerHTML = document.querySelector(".dateTime3").innerHTML;
    document.querySelector(".dateTime3").innerHTML = presentDate + " " + presentTime;
  } else if ((score < parseInt(document.querySelector(".score3").innerHTML)) && (score >= parseInt(document.querySelector(".score4").innerHTML))) {
    document.querySelector(".score5").innerHTML = document.querySelector(".score4").innerHTML;
    document.querySelector(".score4").innerHTML = String(score);

    document.querySelector(".name5").innerHTML = document.querySelector(".name4").innerHTML;
    document.querySelector(".name4").innerHTML = myName;

    document.querySelector(".dateTime5").innerHTML = document.querySelector(".dateTime4").innerHTML;
    document.querySelector(".dateTime4").innerHTML = presentDate + " " + presentTime;
  } else if ((score < parseInt(document.querySelector(".score4").innerHTML)) && (score >= parseInt(document.querySelector(".score5").innerHTML))) {
    document.querySelector(".score5").innerHTML = String(score);

    document.querySelector(".name5").innerHTML = myName;

    document.querySelector(".dateTime5").innerHTML = presentDate + " " + presentTime;
  }
  localStorage.setItem('storeScore1', document.querySelector(".score1").innerHTML);
  localStorage.setItem('storeScore2', document.querySelector(".score2").innerHTML);
  localStorage.setItem('storeScore3', document.querySelector(".score3").innerHTML);
  localStorage.setItem('storeScore4', document.querySelector(".score4").innerHTML);
  localStorage.setItem('storeScore5', document.querySelector(".score5").innerHTML);

  localStorage.setItem('storeName1', document.querySelector(".name1").innerHTML);
  localStorage.setItem('storeName2', document.querySelector(".name2").innerHTML);
  localStorage.setItem('storeName3', document.querySelector(".name3").innerHTML);
  localStorage.setItem('storeName4', document.querySelector(".name4").innerHTML);
  localStorage.setItem('storeName5', document.querySelector(".name5").innerHTML);

  localStorage.setItem('storedateTime1', document.querySelector(".dateTime1").innerHTML);
  localStorage.setItem('storedateTime2', document.querySelector(".dateTime2").innerHTML);
  localStorage.setItem('storedateTime3', document.querySelector(".dateTime3").innerHTML);
  localStorage.setItem('storedateTime4', document.querySelector(".dateTime4").innerHTML);
  localStorage.setItem('storedateTime5', document.querySelector(".dateTime5").innerHTML);
}

getScore1 = localStorage.getItem('storeScore1');
getScore2 = localStorage.getItem('storeScore2');
getScore3 = localStorage.getItem('storeScore3');
getScore4 = localStorage.getItem('storeScore4');
getScore5 = localStorage.getItem('storeScore5');

getName1 = localStorage.getItem('storeName1');
getName2 = localStorage.getItem('storeName2');
getName3 = localStorage.getItem('storeName3');
getName4 = localStorage.getItem('storeName4');
getName5 = localStorage.getItem('storeName5');

getdateTime1 = localStorage.getItem('storedateTime1');
getdateTime2 = localStorage.getItem('storedateTime2');
getdateTime3 = localStorage.getItem('storedateTime3');
getdateTime4 = localStorage.getItem('storedateTime4');
getdateTime5 = localStorage.getItem('storedateTime5');


document.querySelector(".score1").innerHTML = getScore1;
document.querySelector(".score2").innerHTML = getScore2;
document.querySelector(".score3").innerHTML = getScore3;
document.querySelector(".score4").innerHTML = getScore4;
document.querySelector(".score5").innerHTML = getScore5;

document.querySelector(".name1").innerHTML = getName1;
document.querySelector(".name2").innerHTML = getName2;
document.querySelector(".name3").innerHTML = getName3;
document.querySelector(".name4").innerHTML = getName4;
document.querySelector(".name5").innerHTML = getName5;

document.querySelector(".dateTime1").innerHTML = getdateTime1;
document.querySelector(".dateTime2").innerHTML = getdateTime2;
document.querySelector(".dateTime3").innerHTML = getdateTime3;
document.querySelector(".dateTime4").innerHTML = getdateTime4;
document.querySelector(".dateTime5").innerHTML = getdateTime5;
