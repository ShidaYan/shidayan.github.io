const yearElement = document.getElementById("current-year");
const profilePhoto = document.querySelector(".profile-photo");
const photoFrame = document.querySelector(".photo-frame");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (profilePhoto && photoFrame) {
  const syncPhotoState = () => {
    if (profilePhoto.complete && profilePhoto.naturalWidth > 0) {
      photoFrame.classList.add("has-image");
      photoFrame.classList.remove("is-fallback");
      return;
    }

    photoFrame.classList.remove("has-image");
    photoFrame.classList.add("is-fallback");
  };

  profilePhoto.addEventListener("load", syncPhotoState);

  profilePhoto.addEventListener("error", () => {
    photoFrame.classList.remove("has-image");
    photoFrame.classList.add("is-fallback");
  });

  syncPhotoState();
}
