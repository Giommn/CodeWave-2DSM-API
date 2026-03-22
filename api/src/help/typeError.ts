export class FullError extends Error{
        public readonly message: string
        public readonly statusCode:number
        public readonly code:string
        constructor(message:string,statusCode:number,code?:string){
          super(message)
          this.statusCode=statusCode
          this.code=code
        }

        
}

export class ValidatorError extends FullError{
  constructor(message:string,statusCode:number,code?:string){
    super(message,statusCode,code)
  }
}