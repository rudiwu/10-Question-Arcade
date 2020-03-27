var correctcounter =0;
var i = 0;
var gamebgm =new Audio('image/bgm.mp3');
document.querySelector(".gamestart").addEventListener("click", function(){
gamebgm.play();
document.querySelector(".questionwindow").innerHTML="<p><br> Question 1: What is the only man-made structure that  is visible from space? </p>";
document.querySelector(".gamestart").classList.add("invisible");
document.querySelector(".q1-a").classList.remove("invisible");
document.querySelector(".q1-b").classList.remove("invisible");
document.querySelector(".q1-c").classList.remove("invisible");
document.querySelector(".q1-d").classList.remove("invisible");
})

//Dont need to repeat
function update(check, index){
  i = index;
  if(check){
    correctcounter++;
    document.querySelector(".verdict").innerHTML = "<p><br> RIGHT! </p>";
  }
  else{
    document.querySelector(".verdict").innerHTML = "<p><br> WRONG! </p>";
  }

  document.querySelector(".correct").innerHTML = "<p><br>Current Score is " + correctcounter + "</p>";

  var next = document.createElement("div");
  //Change the style to make it go to the middle
  next.innerHTML = "<button style = 'width: 30vw; margin-left:34vw;' class = 'myButton' onclick = 'show()'>Next</button> ";
  next.classList.add("next"+index);
  document.body.appendChild(next);
}

