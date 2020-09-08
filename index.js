let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
//  console.log(buttons);
let disvalue = "";
buttons.forEach(function (element) {
    element.addEventListener('click', function (e) {
        btntext = e.target.innerHTML;
        console.log(e.target.innerHTML);
        if (btntext == 'X') {
             disvalue = disvalue + '*';
            display.value = disvalue;
        }
        else if(btntext == 'C'){
            disvalue = '';
            display.value = disvalue;
        }
        else if(btntext == '=')
        {
            display.value = eval(disvalue);
            disvalue=display.value;
        }
       else
        {
            disvalue = disvalue + btntext;
            display.value = disvalue;
        }
    })
})