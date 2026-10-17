import { useEffect, useRef } from "react";
import heroBackground from "@/assets/hero-red-background.jpg";

const hooks = [
  "Por que lavar mais o rosto está deixando ele mais oleoso, e o que substituir em 30 segundos.",
  "Como a barreira da sua pele resolve a acne antes do ativo tocar o problema.",
  "O ingrediente que aparece em sabonete antiacne de farmácia e que está sabotando seu rosto.",
];

export function Hero() {
  const hooksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = hooksRef.current;
    if (!list) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const markers = Array.from(list.querySelectorAll<HTMLElement>(".hook-marker"));
      const first = markers[0];
      const last = markers[markers.length - 1];
      if (!first || !last) return;
      const listRect = list.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const start = firstRect.top + firstRect.height / 2;
      const length = lastRect.top + lastRect.height / 2 - start;
      // Start unfilled even when the whole list fits on a tall screen.
      const scrollLine = Math.min(window.innerHeight * 0.65, start + window.scrollY);
      const progress = reducedMotion.matches ? 1 : Math.max(0, Math.min(1, (scrollLine - start) / Math.max(1, length)));
      list.style.setProperty("--hook-start", `${start - listRect.top}px`);
      list.style.setProperty("--hook-length", `${length}px`);
      list.style.setProperty("--hook-progress", String(progress));
      markers.forEach((marker) => {
        const center = marker.getBoundingClientRect().top + marker.offsetHeight / 2;
        marker.dataset["connected"] = String(reducedMotion.matches || center <= start + length * progress + 1);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(list);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reducedMotion.addEventListener("change", schedule);
    list.closest(".reveal")?.addEventListener("animationend", schedule);
    void document.fonts.ready.then(schedule);
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      list.closest(".reveal")?.removeEventListener("animationend", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-20 flex min-h-[52px] items-center justify-between border-b border-line-light bg-near-black/90 px-[clamp(18px,2.25vw,30px)] text-on-dark backdrop-blur-lg">
        <span className="text-sm font-extrabold tracking-[0.14em] uppercase">Pele Limpa 90</span>
        <i className="live-dot" aria-hidden />
      </header>

      <section className="hero-bg overflow-hidden px-[clamp(18px,2.25vw,30px)] py-[clamp(48px,7vw,90px)] text-on-dark">
        <div className="hero-photo" aria-hidden="true">
          <img src={heroBackground} alt="" fetchPriority="high" />
          <div className="hero-particles">
            {Array.from({ length: 36 }, (_, i) => (
              <i key={i} style={{
                left: `${(i * 37 + 7) % 100}%`,
                top: `${(i * 23 + 11) % 100}%`,
                animationDelay: `${-(i % 12)}s`,
                animationDuration: `${8 + i % 7}s`,
              }} />
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto grid max-w-[1100px] gap-12">
          <div className="reveal">
            <p className="eyebrow">Pele Limpa 90</p>
            <h1 className="display-title text-gradient mt-8 text-[clamp(48px,7.4vw,124px)]">
              A base entra <span className="text-gradient-signal">antes mesmo</span> de você sair do quarto.
            </h1>
            <p className="mt-10 max-w-[520px] text-base leading-relaxed text-on-dark-soft">
              Você nem percebe mais o momento em que isso virou hábito. A maquiagem deixou de ser estética e virou camuflagem. Esta página é sobre o caminho de volta. Em 90 dias, com 5 ativos na ordem certa.
            </p>
            <ul ref={hooksRef} className="hook-chain relative mt-10 max-w-[560px] border-t border-line-light">
              {hooks.map((h) => (
                <li key={h} className="relative flex gap-4 border-b border-line-light py-4 text-sm leading-snug text-on-dark-soft">
                  <span className="hook-marker" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal mx-auto w-full max-w-[860px] [animation-delay:.15s]">
            <div className="flex aspect-video items-center justify-center border border-line-light bg-ink-2/80">
              <span className="text-sm font-semibold tracking-[0.09em] uppercase text-on-dark">▶ Insira sua VSL aqui</span>
            </div>
            <p className="eyebrow mt-4 text-muted-stone">Pele limpa e radiante após o protocolo</p>

            <a
              href="#metodo"
              className="mt-10 flex min-h-[52px] w-full items-center justify-center rounded-[99px] bg-signal px-8 text-sm font-bold tracking-[0.09em] uppercase text-on-dark shadow-[var(--shadow-signal-ring)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Quero ver o método completo
            </a>
            <p className="mt-4 text-center text-[11px] tracking-[0.09em] uppercase text-on-dark-soft">
              7 dias de garantia incondicional
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
