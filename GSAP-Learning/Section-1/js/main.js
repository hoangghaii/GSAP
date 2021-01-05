/*
//TweenMax.to(target class, thoi gian thuc hien, vi tri sau khi thuc hien)
TweenMax.to($(".circle"), 1, { x: 150, y: 150, backgroundColor: "blue" });

TweenMax.to($(".square"), 2, {
	x: -150,
	y: -150,
	scale: 2,
	delay: 1,
	ease: Back.easeOut,
});

TweenMax.from($("#rectangle"), 2, { y: 200, rotation: 180, scale: 1.5 });

TweenMax.to($("li:nth-child(odd)"), 1, { x: 50 });
*/

// var tlanimation = new TimelineMax();

// tlanimation
// 	.to(".circle", 1, { x: 100, ease: Back.easeOut })
// 	.to(".square", 1, { x: 100, ease: Back.easeOut })
// 	.to(".rectangle", 1, { x: 100, ease: Back.easeOut });

// TweenMax.staggerFrom(
// 	".triangle",
// 	1,
// 	{ x: 200, y: 200, opacity: 0, ease: Back.easeOut },
// 	0.2
// );

// TweenMax.set(".oval", { x: -100 });

// const tl = new TimelineMax({ repeat: -1, yoyo: true });

// tl.to(".oval", 1, { x: 100 });

var tlshapes = new TimelineMax();

// tlshapes
// 	.to(".circle", 1, { x: 100 })
// 	.to(".square", 1, { x: 100 }, "squareRectangle")
// 	.to(".rectangle", 1, { x: 100 }, "squareRectangle");

// tlshapes
// 	.to(".circle", 1, { x: 100 })
// 	.to(".square", 1, { x: 100 }, "squareRectangle")
// 	.to(".rectangle", 1, { x: 100 }, "squareRectangle-=.25");

// tlshapes
// 	.to(".circle", 1, { x: 100 })
// 	.to(".square", 1, { x: 100 }, "-=.5")
// 	.to(".rectangle", 1, { x: 100 }, "-=.5");

// tlshapes
// 	.to(".circle", 1, { x: 100 })
// 	.to(".square", 1, { x: 100 })
// 	.to(".rectangle", 1, { x: 100 }, 5);

// tlshapes.staggerFrom(".shape", 0.5, { x: 50, y: 50, opacity: 0 }, 0.2);

// $(".playButton").click(function () {
// 	tlshapes.play();
// });

// $(".pauseButton").click(function () {
// 	tlshapes.pause();
// });

// $(".resumeButton").click(function () {
// 	tlshapes.resume();
// });

// $(".reverseButton").click(function () {
// 	tlshapes.reverse();
// });

// $(".slowButton").click(function () {
// 	tlshapes.timeScale(0.5);
// });

// $(".fastButton").click(function () {
// 	tlshapes.timeScale(1.5);
// });

// $(".seekButton").click(function () {
// 	tlshapes.seek(0.5);
// });

// $(".progressButton").click(function () {
// 	tlshapes.progress(0.5);
// });

TweenMax.fromTo(".circle", 1, { x: -190, scale: 0 }, { x: 100, scale: 1.5 });

TweenMax.staggerFromTo(
	".triangle",
	1,
	{ y: 200, x: 200 },
	{ y: -50, x: -50 },
	0.2
);
