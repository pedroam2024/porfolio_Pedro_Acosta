import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
})
```

Commit changes.

---

**2. Aprovechá y actualizá también el NODE_VERSION en Render**

El error dice que Node 18 está en end-of-life. En Render → tu servicio → **Environment** → cambiá:

| Key | Value |
|---|---|
| `NODE_VERSION` | `20` |

---

**3. También verificá que `index.html` esté en la raíz del repo**

Abrí el repo y confirmá que la estructura sea exactamente:
```
cv-pedro-acosta/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html        ← en la raíz, no dentro de src/
├── package.json
└── vite.config.js
