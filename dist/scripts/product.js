const product = {
    image: "public/images/peacock-product.jpg",
    bgImage: "public/images/peacock-bg-img.jpg",
    collection: [
        "public/images/peacock-thumbnail-1.jpg",
        "public/images/peacock-thumbnail-2.jpg"
    ],
    slider: [
        "public/images/peacock-product.jpg"
    ]
}

fetch("assets/data.json")
    .then(response => response.json())
    .then(data => {
        const queries = new URLSearchParams(window.location.search)

        const serie = data.find(it => it.name == queries.get('serie').toLocaleUpperCase());
        const product = serie.paths.find(it => it.name == queries.get('collection_name'));
        fillTheProductCard(product);
    })

function fillTheProductCard(product) {
    
    const bigTitle = document.querySelector("#product-title h2");
    const smallTitle = document.querySelector(".description h2");
    const collectionName = document.querySelector(".info span");
    bigTitle.innerHTML = smallTitle.innerHTML = product.name;
    bigTitle.innerHTML = smallTitle.innerHTML = product.name;
    collectionName.innerHTML = "Collection Name: " + product.name;

    const seriesDiv = document.querySelector("#series-title");
    seriesDiv.onclick = function() { window.location = "gallery.html?type="+ new URLSearchParams(window.location.search).get('serie');};;

    const seriesTitle = document.querySelector("#series-title span");
    seriesTitle.innerHTML = new URLSearchParams(window.location.search).get('serie');
    
    const hashtag = document.querySelector("#hashtag");
    hashtag.innerHTML = "#" + product.image.split(/__|\./gm)[1];



    const productImage = document.querySelector("#product-image");
    const collections = document.querySelector("#thumbnails-div");
    
    const bgImage = document.querySelector("#bg-img");
    
    let collectionItems = "";

    productImage.src = product.image;
    bgImage.src = product.bgImage;

    product.collection.forEach(item => collectionItems += `<img src="${item}" onclick="changeProductImages('${item}')"/>`)
    collections.innerHTML += collectionItems;
}

function changeProductImages(name){
    const productImage = document.querySelector("#product-image");    
    const bgImage = document.querySelector("#bg-img");
    
    productImage.src = name.replace("350x350", "350x800");
    bgImage.src = name.replace("350x350", "1920x1080");;

    const hashtag = document.querySelector("#hashtag");
    hashtag.innerHTML = "#" + name.split(/__|\./gm)[1];
}

/* SCROLL EFFECTS */

const bgImg = document.getElementById('bg-img');
const bgFilter = document.getElementById('bg-filter');
const productTitle = document.getElementById('product-title');
const productContainer = document.getElementById('product-container');
const footer = document.getElementById('myFooter');


// window.onscroll = function (e) {
//     // print "false" if direction is down and "true" if up
//     // console.log(this.oldScroll > this.scrollY);

//     let value = this.scrollY;
//     var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

//     let bgImgTopValue = Number(bgImg.style.top.split("px")[0]);
//     let bgFilterTopValue = Number(bgFilter.style.top.split("px")[0]);
//     let productTitleTopValue = Number(productTitle.style.top.split("px")[0]);
//     let productContainerTopValue = Number(productContainer.style.top.split("px")[0]);
    
//     // console.group("log")
//     // console.log("value:::", value);
//     // console.log("scrollpercent::", scrollpercent);
//     // console.log("bgImage.style.top:",bgImgTopValue);
//     // console.log("bgFilter.style.top:",bgFilterTopValue);
//     // console.log("productTitle.style.top:",productTitleTopValue);
//     // console.log("productContainer.style.top:",productContainerTopValue);
//     // console.groupEnd();

//     if (value == 0) {
//         console.log("=== 0 ===");
//         bgImg.style.top = "-540px";
//         bgFilter.style.top = "-600px";
//         productTitle.style.top = "455px";
//         productContainer.style.top = "930px"; 

//     } else if (0 < value && value <= 500 && this.oldScroll < this.scrollY) { // 0-500 arası - aşağı scroll
//         console.log("0-500 arası || aşağı");
//         bgImg.style.top = -540 + value * 0.45 + "px";
//         bgFilter.style.top = -600 + value * 1.6 + "px";
//         productTitle.style.top = 455 + value * -0.8 + "px";
//         productContainer.style.top = 930 + value * -0.8 + "px";     
        
//         // bgImg.style.top = -540 + scrollpercent * 1000 + "px";
//         // bgFilter.style.top = -600 + scrollpercent * 2900 + "px";
//         // productTitle.style.top = 455 + scrollpercent * -455 + "px";
//         // productContainer.style.top = 930 + scrollpercent * -1600 + "px";         
        
//     } else if (0 < value && value <= 500 && this.oldScroll > this.scrollY && bgImgTopValue >= -540) { // 0-500 arası - yukarı scroll
//         console.log("0-500 arası || yukarı");
//         bgImg.style.top = bgImgTopValue + value * -0.0207 + "px";
//         bgFilter.style.top = bgFilterTopValue + value * -0.08 + "px";
//         productTitle.style.top = productTitleTopValue + value * 0.04 + "px";
//         productContainer.style.top = productContainerTopValue + value * 0.04 + "px";  

