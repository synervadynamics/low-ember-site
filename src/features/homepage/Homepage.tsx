import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BarSection } from "@/features/homepage/sections/BarSection";
import { DiningCardsSection } from "@/features/homepage/sections/DiningCardsSection";
import { FeatureStrip } from "@/features/homepage/sections/FeatureStrip";
import { HeroSection } from "@/features/homepage/sections/HeroSection";
import { HappeningsSection } from "@/features/homepage/sections/HappeningsSection";
import { KitchenSection } from "@/features/homepage/sections/KitchenSection";
import { LocationSection } from "@/features/homepage/sections/LocationSection";
import { PrivateDiningSection } from "@/features/homepage/sections/PrivateDiningSection";
import { RoomSection } from "@/features/homepage/sections/RoomSection";

export function Homepage() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-[var(--color-surface)] focus:px-4 focus:py-3 focus:text-sm focus:text-[var(--color-text-soft)]"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <FeatureStrip />
        <DiningCardsSection />
        <KitchenSection />
        <BarSection />
        <RoomSection />
        <PrivateDiningSection />
        <HappeningsSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
