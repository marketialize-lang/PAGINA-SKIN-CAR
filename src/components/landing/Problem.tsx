export function Problem() {
  return (
    <section
      id="problema"
      aria-labelledby="problema-title"
      className="overflow-hidden border-t border-line-light bg-near-black px-[clamp(18px,2.25vw,30px)] py-[clamp(72px,12vw,154px)] text-on-dark"
    >
      <div className="mx-auto max-w-[1480px]">
        <h2
          id="problema-title"
          className="display-title text-gradient max-w-[1200px] text-[clamp(44px,7vw,120px)]"
        >
          A vergonha da pele não fica no rosto. <span className="text-gradient-signal">Fica na agenda.</span>
        </h2>

        <div className="mt-[clamp(48px,7vw,96px)] border-t border-line-light pt-[clamp(32px,4vw,56px)]">
          <div className="ml-auto max-w-[720px] space-y-8 text-[clamp(16px,1.5vw,20px)] leading-[1.8] text-on-dark-soft">
            <p>
              Você marca o encontro para o sábado e até a sexta de manhã ele virou outra ameaça. Você sabe o que a pele vai parecer com a luz do bar. Sabe o que as fotos do grupo do WhatsApp vão fazer no dia seguinte.
            </p>
            <p>
              A base entra antes do café. Antes do cabelo. Antes mesmo de você decidir o que vai vestir. Em casa, no domingo, quando ninguém vai te ver, ela entra do mesmo jeito, porque você não consegue passar pelo espelho do banheiro sem essa camada entre a sua pele e os seus olhos.
            </p>
            <p>
              Você gastou. Sabonete antiacne. Sérum com ácido. Máscara de argila. Tônico adstringente. A cada três meses, alguém na internet jurou que era o que faltava. Você acreditou, abriu o aplicativo do banco, fez o pix. E em duas semanas a sua pele estava igual, ou pior.
            </p>
            <p>
              <span className="mb-6 block font-serif text-[clamp(28px,3.2vw,46px)] leading-[1.2] tracking-[-0.03em] text-signal">
                A sua pele está respondendo exatamente como deveria.
              </span>{" "}
              Está respondendo a tudo que essa rotina inteira vem fazendo com ela. O ciclo tem nome: barreira-em-cinzas. E ele é o motivo pelo qual a sua pele não respondeu a nenhum dos produtos que você comprou nos últimos cinco anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
