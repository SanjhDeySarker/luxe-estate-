import Container from "@/components/common/Container";
import PageSection from "@/components/layout/pageSection";
import SectionHeading from "@/components/common/SectionHeading";
import StatCard from "@/components/cards/StatCard";

export default function Home() {
  return (
    <main>
      <PageSection>
        <Container>
          <SectionHeading
            subtitle="Luxury Living"
            title="Find Your Dream Property"
            description="Discover premium homes, villas and apartments crafted for modern living."
          />

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <StatCard
              number="500+"
              title="Luxury Properties"
            />

            <StatCard
              number="25+"
              title="Cities Covered"
            />

            <StatCard
              number="12k+"
              title="Happy Clients"
            />
          </div>
        </Container>
      </PageSection>
    </main>
  );
}