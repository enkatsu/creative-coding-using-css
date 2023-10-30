// https://twitter.com/amagitakayosi/status/1718018865786237378

window.addEventListener('load', () => {
    const text = '+-+-+-+-'.toUpperCase();
    const div = document.getElementById('div');
    for (let y = 0; y < text.length; y++) {
        const row = document.createElement('div');
        for (let i = 0; i < text.length; i++) {
            const c = text[(i + y) % text.length];
            const span = document.createElement('span');
            span.innerText = c;
            row.appendChild(span);
        }
        div.appendChild(row);
    }
});
