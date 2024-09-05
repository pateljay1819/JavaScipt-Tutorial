
    let button = document.getElementById("myButton");
    
    button.addEventListener("click", function() {
        alert("i love js!");
    });


    let hoverBox = document.getElementById("hoverBox");

    hoverBox.addEventListener("mouseover", function() {
        hoverBox.style.backgroundColor = "yellow";
    });

    hoverBox.addEventListener("mouseout", function() {
        hoverBox.style.backgroundColor = "lightblue";
    });


    let input = document.getElementById("myInput");


    input.addEventListener("keydown", function(event) {
        console.log(`Key pressed: ${event.key}`);
    });

    let submitbutton = document.getElementById("submitbutton");
    submitbutton.addEventListener("click", function() {
        alert("hello,how are you!");
    });


    let select = document.getElementById("mySelect");

    select.addEventListener("change", function() {
        alert(`You selected: ${select.value}`);
    });
    