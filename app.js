// linear_stop.js
const maxWidth = 30;
let pos = 0;
const speed = 0.2;
let dxSpeed = 0.0;

const interval = setInterval(() => {
  // 1. Update State
  pos += speed + dxSpeed;

  // 2. Render the bar
  const bar = '█'.repeat(pos).padEnd(maxWidth, ' ');
  process.stdout.write(`\r[${bar}] Loading: ${Math.round((pos/maxWidth) * 100)}%`);

  // 3. STOP CONDITION (The "Check")
  if (pos >= maxWidth) {
    clearInterval(interval); // This kills the "heartbeat"
    console.log('\n\n✅ Task Complete. Server is ready.');
  }
  dxSpeed += 0.1;
}, 50); // 20 frames per second