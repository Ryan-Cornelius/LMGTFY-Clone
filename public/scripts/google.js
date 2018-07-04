

let typingIterator = 0;
let typing = setInterval(() => {
    search.value += displayQuery[typingIterator];
    typingIterator++;
    if(typingIterator >= displayQuery.length){
        clearInterval(typing);
        redirect()
        }
    },
    100);



function redirect() {
    window.location.replace('http://www.google.com/search?q=' + rawQuery)
}