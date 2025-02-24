function validateForm() {

    let fullname = document.getElementById("fullname").value.trim();
    let aadhar = document.getElementById("aadhar").value.trim();
    let pan = document.getElementById("pan").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let marks = document.getElementById("marks").value.trim();
  
    let nameParts = fullname.split(" ");
    if (nameParts.length < 2) {
      alert()("Please enter a full name with at least first and last names.");
      return false;
    }
    let firstName = nameParts[0];
    let middleName = nameParts.length > 2 ? nameParts[1] : "";
    let lastName = nameParts[nameParts.length - 1];
  
    if (!/^\d{12}$/.test(aadhar)) {
     alert("Aadhar number should be exactly 12 digits.");
      return false;
    }
  
    if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(pan)) {
      alert("PAN Card number is invalid. It should follow the pattern: AAAAA1234A");
      return false;
    }
  
    if (!/^[6-9]/.test(mobile)){
      alert("Mobile number should be exactly 10 digits.");
      return false;
    }
  
    var dobDate = new Date(dob);
    if (dobDate > new Date()) {
      alert("Date of Birth cannot be in the future.");
      return false;
    }
  
    let marksArray = marks.split(",").map(Number);
    if (marksArray.length !== 6 || marksArray.some(isNaN)) {
      alert("Please enter valid marks for 6 subjects.");
      return false;
    }
    marksArray.sort((a, b) => b - a);
    let bestFive = marksArray.slice(0, 5);
    let totalMarks = bestFive.reduce((sum, mark) => sum + mark, 0);
    let percentage = (totalMarks / 500) * 100;
  
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p>Full Name: ${firstName} ${middleName} ${lastName}</p>
      <p>Aadhar Number: ${aadhar}</p>
      <p>PAN Card Number: ${pan}</p>
      <p>Mobile Number: ${mobile}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Best 5 Subject Marks: ${bestFive.join(", ")}</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
    return false;
  }function validateForm() {

    let fullname = document.getElementById("fullname").value.trim();
    let aadhar = document.getElementById("aadhar").value.trim();
    let pan = document.getElementById("pan").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let marks = document.getElementById("marks").value.trim();
  
    let nameParts = fullname.split(" ");
    if (nameParts.length < 2) {
      alert()("Please enter a full name with at least first and last names.");
      return false;
    }
    let firstName = nameParts[0];
    let middleName = nameParts.length > 2 ? nameParts[1] : "";
    let lastName = nameParts[nameParts.length - 1];
  
    if (!/^\d{12}$/.test(aadhar)) {
     alert("Aadhar number should be exactly 12 digits.");
      return false;
    }
  
    if (!/^[A-Z]{5}\d{4}[A-Z]$/.test(pan)) {
      alert("PAN Card number is invalid. It should follow the pattern: AAAAA1234A");
      return false;
    }
  
    if (!/^[6-9]/.test(mobile)){
      alert("Mobile number should be exactly 10 digits.");
      return false;
    }
  
    var dobDate = new Date(dob);
    if (dobDate > new Date()) {
      alert("Date of Birth cannot be in the future.");
      return false;
    }
  
    let marksArray = marks.split(",").map(Number);
    if (marksArray.length !== 6 || marksArray.some(isNaN)) {
      alert("Please enter valid marks for 6 subjects.");
      return false;
    }
    marksArray.sort((a, b) => b - a);
    let bestFive = marksArray.slice(0, 5);
    let totalMarks = bestFive.reduce((sum, mark) => sum + mark, 0);
    let percentage = (totalMarks / 500) * 100;
  
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
      <p>Full Name: ${firstName} ${middleName} ${lastName}</p>
      <p>Aadhar Number: ${aadhar}</p>
      <p>PAN Card Number: ${pan}</p>
      <p>Mobile Number: ${mobile}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Best 5 Subject Marks: ${bestFive.join(", ")}</p>
      <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
    return false;
  }