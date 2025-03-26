gsap.to("span", {
    opacity: 1,
    y: -20,
    duration: 0.5,
    stagger: 0.2,
    ease: "bounce.out"
});


gsap.to("img", {
    opacity: 1,
    rotateY: 360,
    duration: 1,
    ease: "power2.out",
    repeat: -1,
    yoyo:true,
    delay: 1.1
});


gsap.to("svg", {
    opacity: 1,
    x: 50,  // Mueve la flecha 50px a la derecha
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,  // Repite infinitamente
    yoyo: true,  // Hace que vaya y regrese
    delay: 1.2
});
