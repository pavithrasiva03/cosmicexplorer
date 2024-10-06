// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create planets
const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
const planetMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
scene.add(planet);

// Create orbits
const orbitGeometry = new THREE.RingGeometry(2.5, 2.55, 64);
const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
scene.add(orbit);

// Position camera
camera.position.z = 5;

// Animation function
function animate() {
    requestAnimationFrame(animate);
    planet.rotation.y += 0.01;  // Rotate the planet
    renderer.render(scene, camera);
}
animate();

// Adjust on window resize
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
