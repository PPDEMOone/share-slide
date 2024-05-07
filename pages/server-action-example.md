## Server Action Example

[📖 Next.js Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
<br />

<div class="scale-90 transform-origin-tl">

```ts {scale: 0.8}
// action.ts
"use server";

import os from "os";
export default async function exec() {
  // ...
  const cpus = os.cpus();

  console.log(cpus);
}
```

</div>

<div class="scale-90 transform-origin-tl">

```tsx
"use client";

import action from "./action";
export default function ClientComponent({ updateItem }) {
  return (
    <div
      onClick={() => {
        action();
      }}
    />
  );
}
```

</div>
