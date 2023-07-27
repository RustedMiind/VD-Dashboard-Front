const chooseImageContainers = document.getElementsByClassName("select-image");
console.log(chooseImageContainers);
for (let i = 0; i < chooseImageContainers.length; i++) {
  let chooseImageContainer = chooseImageContainers[i];
  let input = chooseImageContainer.getElementsByClassName("image-upload")[0];
  let containerToHide =
    chooseImageContainer.getElementsByClassName("to-hide")[0];
  let fileNameContainer = chooseImageContainer.getElementsByTagName("h5")[0];
  let fileSizeContainer = chooseImageContainer.getElementsByTagName("p")[0];
  let fileExtensionContainer =
    chooseImageContainer.getElementsByClassName("file-extension")[0];
  let fileInfoCard =
    chooseImageContainer.getElementsByClassName("file-info-card")[0];
  console.log(fileNameContainer);
  input.addEventListener("change", (e: Event) => {
    containerToHide.classList.add("d-none");
    fileInfoCard.classList.remove("d-none");
    const file = (<HTMLInputElement>e.target).files[0];
    fileNameContainer.innerHTML = file.name;
    const split = file.name.split(".");
    const extension = split[split.length - 1].toUpperCase();
    fileSizeContainer.innerHTML = `${(file.size / 1024 ** 2).toFixed(2)}MB`;
    fileExtensionContainer.innerHTML = extension;
  });
}
