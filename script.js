
function check(){
    let input = document.getElementById('add-num').value;
    var number = +input;

    if (number % 2 === 0) {
        document.getElementById('message').innerText="The number is an Even number.";
      } else {
        document.getElementById('message').innerText="The number is an Odd number.";
      }

}
