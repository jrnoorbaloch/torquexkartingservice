Editorial top navigation — 64px tall, hairline bottom border, brand wordmark left, uppercase 0.65px-tracked menu, utilities right. Active item renders in Rosso Corsa.

```jsx
<TopNav
  active="Models"
  logoSrc="/assets/logo-wordmark.svg"
  onSelect={(label) => navigate(label)}
/>
```

`theme="dark"` (default) for hero pages; `theme="light"` for white editorial bands (use `logo-wordmark-dark.svg`). Omit `logoSrc` to render the built-in TORQUE X text wordmark. Collapses to a hamburger below 768px in production.
