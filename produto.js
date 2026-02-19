import { loja } from './loja.js';

// Função para obter o parâmetro da URL

const urlParams = new URLSearchParams(window.location.search);
const produtoIndex = urlParams.get('produto');
console.log(urlParams)
console.log(produtoIndex)
console.log(loja[produtoIndex])

const divProduto = document.getElementById('div-produto');
divProduto.innerHTML = `
<div class="col text-center">
          <img
            src="${loja[produtoIndex].image}"
            alt=""
          />
          <h5>${loja[produtoIndex].title}</h5>
          <p>${loja[produtoIndex].price}</p>
            <p>Avarage: ${loja[produtoIndex].rating.rate}</p>
          <p>Number of Reviews: ${loja[produtoIndex].rating.count}</p>
        </div>

        <div class="col text-center">
          <h2>About</h2>

          <p>
            ${loja[produtoIndex].description}
          </p>

          <div class="d-flex">
              <i class="bi bi-dash fs-3"></i>
              <p class="fs-3">1</p>
              <i class="bi bi-plus fs-3"></i>
          </div>
          

          <button type="button" class="btn btn-primary">Buy now</button>
          <button type="button" class="btn btn-primary">
            Add to cart
            <i class="bi bi-cart"></i>
          </button>
        </div>

`
    

