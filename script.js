const colors = [
   'AliceBlue', 'BlueViolet', 'Crimson', 'DarkSeaGreen', 'FloralWhite', 'GoldenRod', 'HotPink', 'Indigo', 'LightBlue', 'Turquoise'
];

function getRandomColors() {
    let selectedColors = [];
    while (selectedColors.length < 10) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        if (!selectedColors.includes(randomColor)) {
            selectedColors.push(randomColor);
        }
    }
    return selectedColors;
}

const gameColors = getRandomColors();
const chosenColor = gameColors[Math.floor(Math.random() * gameColors.length)];

function checkColor() {
    const input = document.getElementById('inputColor').value.trim();
    const hint = document.getElementById('hint');
    if (input === chosenColor) {
        document.body.style.backgroundColor = chosenColor;
        hint.textContent = 'Parabéns, você acertou a cor!';
        hint.style.color = 'green';
    } else {
        const sortedColors = [...gameColors].sort();
        const hintMessage = input < chosenColor ? 'A cor que você escolheu vem antes da cor correta na ordem alfabética.' :
                                                    'A cor que você escolheu vem depois da cor correta na ordem alfabética.';
        hint.textContent = `Tente novamente! Dica: ${hintMessage}`;
        hint.style.color = 'red';
    }
}
