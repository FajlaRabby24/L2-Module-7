// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log(`play`);
//   }
//   pause(): void {
//     console.log("pause");
//   }
//   stop(): void {
//     console.log("stop");
//   }
// }

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class FajlaPlayer extends MediaPlayer {
  play(): void {
    console.log(`play`);
  }
  pause(): void {
    console.log("pause");
  }
  stop(): void {
    console.log("stop");
  }
}

const FajlaPlayer1 = new FajlaPlayer();
FajlaPlayer1.play();
