
### 1. Introduction / Yeh Kya Hai?
- Explain what this feature is: a 3D interactive Baloo bear mascot that sits in the bottom-right corner of the portfolio
- What it does: idle animation, hover reaction, click reaction, pet button, random surprise every 12 seconds, frustrated if clicked 4 times
- Why it's cool for a portfolio

### 2. Folder Structure
Show the exact folder structure the user should have:
src/
├── assets/
│   └── baloo.glb          ← 3D model file
├── components/
│   └── BalooMascot.jsx    ← already created component
└── App.jsx                ← jahan import karna hai

### 3. Prerequisites — Pehle Yeh Karo
- Node.js installed hona chahiye
- React + Vite project already running hona chahiye
- Show exact npm install command:
```bash
  npm install three @react-three/fiber @react-three/drei
```
- Explain what each package does in one line

### 4. Step 1 — GLB File Setup
- User ne GLB file assets/ folder mein daali hai: `src/assets/baloo.glb`
- BUT Three.js ke liye GLB file `public/` folder mein honi chahiye
- Explain WHY: Vite assets/ folder ko optimize/hash karta hai, Three.js ko direct static path chahiye
- Show exact steps:
  1. `public/` folder mein `baloo.glb` copy karo (ya directly wahan rakh do)
  2. Path reference in code: `/baloo.glb` (no `src/assets/`)
- Common mistake: `src/assets/baloo.glb` path use karna — explain why this fails

### 5. Step 2 — BalooMascot.jsx Already Ready Hai
- Component already `src/components/BalooMascot.jsx` mein hai
- Show the complete component code with inline comments explaining each section:
  - useGLTF hook — GLB load karta hai
  - useAnimations hook — animations extract karta hai
  - Animation state machine (idle → hover → click → pet → poke)
  - useFrame — har frame floating effect
  - Speech bubbles with REACTIONS array
  - Pet button with pulse animation
  - Canvas setup with lights
  - useGLTF.preload for performance
- Explain the 21 animations available and which ones are being used:
  - `store_idle` → default lazy idle state
  - `combat_idle` → jab user hover kare
  - `special_a` → jab user click kare
  - `celebration` → jab user pet kare ([ PET ] button)
  - `damaged` → jab user 4 baar click kare (frustrated mode)
  - `special_b` → random surprise har 12 seconds

### 6. Step 3 — App.jsx Mein Import Karo
- Show exact import line
- Show exactly where to place `<BalooMascot />` — OUTSIDE the Router but INSIDE the main return, as the last child
- Show a before/after example of App.jsx
- Explain why it's placed outside Router: so it appears on every page

### 7. Step 4 — Run Karo aur Test Karo
- `npm run dev` command
- What to check:
  - Bottom-right corner mein Baloo dikhna chahiye
  - Hover karo → animation change honi chahiye
  - Click karo → speech bubble aana chahiye
  - [ PET ] button click karo → celebration animation
  - 4 baar click karo → frustrated reaction

### 8. Common Errors aur Fix

| Error | Reason | Fix |
|-------|--------|-----|
| `Failed to load /baloo.glb` | GLB file public/ mein nahi hai | File public/ folder mein daalo |
| `Cannot read properties of undefined (actions[name])` | Animation name mismatch | Console mein `names` array check karo |
| `THREE is not defined` | THREE import missing | `import * as THREE from 'three'` add karo |
| Model black/invisible | Lights missing ya wrong | ambientLight intensity badhao |
| Canvas transparent nahi | gl alpha missing | `gl={{ alpha: true }}` Canvas pe add karo |
| LoopOnce error | Using number instead of constant | `THREE.LoopOnce` use karo |

### 9. Animation Names — Full List
Show all 21 animation names from the GLB file in a table:
[0]  combat_idle      [7]  celebration      [14] dodge_loop
[1]  run              [8]  store_idle       [15] dodge_out
[2]  special_b        [9]  basic_left       [16] jump_back_end
[3]  die              [10] basic_right      [17] jump_back_idle
[4]  proc             [11] boss_intro       [18] jump_back_start
[5]  special_a        [12] damaged          [19] hit_small
[6]  stun             [13] dodge_in         [20] hit_big
- Explain how to use any of these to customize interactions
- Show code snippet for changing animations

### 10. Customization Guide
Show how to:
1. **Position change karo** — bottom-left pe le jaana ho toh kya change karein (`right: 16` → `left: 16`)
2. **Size change karo** — Canvas width/height aur scale value
3. **New reaction add karo** — REACTIONS array mein new string add karna
4. **New trigger add karo** — double click pe `run` animation play karna (example with code)
5. **Baloo ka size adjust karo** — `scale={1.4}` value change karna

### 11. How It Works — Simple Explanation
Explain in simple terms (no jargon):
- GLB = 3D model file with bones and animations baked in
- useGLTF = file load karta hai memory mein
- useAnimations = animations ko JavaScript se control karne deta hai
- Canvas = ek 3D viewport hai HTML ke andar
- Lights = bina lights ke model black dikhega
- useFrame = har animation frame pe code run karta hai (60fps)
- Suspense fallback = jab tak model load na ho, kuch nahi dikhta (no crash)