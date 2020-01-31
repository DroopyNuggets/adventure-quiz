import { getUser } from '../data/api.js';


export function loadProfile() {
    const name = document.getElementById('name');
    const fun = document.getElementById('fun-level');
    const price = document.getElementById('price');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    fun.textContent = user.fun;
}