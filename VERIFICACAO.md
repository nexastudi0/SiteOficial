# Verificação funcional (28/10/2026)

Validações realizadas com Chromium em resoluções 1440 × 900 e 390 × 844 usando os arquivos HTML/CSS/JS embutidos em uma página de testes, pois o ambiente de teste bloqueia navegação local via URL.

- Código JavaScript: `node --check` sem erros.
- Código CSS: análise `tinycss2` sem erros de sintaxe.
- HTML: âncoras internas existentes; nenhum link de âncora quebrado.
- Tela de abertura: visível até entrar; botão de entrada funciona.
- Chuva de código: transformações mudam com o tempo (animação ativa).
- Cards orbitais: 10 criados; animação executando.
- Portfólio: 8 cards carregados, carrossel avançando.
- Detalhes: dialog do projeto abre com conteúdo correspondente.
- Formulário: dialog abre, campos são validados, mensagem preparada sem canal de destino inventado.
- Navegação mobile: menu abre.
- JavaScript: sem exceções nos cenários testados.
- Layout: nenhuma rolagem horizontal da página nas duas resoluções testadas.

**Limites do teste:** não foram testados servidores de hospedagem, WhatsApp comercial real, back-end, APIs, Safari real, Android físico ou performance em produção. Esses itens dependem da publicação e/ou de credenciais reais. A página de privacidade é um texto inicial sujeito à revisão antes da publicação comercial.

## Atualização de canais comerciais

- WhatsApp: (47) 99679-3992 (wa.me/5547996793992)
- E-mail: nexastudioepublicidade@gmail.com
- Instagram: @nexa.studiio.publi (https://www.instagram.com/nexa.studiio.publi/)
- Links diretos configurados na seção Contato e no rodapé.
- Formulário: abre o WhatsApp com mensagem pré-preenchida e exige confirmação de envio.
