# Phase 1: Foundation & Public Layer - Execution Flow

We will build from the "outside in" – global container first, then page content.

## Step A: Clean & Configure
1. **Clean Up**: Remove the default Next.js "Get Started" boilerplate from `src/app/page.tsx` and `src/app/globals.css`.
2. **Theme Setup**: Define our CSS variables for colors in `src/app/globals.css` (Tailwind v4 style). *(Completed)*

## Step B: Global Layout (`src/components/layout/`)

### Recommendations & Design Strategy
*   **Navbar**: "Floating & Glassmorphic"
    *   Sits slightly off the top edge with a transparent/blur background.
    *   **Responsiveness**: Use a Sheet/Drawer (`shadcn`) for mobile menus.
    *   **CTA**: High-contrast "Get Started" button in **Primary Red**.
*   **Footer**: "Functional & Organized"
    *   **Brand Column**: Logo + Tagline.
    *   **Links**: Grouped by intent (Trainees vs. Trainers).
    *   **Visuals**: Darker/Anchored background (`bg-black`).

### Implementation Checklist
1.  **Dependencies**:
    *   `lucide-react` (Icons).
    *   `clsx`, `tailwind-merge` (Utils).
    *   `class-variance-authority` (Variant management).
2.  **Core Components** (`src/components/ui/`):
    *   `button.tsx`: Setup variants (default, outline, ghost, link).
    *   `sheet.tsx`: For mobile navigation.
3.  **Layout Components** (`src/components/layout/`):
    *   `navbar.tsx`: Implement desktop/mobile logic.
    *   `footer.tsx`: Create grid layout.
4.  **Integration**:
    *   Update `src/app/layout.tsx` to include Navbar and Footer.

## Step C: Feature Components (`src/features/marketing/`)
We will create smaller chunks for the landing page so `src/app/page.tsx` stays clean.

1. **Hero Section**: High impact, split design (Text + Image).
2. **Features Grid**: 3-column layout highlighting the core benefits.
3. **Social Proof**: Simple logo strip or stat counters.

## Step D: Assembly
1. **Compose Page**: Assemble `src/app/page.tsx` using the components from Step C.
