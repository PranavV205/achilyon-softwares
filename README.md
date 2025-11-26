
## Achilyon Softwares Assessment

This travel website is built with Next.js, TypeScript, and Tailwind CSS. It showcases curated travel deals, popular destinations, and travel highlights, powered by mock internal API endpoints.

## Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript
- Styling: TailwindCSS v4
- UI Components: Shadcn/UI
- Icons: Lucide React, Phosphor Icons
- Deployment: Vercel

## Folder Structure

```
project-root/
│
├─ public/
│  └─ images/
│
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  ├─ deals/route.ts
│  │  │  ├─ destinations/route.ts
│  │  ├─ page.tsx
│  │  ├─ layout.tsx
│  │  └─ globals.css
│  │
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Container.tsx
│  │  │  ├─ SectionHeader.tsx
│  │  │
│  │  ├─ home/
│  │  │  ├─ DestinationSection/
│  │  │  │  ├─ DestinationsSection.tsx
│  │  │  │  ├─ DestinationCard.tsx
│  │  │  │
│  │  │  ├─ HeroDeals/
│  │  │  │  ├─ HeroDeals.tsx
│  │  │  │  ├─ DealCard.tsx
│  │  │  │
│  │  │  ├─ ReasonsSection/
│  │  │  │  ├─ ReasonSection.tsx
│  │  │  │  ├─ ReasonCard.tsx
│  │  │
│  │  ├─ SmallGroupSection.tsx
│  │  │
│  │  └─ ui/
│  │     ├─ aspect-ratio.tsx
│  │     ├─ badge.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ scroll-area.tsx
│  │     └─ separator.tsx
│  │
│  ├─ lib/
│  │  ├─ data/
│  │  │  ├─ deals.ts
│  │  │  ├─ destinations.ts
│  │  │
│  │  ├─ interfaces/
│  │  │  ├─ deal.interface.ts
│  │  │  ├─ destination.interface.ts
│  │  │
│  │  ├─ apiClient.ts
│  │  └─ utils.ts
```

## Data Models and API Routes

1. /api/deals

Data Structure:
```
{
    id: number;
    title: string;
    tag: string;
    days: number;
    from: number;
    priceOriginal: number;
    start: string;
    route: string;
    image: string;
}
```

Why this data structure?
- It is descriptive, packages are not just a name and a price; customers need context.
- It supports UI right away, a Card component can use all this data without extra computation.
- Expandable, new fields (reviews, rating, itinerary) can be added later without breaking.

2. /api/destinations

Data Structure: 
```
{
    id: number;
    name: string;
    image: string;
}
```

Why this data structure?
- It is simple and lightweight, destinations are not full packages
- Supports UI immediately
- Expandable, future metadata can be added safely
