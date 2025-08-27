let input=document.querySelector("input"); //Select input
let buttons=document.querySelectorAll("button"); //Select all buttons

//Add a click event listener for each button
buttons.forEach(button => {
    button.addEventListener('click' , function(){

        //tex inside the button
        const key=button.textContent
        
         // if the button is "Backspace"
        if(key === "Backspace") {
            // remove the last charactor in input
            input.value = input.value.slice(0, -1);
        }
        //append the button text to the input value.
        else{
            input.value += button.textContent;
        }
    })
});
 //add Event listener when a key is pressed inside the input(وقتی که input slelect شده و داخل ائن تایپ میکنیم)
input.addEventListener("keydown" , function(event){
    //the key that was pressed
    const key = event.key;

    //check the buttons
     buttons.forEach(button => {
        //Convert uppercase letters to lowercase letters
        if(button.textContent.toLowerCase() === key){
            //change background color and text color
            button.style.background = "blue";
            button.style.color = "white";

            //reset the color after 100 millisecond
            setTimeout(() => {
                button.style.background = "";
                button.style.color = ""; 
            }, 100);
          }
          
          
          // Backspace key
          if (key === "Backspace" && button.textContent === "Backspace") {

            button.style.background = "blue";
            button.style.color = "white";

            setTimeout(() => {
                button.style.background = "";
                button.style.color = "";
            }, 100);

          }

          //Enter key
          if(key === "Enter" && button.textContent === "Enter"){
            button.style.background = "blue";
            button.style.color = "white";
            //remove focus when we presse enter
             input.blur();

            setTimeout(() => {
                button.style.background = "";
                button.style.color = "";
            }, 100); 
          }
          //space key
          if(key === " " && button.textContent === ""){
            button.style.background="blue"

            setTimeout(() => {
                button.style.background = "";
            }, 100);
            
          }
    });

});

