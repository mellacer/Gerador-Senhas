let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
let novasenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    let length = parseInt(sliderElement.value);

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        pass += charset.charAt(randomIndex);
    }

    password.innerHTML = pass;
    containerPassword.classList.remove("hide");
}

function copyPassword() {
    const text = password.innerText;

    if (!text) {
        alert("Nenhuma senha para copiar.");
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Senha copiada para a área de transferência!");
        })
        .catch(err => {
            console.error("Erro ao copiar senha:", err);
            alert("Erro ao copiar a senha.");
        });
}
