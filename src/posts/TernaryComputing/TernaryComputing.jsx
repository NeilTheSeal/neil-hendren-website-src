import "./TernaryComputing.css";
import TernaryImage from "/src/assets/ternary.png";

export default function TernaryComputing() {
  return (
    <div className="post-body">
      <section className="section-1">
        <h1>What Exactly is Ternary Computing?</h1>
        <div className="text-with-image">
          <img src={TernaryImage} alt="Ternary Computer" />
          <p>
            We are all familiar with binary: the base-two counting system used
            in modern computers. But have you ever considered that there are
            alternatives to binary computation? Though relatively obscure,
            ternary (base-three) computers have been built before, and believe
            it or not, there are some advantages to using ternary logic.
          </p>
          <p>
            Ternary computers, which use a three-state &quot;trit&quot; system
            instead of binary&apos;s two-state bits, have indeed been theorized
            as a potential advancement in computing. Historically, the{" "}
            <a href="https://en.wikipedia.org/wiki/Setun" target="_blank">
              Setun computer
            </a>{" "}
            in the Soviet Union was one notable experiment in ternary logic,
            which uses the values -1, 0, and 1, represented on the chip as
            negative voltage, ground, and positive voltage.
          </p>
        </div>
      </section>
      <section className="section-2">
        <div className="section-label-top">Why Use Ternary?</div>
        <p>
          Theoretically, ternary systems offer advantages such as easier
          representation of negative numbers and the potential for more
          efficient computation. However, despite these benefits, ternary
          computing never became mainstream. One of the primary reasons is the
          complexity of building reliable hardware for ternary systems. While
          binary systems operate on the simple “on” and “off” states, ternary
          requires a third state, making the hardware more difficult to
          manufacture. But more importantly, the world has invested heavily in
          binary computing, creating a vast ecosystem of compatible devices,
          infrastructure, and software, making a transition to ternary
          impractical without significant advantages.
        </p>
        <p>
          Furthermore, binary systems have remained efficient in terms of both
          energy use and cost-effectiveness. The global computing industry has
          been optimized for binary, making it difficult for ternary computers
          to gain a foothold. The relatively small gains in efficiency or
          processing power that ternary systems offer haven&apos;t been enough
          to justify such a monumental shift.
        </p>
        <div className="section-label-bottom">The Future of Computing</div>
      </section>
      <section className="section-3">
        <p>
          As quantum computing emerges, it introduces a new paradigm that
          surpasses both binary and ternary systems. Quantum computers use
          qubits, which can exist in multiple states at once, potentially
          offering exponentially greater processing power and speed. This leap
          in capability may render the debate over binary versus ternary moot as
          quantum systems begin to dominate high-performance computing.
        </p>
        <p>
          Ultimately, while ternary computing remains an intriguing concept with
          certain theoretical advantages, it has been overshadowed by the
          practical dominance of binary systems and the growing potential of
          quantum computing.
        </p>
        <p>
          For an interesting dive into ternary logic, watch{" "}
          <a href="https://www.youtube.com/watch?v=TFTK074nG_M" target="_blank">
            this presentation
          </a>{" "}
          by Jessica Tank from Hackaday 2014. Thanks to David Scott Brown&apos;s
          <a
            href="https://www.techopedia.com/why-not-ternary-computers/2/32427"
            target="_blank"
          >
            ternary computers article
          </a>{" "}
          on Techopedia, which dives deeper into this topic.
        </p>
      </section>
    </div>
  );
}
