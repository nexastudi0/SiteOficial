# NEXA STUDIO — PREMIUM DIGITAL EXPERIENCE

Site institucional real e interativo, com a logo oficial enviada pelo usuário, identidade preto/branco/ouro e código sem dependências de terceiros.

## Visualizar imediatamente

1. Extraia o ZIP.
2. Abra `index.html` em Chrome, Edge, Firefox ou Safari.
3. Na tela de abertura, role para baixo ou clique em **Explorar experiência**.
4. Explore os cards orbitais, carrossel do portfólio, menu e formulário de contato.

## Publicar na Hostinger

- Abra o Gerenciador de Arquivos da hospedagem.
- Entre na pasta `public_html` do domínio correto.
- Faça BACKUP do site atual antes de substituir arquivos.
- Envie o CONTEÚDO da pasta `nexa-studio-premium` para `public_html` (o arquivo `index.html` deve estar diretamente em `public_html`).
- Preserve caminhos relativos das pastas `assets/css`, `assets/js` e `assets/img`.
- Se seu site atual usa WordPress, siga um procedimento de migração em ambiente de testes, sem sobrescrever a produção até verificar tudo.

## Contatos comerciais já configurados

**Canais oficiais da Nexa já ativos nesta versão:**

- WhatsApp: **(47) 99679-3992** — link: https://wa.me/5547996793992
- E-mail: **nexastudioepublicidade@gmail.com**
- Instagram: **@nexa.studiio.publi** — link: https://www.instagram.com/nexa.studiio.publi/

Os contatos aparecem na área de contato e no rodapé; WhatsApp e e-mail também são utilizados pelo formulário de orçamento. Para alterá-los futuramente, edite `assets/js/config.js` e os links informativos em `index.html`.

Outros campos disponíveis em `assets/js/config.js`:

- `instagramUrl`: URL completa do Instagram (já configurada).
- `siteUrl`: domínio definitivo do site, opcional.
- `testimonials`: opcional, somente depoimentos reais/autorizados.

**Importante:** com os contatos já configurados, o formulário abre o WhatsApp com a mensagem preenchida; o visitante ainda precisa confirmar o envio. Não existe envio automático pelo site, armazenamento em banco ou coleta de leads em servidor.

## Recursos implementados

- Abertura cinematográfica com logo verdadeira, códigos animados, brilho e transição ao rolar, tocar, apertar tecla ou usar o botão.
- Layout responsivo com menu mobile, cards interativos e animações suaves.
- Notebook e smartphone feitos em HTML/CSS, com parallax no desktop.
- Cards orbitais com animação contínua, profundidade, pausa em hover, arrastar e toque.
- Modal de detalhes em cada projeto, com botão para solicitar projeto semelhante.
- Portfólio com carrossel navegável via botões e rolagem manual.
- Linha do tempo com progresso de scroll; reveal-on-scroll; âncoras.
- Formulário de contato com validação, WhatsApp/e-mail opcional e botão copiar.
- Conteúdo em português, sem métricas ou depoimentos inventados.
- SEO básico, sitemap, meta Open Graph, política de privacidade preliminar, favicon.
- Suporte a teclado, foco visível e `prefers-reduced-motion`.

## Stack e decisões técnicas

HTML5 + CSS3 moderno + JavaScript ES202x, SVG, requestAnimationFrame, IntersectionObserver, Web Animations via CSS. Arquitetura estática deliberadamente sem Next.js, React ou GSAP nesta entrega: o site abre imediatamente e pode ser hospedado no plano estático da Hostinger e GitHub Pages, sem servidor Node.js nem instalação NPM. O motor de movimento usa CSS e JS nativos para reduzir dependências e tamanho de download. Para migrar para Next.js + TypeScript e integrar backend, mantenha os visuais e porte os componentes em uma etapa posterior; essa migração ainda não foi feita.

## Pendências antes de produção

- Contatos comerciais: configurados e atualizados. ✔
- Substituir as ilustrações dos projetos por screenshots autorizados, se desejado.
- Revisar o texto da política de privacidade com base nos fluxos reais da operação.
- Adicionar depoimentos somente com autorização.
- Configurar URL canônica e OG image absoluta após definir o domínio.
- Testar performance nos aparelhos usados pelo público e verificar SEO no domínio final.

## Arquivos principais

```
index.html
privacidade.html
assets/
  css/styles.css
  js/config.js
  js/site.js
  img/nexa-logo.png
  img/nexa-logo.webp
  img/favicon.svg
```

© 2026 Nexa Studio & Publicidade — identidade visual fornecida pelo usuário.

## Atualização visual — carrossel

Os separadores da faixa dourada foram substituídos por um emblema geométrico da Nexa em SVG, preto sobre dourado, sem emojis. O ícone está em `assets/img/nexa-carousel-emblem.svg` e pode ser alterado sem modificar o conteúdo da página.
