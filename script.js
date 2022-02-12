// Creating Onload Handaler.

window.onload = () => {
    main();
}

function main() {
    // Collecting necessary referances.
    const root = document.getElementById('root');
    const btn = document.getElementById("btn");

    btn.addEventListener('click', function () {
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    })
}
// Random color generator.

function generateRGBColor() {
    // Rendom number for Red.
    const red = Math.floor(Math.random() * 255);
    
    // Rendom number for Green.
    const green = Math.floor(Math.random() * 255);
    
    // Rendom number for Blue.
    const blue = Math.floor(Math.random() * 255);
    
    // Genareted RGB Color.
    return `rgb(${red}, ${green}, ${blue})`
}


