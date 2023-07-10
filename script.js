/*PRICE*/
const AMERICANO = 130;
const WHITE_MOCHA = 130;
const LATTE = 145;
const DARK_MOCHA = 140;
const CARAMEL = 160;
const KAPE_KASTILLA = 175;
const KAPE_MESTIZO = 170;
const DIRTY_CHAI = 130;
const CAPPUCCINO = 155;
const FLAT_WHITE = 140;
const MATCHA_LATTE = 155;
const CHOCOLATE = 145;

/*ORDER QUANTITY*/
let americano = 0;
let whiteMocha = 0;
let latte = 0;
let darkMocha = 0;
let caramel = 0;
let kapeKastilla = 0;
let kapeMestizo = 0;
let dirtyChai = 0;
let cappuccino = 0;
let flatWhite = 0;
let matchaLatte = 0;
let chocolate = 0;

let cartTotal = 0;
let c = 0;
let proCont = document.querySelectorAll('.productContainer');


function refresh() {
    document.getElementById('americanoQ').innerHTML = americano;
    document.getElementById('whiteMochaQ').innerHTML = whiteMocha;
    document.getElementById('latteQ').innerHTML = latte;
    document.getElementById('darkMochaQ').innerHTML = darkMocha;
    document.getElementById('caramelQ').innerHTML = caramel;
    document.getElementById('kapeKastillaQ').innerHTML = kapeKastilla;
    document.getElementById('kapeMestizoQ').innerHTML = kapeMestizo;
    document.getElementById('dirtyChaiQ').innerHTML = dirtyChai;
    document.getElementById('cappuccinoQ').innerHTML = cappuccino;
    document.getElementById('flatWhiteQ').innerHTML = flatWhite;
    document.getElementById('matchaLatteQ').innerHTML = matchaLatte;
    document.getElementById('chocolateQ').innerHTML = chocolate;
    document.querySelector('.cartTotal').innerHTML = cartTotal;
}

/*EVENT LISTENERS*/
document.querySelector('#orderAgainBtn').addEventListener('click', orderAgain)
document.querySelector('#home').addEventListener('click', backToHome);
document.querySelector('#orderBtn').addEventListener('click', openFrontPage);
document.querySelector('#menuBar').addEventListener('click', openMenu);
document.querySelector('#cart').addEventListener('click', cartOpen);

document.getElementById('americanoP').addEventListener('click', function(){ addCart("americano+")});
document.getElementById('whiteMochaP').addEventListener('click', function(){ addCart("whiteMocha+")});
document.getElementById('latteP').addEventListener('click', function(){ addCart("latte+")});
document.getElementById('darkMochaP').addEventListener('click', function(){ addCart("darkMocha+")});
document.getElementById('caramelP').addEventListener('click', function(){ addCart("caramel+")});
document.getElementById('kapeKastillaP').addEventListener('click', function(){ addCart("kapeKastilla+")});
document.getElementById('kapeMestizoP').addEventListener('click', function(){ addCart("kapeMestizo+")});
document.getElementById('dirtyChaiP').addEventListener('click', function(){ addCart("dirtyChai+")});
document.getElementById('cappuccinoP').addEventListener('click', function(){ addCart("cappuccino+")});
document.getElementById('flatWhiteP').addEventListener('click', function(){ addCart("flatWhite+")});
document.getElementById('matchaLatteP').addEventListener('click', function(){ addCart("matchaLatte+")});
document.getElementById('chocolateP').addEventListener('click', function(){ addCart("chocolate+")});

document.getElementById('americanoM').addEventListener('click', function(){ minusCart("americano-", americano)});
document.getElementById('whiteMochaM').addEventListener('click', function(){ minusCart("whiteMocha-", whiteMocha)});
document.getElementById('latteM').addEventListener('click', function(){ minusCart("latte-", latte)});
document.getElementById('darkMochaM').addEventListener('click', function(){ minusCart("darkMocha-", darkMocha)});
document.getElementById('caramelM').addEventListener('click', function(){ minusCart("caramel-", caramel)});
document.getElementById('kapeKastillaM').addEventListener('click', function(){ minusCart("kapeKastilla-", kapeKastilla)});
document.getElementById('kapeMestizoM').addEventListener('click', function(){ minusCart("kapeMestizo-", kapeMestizo)});
document.getElementById('dirtyChaiM').addEventListener('click', function(){ minusCart("dirtyChai-", dirtyChai)});
document.getElementById('cappuccinoM').addEventListener('click', function(){ minusCart("cappuccino-", cappuccino)});
document.getElementById('flatWhiteM').addEventListener('click', function(){ minusCart("flatWhite-", flatWhite)});
document.getElementById('matchaLatteM').addEventListener('click', function(){ minusCart("matchaLatte-", matchaLatte)});
document.getElementById('chocolateM').addEventListener('click', function(){ minusCart("chocolate-", chocolate)});

