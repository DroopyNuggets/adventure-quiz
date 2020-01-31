import { getUser } from '../data/api.js';
import { adventures } from '../data/quiz-data.js';
import { loadProfile } from '../common/load-profile.js';
import { createAdventureLink } from './create-adventure-link.js';

loadProfile();

const user = getUser();

const nav = document.getElementById('adventures');

for (let i = 0; i < adventures.length; i++) {
    const adventure = adventures[i];
    let adventureDisplay = null;
}