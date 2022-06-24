function login() {
    window.location.href = "login.html";

}

function signup() {
    window.location.href = "signup.html"
}

function validateFields() {
    const email = document.getElementById("email").value;
    if (!email) {
        document.getElementById('fPassword').disabled = true;
    } else { (validateEmail(email)) {
        document.getElementById('fPassword').disabled = false;
    }

    }

    function ValidateEmail(email) {
        return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
        
    }

    //pegar o valorr do campo do 
    //verificar se o e-mail é validoemail
    //v, habilitar recuperar senha
    //f, desabilitar recuperar semha

}