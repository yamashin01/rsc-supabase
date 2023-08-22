This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

### install supabase

```bash
$ npm i @heroicons/react@2.0.17 @supabase/auth-helpers-nextjs@0.6.1 @supabase/supabase-js@2.21.0 zustand@4.3.8 supabase@1.55.1 date-fns@2.30.0
```

### set next.js@13.4.1

```bash
$ npm i next@13.4.1
```

### supabase login

Use token in [supabase site](https://app.supabase.com/account/tokens)

```bash
$ npx supabase login
You can generate an access token from https://app.supabase.com/account/tokens
Enter your access token:
Finished supabase login.
```

### supabase setup

```bash
$ npx supabase init
Generate VS Code workspace settings? [y/N] y
Open the rsc-supabase.code-workspace file in VS Code.
Finished supabase init.
$ npx supabase link --project-ref ydhdlarbipbwzblnephk
Enter your database password (or leave blank to skip):
Finished supabase link.
$ npx supabase gen types typescript --linked > database.types.ts
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
