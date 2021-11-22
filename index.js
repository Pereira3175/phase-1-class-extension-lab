class Polygon {
    constructor (array){
        this.array = array
    }
    get countSides() {
       return this.array.length
       console.log(this.countSides)
    }
    get perimeter() {
        let polyPerimeter = this.array
       
            return polyPerimeter.reduce((acc, value) => {
                return acc + value
            })
        }
    }



class Triangle extends Polygon {
    get isValid() {
        let sides = this.array
        if (sides[0] + sides[1] <= sides[2] || sides[0] + sides[2] <= sides[1] || sides[1] + sides[2] <= sides[0])
            return false 
        else
            return true
    } 

}

class Square extends Polygon {
    get area() {
        let sides = this.array
        return (sides[0] * sides [0])
    }

    get isValid() {
        let sides = this.array

        if (sides[0] == sides[1] && sides[2] && sides[3])
            return true
        else 
            return false

    }

}