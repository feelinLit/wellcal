let water_progress = document.getElementById('water-progress');

const water_btns = document.querySelectorAll('.fancy-btn__water');
for (let i = 0; i < water_btns.length; i++) {
    const btn = water_btns[i];
    water_btns[i].onclick = function() {
        water_progress.textContent = Number(water_progress.textContent) + Number(btn.textContent);
    }
}
