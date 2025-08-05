import PropTypes from "prop-types";
import React from "react";
import "./app.scss";
import { students } from "./data/students";

const StudentListItem = (props) => {
    const { name, age, email, phone, instagram, isPresent } = props.student;

    return (
        <div className="student-list-item">
            <div className="student-list-item__header">
                <h4 className="student-list-item__title">{name}</h4>
                <p className="student-list-item__status">{isPresent ? "✅ Presente" : "❌ Ausente"}</p>
            </div>

            <ul className="student-list-item__content">
                <li className="student-list-item__age">Edad: {age} años</li>
                <li className="student-list-item__email">{email}</li>
                <li className="student-list-item__phone">{phone}</li>
                {instagram && <li className="student-list-item__instagram">{instagram}</li>}
            </ul>
        </div>
    );
};

StudentListItem.propTypes = {
    student: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        instagram: PropTypes.string,
        isPresent: PropTypes.bool.isRequired,
    }).isRequired,
};

const StudentList = (props) => {
    const { students } = props;

    return (
        <div className="student-list">
            {students.map((student) => (
                <StudentListItem key={student.id} student={student} />
            ))}
        </div>
    );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        instagram: PropTypes.string,
        isPresent: PropTypes.bool.isRequired,
    })).isRequired,
};

const Student = () => {
    const getPresentStudents = () => {
        const presentStudents = students.filter((student) => student.isPresent);
        return presentStudents.length;
    };

    const getAbsentStudents = () => {
        const absentStudents = students.filter((student) => !student.isPresent);
        return absentStudents.length;
    };

    return (
        <div className="student">
            <h2>Lista de Estudiantes</h2>
            <div className="student__stats">
                <p>Total de estudiantes: {students.length}</p>
                <p>Presentes: {getPresentStudents()}</p>
                <p>Ausentes: {getAbsentStudents()}</p>
            </div>
            <StudentList students={students} />
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Student />
        </div>
    );
};

export default App;