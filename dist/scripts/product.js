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

        const serie = data.find(it => it.name == queries.get('serie'));
        const product = serie.paths.find(it => it.name == queries.get('collection_name'));
        fillTheProductCard(product);
        fillSliderImagesAndDots(product.slider)
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
    bgImage.src = name.replace("350x350", "1920x1080");
    
    const hashtag = document.querySelector("#hashtag");
    hashtag.innerHTML = "#" + name.split(/__|\./gm)[1];
}

/* SCROLL EFFECTS */

const bgImg = document.getElementById('bg-img');
const bgFilter = document.getElementById('bg-filter');
const productTitle = document.getElementById('product-title');
const productContainer = document.getElementById('product-container');
const footer = document.getElementById('myFooter');


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
    .set('#product-title', {y: '45vh'})
    .set('#bg-filter', {y: '-70vh'})
    .set('#bg-img', {y: '-70vh'})
    .set('#product-container', {y: '100vh'})
    .set('#myFooter', {y: '100vh'})

    new ScrollMagic.Scene({triggerElement: '#dummy', triggerHook: 0})
    .addTo(controller);

    /* ==================================================================
                          Welcome Scene
     ================================================================== */
  
  var welcome = new TimelineMax();
    welcome
    .fromTo('#bg-img', 0.8, {y: '-70vh'}, {y: '-85vh', ease: Linear.easeInOut})
    .fromTo('#bg-filter', 0.8, {y: '-70vh'}, {y: '-20vh', ease: Linear.easeInOut}, "-=.8")
    .fromTo('#product-container', 1, {y: '100vh'}, {y: '5vh', ease: Linear.easeInOut},"-=1")
  
    new ScrollMagic.Scene({triggerElement: '#background', triggerHook: hook, duration: 1000})
      .addIndicators({name: "background"}) // add indicators (requires plugin)
      .setTween(welcome) //adds the tween set above
      .addTo(controller);

    /* ==================================================================
                          Card Scene
     ================================================================== */

    var card = new TimelineMax();
    card
    .fromTo('#product-container', 1, {y: '5vh'}, {y: '-135vh', ease: Linear.easeInOut})
    .fromTo('#bg-img', 0.8, {y: '-85vh'}, {y: '75vh', ease: Linear.easeInOut}, "-=1")
    .fromTo('#bg-filter', 0.8, {y: '-20vh'}, {y: '75vh', ease: Linear.easeInOut}, "-=.8")
    
    new ScrollMagic.Scene({triggerElement: '#card', triggerHook: hook, duration: 600})
      .addIndicators({name: "card"}) // add indicators (requires plugin)
      .setTween(card) //adds the tween set above
      .addTo(controller);


      /* ==================================================================
                          Footer Scene
     ================================================================== */

    var footer = new TimelineMax();
    footer
    .fromTo('#product-container', 1, {y: '-135vh'}, {y: '-220vh', ease: Linear.easeInOut})
    .fromTo('#bg-img', 0.8, {y: '75vh'}, {y: '0vh', ease: Linear.easeInOut}, "-=1")
    .fromTo('#bg-filter', 0.8, {y: '75vh'}, {y: '0vh', opacity: 0, ease: Linear.easeInOut}, "-=1")
    .fromTo('#myFooter', 0.8, {y: '100vh'}, {y: '72.5vh', ease: Linear.easeInOut}, "-=.8")
  
    new ScrollMagic.Scene({triggerElement: '#footer', triggerHook: hook, duration: 600})
      .addIndicators({name: "footer"}) // add indicators (requires plugin)
      .setTween(footer) //adds the tween set above
      .addTo(controller);
  };
  
  scrollMagicLoop();







// const thDiv = document.getElementById("thumbnails-div");
// thDiv.addEventListener('scroll', function (e) {
//     console.log("wewe", e);
//     $("html, body").stop();
// })