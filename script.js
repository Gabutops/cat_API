function cat() {
  c = "https://cataas.com/cat/gif"
  const image = document.querySelector(".my-image");
  fetch(c)
    .then((response) => response.blob())
    .then((blob) => {
      const objectURL = URL.createObjectURL(blob);
      image.src = objectURL;
      console.log("Sucessfully cat")
    });
}