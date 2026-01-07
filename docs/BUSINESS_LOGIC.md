# Gym Management System - Business Logic & Requirements

## 1. Overview
The platform connects fitness trainers with trainees through various modes of engagement, including physical sessions, live online classes, and pre-recorded courses. It supports both free and paid content, managed via role-based access for Trainers, Trainees, and Administrators.

## 2. User Roles & Responsibilities

### 2.1 Trainers
*   **Profile Management:** Create and manage professional profiles.
*   **Schedule Management:** Define availability for various session types.
*   **Content Creation:**
    *   Create **Physical Schedules** for on-site training.
    *   Create **Live Online Schedules** for real-time video conference sessions.
    *   Create **Courses** with pre-recorded videos and supplementary materials.
*   **Pricing:** Set pricing models (Free or Paid) for schedules and courses.
*   **AI Tools:** Use AI features to generate summaries for their class schedules and course descriptions.

### 2.2 Trainees (Users)
*   **Account Management:** Personal dashboard to view bookings and enrollments.
*   **Discovery:** Browse and filter trainers, schedules, and courses.
*   **Engagement:**
    *   Book slots in physical or live schedules.
    *   Enroll in pre-recorded courses.
*   **Transactions:** Process payments for paid content.
*   **Consumption:**
    *   Attend live sessions via integrated conference tools.
    *   Access course materials and video content.

### 2.3 Admins
*   **Operational Oversight:** Monitor overall platform activity.
*   **User Management:** Oversee trainer and trainee accounts.
*   **Insights:** Access dashboards for:
    *   Platform revenue.
    *   User growth/retention.
    *   Popular courses/trainers.
*   **Content Moderation:** (Implicit) Ensure content guidelines are met.

## 3. Core Features & Logic

### 3.1 Session & Course Types
1.  **Physical On-Site Sessions**
    *   Location-based scheduling.
    *   Capacity management (max trainees per slot).
2.  **Live Online Sessions**
    *   Integrated video conferencing link generation.
    *   Real-time attendance tracking.
3.  **Pre-recorded Courses**
    *   Curriculum structure (Modules/Lessons).
    *   Video hosting and document attachments.
    *   Self-paced progression.

### 3.2 Booking & Enrollment System
*   **Scheduling:** Conflict detection to prevent overlapping bookings for trainers and trainees.
*   **Payments:** Secure checkout process for paid items. Access is granted immediately upon successful transaction.
*   **Free Access:** Direct enrollment/booking for free tiers.

### 3.3 AI Features (Phase 1)
*   **Trainer Insights:**
    *   **Scope:** Personalized insights for trainers regarding their own schedules and courses.
    *   **Functionality:**
        *   Summarize upcoming schedule (e.g., "5 classes this week").
        *   Analyze trainee data (e.g., total count, age demographics).
        *   Provide a quick overview of course engagement.

## 4. Monetization Model
*   **Direct Sales:** Trainers set prices; Trainees pay per course or schedule booking.
*   *(Potential Feature)*: Platform commission on transactions (to be defined).

## 5. Domain Model Entities (High Level)
*   **User:** (ID, Role, Profile Data)
*   **Course:** (Title, Description, Price, TrainerID, Modules)
*   **Schedule:** (Type [Physical/Online], TimeSlot, TrainerID, MaxCapacity, Price)
*   **Enrollment:** (TraineeID, EntityID [Course/Schedule], PaymentStatus)
