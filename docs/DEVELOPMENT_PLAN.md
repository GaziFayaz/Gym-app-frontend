# Development Plan & Strategy

## 1. Implementation Strategy (Phased Approach)

We will follow a "Feature-First" architecture, building the application in layers.

### Phase 1: Foundation & Public Layer
*   **Global UI:** Setup fonts, color palette (brand identity), and Root Layout (Navbar/Footer).
*   **Marketing:** Build the Landing Page and About/Concept pages to set the visual tone.
*   **Routing:** Basic navigation structure.

### Phase 2: Authentication & User Roles
*   **Auth Flow:** Login and Registration pages.
*   **Role Separation:** Distinct flows/guards for Trainers vs. Trainees.
*   **Onboarding:** Initial profile setup for new users.

### Phase 3: Discovery & Core Entities
*   **Listings:** Pages to browse/filter Courses and Trainers.
*   **Details:** Rich profile pages for Trainers and detailed Course/Schedule landing pages.
*   **Navigation:** Search and filtering capabilities.

### Phase 4: Core Functionality (Booking & Learning)
*   **Booking System:** UI for selecting slots (Physical/Online).
*   **Checkout:** Payment integration mockups/flows.
*   **Trainee Dashboard:** View upcoming sessions and enrolled courses.
*   **Classroom:** Interface for attending live calls or watching course videos.

### Phase 5: Trainer Operations & AI
*   **Trainer Dashboard:** Schedule management and content creation tools.
*   **AI Insights:** "Smart" cards showing schedule summaries and demographics (as per Business Logic 3.3).

---

## 2. Page Organization & Content Strategy ("Talking Points")

### A. Landing Page (`/`)
*Goal: Convert visitors into Trainees or Trainers immediately.*
*   **Hero Section:**
    *   **Headline:** "Train Anywhere, Anytime. Your Fitness, Your Schedule."
    *   **Sub-text:** "Connect with elite trainers for 1-on-1 coaching, live classes, or self-paced courses."
    *   **CTAs:** "Find a Trainer" (Primary) vs. "Become a Trainer" (Secondary).
    *   **Visual:** Split-screen (Gym workout vs. Home/Online workout).
*   **Value Props:** Flexible Scheduling, Verified Experts, Hybrid Learning.
*   **Social Proof:** Trending courses, "Join 10,000+ members."

### B. Trainer Profile Page (`/trainers/[id]`)
*Goal: Build trust to encourage booking.*
*   **Hooks:**
    *   **Philosophy:** "My approach to fitness" (more deeply engaging than just a bio).
    *   **Media:** Video Introduction placeholder.
    *   **Results:** Success stories/Before & Afters.
*   **Schedule Visualizer:** Clear, color-coded calendar (Online vs. Physical).

### C. Course Detail Page (`/courses/[id]`)
*Goal: Sell the specific curriculum.*
*   **Outcome-Focused Header:** E.g., "Master Vinyasa in 4 Weeks" (Solution-oriented).
*   **Deliverables:** Icons for "12 Videos," "Lifetime Access," "PDF Guides."
*   **Curriculum:** Collapsible accordion view of modules.

### D. Trainer Dashboard (`/dashboard/trainer`)
*Goal: Operational efficiency and Insights.*
*   **Morning Snapshot:** "3 Sessions today," "5 New Enrollees."
*   **AI Insight Card:** Highlight of the week (e.g., "Evening slots are 100% booked").
*   **Quick Actions:** Create Schedule, Message Trainees, Upload Content.

---

## 3. Initial Folder Structure (Feature-First)

Refining the standard structure to match our phases:

```text
src/
├── app/                  # Routing only
├── components/
│   ├── ui/               # Shadcn UI primitives (Button, Card)
│   └── layout/           # Global Navbar, Footer
└── features/
    ├── marketing/        # Landing page components (Hero, Features)
    ├── auth/             # Login/Register forms
    ├── discovery/        # Search, Course Cards, Trainer Cards
    ├── profiles/         # Public Trainer Profile components
    ├── booking/          # Scheduling calendars and selection UI
    └── dashboard/        # Private user views
```

## 4. Current Status & Changelog

*   **[Date]:** Created Business Logic and Development Plan.
*   **Next Up:** Setup Global Layout (Navbar/Footer) and Theme.
