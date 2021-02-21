class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }
}

function  main(arr) {
    // get the first element in the array 'songs number in n'
    let n = arr.shift();
        
    // get the typeList of songs
    let playList = arr.pop();

    // create empty array to store my songs in it
    let songs = [];

    // Iterate throughthe input array to create the songs objsects
    // And store them in the songs Array
    arr.forEach((song) => {
        // create an array for each song from a string seperated by '_'
        let songArr = song.split('_');
        // Get the song name, time and typeList
        let [typeList, name, time] = song.split('_');
        // create a song object using the Song lass and push it inside songs array
        songs.push(new Song(typeList, name, time))
    });
    // if playlist is all
    if (playList == 'all') {
        // print all the song names inside the songs array
        songs.forEach(song => console.log(song.name));
    }   else {
        // if the playlist has a specific playlist to play 
        // search and filter the playlist songs 
        let filteredList = songs.filter(song => song.typeList == playList)
        // print the filtered playlist songs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        filteredList.forEach(song => console.log(song.name))
    }
}

main([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])