function openMenu() {
    /*OPEN*/
    if (document.querySelector('.menu').style.transform == "translateX(-140px)") {
        document.querySelector('.menu').style.transform = "translateX(0px)";
        document.querySelector('#menuBar').style.border = "3px solid #ffffff";
        document.querySelector('#menuBar').style.borderRadius = "2px";
        document.querySelector('#menuBar').style.backgroundColor = "#000000";
        
        document.querySelector('.cart').style.display = "none";
        document.querySelector('#cart').style.border = "3px solid #1A120B";
        document.querySelector('#cart').style.backgroundColor = "#1A120B";
        for (let i = 0; i < proCont.length; i++) {
            proCont[i].style.display = "flex";
        }
        for (var i = 0; i < c; i++) {
            document.querySelector('.cartCont').remove();
        }
        c = 0;
        document.querySelector('.totalCont').remove();
    /*CLOSE*/
    }else {
        document.querySelector('.menu').style.transform = "translateX(-140px)";
        document.querySelector('#menuBar').style.border = "3px solid #1A120B";
        document.querySelector('#menuBar').style.backgroundColor = "#1A120B";
    }
}
function cartOpen() {
    /*OPEN*/
    if (document.querySelector('.cart').style.display == "none") {
        document.querySelector('.cart').style.display = "flex";
        document.querySelector('#cart').style.border = "3px solid #ffffff";
        document.querySelector('#cart').style.backgroundColor = "#000000";
        
        document.querySelector('.menu').style.transform = "translateX(-140px)";
        document.querySelector('#menuBar').style.border = "3px solid #1A120B";
        document.querySelector('#menuBar').style.backgroundColor = "#1A120B";
        
        for (let i = 0; i < proCont.length; i++) {
            proCont[i].style.display = "none";
        }
        if (americano > 0) {
            item("Americano", americano, ("₱" + americano * AMERICANO));
            c ++;
        }
        if (whiteMocha > 0) {
            item("White Mocha", whiteMocha, ("₱" + whiteMocha * WHITE_MOCHA));
            c ++;
        }
        if (latte > 0) {
            item("Latte", latte, ("₱" + latte * LATTE));
            c ++;
        }if (darkMocha > 0) {
            item("Dark Mocha", darkMocha, ("₱" + darkMocha * DARK_MOCHA));
            c ++;
        }if (caramel > 0) {
            item("Caramel", caramel, ("₱" + caramel * CARAMEL));
            c ++;
        }if (kapeKastilla > 0) {
            item("Kape Kastilla", kapeKastilla, ("₱" + kapeKastilla * KAPE_KASTILLA));
            c ++;
        }if (kapeMestizo > 0) {
            item("Kape Mestizo", kapeMestizo, ("₱" + kapeMestizo * KAPE_MESTIZO));
            c ++;
        }if (dirtyChai > 0) {
            item("Dirty Chai", dirtyChai, ("₱" + dirtyChai * DIRTY_CHAI));
            c ++;
        }if (cappuccino > 0) {
            item("Cappuccino", cappuccino, ("₱" + cappuccino * CAPPUCCINO));
            c ++;
        }if (flatWhite > 0) {
            item("Flat White", flatWhite, ("₱" + flatWhite * FLAT_WHITE));
            c ++;
        }if (matchaLatte > 0) {
            item("Matcha Latte", matchaLatte, ("₱" + matchaLatte * MATCHA_LATTE));
            c ++;
        }if (chocolate > 0) {
            item("Chocolate", chocolate, ("₱" + chocolate * CHOCOLATE));
            c ++;
        }
        
        if (cartTotal == 0) {
            document.querySelector('.empty').style.display = "block";
            document.querySelector('.tableHeader').style.display = "none";
        }else {
            document.querySelector('.empty').style.display = "none";
            document.querySelector('.tableHeader').style.display = "flex";
            let totalCont = document.createElement('div');
            let total = document.createElement('div');
            let totalQ = document.createElement('div');
            let totalP = document.createElement('div');
            let purchase = document.createElement('button');
            
            totalCont.classList.add("totalCont");
            total.id = "tot";
            totalQ.classList.add("numQ");
            totalP.classList.add("numQ");
            purchase.classList.add("purchaseBtn")
            
            total.innerHTML = "Total: ";
            totalQ.innerHTML = cartTotal;
            totalP.innerHTML = "₱" + ((americano * AMERICANO)+(whiteMocha * WHITE_MOCHA)+(latte * LATTE)+(darkMocha * DARK_MOCHA)+(caramel * CARAMEL)+(kapeKastilla * KAPE_KASTILLA)+(kapeMestizo * KAPE_MESTIZO)+(dirtyChai * DIRTY_CHAI)+(cappuccino * CAPPUCCINO)+(flatWhite * FLAT_WHITE)+(matchaLatte * MATCHA_LATTE)+(chocolate * CHOCOLATE));
            purchase.innerHTML = "Purchase"
            
            totalCont.appendChild(total);
            totalCont.appendChild(totalQ);
            totalCont.appendChild(totalP)
            document.querySelector('.cart').appendChild(totalCont);
            document.querySelector('.cart').appendChild(purchase);
            
            document.querySelector('.purchaseBtn').addEventListener('click', purchaseItem);
        }
    /*CLOSE*/
    }else {
        document.querySelector('.cart').style.display = "none";
        
        document.querySelector('#cart').style.border = "3px solid #1A120B";
        document.querySelector('#cart').style.backgroundColor = "#1A120B";
        for (var i = 0; i < proCont.length; i++) {
            proCont[i].style.display = "flex";
        }
        for (var i = 0; i < c; i++) {
            document.querySelector('.cartCont').remove();
        }
        c = 0;
        document.querySelector('.tableHeader').style.display = "flex";
        document.querySelector('.totalCont').remove();
        document.querySelector('.purchaseBtn').remove();
    }
}
function minusCart(coffeeName, itemQty){
    if (itemQty > 0) {
        switch (coffeeName) {
            case 'americano-':
                americano --;
                break;
            case 'whiteMocha-':
                whiteMocha --;
                break;
            case 'latte-':
                latte --;
                break;
            case 'darkMocha-':
                darkMocha --;
                break;
            case 'caramel-':
                caramel --;
                break;
            case 'kapeKastilla-':
                kapeKastilla --;
                break;
            case 'kapeMestizo-':
                kapeMestizo --;
                break;
            case 'cappuccino-':
                cappuccino --;
                break;
            case 'dirtyChai-':
                dirtyChai --;
                break;
            case 'flatWhite-':
                flatWhite --;
                break;
            case 'matchaLatte-':
                matchaLatte --;
                break;
            case 'chocolate-':
                chocolate --;
                break;
        }
        cartTotal --;
        refresh();
        cart();
    }
}
function addCart(coffeeName){
    switch (coffeeName) {
        case 'americano+':
            americano ++;
            break;
        case 'whiteMocha+':
            whiteMocha ++;
            break;
        case 'latte+':
            latte ++;
            break;
        case 'darkMocha+':
            darkMocha ++;
            break;
        case 'caramel+':
            caramel ++;
            break;
        case 'kapeKastilla+':
            kapeKastilla ++;
            break;
        case 'kapeMestizo+':
            kapeMestizo ++;
            break;
        case 'cappuccino+':
            cappuccino ++;
            break;
        case 'dirtyChai+':
            dirtyChai ++;
            break;
        case 'flatWhite+':
            flatWhite ++;
            break;
        case 'matchaLatte+':
            matchaLatte ++;
            break;
        case 'chocolate+':
            chocolate ++;
            break;
    }
    cartTotal ++;
    refresh();
    cart();
}
function cart(){
    if (cartTotal == 0) {
        document.querySelector('.cartTotal').style.display = "none";
    }else{
        document.querySelector('.cartTotal').style.display = "block";
    }
}
function item(itemName, itemQuantity, itemTotal){
    let cartT = document.createElement("div");
    let elements = [
        document.createElement("div"),
        document.createElement("div"),
        document.createElement("div")
        ]
    elements[1].classList.add("cartI");
    elements[2].classList.add("cartI");
    elements[0].id = "name";
    cartT.classList.add("cartCont");
    
    elements[0].innerHTML = itemName;
    elements[1].innerHTML = itemQuantity;
    elements[2].innerHTML = itemTotal;
    
    document.querySelector('.cart').appendChild(cartT);
    cartT.appendChild(elements[0]);
    cartT.appendChild(elements[1]);
    cartT.appendChild(elements[2]);
}

function openFrontPage(){
    document.querySelector('.frontPage').style.display = "block";
    document.querySelector('.homePage').style.display = "none";
}

function backToHome(){
    document.querySelector('.frontPage').style.display = "none";
    document.querySelector('.homePage').style.display = "flex";
    
    openMenu();
}

function purchaseItem(){
    document.querySelector('.frontPage').style.display = "none";
    document.querySelector('.orderedPage').style.display = "flex";
}

function orderAgain(){
    document.querySelector('.frontPage').style.display = "block";
    document.querySelector('.orderedPage').style.display = "none";
    
    americano = 0;
    whiteMocha = 0;
    latte = 0;
    darkMocha = 0;
    caramel = 0;
    kapeKastilla = 0;
    kapeMestizo = 0;
    dirtyChai = 0;
    cappuccino = 0;
    flatWhite = 0;
    matchaLatte = 0;
    chocolate = 0;
    cartTotal = 0;

    cartOpen();
    c = 0;
    refresh();
    cart();
}
refresh();
cart();