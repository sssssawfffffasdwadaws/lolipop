const sentenceDisplay = document.getElementById('sentenceDisplay');
const inputArea = document.getElementById('inputArea');

const sentence = "The quick brown fox jumps over the lazy dog.";
sentenceDisplay.innerHTML = sentence.split('').map(letter => `<span class="letter">${letter}</span>`).join('');

const letters = document.querySelectorAll('.letter');
let index = 0;

inputArea.addEventListener('input', () => {
    if (inputArea.value[index] === sentence[index]) {
        letters[index].classList.add('correct');
    }
    index++;
});
