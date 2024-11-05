import { Card } from "@/components";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-8">
      <Card as="aside" h={636} w={371}></Card>
      <Card as="aside" h={98} w={371}></Card>
    </section>
  );
};

export default AboutMe;
