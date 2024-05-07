---
# try also 'default' to start simple
theme: apple-basic
info: |
  ## Slidev Starter Template
  Presentation slides for developers.
  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
layout: "statement"
src: ./pages/welcome.md
---

---
layout: section
transition: slide-up
src: ./pages/what-is-the-rpc-section.md
---

---
transition: slide-up
src: ./pages/what-is-the-rpc.md
---

---
transition: slide-up
src: ./pages/rpc-features.md
---

---
transition: slide-left
src: ./pages/rpc-calling.md
---

---
layout: section
transition: slide-up
src: ./pages/server-action-and-rpc-section.md
---

---
src: ./pages/server-action-example.md
---

---
transition: slide-up
src: ./pages/server-action-calling.md
---

---
layout: "statement"
src: ./pages/thanks.md
---
