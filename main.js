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

//Function should return something like:
//"The *cat* is *running around* and *made a mess* in *the kitchen*"
const jokeMessage = () => {
    const who = ['cat', 'dog', 'bird', 'grandma', 'father', 'child', 'car', 'forklift', 'bunny', 'robot'];
    const didWhat = ['running around', 'falling', 'screaming', 'playing with sticks', 'thinking out loud', 'taking a break', 'watching tv', 'reading', 'strumming some chords','learning to code', 'making a mess', 'cleaning up', 'playing guitar'];
    const where = ['the codecademy', 'the kindergarden', 'the frontyard', 'the kitchen', 'your bed', 'the internet', 'the car', 'the bathroom'];
    let didWhat1 = getRandElement(didWhat);
    let didWhat2 = getRandElement(didWhat.filter(verb => verb !== didWhat1));
    return `The ${getRandElement(who)} is ${didWhat1} and ${didWhat2} in ${getRandElement(where)}.`
}

console.log(jokeMessage());
console.log(jokeMessage());
console.log(jokeMessage());
console.log(jokeMessage());
console.log(jokeMessage());
console.log(jokeMessage());
