setInterval(() => {
    const feedNodes = Array.from(document.querySelectorAll('[data-pagelet*="FeedUnit"]'));
    const profileNode = document.querySelector('[data-pagelet*="ProfileTimeline"]');

    const viewableNodes = profileNode ? Array.from(profileNode.childNodes) : Array.from(feedNodes)

    const wordleNodes = viewableNodes.filter(n => {
        let text = n.innerText.toLowerCase();
        return text.includes("wordle") || text.includes("byrdle") || text.includes("nerdle")
    })
    console.log("Dewordle: removed " + wordleNodes.length + " wordle-like nodes")
    wordleNodes
        .forEach(n => n.remove());
}, 1000)
console.log(" ********************************* ")
console.log(" *                               * ")
console.log(" *   Enjoy a wordle free world   * ")
console.log(" *                               * ")
console.log(" ********************************* ")
