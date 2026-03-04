# KittyCam

A browser-based photobooth app guided by a cat mascot. KittyCam walks you through a multi-step flow — permission, live camera, countdown, polaroid preview, caption, and download — all without a backend or account required.

Built for anyone who wants a fun, shareable polaroid-style photo in seconds.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 15 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Component variants | [class-variance-authority](https://cva.style) |
| Language | TypeScript 5 |
| Fonts | Gaegu, Noto Sans Mono (via `next/font/google`) |
| Photo capture | MediaStream API + Canvas API |
| Linting | ESLint 9 + typescript-eslint |

No external UI library. No backend. No authentication.

---

## Folder Structure

```
src/
├── app/                    # Next.js App Router root
│   ├── layout.tsx          # Root layout — fonts, metadata, LCP preload
│   ├── page.tsx            # Entry point, renders PhotoboothFlow
│   └── globals.css         # Tailwind base styles
│
├── components/
│   └── ui/                 # Shared, stateless UI primitives
│       ├── Button.tsx          # CVA-based button (primary / secondary variants)
│       ├── PolaroidFrame.tsx   # White frame container with optional caption slot
│       ├── CatSticker.tsx      # Cat mascot image (default / sad / camera variants)
│       └── FlipCameraIcon.tsx  # SVG icon for camera flip
│
├── constants/
│   └── photobooth.ts       # Canvas dimensions, develop animation delay
│
├── features/               # Self-contained feature modules
│   ├── landing/            # Welcome screen with yes/no interaction
│   ├── camera/             # Live camera feed, countdown, permission request
│   ├── photo/              # Polaroid preview (developing effect) and download
│   └── photobooth/         # Top-level flow orchestrator (stage machine)
│
├── lib/
│   └── utils.ts            # cn() — Tailwind class merging helper
│
└── types/
    ├── photobooth.ts       # Stage union type
    └── components.ts       # StickerVariant type

public/
└── images/
    └── stickers/           # Cat mascot WebP assets (default, sad, camera)
```

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (or your preferred package manager)
- A browser with camera access (Chrome, Firefox, Safari, Edge)

### Installation

```bash
git clone https://github.com/your-username/kittycam.git
cd kittycam
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Camera access requires a secure context. `localhost` qualifies by default, but if you test over a local network IP you will need HTTPS.

---

## Environment Variables

KittyCam has no environment variables. All photo processing happens in the browser using the MediaStream and Canvas APIs — no server, no API keys.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run type-check` | Run the TypeScript compiler without emitting files |

---

## How It Works

KittyCam manages a linear stage machine inside `PhotoboothFlow`:

```
landing → permission → camera → preview → download
```

1. **Landing** — The cat mascot greets the user and asks for consent.
2. **Permission** — Requests browser camera access via `getUserMedia`. Stops the stream immediately after the permission check; the camera feature re-opens it.
3. **Camera** — Streams live video inside a polaroid frame. A 3-second countdown precedes capture. The image is mirrored horizontally using Canvas so it matches what the user sees.
4. **Preview** — Displays the captured photo with a 1.8-second blur-fade "developing" effect before allowing the user to proceed.
5. **Download** — Lets the user add a caption, then renders the polaroid (800 × 1000 px) to a canvas and triggers a PNG download.

---

## Contributing

1. Fork the repository and create a branch from `main`.
2. Run `npm run type-check` and `npm run lint` before committing — the project enforces strict TypeScript and ESLint rules.
3. Keep components stateless where possible. Feature-specific logic belongs in the relevant `features/` module, not in `components/ui/`.
4. Open a pull request with a clear description of what changed and why.
