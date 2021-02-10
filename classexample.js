let day = "Saturday"

makeBreakfast = (personMakingBreakfast, mood)=>{
    let breakfastItems = []
    if(personMakingBreakfast!="Claudia")
    {
        switch (mood) {
            case "healthy":
                breakfastItems.push("muslei")
                break;
            case "sleepy":
                breakfastItems.push("coffee and respect")
                break;
            case "hungry":
                breakfastItems.push("eggs")
                breakfastItems.push("bacon")
                breakfastItems.push("hash browns")
                breakfastItems.push("sausages")
                breakfastItems.push("beans")
                breakfastItems.push("tomatoes")
                breakfastItems.push("mushrooms")
                breakfastItems.push("toast")
                breakfastItems.push("tea")
                break;
            default:
                breakfastItems.push("sad cereal");
        }
        breakfastItems.push("milk")
        return `${personMakingBreakfast} is having`//print out list of things
    }
    else{
        return "No she doesn't. She has it made in bed."
    }

}
console.log(makeBreakfast("Marco", "hungry"))

// function makeBreakfast(personMakingBreakfast,mood) {
//     let bowl = null
//     console.log(`Today is ${day}, and ${personMakingBreakfast}'s making breakfast`)
//     if (personMakingBreakfast == "Claudia") {
//         console.log("No she doesn't. She has it made in bed.")
//     }
//     switch (mood) {
//         case "healthy":
//             bowl = "muslei"    
//             break;
//         case "sleepy":
//             bowl = "coffee and respect"
//             break;
//         case "hungry":
//             bowl = "English Breakfast"
//         default:
//             bowl = "sad cereal";
//     }
//     bowl += " with milk"

//     return `${personMakingBreakfast} is having ${bowl}`


// }
