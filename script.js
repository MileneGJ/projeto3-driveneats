
function selecionar(el) {
    if(el.classList.contains("prato")){
    if(el.classList.contains("PratoSelecionado")){
    document.querySelector(".PratoSelecionado ion-icon").classList.add("escondido");
    el.classList.remove("PratoSelecionado");
    }else{
    const BtnSelecionado = document.querySelector(".PratoSelecionado");
    const IconSelecionado = document.querySelector(".PratoSelecionado ion-icon");
    if(BtnSelecionado!== null){
        BtnSelecionado.classList.remove("PratoSelecionado");
        IconSelecionado.classList.add("escondido");
    }
    el.classList.toggle("PratoSelecionado");
    document.querySelector(".PratoSelecionado ion-icon").classList.toggle("escondido");
    }
    }

    if(el.classList.contains("bebida")){
        if(el.classList.contains("BebidaSelecionada")){
        document.querySelector(".BebidaSelecionada ion-icon").classList.add("escondido");
        el.classList.remove("BebidaSelecionada");
        }else{
        const BtnSelecionado = document.querySelector(".BebidaSelecionada");
        const IconSelecionado = document.querySelector(".BebidaSelecionada ion-icon");
        if(BtnSelecionado!== null){
            BtnSelecionado.classList.remove("BebidaSelecionada");
            IconSelecionado.classList.add("escondido");
        }
        el.classList.toggle("BebidaSelecionada");
        document.querySelector(".BebidaSelecionada ion-icon").classList.toggle("escondido");
        }
    }

    if(el.classList.contains("sobremesa")){
        if(el.classList.contains("SobremSelecionada")){
        document.querySelector(".SobremSelecionada ion-icon").classList.add("escondido");
        el.classList.remove("SobremSelecionada");
        }else{
        const BtnSelecionado = document.querySelector(".SobremSelecionada");
        const IconSelecionado = document.querySelector(".SobremSelecionada ion-icon");
        if(BtnSelecionado!== null){
            BtnSelecionado.classList.remove("SobremSelecionada");
            IconSelecionado.classList.add("escondido");
        }
        el.classList.toggle("SobremSelecionada");
        document.querySelector(".SobremSelecionada ion-icon").classList.toggle("escondido");
        }
    }
}

if(document.querySelector(".SobremSelecionada")!==null){
    alert("TRUE")
}


/*document.querySelector(".PratoSelecionado h4").innerHTML*/
