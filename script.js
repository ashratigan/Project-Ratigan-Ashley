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
