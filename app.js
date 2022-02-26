//click letf list add active

const leftItems = document.querySelectorAll(".letf-item");
const leftContianerUp = document.querySelector(".left-container-up");

// console.log(leftContianerUp);

leftContianerUp.addEventListener("click", function (e) {
  leftItems.forEach(function (item) {
    item.classList.remove("letf-item-weight");
  });
  e.target.classList.add("letf-item-weight");
  leftContianerUp.classList.remove("letf-item-weight");
});

//  left-container- pop up

const leftContainerDown = document.querySelector(".left-container-down");
const userPop = document.querySelector(".user-pop");

// console.log(leftContainerDown);
leftContainerDown.addEventListener("click", function (e) {
  e.stopPropagation();
  // console.log(e.currentTarget.getBoundingClientRect());
  const positon = e.currentTarget.getBoundingClientRect();
  const center = (positon.left + positon.right) / 2;
  const top = positon.top;
  // console.log(positon);
  // console.log(userPop);
  console.log(top);
  userPop.style.left = `${center}px`;
  userPop.style.display = "block";
  userPop.style.bottom = `calc(100vh - ${top}px)`;
});

//
document.addEventListener("click", function (e) {
  if (!userPop.contains(e.target)) {
    userPop.style.display = "none";
    // console.log("1");
  }
});
