# VibeQR

Gerador simples de QR Code para links. Projeto desenvolvido para a oficina de Vibe Coding da Semana Nacional de Ciência e Tecnologia.

## Como usar

1. Baixe os arquivos do projeto.
2. Abra `index.html` em um navegador com acesso à internet.
3. Informe o nome (opcional) e o endereço do site.
4. Clique em **Gerar QR Code**.
5. Escaneie o código com a câmera do celular ou baixe a imagem.

## Como funciona

- `index.html` organiza os campos, os botões e a área de resultado.
- `style.css` define as cores, o layout e a adaptação para telas menores.
- `script.js` valida o endereço e chama a biblioteca QRCode.js para gerar a imagem.

A biblioteca QRCode.js é carregada de uma CDN no `index.html`, então é necessária conexão com a internet para gerar o código.

## Limitação

O QR Code é estático e guarda o endereço informado. Se esse endereço mudar, é preciso gerar e compartilhar outro QR Code. O projeto não salva os links e não usa servidor ou banco de dados.
