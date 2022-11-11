// Declares a variable called text
let text = "If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told DB about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was The Secret Goldfish. It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood";

// declaire a array named words, containing each word from text
//from the text split arpart at the spaces
let words = text.split(" ");

// make words all lowercase
words = words.map( word => word.toLowerCase() );

// serches the whole array trying to fine . and , and removes them
words = words.map( function(word){
    return word
        .replaceAll(".", "")    //replaces all . with nothing
        .replaceAll(",", "");   // replaces all , with nothing
});

// declares a empty object
let lookup = {};

// looping through all the words
for ( let i = 0; i < words.length; i++ ){
    let word = words[i];

    // returns the first chacter in a string
    let firstLetter = word.charAt(0);

    // if lookup does not contain an array for a given letter.
    //then create one
    if ( !lookup.hasOwnProperty(firstLetter) ){
        lookup[firstLetter] = [];
    }

    // will add new words to the object if not there
    lookup[firstLetter].push(word);
}

// looking up the first word in the object
for ( firstLetter in lookup ){
   let entry = lookup[firstLetter];

   // filtering an item from the index
   entry = entry.filter((item, index) => entry.indexOf(item) === index);

   // sorting the entry in the object
   entry = entry.sort();

   // looking for the forst word in entry
   lookup[firstLetter] = entry;
}

// returning a object in and the value of the object
for ( letter of Object.keys(lookup).sort() ){
    console.log(letter, lookup[letter]);
}
