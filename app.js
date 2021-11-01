function addNewCourse(){
    const body = document.querySelector('tbody');
var crs=["Artificial Intelligence","Introduction to Computing","Probablity and Statistics","Islamiyat","Operating System","OOPS"]    
    const row = document.createElement('tr');			
    const tdCourseID = document.createElement('td');	
    const tdCourseName = document.createElement('td');	
    const tdcreditHrs = document.createElement('td');	
    const tdYearTaken = document.createElement('td');
    const courseId = ((Math.round(Math.random() * 9)) + 0);
    const courseName = ((Math.round(Math.random() * 5)) + 0);
    const creditHrs =((Math.round(Math.random() * (3-2+1))) + 2);
    const yearTaken = ((Math.round(Math.random() * (2021-2019+1))) + 2019);
    row.id = 'row' + courseId;
    tdCourseID.innerHTML = 'SWE-30' + courseId;
    tdCourseName.innerHTML = crs[courseName];
    tdcreditHrs.innerHTML= creditHrs
    tdYearTaken.innerHTML = yearTaken;
    row.appendChild(tdCourseID);
    row.appendChild(tdCourseName);
    row.appendChild(tdcreditHrs);
    row.appendChild(tdYearTaken);
    body.appendChild(row);
}
function deleteCourse(){
    const courseId = prompt('Please enter course Id');
    if(courseId){
        const row = document.getElementById('SWE-30' + courseId);
        if(row){
            const body = document.querySelector('tbody');
            body.removeChild(row); }}}
function updateCourse(){
    const newCourseYear = prompt('Please enter course# and new year delimited by comma');
if(newCourseYear){  
    const courseId = newCourseYear.split(',')[0];
    const courseYear = newCourseYear.split(',')[1];
    const row = document.getElementById('row' + courseId);
    if(row){
        const tdYearTaken = row.querySelector('#row' + courseId + ' > td:nth-child(3)');
        tdYearTaken.innerHTML = courseYear;}}}
const btnRowColor = document.getElementById('addRowColor');
btnRowColor.addEventListener('click', function(event) {
    var hrow=prompt('Enter the row# you want to highlight from 1-4');
    const row = document.querySelector('#row'+hrow);
    row.style.backgroundColor = 'yellow';
    row.style.color = 'brown';})
function okf(){
var loginID= document.getElementById('loginID').value
var name= document.getElementById('name').value
var pic1= document.getElementById('pic1')
// var username= document.getElementById('username')
if (checkbox.checked){
    console.log('Logged in successfully with Remember Me marked as set')
    document.cookie = loginID + " , " + name
    console.log(document.cookie)
    pic1.innerHTML="<img src='img1.jpg' width='100px' height='150px'/>" 
    setTimeout(function(){window.location="profile.html"
 }, 2000);
    // username.innerHTML=`user name: ${loginID}`
}
else{
    console.log('Logged in successfully ')
    console.log(document.cookie)
    setTimeout(function(){window.location="profile.html"
 }, 2000);


}}

function cleartable(){
    var studentCourses=document.getElementById("studentCourses");
    studentCourses.innerHTML=""
}

function moveBackward(){
    window.history.back()

var ul = document.getElementById("list");
  var li = document.createElement("li");
  
  ul.appendChild(li);
  li.innerHTML=  window.history.back();

   }