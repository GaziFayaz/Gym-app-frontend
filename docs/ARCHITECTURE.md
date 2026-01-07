# Frontend Architecture & Best Practices

## 1. Tech Stack Overview
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Component Library**: Shadcn UI
- **Validation**: Zod (Runtime schema validation)
- **State Management**: URL State (Nuqs) > Server State (React Query / Generic Fetch) > Local State (useState) > Global Client State (Zustand - only if absolutely necessary).

## 2. Folder Structure (Feature-First)
We adopt a **feature-first** architecture to keep related code collocated.

```text
src/
├── app/                    # Next.js App Router (Routes only)
│   ├── (auth)/             # Route Group: Auth pages
│   ├── (dashboard)/        # Route Group: Protected dashboard
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/             # Components that are NOT feature specific
│   ├── ui/                 # Shadcn UI primitives (Button, Input)
│   └── shared/             # Reusable global components (Navbar, Footer)
├── features/               # FEATURE MODULES - Business logic lives here
│   ├── auth/               # Feature: Authentication
│   │   ├── components/     # Feature-specific components (LoginForm)
│   │   ├── actions.ts      # Server Actions (mutations)
│   │   ├── services.ts     # Data fetching logic (called by Server Components)
│   │   ├── schemas.ts      # Zod schemas
│   │   └── types.ts        # TypeScript interfaces
│   └── gym-management/     # Feature: Gym Management
├── lib/                    # Utilities & Configurations
│   ├── api-client.ts       # Centralized Fetch Client
│   ├── utils.ts            # Helper functions (clsx, twMerge)
│   └── constants.ts        # Global constants
├── hooks/                  # Global hooks
└── styles/                 # Global styles
```

## 3. API Communication & Data Fetching

### 3.1. Centralized Fetch Client (`src/lib/api-client.ts`)
Do not use raw `fetch` directly in components. Use a centralized client/wrapper that handles:
- **Base URL**: Prepending the backend API URL.
- **Headers**: Automatically attaching `Content-Type` and standard headers.
- **Cookies**: Pass cookies automatically in Server Components.

### 3.2. Fetching Strategy
1.  **Server Components (Read Operations)**:
    - Determine data needs in `page.tsx`.
    - Call backend endpoints directly via the `api-client` or feature-specific `services.ts`.
    - Pass data down to Client Components as props.
2.  **Server Actions (Write Operations)**:
    - Use Server Actions (`actions.ts` inside features) for POST/PUT/DELETE.
    - **MUST** Validate inputs using Zod.
    - Call the backend API.
    - Revalidate paths (`revalidatePath`) upon success.

### 3.3. Response Validation (Zod)
**Mandatory**: All data coming from the external backend must be validated/parsed with Zod schemas before being used in the UI. This prevents silent crashes due to API changes.

```typescript
// Example: src/features/users/schemas.ts
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  role: z.enum(["admin", "manager", "member"]),
});
```

## 4. Authentication Flow

- **Storage**: HttpOnly Cookies only. Do not store JWTs in `localStorage`.
- **Middleware**: Use `middleware.ts` to protect private routes. Check for the session cookie; if missing, redirect to `/login`.
- **Session Management**: Verify session validity with the backend on critical layouts.

## 5. Error Handling Patterns

### 5.1. Backend Errors
Structure backend error responses to a standard format and map them to UI.

```typescript
// Standard Backend Error Response
interface ApiError {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>; // Field-specific errors
}
```

### 5.2. UI Feedback
- **Toast Notifications**: For transient errors (e.g., "Failed to save"). Use `sonner` or `react-hot-toast`.
- **Field Errors**: For validation failures, display text directly below the Input (using `react-hook-form` + `zod`).
- **Error Boundaries**: Use `error.tsx` in Next.js to catch unexpected crashes.

## 6. Environment Variables

Store all environment secrets in `.env.local`.
**Validation**: Ensure variables exist at build time.

```bash
# .env.example
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

*Note: Use `NEXT_PUBLIC_` prefix only for variables needed in the browser.*

## 7. Git & Commit Conventions

We follow **Conventional Commits** specs:

- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code (white-space, formatting)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `chore:` maintenance tasks

**Example**: `feat(auth): implement login form with zod validation`

## 8. Instructions for AI Assistant

When generating code or proposing changes, strictly follow these rules:

1.  **Context Awareness**: Always check the file structure before creating new files. If a feature exists in `src/features/`, add to it rather than creating a duplicate.
2.  **Type Safety**: Always generate TypeScript interfaces or Zod schemas for API responses. Avoid `any`.
3.  **Server Actions**: When creating forms, default to using Server Actions (`actions.ts`) + `react-hook-form` + `zod`.
4.  **UI Components**: Prefer using existing Shadcn UI components from `src/components/ui` over creating custom HTML/CSS elements.
5.  **Clean Code**: Keep components small. Extract logic into hooks or utility functions if a component exceeds ~200 lines.
6.  **No Hardcoding**: Never hardcode API URLs. Use environment variables.
