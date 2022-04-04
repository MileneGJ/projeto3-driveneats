/* Função para selecionar um item de cada categoria */

function selecionar(el) {
    if(el.classList.contains("prato")){   /* Dentro dos itens da categoria Pratos */
    if(el.classList.contains("PratoSelecionado")){  /* Retirar a seleção caso o elemento já esteja selecionado */
    document.querySelector(".PratoSelecionado ion-icon").classList.add("escondido");
    el.classList.remove("PratoSelecionado");
    }else{    
    const BtnSelecionado = document.querySelector(".PratoSelecionado");
    const IconSelecionado = document.querySelector(".PratoSelecionado ion-icon");
    if(BtnSelecionado!== null){  /* Retirar a seleção de outros elementos já selecionados desta categoria */
        BtnSelecionado.classList.remove("PratoSelecionado");
        IconSelecionado.classList.add("escondido");
    }
    el.classList.toggle("PratoSelecionado");  /* Selecionar o elemento */
    document.querySelector(".PratoSelecionado ion-icon").classList.toggle("escondido");
    }
    }

    if(el.classList.contains("bebida")){    /* Dentro dos itens da categoria Bebidas */
        if(el.classList.contains("BebidaSelecionada")){   /* Retirar a seleção caso o elemento já esteja selecionado */
        document.querySelector(".BebidaSelecionada ion-icon").classList.add("escondido");
        el.classList.remove("BebidaSelecionada");
        }else{
        const BtnSelecionado = document.querySelector(".BebidaSelecionada");
        const IconSelecionado = document.querySelector(".BebidaSelecionada ion-icon");
        if(BtnSelecionado!== null){  /* Retirar a seleção de outros elementos já selecionados desta categoria */
            BtnSelecionado.classList.remove("BebidaSelecionada");
            IconSelecionado.classList.add("escondido");
        }
        el.classList.toggle("BebidaSelecionada");  /* Selecionar o elemento */
        document.querySelector(".BebidaSelecionada ion-icon").classList.toggle("escondido");
        }
    }

    if(el.classList.contains("sobremesa")){    /* Dentro dos itens da categoria Sobremesa */
        if(el.classList.contains("SobremSelecionada")){   /* Retirar a seleção caso o elemento já esteja selecionado */
        document.querySelector(".SobremSelecionada ion-icon").classList.add("escondido");
        el.classList.remove("SobremSelecionada");
        }else{
        const BtnSelecionado = document.querySelector(".SobremSelecionada");
        const IconSelecionado = document.querySelector(".SobremSelecionada ion-icon");
        if(BtnSelecionado!== null){  /* Retirar a seleção de outros elementos já selecionados desta categoria */
            BtnSelecionado.classList.remove("SobremSelecionada");
            IconSelecionado.classList.add("escondido");
        }
        el.classList.toggle("SobremSelecionada");  /* Selecionar o elemento */
        document.querySelector(".SobremSelecionada ion-icon").classList.toggle("escondido");
        }
    }

     /* Ativar o botão de Fechar Pedido caso haja uma seleção em cada categoria */

    if(document.querySelector(".PratoSelecionado")!== null &&
    document.querySelector(".BebidaSelecionada")!== null &&
    document.querySelector(".SobremSelecionada")!== null){
        document.querySelector(".desativado").classList.add("escondido");
        document.querySelector(".ativado").classList.remove("escondido");
    }
}

/* Função para abrir a janela de confirmar pedido antes de enviar as informações ao whatsapp */

function confirmar() {
    document.querySelector(".confirmacao").classList.add("aparecer");
    const nomePrato = document.querySelector(".PratoSelecionado h3").innerHTML;
    const nomeBebida = document.querySelector(".BebidaSelecionada h3").innerHTML;
    const nomeSobrem = document.querySelector(".SobremSelecionada h3").innerHTML;

         /* Preços em string para ter o formato com vírgula */
    let precoPratostr = document.querySelector(".PratoSelecionado h4").innerHTML.replace(/R[^\d.]/g, '');
    let precoBebidastr = document.querySelector(".BebidaSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');
    let precoSobremstr = document.querySelector(".SobremSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');

         /* Preços em número para calcular a soma final */
    precoPrato = Number(precoPratostr.replace(/,/g,'.'));
    precoBebida = Number(precoBebidastr.replace(/,/g,'.'));
    precoSobrem = Number(precoSobremstr.replace(/,/g,'.'));
    let precoTotal = precoPrato+precoBebida+precoSobrem;
    precoTotal = precoTotal.toFixed([2]);
    precoTotal = precoTotal.toString();
    precoTotal = "R$ "+ precoTotal;       /* Preço final formatado para exibição na janela */

         /* Renomeando itens de acordo com nome e preço das seleções */
    document.querySelector(".checkPedido").querySelector(".prato p").innerHTML = nomePrato;
    document.querySelector(".checkPedido").querySelector(".bebida p").innerHTML = nomeBebida;
    document.querySelector(".checkPedido").querySelector(".sobremesa p").innerHTML = nomeSobrem;
    document.querySelector(".checkPedido").querySelector(".prato p:last-child").innerHTML = precoPratostr;
    document.querySelector(".checkPedido").querySelector(".bebida p:last-child").innerHTML = precoBebidastr;
    document.querySelector(".checkPedido").querySelector(".sobremesa p:last-child").innerHTML = precoSobremstr;
    document.querySelector(".checkPedido").querySelector(".preço").innerHTML = precoTotal;
}

     /* Função para o botão Cancelar retornar o usuário à etapa de seleção do pedido */
function voltar() {
    document.querySelector(".confirmacao").classList.remove("aparecer");
}


     /* Função para pedir nome e endereço do usuário e encaminhar as informações para o whatsapp do restaurante */
function fecharPedido(){
    const nomeCliente = prompt("Infome seu nome");
    const endereco = prompt("Infome o endereço para entrega");
    const nomePrato = document.querySelector(".PratoSelecionado h3").innerHTML;
    const nomeBebida = document.querySelector(".BebidaSelecionada h3").innerHTML;
    const nomeSobrem = document.querySelector(".SobremSelecionada h3").innerHTML;
    let precoPratostr = document.querySelector(".PratoSelecionado h4").innerHTML.replace(/R[^\d.]/g, '');
    let precoBebidastr = document.querySelector(".BebidaSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');
    let precoSobremstr = document.querySelector(".SobremSelecionada h4").innerHTML.replace(/R[^\d.]/g, '');

     /* Preços em número para calcular a soma final */
    precoPrato = Number(precoPratostr.replace(/,/g,'.'));
    precoBebida = Number(precoBebidastr.replace(/,/g,'.'));
    precoSobrem = Number(precoSobremstr.replace(/,/g,'.'));
    let precoTotal = precoPrato+precoBebida+precoSobrem;
    precoTotal = precoTotal.toFixed([2]);

     /* Texto padrão formatado para a mensagem pronta no whatsapp. A quebra de linha aparece no chat com o restaurante após clicar em "Conversar" */
    const textoMsg = "Olá, gostaria de fazer o pedido:\n- Prato: "+nomePrato+
    "\n- Bebida: "+nomeBebida+"\n- Sobremesa: "+nomeSobrem+"\nTotal: R$ "+precoTotal+
    "\n\nNome: "+nomeCliente+"\nEndereço: "+endereco;
    let msgPronta = encodeURIComponent(textoMsg);
    location.href = `https://wa.me/5511998568927?text=${msgPronta}`;
}