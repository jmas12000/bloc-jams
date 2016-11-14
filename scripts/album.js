var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
};
var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
};
var albumMoore= {
    title: "The Coder",
    artist: "Jeff Moore",
    label: "Moore Records",
    year: "2016",
    albumArtUrl: "http://image.shutterstock.com/display_pic_with_logo/842983/297062984/stock-photo-abstract-blue-binary-figure-code-d-line-background-of-information-technologies-297062984.jpg" ,
    songs: [
        { title: "What is a Function Anyways?", duration: "5:01"},
        { title: "Object?, I thought it was an Array?", duration: "12:09"},
        { title: "Close this!", duration: "3:56"},
        { title: "OK, I get it now", duration: "10:23"},
        { title: " Assignment?, I thought it was a Checkpoint!", duration: "4:09"},
        { title: "Oh, maybe I don't get it yet?", duration: "15:08"},
        { title: "Lets use it before I forget it again", duration: "4:26"}
    ]
};
var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class= "album-view-song-item">'
    +   '   <td class= "song-item-number">' + songNumber + '</td>'
    +   '   <td class= "song-item-title">' + songName + '</td>'
    +   '   <td class= "song-item-duration">' + songLength + '</td>'
    +   '</tr>'
    ;
    
    return template;
};
var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
var setCurrentAlbum = function(album) {
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     albumSongList.innerHTML = '';
 
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 
 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     var allAlbums = [albumPicasso, albumMarconi, albumMoore ]
     var index = 1;
     albumImage.addEventListener("click", function() {
         setCurrentAlbum(allAlbums[index]);
         index++;
         if(index == allAlbums.length) {
             index = 0;
         }
     });
 };

        