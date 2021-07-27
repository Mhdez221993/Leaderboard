class List {

    createMarkup(scores){
        return `<ul>
        ${scores.map(score => `<li>${score.name}: ${score.score}</li>`).join("\n")}
        </ul>`
    }

    sortScore(scores){
       return scores.sort((a,b) => a.score - b.score)
    }
}

export default List