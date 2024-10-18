// let tabela = document.querySelector("table")
// let input = document.querySelector("produto")
// let inputtwo = document.querySelector("quantidade")
// let btn = document.querySelector(".btn")
// let ed = document.querySelector("ed")
// let ex = document.querySelector("ex")

// document.querySelector("produto").addEventListener("click", () => )

    let products = [];

    function addProduct() {
        const name = document.getElementById('productName').value;
        const quantity = document.getElementById('productQuantity').value;
    
        if (name && quantity) {
            products.push({ name, quantity });
            renderProducts();
            clearForm();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    }
    
    function renderProducts() {
        const productTable = document.getElementById('productTable');
        productTable.innerHTML = '';
    
        products.forEach((product, index) => {
            const row = document.createElement('tr');
    
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>
                    <button onclick="editProduct(${index})">Editar</button>
                    <button class="delete" onclick="deleteProduct(${index})">Excluir</button>
                </td>
            `;
    
            productTable.appendChild(row);
        });
    }
    
    function deleteProduct(index) {
        products.splice(index, 1);
        renderProducts();
    }
    
    function editProduct(index) {
        const product = products[index];
        document.getElementById('productName').value = product.name;
        document.getElementById('productQuantity').value = product.quantity;
    
        products.splice(index, 1);
        renderProducts();
    }
    
    function clearForm() {
        document.getElementById('productName').value = '';
        document.getElementById('productQuantity').value = '';
    }