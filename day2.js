const students = [
  { id: 1, name: "Amit", marks: 78, department: "CSE"},
  { id: 2, name: "Priya", marks: 92, department: "ECE"},
  { id: 3, name: "Rahul", marks: 45, department: "MECH"},
  { id: 4, name: "Sneha", marks: 66, department: "CSE"},
  { id: 5, name: "Kiran", marks: 88, department: "ECE"}];
function displayAllStudents() {//to display the all students
  const ul = document.getElementById("allStudents");
  for (let i = 0; i < students.length; i++) {
  const li = document.createElement("li");
  li.innerText = students[i].name;
  ul.appendChild(li);}
}
    displayAllStudents();

function disgreaterthanSixty() {//display greaterthan sixty
  const ul = document.getElementById("aboveSixty");
  for (let i = 0; i < students.length; i++) {
    if (students[i].marks > 60) {
      const li = document.createElement("li");
      i.innerText = students[i].name + " - " + students[i].marks;
      ul.appendChild(li);
    }
  }
}
    disgreaterthanSixty();

    function deptWiseCount() {
        const result = {};

        for (let i = 0; i < students.length; i++) {
            const dept = students[i].department;

            if (result[dept] === undefined) {
                result[dept] = 1;
            } else {
                result[dept]++;
            }
        }

        const ul = document.getElementById("departmentCount");

        for (let key in result) {
            const li = document.createElement("li");
            li.innerText = key + " : " + result[key];
            ul.appendChild(li);
        }
    }

    deptWiseCount();

    function highestMarksStudent() {
        let maxStudent = students[0];

        for (let i = 1; i < students.length; i++) {
            if (students[i].marks > maxStudent.marks) {
                maxStudent = students[i];
            }
        }

        document.getElementById("highestMarks").innerText =
            maxStudent.name + " scored highest with " + maxStudent.marks + " marks";
    }

    highestMarksStudent();

    function todisplayTable() {
        const tbody = document.getElementById("studentTableBody");

        for (let i = 0; i < students.length; i++) {
            const tr = document.createElement("tr");

            const tdName = document.createElement("td");
            tdName.innerText = students[i].name;

            const tdMarks = document.createElement("td");
            tdMarks.innerText = students[i].marks;

            if (students[i].marks < 50) {
                tdMarks.classList.add("fail");
            }

            const tdDept = document.createElement("td");
            tdDept.innerText = students[i].department;

            tr.appendChild(tdName);
            tr.appendChild(tdMarks);
            tr.appendChild(tdDept);

            tbody.appendChild(tr);
        }
    }

    todisplayTable();

    function calculateAverage() {
        let total = 0;

        for (let i = 0; i < students.length; i++) {
            total = total + students[i].marks;
        }

        const avg = total / students.length;
        document.getElementById("averageMarks").innerText = avg.toFixed(2);
    }

    calculateAverage();

    function displayCSEStudents() {
        const ul = document.getElementById("cseList");

        for (let i = 0; i < students.length; i++) {
            if (students[i].department === "CSE") {
                const li = document.createElement("li");
                li.innerText = students[i].name;
                ul.appendChild(li);
            }
        }
    }

    displayCSEStudents();

    function sortByMarks() {
        const copiedArray = students.slice();

        copiedArray.sort(function(a, b) {
            return b.marks - a.marks;
        });

        const ul = document.getElementById("sortedList");

        for (let i = 0; i < copiedArray.length; i++) {
            const li = document.createElement("li");
            li.innerText = copiedArray[i].name + " - " + copiedArray[i].marks;
            ul.appendChild(li);
        }
    }

    sortByMarks();

    function addNewStudent() {
        const newStudent = {
            id: 6,
            name: "Sandeep",
            marks: 79,
            department: "CSE"
        };

        students.push(newStudent);

        const ul = document.getElementById("updatedStudentList");
      }
