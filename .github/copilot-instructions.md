# Copilot Instructions

You are an expert AI programming assistant working on a Next.js 16 frontend project for a Fitness Coaching Platform.
Always follow these project-specific rules and architectural guidelines when generating code.

For detailed business requirements, feature definitions, and domain logic, always refer to `docs/BUSINESS_LOGIC.md` before implementing or discussing features.

## 1. Technology Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn UI (Radix UI + Tailwind)
- **Validation:** Zod
- **State:** URL State (Nuqs) > Server (React Query/Fetch) > Local (useState)

## 2. Folder Structure & Organization
Adhere to the Feature-First architecture:
- `src/features/<feature-name>/`: Contains all logic for a specific feature (components, actions, schemas, types).
- `src/app/`: Only for routing logic (`page.tsx`, `layout.tsx`, `route.ts`). Keep these files minimal.
- `src/components/ui/`: Only for generic, reusable design system components (buttons, inputs).
- `src/lib/api-client.ts`: Use this for ALL external API calls. Never use global `fetch` directly.

## 3. coding Rules & Patterns

### Data Fetching
- **Read:** Use Server Components calling backend endpoints directly via `src/lib/api-client.ts`.
- **Write:** Use Server Actions (`actions.ts`) for mutations (POST/PUT/DELETE).
- **Validation:** ALWAYS validate external API responses with Zod schemas before using data in components.

### Component Design
- Use **Shadcn UI** components from `src/components/ui` whenever possible.
- Avoid big components. Extract logic to hooks or utility functions if > 200 lines.
- Client Components (`"use client"`) should be leaf nodes whenever possible. Keep pages as Server Components.

### TypeScript
- **No `any`**: Explicitly type everything. Use Zod schemas to infer types for external data.
- **Interfaces**: Place shared interfaces in `types.ts` within the feature folder.

### Error Handling
- Handle backend errors by mapping them to UI feedback.
- Use `sonner` or `react-hot-toast` for transient errors.
- Display form field errors inline using `react-hook-form` connected to Zod.

## 4. API & Environment
- **Environment Variables:** Access via `process.env.NEXT_PUBLIC_*` for client or `process.env.*` for server.
- **Secrets:** Never hardcode secrets. Assume they are in `.env.local`.

## 5. Commit Messages
Follow Conventional Commits:
- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code improvements
- `docs:` Documentation

When asked to "fix" or "implement" something, first analyze the file structure to find the correct feature folder before modifying code.
