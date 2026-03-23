// terrain.js

class Terrain {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.terrainData = [];
        this.generateTerrain();
    }

    generateTerrain() {
        const amplitude = 50; // Height variation
        const frequency = 0.01; // Frequency of hills and valleys
        for (let x = 0; x < this.width; x++) {
            const y = Math.sin(frequency * x) * amplitude + this.height / 2;
            this.terrainData.push({ x, y });
        }
    }

    render(context) {
        context.beginPath();
        context.moveTo(0, this.terrainData[0].y);
        for (let point of this.terrainData) {
            context.lineTo(point.x, point.y);
        }
        context.lineTo(this.width, this.height);
        context.lineTo(0, this.height);
        context.closePath();
        context.fillStyle = '#8B4513'; // Brown color for terrain
        context.fill();
    }
}

export default Terrain;