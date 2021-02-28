// code for form on ready page
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('formSubmit') && document.getElementById('formSubmit').addEventListener('click', function(event){

    const name = document.getElementById("form-name").value
    const email = document.getElementById("form-email").value
    const payload = name + " " + email

    if (payload == " " || !payload.includes('@')) {
      event.preventDefault();
      document.getElementById('form-response').textContent = "Oops, you need to add a name and email!";
      document.getElementById('form-response').style.color = "red"
    } else {
      event.preventDefault();
      const req = new XMLHttpRequest();
      req.open("POST", "http://httpbin.org/post");
      req.setRequestHeader('Content-Type', 'application/json');
      req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          const response = JSON.parse(req.responseText);
          document.getElementById('ready-form-container').textContent = null;
          document.getElementById('form-response').textContent = "Success! Thanks for submitting your email";
          document.getElementById('form-response').style.color = "green";
        } else {
          console.log("Error in network request: " + req.statusText);
          document.getElementById('form-response').textContent = "Oops, something went wrong!";
          document.getElementById('form-response').style.color = "red"
        }});
      req.send(JSON.stringify(payload));
      }
  })
}



// Function to change background color on care page
// Colors will go through rainbow 
function changeBodyColor(){
    var toUpdate = document.body;

    switch(toUpdate.style.backgroundColor) {
        case "white":
            toUpdate.style.backgroundColor = "rgb(201, 193, 231)";
          break;
        case "rgb(201, 193, 231)":
            toUpdate.style.backgroundColor = "rgb(189, 213, 239)";
          break;
        case "rgb(189, 213, 239)":
            toUpdate.style.backgroundColor = "rgb(199, 227, 208)";
          break;
        case "rgb(199, 227, 208)":
            toUpdate.style.backgroundColor = "rgb(231, 230, 206)";
          break;
        case "rgb(231, 230, 206)":
            toUpdate.style.backgroundColor = "rgb(242, 216, 204)";
          break;
        case "rgb(242, 216, 204)":
            toUpdate.style.backgroundColor = "rgb(233, 204, 206)";
          break;
        case "rgb(233, 204, 206)":
            toUpdate.style.backgroundColor = "rgb(201, 193, 231)";
          break;
        default:
            toUpdate.style.backgroundColor = "rgb(201, 193, 231)";
      }
}

// Function to change text color on care page
// Colors will go through rainbow 
function changeTextColor(){
    var toUpdate = document.body;
    switch(toUpdate.style.color) {
        case "black":
            toUpdate.style.color = "rgb(75, 40, 130)";
          break;
        case "rgb(75, 40, 130)":
            toUpdate.style.color = "rgb(46, 87, 147)";
          break;
        case "rgb(46, 87, 147)":
            toUpdate.style.color = "rgb(23, 114, 69)";
          break;
        case "rgb(23, 114, 69)":
            toUpdate.style.color = "rgb(196, 167, 5)";
          break;
        case "rgb(196, 167, 5)":
            toUpdate.style.color = "rgb(201, 97, 22)";
          break;
        case "rgb(201, 97, 22)":
            toUpdate.style.color = "rgb(193, 48, 28)";
          break;
        case "rgb(193, 48, 28)":
            toUpdate.style.color = "black";
          break;
        default:
            toUpdate.style.color = "rgb(75, 40, 130)";
      }
}

function unbindButton(){
    document.getElementById("care-bg-color").removeEventListener("click", changeBodyColor);
    document.getElementById("care-text-color").removeEventListener("click", changeBodyColor);
}

document.getElementById("care-bg-color") && document.getElementById("care-bg-color").addEventListener("click", changeBodyColor);
document.getElementById("care-text-color") && document.getElementById("care-text-color").addEventListener("click", changeTextColor);
