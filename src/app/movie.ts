import {environment} from '../environments/environment';

export class Movie {

  id: number;
  title: string;
  thumbnailUrl: string;
  description: string;
  voteAvg: number;
  voteCount: number;

  public getThumbnailUrl(highQuality: false) {
    // The thumbnail prefix is being retrieved from the environment and added to the thumbnail path.
    return (highQuality ? environment.thumbnailPrefixHighQ : environment.thumbnailPrefix)
      + this.thumbnailUrl;
  }

  public clone(): any {
    const cloneObj = new Movie();
    Object.assign(cloneObj, this);
    return cloneObj;
  }
}
