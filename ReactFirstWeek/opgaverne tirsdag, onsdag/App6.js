import React, { useState,useEffect } from "react";

function ListItem(props){
    return <li key = {props.index}> {props.value}</li>
}

function TableItem(props){
return <tr ><th key= {props.index}> {props.value}</th>
</tr>

}
 
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map((n, index) => 
   <ListItem value = {n}
  key = {index}/> );
  return   listItems;
}
function NumberTable({numbers}){
    const tableItems = numbers.map((n, index) => 
        <TableItem value = {n}
        key ={index}/>
    )
    return tableItems
}


function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}



export default function App() {
  const [numbers, SetNumber] = useState([1, 2, 3, 4]);


  useEffect(()=>{

    const addElementToList = setTimeout(()=>{
       
        SetNumber([...numbers,numbers.length+1]);
        
    },1000)

    return ()=> { clearTimeout(addElementToList)}
},[numbers])

  return (
      <div>
  <ul><ListDemo numbers={numbers} /></ul>

  <table >
  <tbody id="tablebody"><NumberTable numbers={numbers}/>
            </tbody> 
  </table>
  </div>
    );
}
