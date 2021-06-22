const getMixedMessage = () =>{
    const topic = Math.floor(Math.random()*3);
    let message = undefined;
    switch(topic){
        case 0:
            message = jokeMessage();
            break;
        case 1:
            message = fortuneMessage();
            break;
        case 2:
            message = outputACIIArt();
            break;
    }
    console.log(message);
}

//Get a random element from an array
const getRandElement = (array) => {
    return array[Math.floor(Math.random()*array.length)];
}
