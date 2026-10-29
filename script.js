const formulario = document.querySelector("#formulario-qr");
const campoNome = document.querySelector("#nome-link");
const campoUrl = document.querySelector("#url-link");
const mensagem = document.querySelector("#mensagem");
const areaQr = document.querySelector("#qr-code");
const resultado = document.querySelector("#resultado-qr");
const estadoVazio = document.querySelector("#estado-vazio");
const nomeResultado = document.querySelector("#nome-resultado");
const urlResultado = document.querySelector("#url-resultado");
const linkDownload = document.querySelector("#baixar-qr");

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;
  mensagem.className = tipo ? `message message--${tipo}` : "message";
}

function urlValida(valor) {
  try {
    const url = new URL(valor);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = campoNome.value.trim() || "QR Code gerado";
  const url = campoUrl.value.trim();

  if (!urlValida(url)) {
    mostrarMensagem("Digite um endereço válido iniciado por http:// ou https://.", "error");
    campoUrl.focus();
    return;
  }

  if (typeof QRCode !== "function") {
    mostrarMensagem("Não foi possível carregar o gerador. Confira sua conexão com a internet.", "error");
    return;
  }

  areaQr.replaceChildren();
  new QRCode(areaQr, {
    text: url,
    width: 220,
    height: 220,
    colorDark: "#171126",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });

  nomeResultado.textContent = nome;
  urlResultado.textContent = url;
  resultado.hidden = false;
  estadoVazio.hidden = true;
  mostrarMensagem("QR Code criado. Escaneie com a câmera do celular.", "success");

  setTimeout(() => {
    const imagemQr = areaQr.querySelector("img");
    if (imagemQr) {
      linkDownload.href = imagemQr.src;
      linkDownload.download = `${nome.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "vibeqr"}.png`;
    }
  }, 100);
});
