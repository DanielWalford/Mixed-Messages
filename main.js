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

//*In 5 days* you will *meet* *your future husband*
const fortuneMessage = () => {
    const timeframe = ['Tomorrow', 'In 3 days', 'Next week', 'Next month', 'Next year']
    const action = ['meet', 'lose', 'find']
    const outcome = ['your future husband', 'your next job', 'dream home', 'your riches']

    return `${getRandElement(timeframe)} you will ${getRandElement(action)} ${getRandElement(outcome)}.`
}
console.log(fortuneMessage())
console.log(fortuneMessage())
console.log(fortuneMessage())

const outputACIIArt = () => {
    const art = {
        smiley: [],
        smile: [],
        sad: [],
        bigSmiley: []
    }
    
art.smiley[0] =  ", ; ,   .-'''''-.   , ; ,"
art.smiley[1] =  "\\|/  .'         '.  \|//"
art.smiley[2] =  " \-;-/   ()   ()   \-;-/"
art.smiley[3] =  " // ;               ; \\"
art.smiley[4] =  "//__; :.         .; ;__\\"
art.smiley[5] =  "`-----\'.'-.....-'.'/-----'"
art.smiley[6] =  "      '.'.-.-,_.'.'"
art.smiley[7] =  "        '(  (..-'"
art.smiley[8] =  "          '-'"

art.smile[0] = "     _.-'''''-._"
art.smile[1] = "   .'  _     _  '."
art.smile[2] = "  /   (o)   (o)   \\"
art.smile[3] = " |                 |"
art.smile[4] = " |  \\           /  |"
art.smile[5] = "  \\  '.       .'  /"
art.smile[6] = "   '.  `'---'`  .'"
art.smile[7] = "     '-._____.-'"


art.sad[0] = "      .-\"\"\"\"\"\"-."
art.sad[1] = "    .'          '."
art.sad[2] = "   /   O      O   \\"
art.sad[3] = "  :           `    :"
art.sad[4] = "  |                |"  
art.sad[5] = "  :    .------.    :"
art.sad[6] = "   \\  '        '  /"
art.sad[7] = "    '.          .'"
art.sad[8] = "      '-......-'"


art.bigSmiley[0]   = "                               oooo$$$$$$$$$$$$oooo "
art.bigSmiley[1]   = "                         oo$$$$$$$$$$$$$$$$$$$$$$$$o "
art.bigSmiley[2]   = "                      oo$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o         o$   $$ o$ "
art.bigSmiley[3]   = "      o $ oo        o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$o       $$ $$ $$o$ "
art.bigSmiley[4]   = "      oo $ $ $      o$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$o       $$$o$$o$ "
art.bigSmiley[5]   = "       $$$$$$o$    o$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$o    $$$$$$$$ "
art.bigSmiley[6]   = "      $$$$$$$    $$$$$$$$$$$      $$$$$$$$$$$      $$$$$$$$$$$$$$$$$$$$$$$ "
art.bigSmiley[7]   = "      $$$$$$$$$$$$$$$$$$$$$$$    $$$$$$$$$$$$$    $$$$$$$$$$$$$$     $$$ "
art.bigSmiley[8]   = "       $$$    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$      $$$ "
art.bigSmiley[9]   = "      $$$   o$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$      $$$o "
art.bigSmiley[10]  = "       o$$    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$       $$$o "
art.bigSmiley[11]  = "       $$$     $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   $$$$$$ooooo$$$$o "
art.bigSmiley[12]  = "        o$$$oooo$$$$$  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$   o$$$$$$$$$$$$$$$$$ "
art.bigSmiley[13]  = "        $$$$$$$$ $$$$   $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     $$$$ "
art.bigSmiley[14]  = "                  $$$$    $$$$$$$$$$$$$$$$$$$$$$$$$$$$      o$$$ "
art.bigSmiley[15]  = "                  $$$o        $$$$$$$$$$$$$$$$$$$$$          $$$ "
art.bigSmiley[16]  = "                    $$$o           $$££$$$$$$              o$$$ "
art.bigSmiley[17]  = "                    $$$$o                 oo             o$$$ "
art.bigSmiley[18]  = "                     $$$$o      o$$$$$$o$$$$o        o$$$$  "
art.bigSmiley[19]  = "                         $$$$$oo      $$$$o$$$$$o    o$$$$ "
art.bigSmiley[20]  = "                          $$$$$oooo   $$$o$$$$$$$$$    "
art.bigSmiley[21]  = "                              $$$$$$$oo $$$$$$$$$$ "  
art.bigSmiley[22]  = "                                       $$$$$$$$$$$ "       
art.bigSmiley[23]  = "                                        $$$$$$$$$$$$ "       
art.bigSmiley[24]  = "                                           $$$$$$$$$$  "      
art.bigSmiley[25]  = "                                              $$$     "


const keys = Object.keys(art);
return art[getRandElement(keys)].reduce((acc, element) => {
    acc = acc + '\n' + element;
    return acc;
});

}

console.log(outputACIIArt())
