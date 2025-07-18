abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;

  getReelTime(): number {
    return 8;
  }
}

// const jk = new TakePhoto("Portrait", "California")
//! No objects of an abstract class can be created

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia Here");
  }
}

const instaObj = new Instagram("Portrait", "California", 5);
instaObj.getReelTime();
