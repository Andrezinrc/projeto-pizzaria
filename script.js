function adicionarAoCarrinho(nomePizza, imagemPizza, valorPizza) {
    var valorPizza = 30;
    var carrinho = document.getElementById("carrinho");
    var divPizza = document.createElement("div");
    divPizza.classList.add("item-carrinho");
  
    var divImagem = document.createElement("div");
    var imagem = document.createElement("img");
    imagem.src = imagemPizza;
    imagem.style.width = "30px";
    divImagem.appendChild(imagem);
  
    var divNome = document.createElement("div");
    divNome.innerHTML = nomePizza;
  
    var divValor = document.createElement("div");
    divValor.innerHTML = "R$ " + valorPizza.toFixed(2);
    divValor.classList.add("valor-total");
  
    var botaoRemover = document.createElement("button");
    var iconeRemover = document.createElement("i");
    iconeRemover.classList.add("fas", "fa-trash-alt");
    botaoRemover.appendChild(iconeRemover);
    botaoRemover.onclick = function() {
      divPizza.remove();
      atualizarTotal();
    };
  
    divPizza.appendChild(divImagem);
    divPizza.appendChild(divNome);
    divPizza.appendChild(divValor);
    divPizza.appendChild(botaoRemover);
  
    carrinho.appendChild(divPizza);
  
    atualizarTotal();
  }

  function atualizarTotal() {
    var itensCarrinho = document.querySelectorAll(".item-carrinho");
    var total = 0;
    for (var i = 0; i < itensCarrinho.length; i++) {
      var valorItem = parseFloat(
        itensCarrinho[i].querySelector(".valor-total").innerHTML.replace("R$ ", "")
      );
      total += valorItem;
    }
    var divTotal = document.getElementById("total");
    if (divTotal) {
      divTotal.remove();
    }
    divTotal = document.createElement("div");
    divTotal.innerHTML = "Total: R$ <span class='valor-total'>" + total.toFixed(2) + "</span>";
    divTotal.id = "total";
    divTotal.style.fontSize = "20px";
    document.getElementById("carrinho").appendChild(divTotal);
  }
