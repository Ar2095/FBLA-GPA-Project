//GPA Calculator


//the buttons from the HTML code are stored in variables, so that they can be used in the JavaScript code. 
let nextGradeButton = document.getElementById('nextButton');
let calculateButton = document.getElementById('calculateButton');

//classCount stores the total # of classes the user is taking. This will help calculate GPA. 
let classCount = 0; 
//gradeSum stores the sum of the numerical values of the grades. This will be used to calculate GPA.
let gradeSum = 0;
//apCount stores the number of AP classes the user takes. This helps calculate weighted GPA. 
let apCount = 0; 

//When nextGradeButton is clicked, the user's current selections from the drop-down menus are accepted using the method getUserSelection(). The user's grade is used to determine that grade's numerical value through the assignNumberVal() method. Finally, the user's grade's number value is added to gradeSum. 
nextGradeButton.addEventListener('click', function() {
  let grade = getUserSelection(); 
  let numberVal = assignNumberVal(grade); 
  gradeSum+= numberVal;
}); 

//This function takes the user's grade and classType selection from the drop-down menus, increments apCount by 1 if the class is an AP class, resets the drop-downs to a blank entry, increments classCount by 1, and returns the user's letter grade. 
function getUserSelection(){
  let userGrade = document.getElementById('Grades').value;
  let classType = document.getElementById('classType').value;

  if(classType != "Normal"){
    apCount++; 
  }

  document.getElementById('Grades').value = "";
  document.getElementById('classType').value = "";
  classCount++
  return userGrade; 

}

//This functions accepts the user's letter grade as a parameter, and using North Creek High School's grading scale, returns the numerical value of the grade. 
function assignNumberVal(grade){
  let numberGrade; 
  if(grade === 'A'){
    numberGrade = 4; 
  }
  else if(grade === 'A-'){
    numberGrade = 3.7;
  }
  else if(grade === 'B+'){
    numberGrade = 3.3; 
  }
  else if(grade === 'B'){
    numberGrade = 3; 
  }
  else if(grade === 'B-'){
    numberGrade = 2.7; 
  }
  else if(grade === 'C+'){
    numberGrade = 2.3; 
  }
  else if(grade === 'C'){
    numberGrade = 2; 
  }
  else if(grade === 'C-'){
    numberGrade = 1.7; 
  }
  else if(grade === 'D+'){
    numberGrade = 1.3; 
  }
  else if(grade === 'D'){
    numberGrade = 1.0; 
  }
  else{
    numberGrade = 0; 
  }
  return numberGrade; 
}

//When calculateButton is clicked, the last selections by the user in the drop-down menus are accepted by getUserSelection(), the letter grade is assigned a numerical value by assignNumberVal(), which is added to gradeSum. 
//Then, unweighted GPA and weighted GPA are calculated using the calculateWeighted() and calculateUnweighted() methods. 
//Finally, the unweighted GPA and weighted GPA are displayed on the page
calculateButton.addEventListener('click', function() {
  let grade = getUserSelection(); 
  let numberVal = assignNumberVal(grade); 
  gradeSum+= numberVal; 
  
  let unweightedGPA = calculateUnweighted(); 
  let weightedGPA = calculateWeighted(unweightedGPA); 

  
  document.getElementById('unweightedGPAOutput').innerHTML = "Your unweighted GPA: " + unweightedGPA;


document.getElementById('weightedGPAOutput').innerHTML = "Your weighted GPA: " + weightedGPA;
  
  }); 

//Unweighted GPA is calculated by dividing gradeSum by the total number of classes the user is taking (classCount). 
//The answer is rounded to 2 decimal places and is returned. 
function calculateUnweighted(){
  let unweighted = gradeSum/classCount; 
  return unweighted.toFixed(2);
}

//Weighted GPA is calculated by multiplying the user's unweighted GPA by the total classes they are taking (classCount), adding the number of AP classes they are taking to this number (apCount), and finally dividing this by the classCount. 
//This function takes unweightedGPA as a parameter, because it is used to calculate weightedGPA. 
//The answer is rounded to 2 decimal places and is returned
function calculateWeighted(unweightedGPA){
  let weighted = ((unweightedGPA*classCount) + apCount)/classCount; 
  return weighted.toFixed(2);
}