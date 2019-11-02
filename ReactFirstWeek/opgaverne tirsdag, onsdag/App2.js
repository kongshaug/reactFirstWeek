import React from 'react';
import person, {males, females} from "./file2"

const {firstName, email} = person
const people = [...males,"Kurt", "Helle", ...females, "Tina"]




const personV2 = {
    email : email,
    firstName : firstName,
    frinds: people,
    gender: "male",
    lastName: "wonnegut",
    phone: 123456

}


function App2(){
    return(
        <div>
           {firstName +", " +email}
           {console.log(people)}
           {console.log(personV2)}
        </div>
    )
}

export default App2;