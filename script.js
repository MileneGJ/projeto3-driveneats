
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
    if(document.querySelector(".PratoSelecionado")!== null &&
    document.querySelector(".BebidaSelecionada")!== null &&
    document.querySelector(".SobremSelecionada")!== null){
        document.querySelector(".desativado").classList.add("escondido");
        document.querySelector(".ativado").classList.remove("escondido");
    }
}

function fecharPedido(){
    const nomePrato = document.querySelector(".PratoSelecionado h3").innerHTML;
    const nomeBebida = document.querySelector(".BebidaSelecionada h3").innerHTML;
    const nomeSobrem = document.querySelector(".SobremSelecionada h3").innerHTML;
    const precoPrato = Number(document.querySelector(".PratoSelecionado h4").innerHTML.replace(/R[^\d.]/g, '').replace(/,/g,'.'));
    const precoBebida = Number(document.querySelector(".BebidaSelecionada h4").innerHTML.replace(/R[^\d.]/g, '').replace(/,/g,'.'));
    const precoSobrem = Number(document.querySelector(".SobremSelecionada h4").innerHTML.replace(/R[^\d.]/g, '').replace(/,/g,'.'));
    let precoTotal = precoPrato+precoBebida+precoSobrem;
    precoTotal = precoTotal.toFixed([2]);
    const textoMsg = "Olá, gostaria de fazer o pedido:\n- Prato: "+nomePrato+"\n- Bebida: "+nomeBebida+"\n- Sobremesa: "+nomeSobrem+"\nTotal: R$ "+precoTotal;
    let msgPronta = encodeURIComponent(textoMsg);
    location.href = `https://wa.me/525951207831?text=${msgPronta}`;
}