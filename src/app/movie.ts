export class Movie {

  id: number;
  title: string;
  thumbnailUrl: string;
  description: string;
  voteAvg: number;
  voteCount: number;

  public clone(): any {
    const cloneObj = new Movie();
    Object.assign(cloneObj, this);
    return cloneObj;
  }
}
