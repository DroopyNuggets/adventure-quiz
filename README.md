# adventure-quiz

get user data and store it in local storage
render metadata to page
    quest detail page (quest-page)
    quest list page (map)
    quest results page pulls from metadata

write meta data (data rendering)
render state to page
    complete questions
    user profile
    results

function saveUser = () => {
    const newUser = JSON.stringify(user);
    localestorage.set()
}


for (let i = 0; i < words.length)


check local stoagew
if there are no questions left to answers . . .
redirect to the results page


if there are any questions left to answer . . .
render a list of REMAINING questions based on the metadata
    get the ul from the DOM
    get the questions from the meta data
        loop through the questions
        get a question from the array
            make an li for the question
            create li
            make an a tag for the li
            UNLESS the question is already completed (check local storage)/ If so, make a span
            add textcontent and and other properties to a tag
            add the href to the a tag with query params for the question
            append a tag to li
        append the question li to the ul