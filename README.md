# @khoralabs/react (shadcn registry)

Self-managed [shadcn GitHub registry](https://ui.shadcn.com/docs/registry/github) for Khora React UI.

## Install

```bash
bunx shadcn@latest add khoralabs/react/<item>
# pin a tag/SHA:
bunx shadcn@latest add khoralabs/react/<item>#v0.1.0
```

Validate / list:

```bash
bunx shadcn@latest registry validate khoralabs/react
bunx shadcn@latest list khoralabs/react
```

## Layout

- `chat/` — chat UI (from former `@khoralabs/chat-react`)
- Domain clients stay on npm (`@khoralabs/chat`, …)

## Host Tailwind

Do **not** import a second `@import "tailwindcss"` from this registry. Use one host Tailwind entry and scan the installed components.
