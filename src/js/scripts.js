
class validações {

    constructor() {
        this.validações = [
            "data-min-length",

        ]
    }

    //iniciar a validação de todos os campos
    validate(form) {

        //pegar os inputs
        let inputs = form.getElementsByTagName('input');

        // HTMLColection -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação
        inputsArray.forEach(function(input) {

            //loop em todas avaliações existentes
            for(let i = 0; this.validações.length > i; i++) {
            // verifica se a validação atual existe no input    
                if(input.getAttribute(this.validações[i]) != null){

                    // limpando a string para virar um metodo
                    let method = this.validações[i].replace("data-", "").replace("-", "");

                    // valor do input
                    let value = input.getAttribute(this.validações[i]);

                    //invocar metodo
                    this[method](input, value);
                }
                }

                }, this;
    }
    //verifica se um input tem um numero minimo de caracteres
    minlength(){

    }


let form = document.getElementById("cadastrepage")
let submit = document.getElementById("btn-submit")

let validações = new validações();  

//evento que dispara as validações
submit.addEventListener('click', function(e) {

    e.preventDefault();
     
     console.log('funcionou');
}
);

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
      
  console.log(validateEmail('texto@texto.com')); // true
  console.log(validateEmail('texto@texto')); // false
  console.log(validateEmail('texto.com')); // false
  console.log(validateEmail('texto')); // false


  function validPhone (phone) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(phone);
}

function msg() {
    alert("Seu Cadastro foi realizado com sucesso");
  }