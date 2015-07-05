var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Song = (function () {
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    Song.Comparer = function (a, b) {
        if (a.title === b.title) {
            return 0;
        }
        return a.title > b.title ? -1 : 1;
    };
    return Song;
})();
var Playlist = (function () {
    function Playlist(songs) {
        this.songs = songs;
    }
    Playlist.prototype.play = function () {
        var song = this.songs.pop();
        song.play();
    };
    Playlist.prototype.sort = function () {
        this.songs.sort(Song.Comparer);
    };
    return Playlist;
})();
var RepeatingPlaylist = (function (_super) {
    __extends(RepeatingPlaylist, _super);
    function RepeatingPlaylist(songs) {
        _super.call(this, songs);
        this.songIndex = 0;
    }
    RepeatingPlaylist.prototype.play = function () {
        this.songs[this.songIndex].play();
        this.songIndex++;
        if (this.songIndex >= this.songs.length) {
            this.songIndex = 0;
        }
    };
    return RepeatingPlaylist;
})(Playlist);
var songs = [
    new Song('Bushbaby', 'Megaphone'),
    new Song('Sohnee', 'Shatter'),
    new Song('Delays', 'One More Lie In'),
    new Song('Goober Gun', 'Stereo'),
    new Song('Get Amped', 'Celebrity')
];
console.log("Playlist...");
var playListSongs = songs.slice();
var playlist = new Playlist(playListSongs);
playlist.play();
playlist.sort();
playlist.play();
console.log("RepeatingPlaylist...");
playlist = new RepeatingPlaylist(songs);
for (var count = 0; count <= songs.length; count++) {
    playlist.play();
}
