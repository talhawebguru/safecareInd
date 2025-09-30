# 🤖 GitHub Copilot Instructions

These are custom instructions for Copilot to improve code suggestions in this project.

---

## 🛠 Stack & Tools

- Framework: **Next.js** (App Router)
- Styling: **Tailwind CSS v4**
- Animations: **Framer Motion**
- Icons: **React Icons**

---

## ✨ Coding Rules

- Use **React functional components** with arrow functions.
- Use **camelCase** for variables and functions.
- Break large components into **smaller reusable components**.
- Avoid global variables and inline styles.
- Keep each component in a **separate file**. 
---

## 🌐 Project Reference Site

Use the following website as the primary design and animation reference:

🔗 https://demo.awaikenthemes.com/primecare/demo2/

- Match layout structure and UI hierarchy
- Use similar Framer Motion animations for entrances, hover effects, etc.
- Match transitions, delays, and fluid movements
- Use semantic HTML and Tailwind CSS for all sections
- Ensure responsive design matches the reference site
- Use similar color schemes and typography

---

## 🌀 Animation (Framer Motion)

- Use **Framer Motion** for all animations.
- Animate entrances with `motion.div`.
- Use `AnimatePresence` for exit animations.

### ✅ Framer Motion Import Rules (v11+):

- For **Client Components**, import like:

```js
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
```

- For **Server Components**, import like:
```js
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react/server";
```


## 📐 Layout Pattern

Always wrap page or section content like this:

```jsx
<section>
  <Container>
    {children}
  </Container>
</section>
```

- `<section>` controls background, layout boundaries.
- `<Container>` applies consistent max-width and horizontal padding.

---

## 🧱 Component Naming

- Name components based on their role/section: `HeroSection`, `PricingCard`, `ServiceBlock`.
- Avoid generic names like `Box`, `Widget`, or `Layout1`.

---

## 📂 Component Folder Structure

- Group components by **feature**, not type:

```
/components/
  /home/
    HeroSection.jsx
    Testimonials.jsx
  /common/
    Button.jsx
    Container.jsx
```

---

## 📸 Image Handling

- Use Next.js `<Image>` component for all images.
- Always include `alt` attributes for accessibility.
- Set `priority` on Hero component images.

---

## 🧩 Icon Usage

- Use `react-icons` for all iconography.
- Import specific icons, not entire packages:

```js
import { FaInstagram } from 'react-icons/fa';
```

- Avoid inline SVGs unless dynamic or animated.

---

## 💡 Tailwind Utility Philosophy

- Use Tailwind’s utility classes over custom CSS.
- Avoid custom class names unless necessary.
- Apply spacing, color, border, and typography utilities consistently.

---

## ♿ Accessibility Guidelines

- Use semantic tags (`<main>`, `<nav>`, `<section>`, `<footer>`, etc.).
- Include descriptive `alt` text for images.
- Use `aria-*` attributes where needed.
- Ensure interactive elements are keyboard-navigable.

---