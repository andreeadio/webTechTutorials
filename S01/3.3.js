let occurences = (text, character) =>
    text.split(character).length - 1


console.log(occurences("sample text", "e"));