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
  .fromTo('#welcome', 1, {y: '0%'}, {y: '-59.5%'})
  .fromTo('#bed-background', 1, {y: '100%'}, {y: '0%'}, "=-1")
  .fromTo('#bed-left-1', 1, {x: '-100%'}, {x: '-30%', ease: Linear.easeInOut}, "=-1")
  .to('#bed-background', 1, {scale: '1.03', ease: Linear.easeInOut}, "=-1");
     
  
   var scene = new ScrollMagic.Scene({triggerElement: '#anim0', triggerHook: hook, duration: 1600})
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

// scene.setClassToggle('#menu', "visible")

/* ==================================================================
						SCENE 1
   ================================================================== */

	/*
	| Sets of animations
	|		to show bedroom
	*/
  
// var tl1 = new TimelineMax({onStart: fixItem, onStartParams:['div.scene1']});
  // var tl1 = new TimelineMax();
  // tl1.fromTo('#js-scrollmagic--left-1', 1, {x: '-100%'}, {x: '-30%', ease: Linear.easeInOut}).
  // to('#js-scrollmagic--background', 1, {scale: '1.03', ease: Linear.easeInOut}, "=-1");

var tl2 = new TimelineMax();
  tl2.fromTo('#bed-left-2', 1, {x: '-100%'}, {x: '-30%', ease: Linear.easeInOut})
    .to('#bed-background', 1, {scale: '1.05', ease: Linear.easeInOut}, "=-1");
  
  
   // new ScrollMagic.Scene({triggerElement: '#anim1', triggerHook: hook, duration: 750})
   //    .addIndicators({name: "1. background"}) // add indicators (requires plugin)
   //    .setTween(tl1) //adds the tween set above
   //    // .setPin('#holder')
   //    .addTo(controller);
  
    new ScrollMagic.Scene({triggerElement: '#anim1', triggerHook: hook, duration: 1400})
      .addIndicators({name: "2. background"}) // add indicators (requires plugin)
      .setTween(tl2) //adds the tween set above
      // .setPin('#holder')
      .addTo(controller);
  
  /* ==================================================================
						SCENE 2
   ================================================================== */

	/*
	| Sets of animations 
	|		to introduce different materials
	*/
  
 var clearScreen1 = new TimelineMax({onStart: myFunction});
  clearScreen1.to('.scene1', 0.5, {x: '110%', ease: Linear.easeInOut})
  .fromTo('#js-scrollmagic--product-1', 0.5, {x: '20%', y: '150%'}, {x: '60%', y: '0%'}, "=-0.5")
  .fromTo('#js-scrollmagic--product-2', 0.5, {x: '80%', y: '150%'}, {x: '180%', y: '0%'}, "=-0.5")
  .fromTo('#js-scrollmagic--product-3', 0.5, {x: '160%', y: '150%'}, {x: '300%', y: '0%'}, "=-0.5");
  
   new ScrollMagic.Scene({triggerElement: '#anim3', triggerHook: hook})
      .addIndicators({name:'ürünler1'}) // add indicators (requires plugin)
      .setTween(clearScreen1) //adds the tween set above
      // .setPin('#holder')
      .addTo(controller);
  
  
    /* ==================================================================
						SCENE 3
   ================================================================== */

	/*
	| Sets of animations 
	|		to introduce different materials
	*/
  
 var clearScreen2 = new TimelineMax({onStart:myFunction});
  clearScreen2.to('.scene2', 0.5, {scale: 0.9, x: '-100%', ease: Linear.easeInOut}).
  fromTo('#js-scrollmagic--product-4', 0.5, {x: '20%', y: '150%'}, {x: '60%', y: '0%'}, "=-0.5").
  fromTo('#js-scrollmagic--product-5', 0.5, {x: '120%', y: '150%'}, {x: '180%', y: '0%'}, "=-0.5").
  fromTo('#js-scrollmagic--product-6', 0.5, {x: '220%', y: '150%'}, {x: '300%', y: '0%'}, "=-0.5");
  
   new ScrollMagic.Scene({triggerElement: '#anim4', triggerHook: hook})
      .addIndicators({name: 'ürünler2'}) // add indicators (requires plugin)
      .setTween(clearScreen2) //adds the tween set above
      // .setPin('#holder')
      .addTo(controller);
  
   /* ==================================================================
						SCENE 4
   ================================================================== */

	/*
	| Sets of animations
	|		to introduce kitchen ceramics
	*/ 
  
  var clearScreen3 = new TimelineMax();
  clearScreen3.to('.scene3', 0.5, {scale: 0.9, x: '-100%', ease: Linear.easeInOut}).
  fromTo('#js-scrollmagic--seramik-1', 1, {x: '-100%', y:'0%'}, {x: '-80%', y:'0%'}).
  fromTo('#js-scrollmagic--seramik-2', 1, {x: '100%', y:'0%'}, {x: '80%', y:'0%'}, "=-1").
  fromTo('#js-scrollmagic--content', 1, {y:'-200%'}, {y:'30%'}, "=-1");
  
  var background = new TimelineMax();
  background.
  fromTo('#js-scrollmagic--mutfak-background', 0.5,  {x: '-100%', y: '100%'}, {x: '0%', y: '0%', ease: Linear.easeInOut}).
  to('#js-scrollmagic--seramik-2', 1, {x: '0%', y:'0%'}, "=-0.5").
  to('#js-scrollmagic--content', 0.5, {y:'-200%'}, "=-0.5");
  
  var seramik1 = new TimelineMax();
  seramik1.
  to('#js-scrollmagic--seramik-1', 1, {x: '-20%', y:'0%'});

  // var seramik2 = new TimelineMax();
  // seramik2.
  // fromTo('#js-scrollmagic--seramik-2', 1, {x: '100%'}, {x: '0%'});
  
  
//    new ScrollMagic.Scene({triggerElement: '#anim5', triggerHook: hook})
//       .addIndicators({name: 'clearScreen-content'}) // add indicators (requires plugin)
//       .setTween(clearScreen3) //adds the tween set above
//       .addTo(controller);
  
//    new ScrollMagic.Scene({triggerElement: '#anim6', triggerHook: hook})
//       .addIndicators({name: 'mutfak'}) // add indicators (requires plugin)
//       .setTween(background) //adds the tween set above
//       .addTo(controller);
  
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
  clearScreen2.fromTo('.scene4', 0.5, { y: '0%'}, {y: '-150%', ease: Linear.easeInOut}) 
  
  
   new ScrollMagic.Scene({triggerElement: '#anim8', triggerHook: hook})
      .addIndicators() // add indicators (requires plugin)
      .setTween(clearScreen2) //adds the tween set above
      // .setPin('#holder')
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