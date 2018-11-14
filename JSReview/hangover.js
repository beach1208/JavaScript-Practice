//JS is a single-threaded, synchronous language.
//A function that takes a long time to run will cause a page to become unresponsive

//JS has functions that act Aysynchronously

function hang(sec = 5) {
    const doneAt = Date.now() + sec * 1000;
    while (Date.now() < doneAt) {};
}
hang()