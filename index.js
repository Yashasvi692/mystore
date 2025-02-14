const products = [
    { id: 1, name: "P1", price: 34 },
    { id: 2, name: "P2", price: 50 },
    { id: 3, name: "P3", price: 40 },
  ];
  const cart = {};
  const addToCart = (id) => {
    if (!cart[id]){
    cart[id] = 1;
    items.innerHTML = 0;
    }
    showCart();
  };
  const increment = (id) => {
    items.innerHTML = 100;
    cart[id]+=1;
    showCart();
  }
  const decrement = (id) => {
    if(cart[id] > 1){
        items.innerHTML = 50;
      cart[id]-=1; 
    }else{
      delete cart[id];
    }
    showCart();
  }
    const removeFromCart = (id) => {
        delete cart[id];
        showCart();
    };
  const showCart = () => {
    let str = "";
    products.map((value) => {
      if (cart[value.id]) {
        str += `<div>
        <p>
        ${value.id}-${value.name}-${value.price}
        -<button onclick='decrement(${value.id})'>-</button>${cart[value.id]}
        <button onclick='increment(${value.id})'>+</button>-${value.price*cart[value.id]}
        <button onclick='removeFromCart(${value.id})'>X</button>
        </p>
        </div>`;
      }
    });
    divCart.innerHTML = str;
  };
  const showProducts = () => {
    let str = "";
    products.map((value) => {
      str += `
      <div>
      <p>
        Product ID:${value.id}, 
        Product Name:${value.name}, 
        Product Price:${value.price} 
        <button onclick='addToCart(${value.id})'>Add</button>
      </p>
      </div>`;
    });
    divProducts.innerHTML = str;
    showCart();
  };