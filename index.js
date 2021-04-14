class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(newDiam){
        this.radius = newDiam / 2
    }

    get circumference(){
        return (this.radius * 2) * Math.PI
    }

    set circumference(newCircum){
        this.radius = newCircum / (Math.PI * 2)
    }

    get area(){
        return (this.radius**2) * Math.PI
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea / Math.PI)
    }
}