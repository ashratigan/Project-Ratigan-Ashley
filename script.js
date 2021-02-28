// code for form on ready page
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
  document.getElementById('formSubmit').addEventListener('click', function(event){

    const name = document.getElementById("form-name").value
    const email = document.getElementById("form-email").value
    const payload = name + " " + email

    if (payload == " ") {
      event.preventDefault();
      document.getElementById('form-response').textContent = "Oops, you need to add a name and email!";
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
        } else {
          console.log("Error in network request: " + req.statusText);
          document.getElementById('form-response').textContent = "Oops, something went wrong!";
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

function unbindButton(){
    document.getElementById("careColor").removeEventListener("click", changeBodyColor);
}

document.getElementById("careColor") && document.getElementById("careColor").addEventListener("click", changeBodyColor);
