

var sString = "HELLO";  
var nNumber = 27;              
var bBoolean = true;           
var uUndefined;                
var nNull = null;              

console.log("String:", sString);
console.log("Number:", nNumber);
console.log("Boolean:", bBoolean);
console.log("Undefined:", uUndefined);
console.log("Null:", nNull);


var student = {
  name: "Ivan",
  surname: "Ivanov",
  age: 46,
  isEnrolled: true,
  grades: [5, 4, 3, 5],
  passport: {
    series: "ID",
    number: "2347732099982",
    issuedBy: "MKK",
    issueDate: '12-10-2030'
  }
};
console.log("Name:", student.name);
console.log("Surname:", student.surname);
console.log("Age:", student.age);
console.log("isEnrolled:", student.isEnrolled);
console.log("Grades:", student.grades);
console.log("Passport series:", student.passport.series);
console.log("Passport number:", student.passport.number);
console.log("Passport issued by:", student.passport.issuedBy);
console.log("Passport issue date:", student.passport.issueDate);
