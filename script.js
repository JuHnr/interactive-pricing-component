const rangeResult = document.querySelector(".range-result");
const rangeInput = document.querySelector("#pageviews");
const price = document.querySelector(".price");
const discountCheckbox = document.querySelector("#discount-checkbox");

const valueFormats = { //création d'un objet pour stocker les valeurs de l'input range et le prix correspondant
    "1": { value: "10K", price: "8" },
    "2": { value: "50K", price: "12" },
    "3": { value: "100K", price: "16" },
    "4": { value: "500K", price: "24" },
    "5": { value: "1M", price: "36" }
};

function formatValue(rangeValue) {
    return valueFormats[rangeValue]; //formatValue(valeur actuelle) retourne la value et le price correspondant
}

function finalPrice() {
    const formattedValue = formatValue(rangeInput.value); //idem que ligne 26
    const priceMultiplier = discountCheckbox.checked ? 0.75 : 1; // vérifie si réduction 25% cochée, si oui prend la valeur 0.75 sinon 1
    const finalPrice = parseFloat(formattedValue.price) * priceMultiplier; //transforme price en nombre et le multiplie par le discount
    price.textContent = finalPrice.toFixed(2); //complète le contenu de price avec 2 chiffres significatifs
}

rangeInput.addEventListener("input", (event) => {
    const formattedValue = formatValue(event.target.value); //applique la fonction formatValue avec la valeur actuelle en tant que paramètre (=rangeValue) puis stocke le résultat de la fonction dans formattedValue.
    rangeResult.textContent = formattedValue.value; //extrait la valeur de value et complète le contenu de rangeResult;
    finalPrice(); //applique la fonction finalPrice
});

discountCheckbox.addEventListener("change", () => {
    finalPrice(); //lorsque la checkbox est modifiée, applique la fonction finalPrice
});




rangeResult.textContent = formatValue(rangeInput.value).value;
finalPrice();