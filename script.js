var total = 0;
var carrinho = document.getElementById("carrinho");
var totalDiv = document.createElement("div");
totalDiv.id = "total";
carrinho.appendChild(totalDiv);

function adicionarAoCarrinho(nomePizza, imagemPizza, valorPizza) {
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
    divValor.innerHTML = valorPizza;
  
    var botaoRemover = document.createElement("button");
    var iconeRemover = document.createElement("i");
    iconeRemover.classList.add("fas", "fa-trash-alt");
    botaoRemover.appendChild(iconeRemover);
    botaoRemover.onclick = function() {
      divPizza.remove();
      total -= valorPizza;
      totalDiv.innerHTML = "Total: R$ " + total;
    };
  
    divPizza.appendChild(divImagem);
    divPizza.appendChild(divNome);
    divPizza.appendChild(divValor);
    divPizza.appendChild(botaoRemover);
  
    carrinho.insertBefore(divPizza, totalDiv);
    total += valorPizza;
    totalDiv.innerHTML = "Total: R$ " + total;
}
