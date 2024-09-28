import { renderCards } from "./Scripts/ui.js";
let data;

async function fetchMenu() {
    const res = await fetch("db.json");
    data = await res.json();
}

window.addEventListener("DOMContentLoaded", () => {
    fetchMenu().then(() => renderCards(data.menu));
});

const inputs = document.querySelectorAll("#buttons input");
inputs.forEach((input) => {
    input.addEventListener("change", () => {
        const selected = input.id;

        if (selected === "all") {
            renderCards(data.menu);
        } else {
            const filtred = data.menu.filter((i) => i.category === selected);
            renderCards(filtred);
        }
    });
})