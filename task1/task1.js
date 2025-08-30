let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(pizzaName, price) {
  cart.push({ name: pizzaName, price: price });
  cartCount++;
  cartTotal += price;

  // Update cart count
  document.getElementById("cart-count").textContent = cartCount;

  // Show items in cart
  let cartItems = document.getElementById("cart-items");
  let li = document.createElement("li");
  li.textContent = pizzaName + " - ₹" + price;
  cartItems.appendChild(li);

  // Update total
  document.getElementById("cart-total").textContent = cartTotal;

  alert(pizzaName + " added to cart! Price: ₹" + price);
}
