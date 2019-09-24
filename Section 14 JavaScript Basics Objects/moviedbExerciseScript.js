var movies = [
    {
        title: "War of the Worlds",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "StarWars",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    }
]

movies.forEach(function(movie) {
    var print = constructString(movie);
    console.log(print);
});

function constructString(movie) {
    var string;
    if (movie.hasWatched) {
        string = 'You have watched "' + movie.title + '" - ' + movie.rating + ' stars';
    } else {
        string = 'You have not seen "' + movie.title + '" - ' + movie.rating + ' stars';
    }
    return string;
}