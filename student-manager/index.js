// Requirements:
// A student managent app that is able to:
// Show current student list
// Add new students

// 1. Show all student 
// 2. Create a new student
// 3. Save & Exit
// >2 
// Name:
// Age:
var readlineSync = require('readline-sync');
var fs = require('fs');

var students = []; 
function loadData(){ // đọc file, đi vào biến 
var  fileContent = fs.readFileSync ('./data.json');
students = JSON.parse(fileContent);
}
function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save & Exit')
}

function showStudents(){
    for (var student of students) {
        console.log(student.name, student.age);
    }
}

function showCreateStudent() {
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student = {
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8'});
}

function main() {
loadData();
showMenu();
    showMenu();
    var option = readlineSync.question('>');
    switch(option) {
        case '1':
            showStudents();
            break;
            case '2':
                showCreateStudent();
                showMenu();
                break;
                case '3':
                    saveAndExit();
                    break;
                    default:
                        console.log('Wrong option');
                        showMenu();
                        break;
    }
}
main();
