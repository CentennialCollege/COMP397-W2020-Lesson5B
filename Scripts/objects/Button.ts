module objects 
{
    export class Button extends createjs.Bitmap
    {
        // constructor
        constructor(imagePath:string, x:number, y:number, isCentered:boolean)
        {
            super(imagePath);

            if(isCentered)
            {
                this.regX  = 75;
                this.regY = 25;
            } 

            this.x = x;
            this.y = y;

            this.on("mouseover", this.HoverOver);
            this.on("mouseout", this.HoverOut);
        }

        // methods
        HoverOver():void
        {
            this.alpha = 0.7;
        }

        HoverOut():void
        {
            this.alpha = 1.0;
        }
    }
}