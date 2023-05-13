/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  arr.map((item) => {
    console.log(item);
  })
}

function PrintStudentsbyForEach() {
  arr.forEach(element => {
    console.log(element);
  });
}

function addData() {
  arr.push({ id: 4, name: "susan", age: "20", marks: 45 })
  arr.map((item) => {
    console.log(item);
  })
}

function removeFailedStudent() {
  arr = arr.filter((item)=>{
    return  item.marks>50
  })

  arr.map((item) => {
    console.log(item);
  })

}

function concatenateArray() {
  arr = arr.concat({ id: 4, name: "jefrey", age: "18", marks: 85 },
  { id: 5, name: "kevin", age: "20", marks: 50 },
  { id: 6, name: "sunny", age: "19", marks: 38 }) 
  arr.map((item) => {
    console.log(item);
  })
}

