import Image from "next/image";

export default function Story() {
  return (
    <section className="section story" id="house">
      <div className="wrap story-grid">
        <div className="story-media">
          <Image
            src="/images/hands-clay.jpg"
            alt="A potter's hands shaping the rim of a clay vessel on a wheel"
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        </div>
        <div className="story-text">
          <p className="eyebrow">Why Lokiom</p>
          <h2>What was here before the factory.</h2>
          <p>
            Before the industrial age decided what objects should look like, India&apos;s
            craftspeople had already arrived at answers more sophisticated than anything a machine
            would later produce. These were not decorative traditions. They were precision
            systems.
          </p>
          <p>
            Over the twentieth century that context was lost, and Indian craft became associated
            with the affordable and the merely decorative. Lokiom was founded to correct that
            drift. We do not romanticise craft. We respect it commercially, because that is what
            its makers actually need.
          </p>
          <p className="pull">
            Lokiom is not a lifestyle brand. It is an argument about what human hands are capable
            of.
          </p>
          <a className="btn outline" href="#beliefs">
            Our four beliefs
          </a>
        </div>
      </div>
    </section>
  );
}
