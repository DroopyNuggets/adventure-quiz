function createProfile = () => {
    const name = document.getElementById('name');
    const funLevel = document.getElementById('fun-level');
    const coolness = document.getElementById('coolness');

    // create getUser w/ JSON.parse
    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;

}

export default createProfile;