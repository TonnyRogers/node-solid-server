import { uuid  } from 'uuidv4';

export class Post {
  public readonly id: string;
  public userId: string;
  title: string;
  body: string;
  
  
  constructor(props: Omit<Post,'id'>, id?: string) {
    Object.assign(this,props);
    
    if(!id){
      this.id = uuid();
    }
  }
}