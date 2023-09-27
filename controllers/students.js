import { v4 as uuid } from 'uuid';

let students = [];

export const getStuds = (req, res) => {
     console.log(`Users in the database: ${students}`);
     res.send(students);
}

export const createStud = (req, res) => {   
     const student = req.body;
     students.push({...student, id: uuid()});
     console.log(`User [${student.username}] added to the database.`);
 };

export const getStud = (req, res) => {
     res.send(req.params.id)
};


 export const deleteStud = (req, res) => { 
     console.log(`user with id ${req.params.id} has been deleted`);
     students = students.filter((student) => student.id !== req.params.id);
 };


 export const updateStud =  (req,res) => {
     const student = students.find((student) => student.id === req.params.id);
     student.username = req.body.username;
     student.age = req.body.age;

     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
 };