# Pele Limpa 90 — Dobra 01 (Hero)

Construir somente a primeira dobra da landing page, na página inicial, usando exatamente o design system Astraform e a copy literal da Dobra 01.

## O que será construído
- Barra superior fixa escura (estilo Astraform): marca "PELE LIMPA 90" com tracking largo e ponto coral pulsante.
- Hero com fundo preto (#080808), com o brilho radial coral + linhas diagonais finas do Astraform.
- Esquerda: headline gigante em caixa alta, Inter Tight 650, tracking -0.075em, line-height 0.78 — "A base entra antes mesmo de você sair do quarto." (palavras-chave em coral).
- Texto de apoio literal, seguido da lista dos 3 ganchos com marcador "/" coral e linhas finas de 1px.
- Direita: bloco de vídeo 16:9 com borda fina, placeholder "▶ Insira sua VSL aqui" e legenda "Pele limpa e radiante após o protocolo" no estilo label.
- CTA pill coral "Quero ver o método completo" (mín. 44px) + microcopy "7 dias de garantia incondicional".
- Mobile: headline → texto → ganchos → vídeo → CTA, em uma coluna.
- Animação de entrada suave, desativada com prefers-reduced-motion.

## Detalhes técnicos
- Tokens Astraform (ink, near-black, paper, signal, signal-tint, muted, line, line-light, radius pill/sharp, ease) adicionados em src/styles.css como variáveis oklch + mapeados no @theme; shadcn tokens reapontados para a paleta.
- Inter Tight carregada via <link> no __root; lang="pt-BR".
- Componente src/components/landing/Hero.tsx; src/routes/index.tsx substitui o placeholder e recebe head() com título/descrição da Pele Limpa 90.
- Salvar em memória: regras de design system e copy literal.