//repeat
function delete1(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q2-a").classList.remove("invisible");
  document.querySelector(".q2-b").classList.remove("invisible");
  document.querySelector(".q2-c").classList.remove("invisible");
  document.querySelector(".q2-d").classList.remove("invisible");
  document.querySelector(".q1-a").classList.add("invisible");
  document.querySelector(".q1-b").classList.add("invisible");
  document.querySelector(".q1-c").classList.add("invisible");
  document.querySelector(".q1-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 2: The dot on the top of the alphabet i is called? (Yes it actually has a name) </p>"

}

function delete2(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q3-a").classList.remove("invisible");
  document.querySelector(".q3-b").classList.remove("invisible");
  document.querySelector(".q3-c").classList.remove("invisible");
  document.querySelector(".q3-d").classList.remove("invisible");
  document.querySelector(".q2-a").classList.add("invisible");
  document.querySelector(".q2-b").classList.add("invisible");
  document.querySelector(".q2-c").classList.add("invisible");
  document.querySelector(".q2-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 3: what is kyles uncle called? </p>";
}
function delete3(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q4-a").classList.remove("invisible");
  document.querySelector(".q4-b").classList.remove("invisible");
  document.querySelector(".q4-c").classList.remove("invisible");
  document.querySelector(".q4-d").classList.remove("invisible");
  document.querySelector(".q3-a").classList.add("invisible");
  document.querySelector(".q3-b").classList.add("invisible");
  document.querySelector(".q3-c").classList.add("invisible");
  document.querySelector(".q3-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 4: How many times did Anderson scored below 60 in Ms. Liu’s percalculus test? </p>";
}
function delete4(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q5-a").classList.remove("invisible");
  document.querySelector(".q5-b").classList.remove("invisible");
  document.querySelector(".q5-c").classList.remove("invisible");
  document.querySelector(".q5-d").classList.remove("invisible");
  document.querySelector(".q4-a").classList.add("invisible");
  document.querySelector(".q4-b").classList.add("invisible");
  document.querySelector(".q4-c").classList.add("invisible");
  document.querySelector(".q4-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 5: How long is the memory span of a goldfish? </p>";
}
function delete5(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q6-a").classList.remove("invisible");
  document.querySelector(".q6-b").classList.remove("invisible");
  document.querySelector(".q6-c").classList.remove("invisible");
  document.querySelector(".q6-d").classList.remove("invisible");
  document.querySelector(".q5-a").classList.add("invisible");
  document.querySelector(".q5-b").classList.add("invisible");
  document.querySelector(".q5-c").classList.add("invisible");
  document.querySelector(".q5-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 6: Giraffes have no? </p>";
}
function delete6(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q7-a").classList.remove("invisible");
  document.querySelector(".q7-b").classList.remove("invisible");
  document.querySelector(".q7-c").classList.remove("invisible");
  document.querySelector(".q7-d").classList.remove("invisible");
  document.querySelector(".q6-a").classList.add("invisible");
  document.querySelector(".q6-b").classList.add("invisible");
  document.querySelector(".q6-c").classList.add("invisible");
  document.querySelector(".q6-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 7: Spider has what kind of blood? </p>";
}
function delete7(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q8-a").classList.remove("invisible");
  document.querySelector(".q8-b").classList.remove("invisible");
  document.querySelector(".q8-c").classList.remove("invisible");
  document.querySelector(".q8-d").classList.remove("invisible");
  document.querySelector(".q7-a").classList.add("invisible");
  document.querySelector(".q7-b").classList.add("invisible");
  document.querySelector(".q7-c").classList.add("invisible");
  document.querySelector(".q7-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 8: A jellyfish is 95% of what? </p>";
}
function delete8(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q9-a").classList.remove("invisible");
  document.querySelector(".q9-b").classList.remove("invisible");
  document.querySelector(".q9-c").classList.remove("invisible");
  document.querySelector(".q9-d").classList.remove("invisible");
  document.querySelector(".q8-a").classList.add("invisible");
  document.querySelector(".q8-b").classList.add("invisible");
  document.querySelector(".q8-c").classList.add("invisible");
  document.querySelector(".q8-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 9: A ‘jiffy’ is a unit of what measurement? </p>";
}
function delete9(){
  document.querySelector(".justify-all").classList.add("invisible");
  document.querySelector(".q10-a").classList.remove("invisible");
  document.querySelector(".q10-b").classList.remove("invisible");
  document.querySelector(".q10-c").classList.remove("invisible");
  document.querySelector(".q10-d").classList.remove("invisible");
  document.querySelector(".q9-a").classList.add("invisible");
  document.querySelector(".q9-b").classList.add("invisible");
  document.querySelector(".q9-c").classList.add("invisible");
  document.querySelector(".q9-d").classList.add("invisible");
  document.querySelector(".questionwindow").innerHTML="<p><br> Question 10: The only king in a deck of cards that is depicted without a mustache is ? </p>";
}
function final(){
  document.querySelector(".q10-a").classList.add("invisible");
  document.querySelector(".q10-b").classList.add("invisible");
  document.querySelector(".q10-c").classList.add("invisible");
  document.querySelector(".q10-d").classList.add("invisible");
  document.querySelector(".next10").classList.add("invisible");
  document.querySelector(".verdict").classList.add("invisible");
  document.querySelector(".correct").classList.add("invisible");
  document.querySelector(".questionwindow").classList.add("invisible");
  var final = document.createElement("div");
  //Change the style to make it go to the middle
  final.classList.add("finalMsg");


  if(correctcounter == 1){
    final.innerHTML="<br>Your score turns out to be 1 <br>Number 1 represents the unit. It symbolizes the beginning, the creation, the beginning, the best placement, as well as the unique of the species. In monotheistic religions, as in Christianity, the one represents God the Creator.";
  }
  else if(correctcounter == 0){
  final.innerHTML="<br>Your score turns out to be 0 <br>0 is a firm number since it represents God and His divine nature. It also symbolizes the relationship between God and all creatures of the earth.";
  }
  else if(correctcounter == 2){
  final.innerHTML="<br>Your score turns out to be 2 <br>2 is a seeker after peace and harmony, with a fantastic sensitivity to other people and a desire to build the strongest relationships possible.";
  }
  else if(correctcounter == 3){
  final.innerHTML="<br>Your score turns out to be 3 <br>3 biblically represents divine wholeness, completeness and perfection. If there ever was a desire to highlight an idea, thought, event or noteworthy figure in the Bible for their prominence, the number 3 was used to put a divine stamp of completion or fulfillment on the subject.";
  }
  else if(correctcounter == 4){
  final.innerHTML="<br>Your score turns out to be 4 <br>The fate number 4 represents the square and thus the wholeness. In this life number are represented the 4 elements, the 4 directions and also the 4 seasons.";
  }
  else if(correctcounter == 5){
  final.innerHTML="<br>Your score turns out to be 5 <br>Number 5 is a symbol of God's grace. It is also one of the most widely mentioned words in the God's word. ... The God's law consists of five books, which are called Pentateuch.";
  }
  else if(correctcounter == 6){
  final.innerHTML="<br>Your score turns out to be 6 <br>Number 6 may be considered not only a symbol of a man, but also a symbol of a man-animal. Number 6 is also used as a symbol of sin and imperfection in the Bible.";
  }
  else if(correctcounter == 7){
  final.innerHTML="<br>Your score turns out to be 7 <br>In the Old Testament the world was created in six days and God rested on the seventh, creating the basis of the seven-day-week we use to this day. In the New Testament the number seven symbolizes the unity of the four corners of the Earth with the Holy Trinity.";
  }
  else if(correctcounter == 8){
  final.innerHTML="<br>Your score turns out to be 8 <br>The number 8 is very significant such that it is used 73 times in the Bible. It is the symbol of Resurrection and Regeneration.";
  }
  else if(correctcounter == 9){
  final.innerHTML="<br>Your score turns out to be 9 <br>Number 9 is a symbol of completeness of God and also a symbol of finality. It means that God completed his creation and all his promises.";
  }
  else if(correctcounter == 10){
  final.innerHTML="<br>Your score turns out to be 10 <br>we have to say that there were 10 Commandments of God and they represent all that a society needs in order to live in harmony and peace.";
  }

  document.body.appendChild(final);
}


document.querySelector(".q1-a").addEventListener("click", function(){
  update(true, 1);
  delete1();
})
document.querySelector(".q1-b").addEventListener("click", function(){
  update(false, 1);
  delete1();
})
document.querySelector(".q1-c").addEventListener("click", function(){
  update(false, 1);
  delete1();
})
document.querySelector(".q1-d").addEventListener("click", function(){
  update(false, 1);
  delete1();
})

document.querySelector(".q2-a").addEventListener("click", function(){
  update(false, 2);
  delete2();
})
document.querySelector(".q2-b").addEventListener("click", function(){
  update(true, 2);
  delete2();
})
document.querySelector(".q2-c").addEventListener("click", function(){
  update(false, 2);
  delete2();
})
document.querySelector(".q2-d").addEventListener("click", function(){
  update(false, 2);
  delete2();
})

document.querySelector(".q3-a").addEventListener("click", function(){
  update(true, 3);
  delete3();
})
document.querySelector(".q3-b").addEventListener("click", function(){
  update(false, 3);
  delete3();
})
document.querySelector(".q3-c").addEventListener("click", function(){
  update(false, 3);
  delete3();
})
document.querySelector(".q3-d").addEventListener("click", function(){
  update(false, 3);
  delete3();
})

document.querySelector(".q4-a").addEventListener("click", function(){
  update(false, 4);
  delete4();
})
document.querySelector(".q4-b").addEventListener("click", function(){
  update(false, 4);
  delete4();
})
document.querySelector(".q4-c").addEventListener("click", function(){
  update(true, 4);
  delete4();
})
document.querySelector(".q4-d").addEventListener("click", function(){
  update(false, 4);
  delete4();
})

document.querySelector(".q5-a").addEventListener("click", function(){
  update(false, 5);
  delete5();
})
document.querySelector(".q5-b").addEventListener("click", function(){
  update(false, 5);
  delete5();
})
document.querySelector(".q5-c").addEventListener("click", function(){
  update(true, 5);
  delete5();
})
document.querySelector(".q5-d").addEventListener("click", function(){
  update(false, 5);
  delete5();
})

document.querySelector(".q6-a").addEventListener("click", function(){
  update(false, 6);
  delete6();
})
document.querySelector(".q6-b").addEventListener("click", function(){
  update(false, 6);
  delete6();
})
document.querySelector(".q6-c").addEventListener("click", function(){
  update(false, 6);
  delete6();
})
document.querySelector(".q6-d").addEventListener("click", function(){
  update(true, 6);
  delete6();
})

document.querySelector(".q7-a").addEventListener("click", function(){
  update(false, 7);
  delete7();
})
document.querySelector(".q7-b").addEventListener("click", function(){
  update(false, 7);
  delete7();
})
document.querySelector(".q7-c").addEventListener("click", function(){
  update(false, 7);
  delete7();
})
document.querySelector(".q7-d").addEventListener("click", function(){
  update(true, 7);
  delete7();
})

document.querySelector(".q8-a").addEventListener("click", function(){
  update(true, 8);
  delete8();
})
document.querySelector(".q8-b").addEventListener("click", function(){
  update(false, 8);
  delete8();
})
document.querySelector(".q8-c").addEventListener("click", function(){
  update(false, 8);
  delete8();
})
document.querySelector(".q8-d").addEventListener("click", function(){
  update(false, 8);
  delete8();
})

document.querySelector(".q9-a").addEventListener("click", function(){
  update(true, 9);
  delete9();
})
document.querySelector(".q9-b").addEventListener("click", function(){
  update(false, 9);
  delete9();
})
document.querySelector(".q9-c").addEventListener("click", function(){
  update(false, 9);
  delete9();
})
document.querySelector(".q9-d").addEventListener("click", function(){
  update(false, 9);
  delete9();
})

document.querySelector(".q10-a").addEventListener("click", function(){
  update(false, 10);
  final();
})
document.querySelector(".q10-b").addEventListener("click", function(){
  update(false, 10);
  final();
})
document.querySelector(".q10-c").addEventListener("click", function(){
  update(true, 10);
  final();
})
document.querySelector(".q10-d").addEventListener("click", function(){
  update(false, 10);
  final();
})
//no repeat
function show(){
    document.querySelector(".justify-all").classList.remove("invisible");
    document.querySelector(".verdict").innerHTML = "";
    document.querySelector(".correct").innerHTML = "";
    document.querySelector(".next" + i).classList.add("invisible");
}
