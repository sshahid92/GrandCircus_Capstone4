// function createProduct(productName, productDescription, price) {
//     var product = new {
//         ProductName: productName,
//         ProductDescription: productDescription,
//         Price: price
//     }
//     return product;
// };


// function removeFromCart(product) {    
//     cartArray.(product);
// }

$(document).ready(function(){

    createMenu(); 

    
    
    
 });

var cartArray = [];

//oh god i went too far with the javascrit and cant go back
function createMenu(){
    var total = 0;
    var subtotal = 0;
    var tax = 0;

    var shopList =  
        [
            {
                "id": 01,
                "name": "Dewalt Driver Drill",
                "description": "Variable speed enables performance for various applications",
                "price": 129.00
            },
            {
                "id": 02,
                "name": "Makita Driver Drill",
                "description": "Part of the expanding 18V LXT line of over 150 cordless tools",
                "price": 99.00
            },
            {
                "id": 03,
                "name": "Milwaukee Driver Drill",
                "description": "Delivers 500 in.-lbs. of torque and up to 1800 RPM",
                "price": 179.00
            },
            {
                "id": 04,
                "name": "Ryobi Driver Drill",
                "description": "Cordless compact drill/driver offers 350 in./lbs. of torque",
                "price": 79.00
            },
            {
                "id": 05,
                "name": "Rigid Driver Drill",
                "description": "Powerful 2-speed settings for matching power to task",
                "price": 119.00
            },

            {
                "id": 06,
                "name": "Dewalt Impact Driver",
                "description": "One-handed loading 1/4 in. hex chuck accepts 1 in. bit tips",
                "price": 99.00
            },
            {
                "id": 07,
                "name": "Makita Impact Driver",
                "description": "Compact and ergonomic design at only 5-5/16 in.",
                "price": 199.00
            },
            {
                "id": 08,
                "name": "Milwaukee Impact Driver",
                "description": "Provides 1,500 in. lbs. of peak torque and up to 2,900 RPM",
                "price": 109.00
            },
            {
                "id": 09,
                "name": "Ryobi Impact Driver",
                "description": "3 speed settings to fit any fastening need",
                "price": 84.00
            },
            {
                "id": 10,
                "name": "Rigid Impact Driver",
                "description": "Powerful 2,250 in. lbs. of torque, ideal for most appliacations",
                "price": 119.00
            },

            {
                "id": 11,
                "name": "Dewalt Impact Wrench",
                "description": "700 foot-lb.s torque and 1200 foot-lb.s breakaway torque",
                "price": 249.00
            },
            {
                "id": 12,
                "name": "Makita Impact Wrench",
                "description": "BL Motor delivers 740 ft-lbs. of fastening torque and 1,180 ft.lbs of breakaway torque",
                "price": 299.00
            },
            {
                "id": 13,
                "name": "Milwaukee Impact Wrench",
                "description": "Up to 750 ft. lbs. Fastening Torque",
                "price": 249.00
            },
            {
                "id": 14,
                "name": "Ryobi Impact Wrench",
                "description": "Produces up to 3,200 impacts per minute",
                "price": 129.00
            },
            {
                "id": 15,
                "name": "Rigid Impact Wrench",
                "description": "Powerful 450 ft./lbs. of torque with 4-speed settings",
                "price": 159.00
            }
        ]
    
    function removeFromCart(id) {
        var element = document.getElementById(id);
        
        var subtotalpriceelem = document.getElementById('subtotal');
        var taxpriceelem = document.getElementById('tax');
        var grandtotalpriceelem = document.getElementById('grand-total');

        subtotalpriceelem.innerText ='Subtotal $' + subtotal.toFixed(2);
        taxpriceelem.innerText ='Total Tax $' + tax.toFixed(2);
        grandtotalpriceelem.innerText ='Grand Total $' + total.toFixed(2);

        element.parentNode.removeChild(element);
    }

    function addToCart(id) {
        for (var item in shopList) {
            var product = shopList[item];

            if(id == product.id) {
                subtotal += product.price;
                tax = subtotal * .06;
                total = subtotal + tax;
                var subtotalpriceelem = document.getElementById('subtotal');
                var taxpriceelem = document.getElementById('tax');
                var grandtotalpriceelem = document.getElementById('grand-total');

                subtotalpriceelem.innerText ='Subtotal $' + subtotal.toFixed(2);
                taxpriceelem.innerText ='Total Tax $' + tax.toFixed(2);
                grandtotalpriceelem.innerText ='Grand Total $' + total.toFixed(2);

                var cartItem = document.createElement("li");
                var crtItmAtr = document.createAttribute("class");
                var crtIdAtr = document.createAttribute("id");
                crtItmAtr.value = "cart-product";
                crtIdAtr.value = `crt-${product.id}`;
                cartItem.setAttributeNode(crtItmAtr);
                cartItem.setAttributeNode(crtIdAtr);

                var crtitemPara = document.createElement("p");
                var crtitemPrice = document.createElement("p");
                var remvCartBtn = document.createElement("button");
                remvCartBtn.innerHTML = 'Remove From Cart';
                var crtbtnAtr = document.createAttribute("type");
                crtbtnAtr.value = "button";
                remvCartBtn.setAttributeNode(crtbtnAtr);

                var node = document.createTextNode(product.name);
                var paraNode = document.createTextNode('Description: ' + product.description);
                var priceNode = document.createTextNode('$' + product.price.toFixed(2));
                crtitemPrice.value = product.price

                cartItem.appendChild(node);
                crtitemPara.appendChild(paraNode);
                crtitemPrice.appendChild(priceNode);

                var elem = document.getElementById('cart-list');
                elem.appendChild(cartItem).appendChild(crtitemPara).append(crtitemPrice);
                cartItem.appendChild(remvCartBtn);

                remvCartBtn.value = `crt-${product.id}`;
            
                remvCartBtn.addEventListener("click", function() {
                
                    subtotal = subtotal - crtitemPrice.value;
                    tax = tax - (crtitemPrice.value * .06);
                    total = subtotal + tax;
                    removeFromCart(this.value);

                
                });

            }
        }
    }

    function createMenuLoop() {
        for (var item in shopList) {
            var product = shopList[item];
            /*create list with description and price in it. and add to cart button*/
            var listItem = document.createElement("li");
            var lstItmAtr = document.createAttribute("class");
            var lstIdAtr = document.createAttribute("id");
            lstItmAtr.value = "product";
            lstIdAtr.value = product.id;
            listItem.setAttributeNode(lstItmAtr);
            listItem.setAttributeNode(lstIdAtr);

            var itemPara = document.createElement("p");
            var itemPrice = document.createElement("p");
            var addToCartBtn = document.createElement("button");
            addToCartBtn.innerHTML ="Add To Cart";
            var btnAtr = document.createAttribute("type");
            btnAtr.value = "button";
            addToCartBtn.setAttributeNode(btnAtr);

            var node = document.createTextNode(product.name);
            var paraNode = document.createTextNode('Description: ' + product.description)
            var priceNode = document.createTextNode('$' + product.price.toFixed(2))
            
            listItem.appendChild(node);
            itemPara.appendChild(paraNode);
            itemPrice.appendChild(priceNode);

            var elem = document.getElementById('menu-list');
            elem.appendChild(listItem).appendChild(itemPara).append(itemPrice);
            listItem.appendChild(addToCartBtn);

            addToCartBtn.value = product.id;
            
            addToCartBtn.addEventListener("click", function() {
                addToCart(this.value);
            });
            
        }
    }
    createMenuLoop();

    
};




