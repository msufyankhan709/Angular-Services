
export class Logger{
  public log(message:string){
    console.log(message);
  }
}
export const simpleLogger={
  log:(message:string)=> {
    console.log("simple logger",message);
  }
} 