//     } else if (500 < value && value <= 1000 && this.oldScroll < this.scrollY) { // 500-1000 arası - aşağı scroll
//         console.log("500-1000 arası || aşağı");
//         bgImg.style.top = bgImgTopValue + value * 0.045 + "px";  // 0.044605
//         bgFilter.style.top = bgFilterTopValue + value * 0.0292 + "px";
//         // productTitle.style.top = productTitleTopValue + value * 0.00945 + "px";
//         productContainer.style.top = productContainerTopValue + value * -0.013 + "px";  
        
//     } else if (500 < value && value <= 1000 && this.oldScroll > this.scrollY && bgImgTopValue >= -246) { // 500-1000 arası - yukarı scroll
//         console.log("500-1000 arası || yukarı");
//         // bgFilter.style.opacity = 0.8
//         bgImg.style.top = bgImgTopValue + value * -0.04555 + "px";
//         bgFilter.style.top = bgFilterTopValue + value * -0.027 + "px";
//         // productTitle.style.top = productTitleTopValue + value * 0.00945 + "px";
//         productContainer.style.top = productContainerTopValue + value * 0.013 + "px";  

//     } else if (1000 < value && value <= 1500 && this.oldScroll < this.scrollY) { // 1000-1500 arası - aşağı scroll
//         console.log("1000-1500 arası || aşağı");
//         bgImg.style.top = bgImgTopValue + value * -0.005 + "px";
//         bgFilter.style.top = bgFilterTopValue + value * -0.007 + "px";
//         bgFilter.style.opacity = 0
//         bgFilter.style.transition = "opacity 1.2s"
//         productContainer.style.top = productContainerTopValue + value * -0.02 + "px";
//         footer.style.opacity = 1;
//         footer.style.transition = "opacity 1.2s"

//     } else if (1000 < value && value <= 1500 && this.oldScroll > this.scrollY) { // 1000-1500 arası - yukarı scroll
//         console.log("1000-1500 arası || yukarı");
//         bgImg.style.top = bgImgTopValue + value * 0.005 + "px";
//         bgFilter.style.top = bgFilterTopValue + value * 0.007 + "px";
//         bgFilter.style.opacity = 0.8
//         bgFilter.style.transition = "opacity 1.2s"
//         productContainer.style.top = productContainerTopValue + value * 0.02 + "px"; 
//         footer.style.opacity = 0;
//         footer.style.transition = "opacity 1.2s"

//     }

//   this.oldScroll = this.scrollY;
// };


// ? scroll speed limited >>> https://stackoverflow.com/a/26386218/14218768
// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) {
//         delta = event.wheelDelta / 120;
//     } else if (event.detail) {
//         delta = -event.detail / 3;
//     }

//     handle(delta);
//     if (event.preventDefault) {
//         event.preventDefault();
//     }
//     event.returnValue = false;
// }

// function handle(delta) {
//     var time = 1000;
//     var distance = 500;

//     $("html, body").stop().animate({ scrollTop: $(window).scrollTop() - distance * delta }, time);
// }

// if (window.addEventListener) {
//     window.addEventListener("DOMMouseScroll", wheel, false);
// }

// window.onmousewheel = document.onmousewheel = wheel;


// ? scrool reset before page reload
// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

var controller = new ScrollMagic.Controller();
const hook = 0.02;

var scrollMagicLoop = function() {

    var dummyScene = new TimelineMax();

    dummyScene
    .set('#myFooter', {x: '0%', y: '250%'})

    new ScrollMagic.Scene({triggerElement: '#start', triggerHook: 0})
    .addTo(controller);

    /* ==================================================================
                          Welcome Scene
     ================================================================== */
  
  var welcome = new TimelineMax();
    welcome
    .fromTo('#bg-img', 1, {y: '0%'}, {y: '-30%', ease: Linear.easeInOut})
    .fromTo('#bg-filter', 1, {y: '0%'}, {y: '36%', ease: Linear.easeInOut}, "-=.8")
    .fromTo('#product-container', 1, {y: '20vh'}, {y: '0vh', ease: Linear.easeInOut})
  
    new ScrollMagic.Scene({triggerElement: '#background', triggerHook: hook, duration: 1000})
      .addIndicators({name: "background"}) // add indicators (requires plugin)
      .setTween(welcome) //adds the tween set above
      .setClassToggle('.nav-bar', "visible")

      .addTo(controller);

    /* ==================================================================
                          Card Scene
     ================================================================== */

    var card = new TimelineMax();
    // card
    // .fromTo('#bg-img', 1, {y: '0%'}, {y: '-30%', ease: Linear.easeInOut})
    // .fromTo('#bg-filter', 1, {y: '0%'}, {y: '30%', ease: Linear.easeInOut}, "-=1")
  
    new ScrollMagic.Scene({triggerElement: '#card', triggerHook: hook, duration: 1000})
      .addIndicators({name: "card"}) // add indicators (requires plugin)
      .setTween(card) //adds the tween set above
      .setClassToggle('.nav-bar', "visible")

      .addTo(controller);
  };
  
  scrollMagicLoop();







// const thDiv = document.getElementById("thumbnails-div");
// thDiv.addEventListener('scroll', function (e) {
//     console.log("wewe", e);
//     $("html, body").stop();
// })