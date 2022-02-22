let sentence1 = "Hogy a macska rúgja meg, hát ezt hogyan csináltam"

function cleanse(sentence, words){
    let result = ""
    let wordsFromSentence = sentence1.split(" ")

    for (const wordFromSentence of wordsFromSentence) {
        let isCleanWord = true
        for (const word of words) {
            if (word === wordFromSentence) {
                isCleanWord = false
            }
        }
        if (isCleanWord === true) {
            result += `${wordFromSentence} `
        } else {
            result += "***** "
        }

    }
    return result
}

console.log(cleanse(sentence1, ["macska", "hát"]) );