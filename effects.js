const glow = document.getElementById("cursor-glow");

if (glow) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;

        requestAnimationFrame(animate);
    }

    animate();
}

const quotes = [
    "the machine followed instructions. this was the root cause.",
    "documented after extensive testing, debugging, and denial.",
    "currently converting coffee into questionable engineering decisions.",
    "the part is within tolerance. my happiness is not.",
    "every project starts with confidence and ends with version_final_final_v7.",
    "i trust the math. it's the numbers i'm worried about.",
    "all models are wrong. some are submitted anyway.",
    "the problem has been identified. ownership remains under investigation.",
    "the design was elegant right up until manufacturing got involved.",
    "i fixed the bug. several new features appeared in its place.",
    "the driver requested more grip. physics declined.",
    "adding horsepower was easy. explaining the lap time was not.",
    "the telemetry captured the mistake in remarkable detail.",
    "the setup is perfect until the first corner.",
];

const quoteElement = document.getElementById("daily-quote");

if (quoteElement) {

    const dayNumber =
        Math.floor(Date.now() / (1000 * 60 * 60 * 24));

    quoteElement.textContent =
        quotes[dayNumber % quotes.length];
}