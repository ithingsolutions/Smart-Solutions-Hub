# iThing Smart Business Solutions - Bilingual Website

## Overview
A professional bilingual (Arabic/English) corporate website for iThing Smart Business Solutions (iThing لتطوير حلول الأعمال الذكية), a technology company specializing in AI, data analytics, cloud services, and custom software development with offices in Amman, Jordan and Dubai, UAE.

## Current State
- **Complete**: Fully functional bilingual website with RTL support
- **Language Support**: English and Arabic with full RTL layout switching
- **Theme**: Dark/light mode toggle
- **Responsive**: Mobile-first responsive design

## Project Architecture

### Frontend (client/)
- **Framework**: React with TypeScript
- **Routing**: wouter
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Context for language/theme, TanStack Query for server state
- **Fonts**: Inter (English), Cairo/Tajawal (Arabic)

### Backend (server/)
- **Framework**: Express.js
- **Storage**: In-memory storage (MemStorage)
- **API**: Contact form submission endpoint

### Key Components
- `client/src/lib/language-context.tsx` - Language switching and RTL support
- `client/src/lib/theme-context.tsx` - Dark/light mode theming
- `client/src/components/header.tsx` - Navigation with language/theme toggles
- `client/src/components/hero.tsx` - Hero section
- `client/src/components/services.tsx` - 6 service cards
- `client/src/components/stats.tsx` - Statistics section
- `client/src/components/why-choose-us.tsx` - Value propositions
- `client/src/components/contact.tsx` - Contact form with office locations
- `client/src/components/footer.tsx` - Footer with links

### API Endpoints
- `POST /api/contact` - Submit contact form (validates with Zod)

## User Preferences
- Bilingual support (Arabic primary market)
- Professional, enterprise-grade design
- Offices in Amman (primary) and Dubai
- Company name: iThing

## Recent Changes
- January 2026: Updated branding to iThing with logo
- January 2026: Initial website implementation with full bilingual support
