interface Audio {
	play(): any;
}

class Song implements Audio {
	constructor(private artist: string, private title: string) {
	}

	play() {
		console.log('Playing ' + this.title + ' by ' + this.artist);
	}

	static Comparer(a: Song, b: Song) {
		if(a.title === b.title) {
			return 0;
		}

		return a.title > b.title ? -1 : 1;
	}
}

class Playlist {
	constructor(public songs: Audio[]) {
	}

	play() {
		var song = this.songs.pop();
		song.play();
	}

	sort() {
        this.songs.sort(Song.Comparer);
	}
}

class RepeatingPlaylist extends Playlist {
	private songIndex = 0;

	constructor(songs: Song[]) {
		super(songs);
	}

	play() {
		this.songs[this.songIndex].play();

		this.songIndex++;

		if(this.songIndex >= this.songs.length) {
			this.songIndex = 0;
		}
	}
}

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

