
var saveButton = document.querySelectorAll(".saveBtn");
for (var i = 0; i < saveButton.length; i++) {

  saveButton[i].addEventListener("click", function() {

    var textInput = document.getElementById("text-input1").value;
    localStorage.setItem("text-input1", textInput);

    var textInput = document.getElementById("text-input2").value;
    localStorage.setItem("text-input2", textInput);

    var textInput = document.getElementById("text-input3").value;
    localStorage.setItem("text-input3", textInput);

    var texttInput = document.getElementById("text-input4").value;
    localStorage.setItem("text-input4", textInput);

    var textInput = document.getElementById("text-input5").value;
    localStorage.setItem("text-input5", textInput);

    var textInput = document.getElementById("text-input6").value;
    localStorage.setItem("text-input6", textInput);

    var textInput = document.getElementById("text-input7").value;
    localStorage.setItem("text-input7", textInput);

    var textInput = document.getElementById("text-input8").value;
    localStorage.setItem("text-input8", textInput);

    var textInput = document.getElementById("text-input9").value;
    localStorage.setItem("text-input9", texttInput);
  })
}

