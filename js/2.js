window.addEventListener('load', () => {
    const div = document.getElementById('div');
    const n = 12;
    for (let i = 0; i < n; i++) {
        const span = document.createElement('span');
        span.innerText = i % 2 === 0 ? '-' : '+';
        div.appendChild(span);
    }
});
