// function main(arr) {
//     // Filter array by name, director, and date 
//     let addMovie = arr.filter(arr => {

//         arr.includes('addMovie')
//     })
//     let directedBy = arr.filter(arr => arr.includes('directedBy'))
//     let onDate = arr.filter(arr => arr.includes('onDate'))
//     console.log(addMovie)
//     // console.log(addMovie)
//     // console.log(directedBy)
//     // console.log(onDate)

//     // Create a new object 
//     // function Movie(name) {
//     //     this.movieName = name;
//     //     this.director = name.length;
//     //     this.date =
//     //         this.printName = function () {
//     //             return `Name: ${this.name} -- Person Number: ${this.number}`
//     //         }
//     // }


// }

function main(arr) {
    let movies = [];
    arr.forEach(entry => {
        if (entry.includes('addMovie')) {
            // Add a new movie to my array
            let movieName = entry.split('ddMovie ')[1];
            let movie = {
                name: movieName
            };
            movies.push(movie);
        } else if (entry.includes('directedBy')) {
            // Update the movie director
            let [movieName, directorName] = entry.split(' directedBy ');
            let movieObj = movies.find(movie => movie.name === movieName);
            if (movieObj) {
                // update the movie
                // get the movie index inside the array
                let movieIndex = movies.findIndex(movie => movie.name === movieObj.name);
                movieObj.director = directorName;
                movies.splice(movieIndex, 1, movieObj);
            }
        } else if (entry.includes('onDate')) {
            // Update the movie date
            // Update the movie director
            let [movieName, movieDate] = entry.split(' onDate ');
            let movieObj = movies.find(movie => movie.name === movieName);
            if (movieObj) {
                // update the movie
                // delete the movie
                let movieIndex = movies.findIndex(movie => movie.name === movieObj.name);
                // Add the update
                movieObj.date = movieDate;
                movies.splice(movieIndex, 1, movieObj);
            }
        }
    });
    movies.forEach(movie => {
        if (movie.director && movie.name && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}



main(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedByRob Cohen'])