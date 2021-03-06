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

var dummyScene = new TimelineMax();

dummyScene
  .set('#mutfak-group', {y: '250%'})
  .set('#presentation-content', {y: '100vh', opacity:0})
  .set('#presentation-background', {y: '100vh', opacity:0})

  .set('.product-group-1', {y: '120vh'})
  .set('.product-group-2', {y: '120vh'})
  .set('.product-group-3', {y: '120vh'})
  .set('#features-footer', {bottom: '110vh'})


  new ScrollMagic.Scene({triggerElement: '#start', triggerHook: 0})
  .addTo(controller);

var welcome = new TimelineMax();
  welcome
  .fromTo('#jumbotron', 1, {y: '0%'}, {y: '-101.5%', ease: Linear.easeInOut})

    // initialization part

      // real work
  
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


      var bedroom = new TimelineMax();
      bedroom
      .fromTo('#welcome', 1.4, {y: '0%'}, {y: '-100%'})
      .fromTo('#bed-background', 0.6, {y: '100%'}, {y: '0%'}, "=-1.6")                               // enter bedroom background
      .fromTo('#bed-wall-1', 1, {x: '-100%'}, {x: '-25%', ease: Linear.easeInOut}, "=-1")  // enter wall background-1
      .to('#bed-background', 1, {scale: '1.03', ease: Linear.easeInOut}, "=-1")   // bigger background
    
      new ScrollMagic.Scene({triggerElement: '#bedroomScene1', triggerHook: hook, duration: 1600})
      .addIndicators({name: "bedroom part1"}) // add indicators (requires plugin)
      .setTween(bedroom) //adds the tween set above
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
    .fromTo('#bed-wall-2', 1, {x: '-100%'}, {x: '-25%', ease: Linear.easeInOut}) // enter wall backgorund-2
    .to('#bed-background', 1, {scale: '1.05', ease: Linear.easeInOut}, "=-1");         // bigger background
  
    new ScrollMagic.Scene({triggerElement: '#bedroomScene2',reverse: true,  triggerHook: hook, duration: 1400})
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
  .fromTo('#flip-panel-background', 0.5, { y: '100%', opacity:1,  ease: Linear.easeInOut}, {y: '0%'}, "-=.7")  // remove scene2 (productPage1)
  .fromTo('.product-group-1', 1, { y: '120vh'}, {y: '20vh'}, "=-0.3")  // remove scene2 (productPage1)

  // .fromTo('#product-1', 0.5, {x: '-100%', transform: 'rotateY(0deg)'}, {x: '20%', transform: 'rotateY(180deg)'}, "=-0.5") //enter product1
  
  //  new ScrollMagic.Scene({triggerElement: '#productPage1', triggerHook: hook, duration: 1200})
   new ScrollMagic.Scene({triggerElement: '#productPage1', reverse: true, triggerHook: hook, duration: 1000})
      .addIndicators({name:'??r??nler1'}) // add indicators (requires plugin)
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
  pp2.fromTo('.product-group-1', 1, { y: '20vh'}, {y: '-120vh'})  // remove scene2 (productPage1)
  .fromTo('.product-group-2', 1, {y: '100vh'}, {y: '20vh'}, "=-0.8")  // remove scene2 (productPage1)

   new ScrollMagic.Scene({triggerElement: '#productPage2', triggerHook: hook, duration: 800})
      .addIndicators({name: '??r??nler2'}) // add indicators (requires plugin)
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
 pp3.fromTo('.product-group-2', 0.5, { y: '20vh'}, {y: '-120vh'})  // remove scene2 (productPage1)
 .fromTo('.product-group-3', 1, {y: '100vh'}, {y: '20vh'}, "=-0.5")  // remove scene2 (productPage1)
 
  new ScrollMagic.Scene({triggerElement: '#productPage3', triggerHook: hook, duration: 800})
     .addIndicators({name: '??r??nler3'}) // add indicators (requires plugin)
     .setTween(pp3) //adds the tween set above
     .addTo(controller);
     
     
