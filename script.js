const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const highlightedText = document.getElementById('highlightedText');

inputText.addEventListener('input', updateCharCountAndHighlight);

function updateCharCountAndHighlight() {
    const text = inputText.value;
    charCount.textContent = text.length;

    if (text.length > 280) {
        const exceededText = text.substring(280);
        const normalText = text.substring(0, 280);
        
        highlightedText.innerHTML = `${normalText}<span class="exceeded">${exceededText}</span>`;
    } else {
        highlightedText.innerHTML = '';
    }
}
