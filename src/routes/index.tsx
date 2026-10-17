import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Hero } from "@/components/landing/Hero";
import { Mechanism } from "@/components/landing/Mechanism";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pele Limpa 90 — 5 ativos, 3 fases, 90 dias" },
      { name: "description", content: "O caminho de volta para uma pele limpa em 90 dias, com 5 ativos na ordem certa." },
      { property: "og:title", content: "Pele Limpa 90" },
      { property: "og:description", content: "Em 90 dias, com 5 ativos na ordem certa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight || 1;
      document.documentElement.style.setProperty("--scroll-p", String(Math.min(1, window.scrollY / max)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Bolinha que segue o mouse
    const blob = document.createElement("div");
    blob.className = "cursor-blob";
    document.body.appendChild(blob);
    let tx = -100, ty = -100, bx = -100, by = -100;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Letras grandes oscilam para os lados apenas com o mouse em cima
    const titles = Array.from(document.querySelectorAll<HTMLElement>(".display-title"));
    const hovering = titles.map(() => false);
    const xs = titles.map(() => 0);
    const phases = titles.map(() => 0);
    const cleanups = titles.map((el, i) => {
      const enter = () => { hovering[i] = true; phases[i] = 0; };
      const leave = () => { hovering[i] = false; };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      return () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
        el.style.transform = "";
      };
    });
    let previousTime = 0;
    let animRaf = 0;
    const animate = (time: number) => {
      const delta = previousTime ? Math.min((time - previousTime) / 1000, .05) : 0;
      previousTime = time;
      bx += (tx - bx) * 0.12;
      by += (ty - by) * 0.12;
      blob.style.transform = `translate(${bx - 14}px, ${by - 14}px)`;
      titles.forEach((el, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        const isOver = hovering[i] ?? false;
        const current = xs[i] ?? 0;
        const phase = (phases[i] ?? 0) + (isOver ? delta * 2.6 : 0);
        phases[i] = phase;
        const target = isOver ? Math.sin(phase) * 18 * dir : 0;
        const next = current + (target - current) * 0.12;
        xs[i] = next;
        el.style.transform = Math.abs(next) < 0.05 ? "" : `translateX(${next}px)`;
      });
      animRaf = requestAnimationFrame(animate);
    };
    animRaf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animRaf);
      cancelAnimationFrame(raf);
      cleanups.forEach((cleanup) => cleanup());
      blob.remove();
    };
  }, []);
  return (
    <main>
      <Hero />
      <Mechanism />
    </main>
  );
}
