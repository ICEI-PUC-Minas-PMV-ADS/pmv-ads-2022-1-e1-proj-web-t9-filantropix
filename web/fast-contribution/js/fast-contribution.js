function choose_btn(element){
    let valueinput = document.getElementById("value");
    valueinput.value = element.currentTarget.value;

}
function addEventListener()
{
   let btn1 = document.getElementById("bt1");
   btn1.value = 50;

    btn1.addEventListener("click", choose_btn);

    let btn2 = document.getElementById("bt2");
   btn2.value = 150;

    btn2.addEventListener("click", choose_btn);

    let btn3 = document.getElementById("bt3");
   btn3.value = 300;

    btn3.addEventListener("click", choose_btn);
    
    let btn4 = document.getElementById("bt4");
   btn4.value = 500;

    btn4.addEventListener("click", choose_btn);

    let btn5 = document.getElementById("bt5");
   btn5.value = 1000;

    btn5.addEventListener("click", choose_btn);

}
addEventListener();
