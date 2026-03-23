class Vehicle {
    constructor(name, speed, weight) {
        this.name = name;
        this.speed = speed;
        this.weight = weight;
        this.position = 0;
    }

    render() {
        console.log(`Rendering vehicle: ${this.name} at position: ${this.position}`);
    }

    physicsUpdate(gravity) {
        // Simple physics calculation based on speed, weight and gravity
        let acceleration = (this.speed - this.weight * gravity) / this.weight;
        this.position += acceleration;
    }
}

// Example of creating a vehicle instance
const myVehicle = new Vehicle('Race Car', 150, 1200);
myVehicle.render();
myVehicle.physicsUpdate(9.8);
myVehicle.render();
