# BlastTax MVP Prototype (Next.js App Router)

This is a lean scaffold implementing the core flows described in the MVP SOW:

- Onboarding (Demo/Login) → `/login`
- Dashboard KPIs → `/dashboard`
- Tax Relief Analyzer (paywall simulated) → `/analyzer`
- AI Tax Assistant (educational only) → `/assistant`
- Cases (list + detail) → `/cases`, `/cases/[id]`
- Pro connection (request form) → `/pro`
- Admin metrics (mock) → `/admin`
- Mock APIs under `/api/*`

## Getting Started

```bash
# 1) Install deps
npm install

# 2) Copy env
cp .env.example .env.local
# Fill values as needed. For mock mode you can leave empty.

# 3) Run dev server
npm run dev
```

Open http://localhost:3000.

## Tech Notes

- Next.js 14 (App Router), React 18, TailwindCSS
- All data is mocked in API routes. Replace with Supabase integration when ready.
- Document generation, payments, and calendar integrations are **simulated** per MVP scope.
- To deploy on Cloudflare Pages, use the Next.js preset, and set `npm run build` / `npm run start` (or static export if you prefer).

## Next Steps

- Wire real auth & DB with Supabase
- Replace `/api/analyzer/evaluate` logic with proper IRS standards & calculations
- Connect Gemini (or other) to `/api/chat`
- Implement PDF fill using server-side library + template maps
