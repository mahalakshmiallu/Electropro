// Products Data with real images

   // Products Data with categories and images
const products = [
  {
    id:1,
    name:"iPhone 14",
    category:"mobiles",
    price:89999,
    old:99999,
    rating:"⭐⭐⭐⭐⭐ (1.5k)",
    img:"https://www.apple.com/v/iphone/home/ce/images/meta/iphone__cud4q04omsuq_og.png",
    desc:"iPhone 14 with A15 Bionic chip, 128GB storage, Super Retina XDR display."
  },
  {
    id:2,
    name:"MacBook Pro 16\"",
    category:"laptops",
    price:239999,
    old:249999,
    rating:"⭐⭐⭐⭐⭐ (1.2k)",
    img:"https://static.toiimg.com/thumb/msid-87385139,width-400,resizemode-4/87385139.jpg",
    desc:"MacBook Pro 16-inch with M1 Pro chip, 16GB RAM, 512GB SSD."
  },
  
  {
    id:3,
    name:"Samsung Galaxy Tab S8",
    category:"accessories",
    price:61999,
    old:67999,
    rating:"⭐⭐⭐⭐ (540)",
    img:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1Ig9f4.img?w=768&h=432&m=6",
    desc:"Samsung Galaxy Tab S8, 11-inch display, 128GB storage, fast performance."
  },
  {
    id:4,
    name:"Sony WH-1000XM5",
    category:"accessories",
    price:24990,
    old:27990,
    rating:"⭐⭐⭐⭐⭐ (850)",
    img:"https://m.media-amazon.com/images/I/41ChR4wgJAL.jpg",
    desc:"Wireless noise-canceling headphones with superior sound quality."
  },
  {
    id:5,
    name:"Canon EOS 4000D",
    category:"accessories",
    price:249999,
    old:269999,
    rating:"⭐⭐⭐⭐⭐ (3.2k)",
    img:"https://images-cdn.ubuy.co.in/66ec14a372437f6c6c144eee-canon-eos-4000d-dslr-camera-ef-s-18-55.jpg",
    desc:"Canon EOS 4000D DSLR camera with 18-55mm lens, perfect for photography."
  },
  {
    id:6,
    name:"Apple Watch Series 9",
    category:"accessories",
    price:44999,
    old:49999,
    rating:"⭐⭐⭐⭐ (1.5k)",
    img:"https://play-lh.googleusercontent.com/WuL1L1ZwDcYOdRwtib2D95uZyP0Z4HojhjDyXUoWauXoq6Ec-qtlpcEyTkZIcj_Nbw8",
    desc:"Apple Watch Series 9 with heart rate monitor, fitness tracking, and waterproof."
  },
{
    id:7,
    name:"Samsumg galaxy A26",
    category:"mobiles",
    price:24999,
    old:30000,
    rating:"⭐⭐⭐⭐⭐ (1.5k)",
    img:"https://cdn.mos.cms.futurecdn.net/eX6Rte42SVcQ6hYNiRAXx5.jpg",
    desc:"Samsung galaxt with A26 Bionic chip, 128GB storage, Super Retina XDR display."
  },
  {
    id:8,
    name:"MacBook\"",
    category:"laptops",
    price:339999,
    old:449999,
    rating:"⭐⭐⭐⭐⭐ (1.2k)",
    img:"https://www.livemint.com/lm-img/img/2025/01/20/1600x900/macbook_air_m3_1737377569529_1737377577164.png",
    desc:"MacBook Pro 16-inch with M1 Pro chip, 16GB RAM, 512GB SSD."
  },
  {
    id:9,
    name:"Sony Alpha Ilce-1 Mirrorless Full-Frame Camera",
    category:"accessories",
    price:54990,
    old:67990,
    rating:"⭐⭐⭐⭐⭐ (850)",
    img:"https://shopatsc.com/cdn/shop/products/CX88500_SEL2470GM_right.jpg?v=1697633535",
    desc:"Wireless noise-canceling headphones with superior sound quality."
  },
  {
    id:10,
    name:"Samsung Galaxy Tab A9",
    category:"accessories",
    price:71999,
    old:87999,
    rating:"⭐⭐⭐⭐ (540)",
    img:"https://i.ytimg.com/vi/U9jXUHln9sE/maxresdefault.jpg",
    desc:"Samsung Galaxy Tab S8, 11-inch display, 128GB storage, fast performance."
  },
  {
    id:11,
    name:"Canon EOS 4000D",
    category:"accessories",
    price:249999,
    old:269999,
    rating:"⭐⭐⭐⭐⭐ (3.2k)",
    img:"https://images-cdn.ubuy.co.in/66ec14a372437f6c6c144eee-canon-eos-4000d-dslr-camera-ef-s-18-55.jpg",
    desc:"Canon EOS 4000D DSLR camera with 18-55mm lens, perfect for photography."
  },
  {
    id:12,
    name:"Apple Watch Series 11",
    category:"accessories",
    price:54999,
    old:69999,
    rating:"⭐⭐⭐⭐ (1.5k)",
    img:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s11-case-unselect-gallery-1-202509_GEO_EMEA_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=WldDSmZlQ1ladGVha0lMWUJJK2M4ZHlVRllKam5abHNZRGludXlMbytKNFo2cm95TEtVUGNBN3pWWWMxUmxKSFh2WnVKTjEySjVmY2ZteE1GdEFoNWM2c3NSYUM4YjA0RTQxLytvRzE4M0QrWGp4amFCSTJ1K1hKMXRsMkNUYlhaOWRBWGt2OWI4clNTdjYwdnkxK0RR",
    desc:"Apple Watch Series 11 with heart rate monitor, fitness tracking, and waterproof."
  }  
];

