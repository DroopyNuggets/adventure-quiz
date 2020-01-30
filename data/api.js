function saveUser(user) {
    const json = JSON.stringify();
    localStorage.setItem('user', json);
}

saveUser();

function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

getUser();