import uuid from "uuid/v1";
let URL = "http://localhost:3456/api";

//The two methods below, are the utility-methods introduced here (use them if you like):
//https://docs.google.com/document/d/1hF9P65v_AJKCjol_gFkm3oZ1eVTuOKc15V6pcb3iFa8/edit?usp=sharing

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  //OBSERVE This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  function getPersons() {
    return new Promise((resolve, reject) => {
      fetch("http://localhost:3456/api")
        .then(res => res.json()) 
        .then(data => {
          resolve(data);
        })
        .catch(handleHttpErrors);
    })
  }

  function addEditPerson(person) {
    
    
    if(person.id === "")
    {
    person.id = uuid()

      const opts = makeOptions("POST", person)

      return new Promise((resolve, reject) => {
         fetch(URL, opts)
          .then(res => res.json()) 
          .then(data => {
            resolve(data);
          })
          .catch(handleHttpErrors);
      })

    }
    else{

      const opts = makeOptions("PUT", person)

      return new Promise((resolve, reject) => {
         fetch(URL + "/"+ person.id, opts)
          .then(res => res.json()) 
          .then(data => {
            resolve(data);
          })
          .catch(handleHttpErrors);
      })
    }

    
  }

  function deletePerson(id) {
    
  

      const opts = makeOptions("DELETE")
    
      return new Promise((resolve, reject) => {
         fetch(URL +"/"+ id, opts)
          .then(res => res.json()) 
          .then(data => {
            resolve(data);
          })
          .catch(handleHttpErrors);
      })

     

    
  }
  
  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}
const returnValue = apiFacade();
export default returnValue;

