// ? oop - abstraction

// * idea
// * implemenation pore krbo

/*
   1. interface
   2. abstract class
*/

// * idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// // * implementation
// class MusicPlayer implements MediaPlayer {
//   play() {
//     console.log("Playing music....");
//   }
//   pause() {
//     console.log("Music paused... ");
//   }
//   stop() {
//     console.log(`Music stopped`);
//   }
// }

// const FajlaPlayer = new MusicPlayer();
// FajlaPlayer.play();

// * idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

// * implementation
class FajlaPlayer extends MediaPlayer {
  play() {
    console.log("Playing music....");
  }
  pause() {
    console.log("Music paused... ");
  }
  stop() {
    console.log(`Music stopped`);
  }
}

const FajlaPlayer1 = new FajlaPlayer();
FajlaPlayer1.play();
