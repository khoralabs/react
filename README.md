# @khoralabs/react (shadcn registry)

Self-managed [shadcn GitHub registry](https://ui.shadcn.com/docs/registry/github) for Khora React UI.

Bun workspace monorepo: private packages under `packages/*`, examples under `packages/*/example`.

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

| Package | Registry items |
|---------|----------------|
| `packages/utils` | `utils` |
| `packages/ui` | `ui` |
| `packages/chat` | `chat`, `chat-*` |
| `packages/memories` | `memories`, `memories-*` |
| `packages/obp` | `obp`, `obp-*` |

Domain clients stay on npm (`@khoralabs/chat`, `@khoralabs/memories-service`, `@khoralabs/obp-nbc`, …). Shared UI deps are pinned in the root workspace `catalog`.

Until `ChatClient` / `memories-service/react-client` ship on those npm packages, the registry inlines those thin ports (`packages/chat/components/chat/client.ts`, `packages/memories/lib/react-client.ts`).

### Local examples

```bash
bun install
bun run dev:chat
bun run dev:memories
bun run dev:obp
```

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
