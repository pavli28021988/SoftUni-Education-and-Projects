/*function solve(width,height,color){
    let mega = {width,height,color};
    //color = color.replace(/^./, color[0].toUpperCase())
     //color = (color[0].toUpperCase() + color.slice(1))
    mega.getArea = () => {
        return mega.width * mega.height
    }
    return mega

    

    



    
}*/

function solve(w, h, c) {
    return {
        width: w,
        height: h,
        color: c[0].toUpperCase() + c.slice(1),
        calcArea: function () {
            return this.width * this.height
        },
    }
}


let rect = solve(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());


//  first letter UpperCase()

/*
let string = 'geeksforgeeks';
    console.log(string[0].toUpperCase() +
        string.slice(1));
}*/ 




