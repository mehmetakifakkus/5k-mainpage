var $sections = $('.js-scrollmagic-section');

var controller = new ScrollMagic.Controller();
const hook = 0.02;

// change behaviour of controller to animate scroll instead of jump
	controller.scrollTo(function (newpos) {
		TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	});


var scrollMagicLoop = function() {
   
  
  /* ==================================================================
						Welcome Scene
   ================================================================== */

var welcome = new TimelineMax();
  welcome
  .fromTo('#jumbotron', 1, {y: '0%'}, {y: '-101.5%', ease: Linear.easeInOut})
  // .fromTo('.nav-bar', 1, {opacity: 0}, {opacity: 0.75}, "=-1")
  // .fromTo('#menu', 1, {background: '#ffffff'}, {background: '#444444'}, "=-1")
  .fromTo('#welcome', 1, {y: '0%'}, {y: '-64.5%'})
  // .fromTo('#welcome', 1, {y: '0%'}, {y: '-59.5%'})
  .fromTo('#bed-background', 1, {y: '100%'}, {y: '0%'}, "=-1")                               // enter bedroom background
  .fromTo('#bed-background-1', 1, {x: '-100%'}, {x: '-30%', ease: Linear.easeInOut}, "=-1")  // enter wall background-1
  .to('#bed-background', 1, {scale: '1.03', ease: Linear.easeInOut}, "=-1");   // bigger background
     
  
    new ScrollMagic.Scene({triggerElement: '#welcomeScene', triggerHook: hook, duration: 1600})
      .addIndicators({name: "hide welcome"}) // add indicators (requires plugin)
      .setTween(welcome) //adds the tween set above
      .setClassToggle('.nav-bar', "visible")
      .on("enter leave", function (e) {
        if(e.type == "enter")
          welcomeInside();
        else
          welcomeOutside();
      })
      .addTo(controller);

/* ==================================================================
						SCENE 1
   ================================================================== */

	/*
	| Sets of animations
	|		to show bedroom
	*/
  
var bedroomPart2 = new TimelineMax();
  bedroomPart2
    .fromTo('#bed-background-2', 1, {x: '-100%'}, {x: '-30%', ease: Linear.easeInOut}) // enter wall backgorund-2
    .to('#bed-background', 1, {scale: '1.05', ease: Linear.easeInOut}, "=-1");         // bigger background
  
    new ScrollMagic.Scene({triggerElement: '#bedroomScene', triggerHook: hook, duration: 1400})
      .addIndicators({name: "2. background"}) // add indicators (requires plugin)
      .setTween(bedroomPart2) //adds the tween set above
      .addTo(controller);
  
  /* ==================================================================
						SCENE 2 productPage1
   ================================================================== */

	/*
	| Sets of animations 
	|		to introduce different materials (page1)
	*/
  
 var pp1 = new TimelineMax({onStart: myFunction});
  pp1.to('.scene1', 0.5, {y: '-105%', ease: Linear.easeInOut})                       // remove scene1 (bed)
  .fromTo('#flip-panel-backgound', 0.5, { y: '100%', opacity:1,  ease: Linear.easeInOut}, {y: '0%', opacity:1,  ease: Linear.easeInOut}, "-=.5")  // remove scene2 (productPage1)
  .fromTo('#product-1', 0.5, {x: '60%', y: '150%'}, {x: '60%', y: '10%'}, "=-0.2") //enter product1
    // .fromTo('#product-1', 0.5, {x: '-100%', transform: 'rotateY(0deg)'}, {x: '20%', transform: 'rotateY(180deg)'}, "=-0.5") //enter product1
  .fromTo('#product-2', 0.5, {x: '180%', y: '110%'}, {x: '180%', y: '10%'}, "=-0.3") //enter product2
  .fromTo('#product-3', 0.5, {x: '300%', y: '110%'}, {x: '300%', y: '10%'}, "=-0.3"); //enter product3
  
   new ScrollMagic.Scene({triggerElement: '#productPage1', triggerHook: hook, duration: 800})
      .addIndicators({name:'ürünler1'}) // add indicators (requires plugin)
      .setTween(pp1) //adds the tween set above
      .addTo(controller);
  
  
  /* ==================================================================
						SCENE 3 productPage2
   ================================================================== */

	/*
	| Sets of animations 
	|		to introduce different materials (page2)
	*/
  
 var pp2 = new TimelineMax({onStart:myFunction});
  pp2.fromTo('#product-group-1', 0.5, { y: '0%', opacity:1,  ease: Linear.easeInOut}, {y: '-105%', opacity:1,  ease: Linear.easeInOut})  // remove scene2 (productPage1)
  .fromTo('#product-group-2', 0.5, {x:'0%', y: '100%', opacity:1,  ease: Linear.easeInOut}, {x:'0%', y: '0%', opacity:1,  ease: Linear.easeInOut})  // remove scene2 (productPage1)
  .fromTo('#product-4', 0.5, {x: '60%', y: '110%'}, {x: '60%', y: '10%'}, "=-0.8")
  .fromTo('#product-5', 0.5, {x: '180%', y: '110%'}, {x: '180%', y: '10%'}, "=-0.7")
  .fromTo('#product-6', 0.5, {x: '300%', y: '110%'}, {x: '300%', y: '10%'}, "=-0.6");
  
   new ScrollMagic.Scene({triggerElement: '#productPage2', triggerHook: hook, duration: 800})
      .addIndicators({name: 'ürünler2'}) // add indicators (requires plugin)
      .setTween(pp2) //adds the tween set above
      .addTo(controller);
  

    /* ==================================================================
						SCENE 3 productPage3
   ================================================================== */

	/*
	| Sets of animations 
	|		to introduce different materials (page2)
	*/
  
 var pp3 = new TimelineMax({onStart:myFunction});
 pp3.fromTo('#product-group-2', 0.5, { y: '0%', opacity:1,  ease: Linear.easeInOut}, {y: '-105%', opacity:1,  ease: Linear.easeInOut})  // remove scene2 (productPage1)
 .fromTo('#product-group-3', 0.5, {x:'0%', y: '100%', opacity:1,  ease: Linear.easeInOut}, {x:'0%', y: '0%', opacity:1,  ease: Linear.easeInOut})  // remove scene2 (productPage1)
 .fromTo('#product-7', 0.5, {x: '110%', y: '110%'}, {x: '110%', y: '10%'}, "=-0.8")
 .fromTo('#product-8', 0.5, {x: '230%', y: '110%'}, {x: '230%', y: '10%'}, "=-0.7")
 
  new ScrollMagic.Scene({triggerElement: '#productPage3', triggerHook: hook, duration: 800})
     .addIndicators({name: 'ürünler3'}) // add indicators (requires plugin)
     .setTween(pp3) //adds the tween set above
     .addTo(controller);
     
     
   /* ==================================================================
						SCENE 4
   ================================================================== */

	/*
	| Sets of animations
	|		to introduce kitchen ceramics
	*/ 
  

  var mutfak = new TimelineMax();
  mutfak
  .fromTo('#product-group-3', 0.5, {scale: 1, y: '0%', opacity: 1, ease: Linear.easeInOut},  {scale: 1, y: '-105%', opacity: 1, ease: Linear.easeInOut})
  .fromTo('#flip-panel-backgound', 0.5, { y: '0%', opacity:1,  ease: Linear.easeInOut}, {y: '-105%', opacity:1,  ease: Linear.easeInOut}, "-=.5")  // remove scene2 (productPage1)
  // .fromTo('#mutfak-background', 0.5,  {x: '0%', y: '200%'}, {x: '0%', y: '0%', ease: Linear.easeInOut})
  .fromTo('#seramik-1', 1, {x: '-200%', y:'0%', scale: 0.7}, {x: '0%', y:'0%', scale: 0.7}, "=-0.5")
  .fromTo('#seramik-2', 1, {x: '-200%', y:'100%', scale: 0.7}, {x: '0%', y:'80%', scale: 0.7}, "=-0.5")
  .fromTo('#seramik-3', 1, {x: '-200%', y:'120%', scale: 0.7}, {x: '0%', y:'120%', scale: 0.7}, "=-0.5")
  // .to('#content', 0.5, {y:'-200%'}, {x: '0%', y:'0%'}, "=-0.5");
  


  var features = new TimelineMax();
  features
  .to('.scene_mutfak', 0.5, {scale: 0.9, x: '-100%', opacity: 0, ease: Linear.easeInOut})
  .fromTo('#features', 0.2, {x: '-0%', y:'10%', opacity: 0}, {x: '0%', y:'0%', opacity: 1}, "=-0.1")
  // fromTo('#js-scrollmagic--seramik-1', 1, {x: '-100%', y:'0%'}, {x: '-80%', y:'0%'}).
  // fromTo('#js-scrollmagic--seramik-2', 1, {x: '100%', y:'0%'}, {x: '80%', y:'0%'}, "=-1").
  // fromTo('#js-scrollmagic--content', 1, {y:'-200%'}, {y:'30%'}, "=-1");
  
 
  

  // var seramik2 = new TimelineMax();
  // seramik2.
  // fromTo('#js-scrollmagic--seramik-2', 1, {x: '100%'}, {x: '0%'});
  
  new ScrollMagic.Scene({triggerElement: '#mutfak', triggerHook: hook, duration: 500})
     .addIndicators({name: 'mutfak'}) // add indicators (requires plugin)
     .setTween(mutfak) //adds the tween set above
     .addTo(controller);
  
   new ScrollMagic.Scene({triggerElement: '#anim5', triggerHook: hook, duration: 750})
      .addIndicators({name: 'clearScreen-content'}) // add indicators (requires plugin)
      .setTween(features) //adds the tween set above
      .setClassToggle('.scene4', "bringToFront")
      .addTo(controller);
  
  
//    new ScrollMagic.Scene({triggerElement: '#anim7', triggerHook: hook, duration: 360})
//       .addIndicators({name: 'seramik1'}) // add indicators (requires plugin)
//       .setTween(seramik1) //adds the tween set above
//       .addTo(controller);
  
/* ==================================================================
						SCENE 5
   ================================================================== */

	/*
	| Sets of animations
	|		to introduce different materials
	*/
  
  var clearScreen2 = new TimelineMax();
  clearScreen2
  .fromTo('.scene4', 0.5, { y: '0%'}, {y: '-50%', ease: Linear.easeInOut}) 
  
  
  
   new ScrollMagic.Scene({triggerElement: '#anim6', triggerHook: hook, duration: 1600})
      .addIndicators() // add indicators (requires plugin)
      .setTween(clearScreen2) //adds the tween set above
      .setClassToggle('.scene4', "bringToFront")

      .addTo(controller);
  
  
  
  // new ScrollMagic.Scene({triggerElement: '#anim5', triggerHook: 0.4, duration: 350})
  //     .addIndicators() // add indicators (requires plugin)
  //     .setTween(saga) //adds the tween set above
  //     // .setPin('#holder')
  //     .addTo(controller);
};


  

scrollMagicLoop();

function welcomeInside(){
  var elements = document.querySelectorAll("#menuToggle span");

  elements.forEach((el)=>{
    el.style = "background: #cccccc";
  })
}


function welcomeOutside(){
  var elements = document.querySelectorAll("#menuToggle span");

  elements.forEach((el)=>{
    el.style = "background: #444444";
  })
}

function myFunction(){
  // console.log('sadasd')
}

document.querySelectorAll("#wel").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    controller.scrollTo('#anim0');    
  });
});

document.querySelectorAll("#yatak").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    controller.scrollTo('#anim1');    
  });
});

document.querySelectorAll("#panel").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    controller.scrollTo('#anim4');    
  });
});

document.querySelectorAll("#panel2").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    controller.scrollTo('#anim5');    
  });
});