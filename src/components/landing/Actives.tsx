const actives = [
  {
    name: "Limpador Suave de Barreira",
    description: "Gel sem sulfato, pH 5.5. Lava sem destruir a camada que segura a oleosidade no lugar.",
    phase: "Fase 1",
    frequency: "2x ao dia",
  },
  {
    name: "Niacinamida 5%",
    description: "Regula a produção de sebo e fecha poro aberto sem ressecar. Entra na semana 3.",
    phase: "Fase 2",
    frequency: "1x ao dia (manhã)",
  },
  {
    name: "Hidratante Reparador",
    description: "Reconstrói a barreira cutânea com ceramidas e pantenol. É o que faz o ácido pegar depois.",
    phase: "Fase 1",
    frequency: "2x ao dia",
  },
  {
    name: "Ácido Salicílico 2%",
    description: "Entra no poro, dissolve cravo e prevê espinha nova. Aplicado em noite alternada na Fase 2.",
    phase: "Fase 2",
    frequency: "3x na semana (noite)",
  },
  {
    name: "Protetor Solar Mineral",
    description: "FPS 50, oil-free. Sem ele, mancha pós-acne não clareia e tudo o que veio antes vira inútil.",
    phase: "Todas as fases",
    frequency: "Todo dia, mesmo em casa",
  },
];

export function Actives() {
  return (
    <section
      id="ativos"
      aria-labelledby="ativos-title"
      className="border-t border-line bg-paper px-[clamp(18px,2.25vw,30px)] py-[clamp(72px,12vw,154px)] text-ink"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:items-end">
          <h2 id="ativos-title" className="display-title text-gradient-ink max-w-[920px] text-[clamp(44px,6.3vw,104px)]">
            Os 5 ativos do <span className="text-gradient-signal">Protocolo Barreira Primeiro</span>
          </h2>
          <div className="max-w-[440px] lg:justify-self-end">
            <p className="text-base leading-relaxed text-muted-dark">
              Cada ativo entra em uma fase específica, com horário, frequência e combinação proibida marcada. Nenhum cancela o outro.
            </p>
            <p className="mt-6 text-sm font-semibold">Toca pra conhecer cada um dos 5 ativos.</p>
          </div>
        </div>

        <div className="mt-[clamp(40px,6vw,80px)] grid grid-cols-1 items-start border-t border-l border-line lg:grid-cols-5">
          {actives.map((active, index) => (
            <details key={active.name} className="active-card group min-w-0 border-r border-b border-line open:bg-paper-bright" open={index === 0}>
              <summary className="cursor-pointer list-none p-6 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink lg:min-h-[232px]">
                <span className="mb-8 flex items-center justify-between gap-4" aria-hidden="true">
                  <span className="text-[clamp(36px,4vw,56px)] font-[650] leading-none tracking-[-0.06em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="active-card-toggle relative flex size-8 shrink-0 items-center justify-center rounded-full border border-line">
                    <span className="absolute h-px w-3 bg-ink" />
                    <span className="h-3 w-px bg-ink transition-transform duration-200 group-open:rotate-90" />
                  </span>
                </span>
                <h3 className="max-w-[260px] text-[clamp(22px,2vw,30px)] font-[650] leading-tight tracking-[-0.04em]">
                  {active.name}
                </h3>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-muted-dark">{active.description}</p>
                <div className="mt-8 border-t border-line pt-5">
                  <p className="eyebrow">{active.phase}</p>
                  <p className="mt-3 text-sm font-medium">{active.frequency}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
