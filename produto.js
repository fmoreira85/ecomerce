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
            <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="M200-440v-80h560v80H200Z" />
            </svg>
          </p>

          <p>1</p>

          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path
                d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
              />
            </svg>
          </p>

          </div>
          

          <button type="button" class="btn btn-primary">Buy now</button>
          <button type="button" class="btn btn-primary">
            Add to cart
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path
                d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM223.5-103.5Q200-127 200-160t23.5-56.5Q247-240 280-240t56.5 23.5Q360-193 360-160t-23.5 56.5Q313-80 280-80t-56.5-23.5Zm400 0Q600-127 600-160t23.5-56.5Q647-240 680-240t56.5 23.5Q760-193 760-160t-23.5 56.5Q713-80 680-80t-56.5-23.5ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
              />
            </svg>
          </button>
        </div>

`
    

