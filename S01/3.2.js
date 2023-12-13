function occurences(text, character) {
    return text.split(character).length - 1
}

console.log(occurences("sample text", "e"));