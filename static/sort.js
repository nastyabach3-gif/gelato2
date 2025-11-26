let currentProducts = [];
let allProducts = [...products]; 

async function funkzia(sortType = 'default', searchTerm = '') {
    
    let content = [...allProducts]; 

    if (searchTerm) {
        content = content.filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.descr.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    currentProducts = [...content];
    
    if (sortType === 'price') {
        content.sort((a, b) => a.price - b.price);
    } else if (sortType === 'title') {
        content.sort((a, b) => a.title.localeCompare(b.title));
    }
    
    let productbox = document.getElementById("productbox");
    
    productbox.innerHTML = ''; // почистили хтмл для нового порядка
    
    for (let key in content) {
        productbox.innerHTML += `
        <li style="width: 250px" class="d-flex flex-column m-2 p-3 kartochka">
            <img style="width: 180px" class="align-self-center" src="${content[key].img}">
            <h5 class="card-subtitle m-2" style="text-align: center" >${content[key].title}</h5>
            <p class="card-text" style="text-align: center">${content[key].descr} </br></br> Цена ${content[key].price} р.</p>
            <input type="hidden" name="code" value="${content[key].code}">
            <p class="card-text" style="text-align: center">Заказать <input class="w-25" type="number" name="amount" value="0" ></p>
        </li>
        `;
    }
}


function sortProducts(type) { // сортировочка
 funkzia(type);
}

function searchProducts() {  // поисковик
    const poisk = document.getElementById('poisk');
    const searchTerm = poisk.value.trim();
 funkzia('default', searchTerm);
}

function resetSearch() {
    document.getElementById('poisk').value = ''; // сброс поисковика
 funkzia('default', '');
}



funkzia();