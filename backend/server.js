const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// delay parameter: any URL can add ?delay=2000
app.use((req, res, next) => setTimeout(next, Number(req.query.delay) || 0));

const read = () => JSON.parse(fs.readFileSync('data.json', 'utf8'));
const write = (d) => fs.writeFileSync('data.json', JSON.stringify(d, null, 2));

app.post('/login', (req, res) => {
  const { userId, password, role } = req.body;
  const user = read().users.find(
    u => u.userId === userId && u.password === password && u.role === role
  );
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ userId: user.userId, name: user.name, role: user.role });
});

app.get('/records', (req, res) => {
  const all = read().records;
  res.json(req.query.role === 'Admin' ? all : all.filter(r => r.access === 'General User'));
});

app.get('/users', (req, res) => res.json(read().users));

app.post('/users', (req, res) => {
  const d = read();
  d.users.push(req.body);
  write(d);
  res.json(req.body);
});

app.delete('/users/:userId', (req, res) => {
  const d = read();
  d.users = d.users.filter(u => u.userId !== req.params.userId);
  write(d);
  res.json({ deleted: req.params.userId });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));