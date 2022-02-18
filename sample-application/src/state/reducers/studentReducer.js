import { toast } from 'react-toastify';

const checkAndAddStudent = (students, newStudent) => {
    let exist = false;
    students?.map(student => {
        if (student.no === newStudent.no) {
            exist = true;
        }
    });
    if (!exist) {
        students.push(newStudent);
        students.sort((a, b) => a.name > b.name ? 1 : -1);
    }
    else {
        toast.error("You cannot add a student already exist! " + newStudent.no + " - " + newStudent.name);
    }
    return students;
}

const studentReducer = (state = [], action) => {
    const { students } = state;
    let newStudents = [];
    if (students?.length) {
        newStudents = [...students];
    }
    switch (action.type) {
        case "add":
            newStudents = checkAndAddStudent(newStudents, action.student);

            return { students: newStudents, count: newStudents.length };
        case "bulkInsert":
            action.students.forEach(student => {
                newStudents = checkAndAddStudent(newStudents, student);
            })
            return { students: newStudents, count: newStudents.length };
        case "delete":
            for (let i = 0; i < students.length; i++) {
                if (students[i].id === action.student.id) {
                    // todo: delete student here
                    break;
                }
            }
        default:
            return state;
    }
}

export default studentReducer;