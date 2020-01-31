export function adventureScore(choice, adventureId, user) {
    user.fun += choice.fun;
    user.price += choice.price;
    user.completed[adventureId] = true;
}