/* ==================================================================
						SCENE 4
   ================================================================== */

  var presentation = new TimelineMax();
  presentation
  .fromTo('.product-group-3', 0.3, {scale: 1, y: '20vh', opacity: 1},  {scale: 1, y: '-120vh', opacity: 1})
  .fromTo('#flip-panel-background', 0.5, { y: '0%', opacity:1}, {y: '-105%', opacity:1}, '-=.20')  // remove scene2 (productPage1)
  .fromTo('#presentation-background', 1, {x:'0%', y: '70%', opacity:1}, {x:'0%', y: '-50%', opacity:1}, "-=.75")
  .fromTo('#presentation-content', .7, {x:'0%', y: '40vh', opacity:0}, {x:'0%', y: '20vh', opacity:1}, "-=.3")
  .fromTo('#presentation-background', 1, {x:'0%', y: '-50%'}, {x:'0%', y: '-100%'})
  .to('#presentation-content', 1, {x:'0%', y: '20vh', opacity:0}, "-=1")
  .to('#presentation-content', 1, {x:'0%', y: '-50vh', opacity:0}, "-=1")
            
  new ScrollMagic.Scene({triggerElement: '#presentation-mark', triggerHook: hook, duration: 2750})
  .addIndicators({name: 'presentation'}) // add indicators (requires plugin)
  .setTween(presentation) //adds the tween set above
  .addTo(controller);

	/*
	| Sets of animations
	|		to introduce kitchen ceramics
	*/ 
  var mutfak = new TimelineMax();
  mutfak
  // .fromTo('#presentation-group', 1, {scale: 1, y: '0%', opacity: 1},  {scale: 1, y: '-60%', opacity: 1})
  .fromTo('#mutfak-group', 1,  {x: '0%', y: '50%', opacity: 0}, {x: '0%', y: '0%', opacity: 1})
  // .fromTo('#mutfak-background', 1,  {x: '0%', y: '100%'}, {x: '0%', y: '0%'}, "-=2")
  .fromTo('#seramik-1', 1, {x: '-100vw', y:'24vh', scale: 0.9}, {x: '-20vw', y:'24vh', scale: 1}, "-=0.4")
  .fromTo('#seramik-2', 1, {x: '-100vw', y:'24vh', scale: 0.9}, {x: '-20vw', y:'24vh', scale: 1}, "-=0.4")
  .fromTo('#features-footer', 0.2, {bottom:'-110vh', opacity: 0}, {bottom :'-80vh', opacity: 0}, "=-0.1")
  
  new ScrollMagic.Scene({triggerElement: '#mutfak', triggerHook: hook, duration: 3000})
     .addIndicators({name: 'mutfak'}) // add indicators (requires plugin)
     .setTween(mutfak) //adds the tween set above
     .addTo(controller);


  var features = new TimelineMax();
  features
  .fromTo('#mutfak-group', 1, {y: '0%', opacity: 1},  {y: '-100%', opacity: 1})
  .fromTo('#features-footer', 1, {bottom:'-110vh', opacity: 0.6}, {bottom:'-30vh', opacity: 1}, "=-0.5")
    
   new ScrollMagic.Scene({triggerElement: '#anim5', triggerHook: hook, duration: 1200})
      .addIndicators({name: 'simulation-page'}) // add indicators (requires plugin)
      .setTween(features) //adds the tween set above
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
  .fromTo('#features-footer', 1, { bottom: '-30vh'}, {bottom: '0vh'}) 
  
   new ScrollMagic.Scene({triggerElement: '#features-footer-mark', triggerHook: hook, duration: 700})
      .addIndicators({name: 'footer-page'}) // add indicators (requires plugin)
      .setTween(clearScreen2) //adds the tween set above
      .addTo(controller);
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

function resizeIframe(obj) {
  const el = obj.contentWindow.document.documentElement;
  console.log(el.getBoundingClientRect());
  console.log(obj.contentWindow.document.documentElement.scrollHeight)
  console.log(obj.contentWindow.document.documentElement.offsetHeight + getComputedStyle(el).marginBottom + getComputedStyle(el).marginBottom)
  console.log(obj.contentWindow.document.documentElement.clientHeight)
  console.log(obj.contentWindow.document.documentElement)
  obj.style.height = obj.contentWindow.document.documentElement.scrollHeight * 1 + 'px';
}


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

console.log(vw, vh)