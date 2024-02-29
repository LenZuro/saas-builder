import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section className="relative flex h-full w-full flex-col items-center justify-center pt-36">
        {/* Grid */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <p className="text-center">Your whole agency , In one place</p>
        <div className="from-primary to-secondary-foreground relative bg-gradient-to-r bg-clip-text text-transparent">
          <h1 className="text-center text-9xl font-bold md:text-[300px]">
            Plura
          </h1>
        </div>
        <div className="relative flex items-center justify-center md:mt-[70px]">
          <Image
            src={"/assets/preview.png"}
            alt="banner image"
            height={1200}
            width={1200}
            className="border-muted rounded-tl-2xl rounded-tr-2xl border-2"
          />
          <div className="dark:from-background absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t"></div>
        </div>
      </section>
      <section className="mt-[-40px] flex flex-col items-center justify-center gap-4 md:!mt-20">
        <h2 className="text-center text-4xl">Choose what fits you.</h2>
        <p className="text-muted-foreground text-center">
          Our easy to navigate pricing plans are created to meet the needs of
          everyone. If {"you're"} not <br />
          ready to commit quite yet, you can get stared free of charge today.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={clsx("flex w-[300px] flex-col justify-between", {
                "border-primary border-2": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-bold text-4xl">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="text-muted-foreground" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "bg-primary w-full rounded-md p-2 text-center",
                    { "!bg-muted-foreground": card.title !== "Unlimited Saas" },
                  )}
                >
                  Lets Go!
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
