export function createAdventureLink(adventure) {
    const link = document.createElement('a');
    link.classList.add('adventure');

    link.href = '../adventure/?id=' + adventure.id;

    link.textContent = adventure.title;

    return link;
}