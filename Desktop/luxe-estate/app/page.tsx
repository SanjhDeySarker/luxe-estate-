import Container from "@/components/common/Container";
import {
  Badge,
  Button,
  Card,
  Typography,
} from "@/components/ui";

export default function Home() {
  return (
    <main className="py-20">
      <Container>
        <Badge>Luxury Living</Badge>

        <Typography
          variant="hero"
          className="mt-6 max-w-3xl"
        >
          Find Your Dream Luxury Home.
        </Typography>

        <Typography className="mt-6 max-w-xl">
          Discover premium villas, penthouses and
          apartments crafted for modern living.
        </Typography>

        <div className="mt-10 flex gap-4">
          <Button>Explore Properties</Button>

          <Button variant="outline">
            Book Visit
          </Button>
        </div>

        <div className="mt-20">
          <Card>
            <Typography variant="h3">
              Luxury Villa
            </Typography>

            <Typography className="mt-3">
              Starting from $1.2M
            </Typography>
          </Card>
        </div>
      </Container>
    </main>
  );
}