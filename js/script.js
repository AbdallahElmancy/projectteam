var inputProudact = document.getElementById('purdactName');
var inputPrice = document.getElementById('purdactPrice');
var inputCategory = document.getElementById('purdactCategory');
var inputDisc = document.getElementById('purdactDesc');
var inputCategoryPrduct = [];
var updateIdGlobal = [];

if (localStorage.getItem("ourProdact") != null) {
    inputCategoryPrduct = JSON.parse(localStorage.getItem("ourProdact"));
    displayProduacte()
}

function addProduct() {
    if (document.getElementById("mainBtn").innerHTML == "Add prodact") {
        var product = {
            name: inputProudact.value,
            price: inputPrice.value,
            category: inputCategory.value,
            disc: inputDisc.value
        }
        inputCategoryPrduct.push(product)
        localStorage.setItem("ourProdact", JSON.stringify(inputCategoryPrduct))
        displayProduacte()
        clearPrudact()
    }
    else {
        var updateIdUpagrade = updateIdGlobal[updateIdGlobal.length - 1]
        inputCategoryPrduct[updateIdUpagrade].name = inputProudact.value
        inputCategoryPrduct[updateIdUpagrade].price = inputPrice.value
        inputCategoryPrduct[updateIdUpagrade].category = inputCategory.value
        inputCategoryPrduct[updateIdUpagrade].disc = inputDisc.value
        localStorage.setItem("ourProdact", JSON.stringify(inputCategoryPrduct))
        displayProduacte()
        clearPrudact()
        document.getElementById('mainBtn').innerHTML = "Add prodact"

    }


}
function clearPrudact() {
    inputProudact.value = ""
    inputPrice.value = ""
    inputCategory.value = ""
    inputDisc.value = ""

}
function displayProduacte() {
    var cartoon = ``
    for (var i = 0; i < inputCategoryPrduct.length; i++) {
        cartoon += ` <tr>
        <td>${i}</td>
        <td>${inputCategoryPrduct[i].name}</td> 
        <td>${inputCategoryPrduct[i].price}</td>
        <td>${inputCategoryPrduct[i].category}</td>
        <td>${inputCategoryPrduct[i].disc}</td>
        <td><button onclick="updatePrudact(${i});" class="btn btn-info">Update</button></td>
        <td><button onclick="deleteProduact(${i});" class="btn btn-danger">DeLete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoon

}
function deleteProduact(index) {
    inputCategoryPrduct.splice(index, 1)
    localStorage.setItem("ourProdact", JSON.stringify(inputCategoryPrduct))
    displayProduacte()
}
function updatePrudact(trem) {
    inputProudact.value = inputCategoryPrduct[trem].name
    inputPrice.value = inputCategoryPrduct[trem].price
    inputCategory.value = inputCategoryPrduct[trem].category
    inputDisc.value = inputCategoryPrduct[trem].disc
    document.getElementById('mainBtn').innerHTML = "update"
    var updateId = trem;
    updateIdGlobal.push(updateId)
}

function searchProduct(sproduct) {
    var cartoon = ``
    for (var i = 0; i < inputCategoryPrduct.length; i++) {


        if (inputCategoryPrduct[i].name.toLowerCase().includes(sproduct.toLowerCase()) == true) {
            cartoon += ` <tr>
            <td>${i}</td>
            <td>${inputCategoryPrduct[i].name}</td> 
            <td>${inputCategoryPrduct[i].price}</td>
            <td>${inputCategoryPrduct[i].category}</td>
            <td>${inputCategoryPrduct[i].disc}</td>
            <td><button onclick="updatePrudact(${i});" class="btn btn-info">Update</button></td>
            <td><button onclick="deleteProduact(${i});" class="btn btn-danger">DeLete</button></td>
        </tr>`

        }
    }
    document.getElementById('tableBody').innerHTML = cartoon

}
