function hasClass(el, className) {
  return el.classList.contains(className);
}

function addClass(el, className) {
  el.classList.add(className);
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function currency(amount) {
  return "Rp. " + amount.toLocaleString("id-ID");
}

const products = [
  { id: 1, name: "Cappucino", price: 35000, active: false },
  { id: 2, name: "Green Tea Latte", price: 40000, active: false },
  { id: 3, name: "Fish and Chips", price: 50000, active: false },
  { id: 4, name: "Tuna Sandwich", price: 45000, active: false },
  { id: 5, name: "Mineral Water", price: 8000, active: false },
  { id: 6, name: "French Fries", price: 18000, active: false },
];

let total = 0;

function updateTotal() {
  const totalElement = document.getElementById("totalPrice");
  totalElement.textContent = currency(total);
}

function handleItemClick(event) {
  const item = event.currentTarget;
  const itemId = parseInt(item.dataset.id, 10);
  const product = products.find((p) => p.id === itemId);

  if (hasClass(item, "active")) {
    removeClass(item, "active");
    product.active = false;
    total -= product.price;
  } else {
    addClass(item, "active");
    product.active = true;
    total += product.price;
  }

  updateTotal();
}

document.querySelectorAll("ul li[data-id]").forEach((item) => {
  item.addEventListener("click", handleItemClick);
});

updateTotal();
