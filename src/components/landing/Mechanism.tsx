const metrics = [
  ["Sem 1–2", "diagnóstico"],
  ["Sem 3–8", "limpeza profunda"],
  ["Sem 9–12", "manutenção e brilho"],
  ["20 min", "rotina diária total"],
  ["90 dias", "para a pele responder em todas as frentes"],
  ["R$ 800", "média já gasta em produto sem critério, antes"],
  ["5", "ativos em sequência fixa, nada além"],
  ["2.800+", "alunas aplicando o protocolo"],
];

export function Mechanism() {
  return (
    <section id="metodo" className="border-t border-line bg-paper px-[clamp(18px,2.25vw,30px)] py-[clamp(72px,12vw,154px)] text-ink">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,.8fr)] lg:items-end">
          <div>
            <p className="eyebrow">+2.800 alunas no protocolo</p>
            <h2 className="display-title text-gradient-ink mt-8 text-[clamp(48px,7vw,120px)]">
              5 ativos. 3 fases. <span className="text-gradient-signal">90 dias.</span>
            </h2>
          </div>
          <p className="max-w-[440px] text-base leading-relaxed text-muted-dark lg:justify-self-end">
            Cinco ativos em sequência fixa, não doze. Cada um cobre uma função distinta. Nenhum cancela o outro. Você compra menos, passa menos camada e gasta menos por mês.
          </p>
        </div>

        <ul className="mt-[clamp(48px,7vw,96px)] grid grid-cols-1 border-t border-l border-line sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([n, l]) => (
            <li key={n} className="group border-r border-b border-line p-6 transition-colors duration-300 hover:bg-paper-bright">
              <span className="block text-[clamp(32px,3.4vw,52px)] font-[650] leading-none tracking-[-0.06em] transition-colors group-hover:text-signal">{n}</span>
              <span className="mt-4 block text-[11px] leading-snug tracking-[0.09em] uppercase text-muted-dark">{l}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
