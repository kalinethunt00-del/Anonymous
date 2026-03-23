class PhysicsEngine {
    constructor(gravity, friction) {
        this.gravity = gravity;
        this.friction = friction;
    }

    applyGravity(object) {
        object.velocity.y += this.gravity;
    }

    applyFriction(object) {
        object.velocity.x *= (1 - this.friction);
    }

    checkCollision(objectA, objectB) {
        // Simple AABB collision detection
        if (objectA.x < objectB.x + objectB.width &&
            objectA.x + objectA.width > objectB.x &&
            objectA.y < objectB.y + objectB.height &&
            objectA.height + objectA.y > objectB.y) {
            return true;
        }
        return false;
    }
}

// Usage example
const physics = new PhysicsEngine(9.8, 0.1);

// Object structure example
const car = { velocity: { x: 0, y: 0 }, x: 0, y: 0, width: 50, height: 20 };
const ground = { x: 0, y: 100, width: 800, height: 20 };

// Applying physics
physics.applyGravity(car);
physics.applyFriction(car);
const isColliding = physics.checkCollision(car, ground);
console.log('Collision:', isColliding);