// Cart
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
function updateCartDisplay(){
  const cartCount = document.getElementById("cartCount");
  if(cartCount) cartCount.textContent = cartItems.length;
}
updateCartDisplay();

// Render products
function renderProducts(list){
  const container = document.getElementById("productList");
  if(!container) return;
  container.innerHTML = list.map(p=>{
    return `
      <div class="product" data-id="${p.id}">
        <span class="offer">${Math.floor(Math.random()*25+10)}% OFF</span>
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price} <span class="old">₹${p.old}</span></p>
        <p class="rating">${p.rating}</p>
        <button class="btn addCartBtn">Add to Cart</button>
      </div>
    `;
  }).join("");
}

// Show initial 3 products
renderProducts(products.slice(0,3));

// View More
const viewBtn = document.getElementById("viewMoreBtn");
if(viewBtn){
  viewBtn.addEventListener("click",()=>{
    renderProducts(products);
    viewBtn.style.display="none";
  });
}

// Click product to go to product.html
document.addEventListener("click",function(e){
  const productEl = e.target.closest(".product");
  if(productEl && !e.target.classList.contains("addCartBtn")){
    const id = productEl.dataset.id;
    window.location.href = `product.html?id=${id}`;
  }
});

// Add to cart
document.addEventListener("click",function(e){
  if(e.target.classList.contains("addCartBtn")){
    const productEl = e.target.closest(".product") || document.querySelector(".product-detail");
    let id = productEl.dataset.id || new URLSearchParams(window.location.search).get("id");
    const prod = products.find(p=>p.id==id);
    if(prod){
      cartItems.push(prod);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      updateCartDisplay();
      alert("Product added to cart!");
    }
  }
});

// Search functionality
const searchInput = document.getElementById("searchInput");
if(searchInput){
  searchInput.addEventListener("input",function(){
    const val = this.value.toLowerCase();
    const filtered = products.filter(p=>p.name.toLowerCase().includes(val));
    renderProducts(filtered);
  });
}

// Product Page
if(window.location.pathname.includes("product.html")){
  const id = new URLSearchParams(window.location.search).get("id");
  const prod = products.find(p=>p.id==id);
  if(prod){
    const imgEl = document.querySelector(".product-detail img");
    imgEl.src = prod.img;
    imgEl.alt = prod.name;
    document.querySelector(".product-detail h2").textContent = prod.name;
    document.querySelector(".product-detail .price").innerHTML = `₹${prod.price} <span class="old">₹${prod.old}</span>`;
    document.querySelector(".product-detail .rating").textContent = prod.rating;
    document.querySelector(".product-detail .desc").textContent = prod.desc;
    document.querySelector(".product-detail").dataset.id = prod.id;
  }
}

// Cart Page
if(window.location.pathname.includes("cart.html")){
  const cartContainer = document.getElementById("cartItemsContainer");
  const totalPriceEl = document.getElementById("totalPrice");
  if(cartItems.length===0){
    cartContainer.innerHTML = "<p>Your cart is empty!</p>";
    totalPriceEl.textContent = "";
  } else {
    let total = 0;
    cartContainer.innerHTML = cartItems.map((item,index)=>{
      total += item.price;
      return `<div class="cart-item"><span>${index+1}. ${item.name}</span><span>₹${item.price}</span></div>`;
    }).join("");
    totalPriceEl.innerHTML = `<strong>Total: ₹${total}</strong>`;
  }
}
