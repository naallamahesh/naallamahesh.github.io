"use strict";

class Registerform {
    constructor(teamName, teamSize, name, employeeId, location) {
        this.teamName = teamName;
        this.teamSize = teamSize;
        this.name = name;
        this.employeeId = employeeId;
        this.location = location;
      }
}

function enroll() {
  let teamName = document.getElementById("teamName").value;
  let teamSize = document.getElementById("teamSize").value;
  let name = document.getElementById("name").value;
  let employeeId = document.getElementById("employeeId").value;
  let location = document.getElementById("location").selectedOptions[0]. value;
  let newEntry = new Registerform(teamName, teamSize, name, employeeId, location);
  
  
  let sessionstorage = sessionStorage.getItem("registeredEntries");
  let registeredEntries = null;
  if(sessionstorage == null) {
    registeredEntries = [];  
  } else {
    registeredEntries = JSON.parse(sessionstorage);
  }

  if(registeredEntries.length >= 5) {
    alert('Registration closed');
    return false;
  } else {
    registeredEntries.push(newEntry)
  sessionStorage.setItem("registeredEntries",JSON.stringify(registeredEntries));
  }
  
  return false;
}