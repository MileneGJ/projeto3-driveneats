
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

function confirmar() {
    document.querySelector(".confirmacao").classList.add("aparecer");
    const nomePrato = document.querySelector(".PratoSelecionado h3").innerHTML;
const nomeBebida = document.querySelector(".BebidaSelecionada h3").innerHTML;
const nomeSobrem = document.querySelector(".SobremSelecionada h3").innerHTML;
let precoPratostr = document.querySelector(".PratoSelecionado h4").innerHTML.replace(/R[^\d.]/g, '');
let precoBebidastr = document.querySelector(".BebidaSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');
let precoSobremstr = document.querySelector(".SobremSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');
precoPrato = Number(precoPratostr.replace(/,/g,'.'));
precoBebida = Number(precoBebidastr.replace(/,/g,'.'));
precoSobrem = Number(precoSobremstr.replace(/,/g,'.'));
let precoTotal = precoPrato+precoBebida+precoSobrem;
precoTotal = precoTotal.toFixed([2]);
    precoTotal = precoTotal.toString();
    precoTotal = "R$ "+ precoTotal;
    document.querySelector(".checkPedido").querySelector(".prato p").innerHTML = nomePrato;
    document.querySelector(".checkPedido").querySelector(".bebida p").innerHTML = nomeBebida;
    document.querySelector(".checkPedido").querySelector(".sobremesa p").innerHTML = nomeSobrem;
    document.querySelector(".checkPedido").querySelector(".prato p:last-child").innerHTML = precoPratostr;
    document.querySelector(".checkPedido").querySelector(".bebida p:last-child").innerHTML = precoBebidastr;
    document.querySelector(".checkPedido").querySelector(".sobremesa p:last-child").innerHTML = precoSobremstr;
    document.querySelector(".checkPedido").querySelector(".preço").innerHTML = precoTotal;
}
function voltar() {
    document.querySelector(".confirmacao").classList.remove("aparecer");
}

function fecharPedido(){
    const nomeCliente = prompt("Infome seu nome");
    const endereco = prompt("Infome o endereço para entrega");
    const nomePrato = document.querySelector(".PratoSelecionado h3").innerHTML;
const nomeBebida = document.querySelector(".BebidaSelecionada h3").innerHTML;
const nomeSobrem = document.querySelector(".SobremSelecionada h3").innerHTML;
let precoPratostr = document.querySelector(".PratoSelecionado h4").innerHTML.replace(/R[^\d.]/g, '');
let precoBebidastr = document.querySelector(".BebidaSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');
let precoSobremstr = document.querySelector(".SobremSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');
precoPrato = Number(precoPratostr.replace(/,/g,'.'));
precoBebida = Number(precoBebidastr.replace(/,/g,'.'));
precoSobrem = Number(precoSobremstr.replace(/,/g,'.'));
let precoTotal = precoPrato+precoBebida+precoSobrem;
precoTotal = precoTotal.toFixed([2]);
    const textoMsg = "Olá, gostaria de fazer o pedido:\n- Prato: "+nomePrato+
    "\n- Bebida: "+nomeBebida+"\n- Sobremesa: "+nomeSobrem+"\nTotal: R$ "+precoTotal+
    "\n\nNome: "+nomeCliente+"\nEndereço: "+endereco;
    let msgPronta = encodeURIComponent(textoMsg);
    location.href = `https://wa.me/525951207831?text=${msgPronta}`;
}