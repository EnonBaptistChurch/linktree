# 🌿 My Linktree — 11ty + Tailwind

A self-hosted linktree built with Eleventy (11ty) and Tailwind CSS.
Tailwind watches your templates and rebuilds automatically as you add classes.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open **http://localhost:8080**

---

## 📁 Project Structure

```
linktree/
├── src/
│   ├── _data/
│   │   └── profile.json      ← ✏️  Edit YOUR links & profile here
│   ├── _includes/
│   │   └── base.njk          ← HTML shell (body bg, fonts, etc.)
│   ├── css/
│   │   ├── input.css         ← Tailwind directives (don't touch)
│   │   └── output.css        ← Auto-generated (don't touch)
│   └── index.njk             ← The page layout
├── .eleventy.js
├── tailwind.config.js
└── package.json
```

---

## ✏️ Customising Your Profile

Edit **`src/_data/profile.json`**:

```json
{
  "name": "Your Name",
  "handle": "@yourhandle",
  "bio": "Creator · Developer · Human",
  "avatar": "https://your-avatar-url.com/photo.jpg",
  "links": [
    {
      "label": "🌐 My Website",
      "url": "https://yoursite.com",
      "sublabel": "yoursite.com"
    }
  ]
}
```

---

## 🎨 Styling with Tailwind

Tailwind JIT is enabled — just add classes anywhere in `src/**/*.njk` and the
watcher will rebuild `output.css` automatically.

**Change the background** — edit `base.njk`, find the `<body>` tag:
```html
<!-- e.g. swap to a warm sunset -->
<body class="... bg-gradient-to-br from-orange-900 via-rose-800 to-amber-900 ...">
```

**Change a link card** — edit the `<a>` in `index.njk`:
```html
class="... bg-white/10 hover:bg-white/20 rounded-2xl ..."
<!-- swap rounded-2xl → rounded-none for a sharp look -->
<!-- swap bg-white/10 → bg-emerald-500/20 for a tinted card -->
```

---

## 📦 Build for Production

```bash
npm run build
```

Output lands in `_site/`. Deploy that folder to Netlify, Vercel, GitHub Pages, etc.

---

## 🌐 Deploy to Netlify (free)

1. Push this folder to a GitHub repo
2. Connect repo to [netlify.com](https://netlify.com)
3. Set **Build command**: `npm run build`
4. Set **Publish directory**: `_site`
5. Done ✅
