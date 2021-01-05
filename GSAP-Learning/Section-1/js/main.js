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

var tlanimation = new TimelineMax();

tlanimation
	.to(".circle", 1, { x: 100, ease: Back.easeOut })
	.to(".square", 1, { x: 100, ease: Back.easeOut })
	.to(".rectangle", 1, { x: 100, ease: Back.easeOut });

TweenMax.staggerFrom(
	".triangle",
	1,
	{ x: 200, y: 200, opacity: 0, ease: Back.easeOut },
	0.2
);

TweenMax.set(".oval", { x: -100 });

const tl = new TimelineMax({ repeat: -1, yoyo: true });

tl.to(".oval", 1, { x: 100 });
