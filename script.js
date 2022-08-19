function updateQuantity(quantityId, value, price, productsPriceId) {
    const quantity = document.getElementById(quantityId)
    if (value == true) {
        quantity.value++
    } else {
        quantity.value--
    }
    const productsPrice = document.getElementById(productsPriceId)
    productsPrice.innerText = price * Number(quantity.value)
}

function totalCount() {
    const mobileTotalPrice = Number(document.getElementById('mobile-price').innerText)
    const caseTotalPrice = Number(document.getElementById('case-price').innerText)

    const totalCount = document.getElementById('sub-total')
    totalCount.innerText = mobileTotalPrice + caseTotalPrice

    const taxTotal = document.getElementById('tax-total')
    taxTotal.innerText = ((mobileTotalPrice + caseTotalPrice) * 0.1).toFixed(2)
    document.getElementById('total').innerText = Number(totalCount.innerText) + Number(taxTotal.innerText)
}

document.getElementById('mobile-plus-btn').addEventListener('click', function () {
    updateQuantity('mobile-quantity', true, 1219, 'mobile-price')
    totalCount()
})
document.getElementById('mobile-minus-btn').addEventListener('click', function () {
    updateQuantity('mobile-quantity', false, 1219, 'mobile-price')
    totalCount()
})
document.getElementById('case-plus-btn').addEventListener('click', function () {
    updateQuantity('case-quantity', true, 59, 'case-price')
    totalCount()
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    updateQuantity('case-quantity', false, 59, 'case-price')
    totalCount()
})

/* Cros Button */
document.getElementById('mobile-remove-btn').addEventListener('click', function () {
    const mobileQuantity = document.getElementById('mobile-quantity')
    const mobilePrice = document.getElementById('mobile-price')
    mobileQuantity.value = 0
    mobilePrice.innerText = 0
    totalCount()
})
document.getElementById('case-remove-btn').addEventListener('click', function () {
    const caseQuantity = document.getElementById('case-quantity')
    const casePrice = document.getElementById('case-price')
    caseQuantity.value = 0
    casePrice.innerText = 0
    totalCount()
})