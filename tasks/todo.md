## Plan

Building a KJV Bible-themed AI tool ("Rightly Dividing the Word") — a Next.js 15+ App Router project with verse generation, OpenAI-powered AI insights (explanation + application + prayer + DALL-E imagery), Supabase auth/credits, Polar subscriptions, and deployment-ready structure following JoCoding's vibe coding bootcamp pattern.

## Tasks

- [x] Backend: Set up Supabase server/browser/admin client helpers (`lib/supabase-*.ts`)
- [x] Backend: Create OpenAI helper with GPT-4o-mini text + DALL-E image generation (`lib/openai.ts`)
- [x] Backend: Add Zod validation schemas for API inputs (`lib/validation.ts`)
- [x] Backend: Build `/api/generate` route with auth check, credit deduction, AI calls
- [x] Backend: Build `/api/webhook/polar` route with HMAC signature verification
- [x] Backend: Create `/auth/callback` route for OAuth code exchange + credit row init
- [x] Backend: Add middleware for protected routes (`/generate`, `/subscribe`)
- [x] Backend: Create 20 hardcoded KJV verses centered on 2 Timothy 2:15 theme (`lib/verses.ts`)
- [x] Backend: Define TypeScript types for DB models and API responses (`types/database.ts`)
- [x] Frontend: Build `VerseGenerator` component — random verse display with animation
- [x] Frontend: Build `CreditDisplay` component — shows credits/pro badge
- [x] Frontend: Build `AuthButton` component — Google OAuth sign in/out with dropdown
- [x] Frontend: Create home page (`/`) with verse generator + AI insight CTA
- [x] Frontend: Create generate page (`/generate`) with AI insight form, loading/error/result states
- [x] Frontend: Create subscribe page (`/subscribe`) with pricing, features, Polar checkout
- [x] Frontend: Update layout with header (logo, credits, auth), footer, gradient background
- [x] Frontend: Style with Tailwind — serene blue/white/indigo theme, mobile-responsive
- [x] Other: Create `.env.local` template with all required env vars
- [x] Other: Write `supabase-setup.sql` for DB schema + RLS policies
- [x] Other: Verify TypeScript build passes with zero errors

## Review

- Changes made: Full Next.js 15+ project created from scratch — 16 source files across lib/, types/, components/, app/ (pages + API routes), middleware, SQL setup
- Issues fixed: Zod `.errors` → `.issues` property, OpenAI `response.data` optional chaining
- Verdict: APPROVED
