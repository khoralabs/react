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
- `memories/` — memories graph UI (from former `@khoralabs/memories-react-graph`)
- `obp/` — OBP NBC chain UI (from former `@khoralabs/obp-react`)
- Domain clients stay on npm (`@khoralabs/chat`, `@khoralabs/memories-service`, `@khoralabs/obp-nbc`, …)

### Memories items

| Item | Role |
|------|------|
| `memories` | Full kit |
| `memories-graph` | GraphScene + chrome + billboards |
| `memories-headless` | Providers + client types |
| `memories-ui` | Sidebar / sheet / skeleton / kbd |
| `memories-hooks` | Mobile + resize-observer helpers |

Peer runtime for graph: `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`.

Client port: `@khoralabs/memories-service/react-client` (factory: `…/react-client/service`).

### OBP items

| Item | Role |
|------|------|
| `obp` | Full kit |
| `obp-nbc-chain` | NbcChain provider, scene, chrome, nodes, details |
| `obp-utils` | `mergeClassNames` |

Peer runtime: `@xyflow/react`. Host must `@import "@xyflow/react/dist/style.css"` (not shipped by the registry barrel). Graph types / `collectNbcChainGraph` from `@khoralabs/obp-nbc`.

## Host Tailwind

Do **not** import a second `@import "tailwindcss"` from this registry. Use one host Tailwind entry and scan the installed components.
