const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

// Buat bubble saat kursor bergerak
window.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 3; i++) { // jumlah bubble per gerakan
    bubbles.push({
      x: e.clientX + (Math.random() * 10 - 5),
      y: e.clientY + (Math.random() * 10 - 5),
      radius: Math.random() * 8 + 2,
      opacity: 1,
      speedY: Math.random() * 1 + 0.5,
      speedX: (Math.random() - 0.5) * 1.5,
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // gambar setiap bubble
  for (let i = 0; i < bubbles.length; i++) {
    const b = bubbles[i];
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
    ctx.fill();
    
    // pergerakan bubble
    b.y -= b.speedY;
    b.x += b.speedX;
    b.opacity -= 0.02; // perlahan menghilang
  }
  
  // hapus bubble yang sudah hilang
  bubbles = bubbles.filter(b => b.opacity > 0);
  
  requestAnimationFrame(animate);
}

animate();

// Update ukuran canvas jika di-resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


// Scroll halus ke contact saat tombol Hire Me diklik
document.getElementById("hireBtn").addEventListener("click", function() {
document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

