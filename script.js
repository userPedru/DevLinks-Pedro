function toggleMode() {
  const body = document.body

  body.classList.toggle("light")

  //Lógica para realizar a troca da imagens após a mudança de BG.

  // Pegar a TAG IMG
  const img = document.querySelector(".Profile .Avatar img")

  // Substituir a imagem
  if (body.classList.contains("light")) {
    // Se o light mode estiver habilitado.
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    // Se o light mode estiver desabilitado.
    img.setAttribute("src", "./assets/avatar.png")
  }
}
// if (body.classList.contains("light")) {
// body.classList.remove("light")
// } else {
// body.classList.add("light")
// }
