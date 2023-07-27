const userImage = document.getElementById("userImageContainer");
const input = userImage.getElementsByTagName("input")[0];
const image = userImage.getElementsByTagName("img")[0];
// let containerToHide = userImage.getElementsByClassName("to-hide")[0];
// let fileInfoCard = userImage.getElementsByClassName("file-info-card")[0];

input.addEventListener("change", (e: Event) => {
  // containerToHide.classList.add("d-none");
  // fileInfoCard.classList.remove("d-none");
  console.log("test");
  const file = (<HTMLInputElement>e.target).files[0];
  console.log(file);
  let fileReader = new FileReader();
  fileReader.onload = function () {
    userImage.classList.add("success");
    // picture.css("display", "block");
    console.log("src", fileReader.result);
    image.src = `${fileReader.result}`;
  };
  console.log(fileReader.readAsDataURL(file));
  console.log(fileReader);
  // image.src = file.name;
});
