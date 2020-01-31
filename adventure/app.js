// get form from DOM
// 
// create a label for each choice with span and input inside
    // get the data for the correct question using the query parameter and gindById
    // for each option/choice, render a radio button
        // make a label
        // make a span
        // add the choice.description to the span
        // make an input of
            // type: radio
            // name: question
    // for the form, add an event listener on 'submit'
        // in the event listner get the formData
        // use the user selection in the form data to update the dom and change state
        // call the question completed in state, and redirect to list page

import { getUser, saveUser } from './data.js';

const user = getUser();