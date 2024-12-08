let accordion = document.querySelector(".accordion");
console.log(accordion.children);
Array.from(accordion.children).forEach((wrapper) => {
  if (wrapper.classList.contains("show")) {
    wrapper.querySelector(".comment").style.maxHeight =
      wrapper.querySelector(".comment").scrollHeight + 30 + "px";
  }
  let title = wrapper.querySelector(".w-title");
  var wrapper = title.parentElement;
  var comment = title.nextElementSibling;
  title.addEventListener("click", (ck) => {
    wrapper.classList.toggle("show");
    if (wrapper.classList.contains("show")) {
      comment.style.maxHeight = comment.scrollHeight + 30 + "px";
    } else {
      comment.style = null;
    }
    Array.from(accordion.children).forEach((w) => {
      if (w != wrapper) {
        w.classList.remove("show");
        w.querySelector(".comment").style.maxHeight = null;
      }
    });
  });
});
