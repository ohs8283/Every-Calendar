/* 사이드바 */
function openSlideMenu() {
  document.getElementById("menu").style.width = "260px";
  document.getElementById("page").style.marginRight = "260px";
}
function closeSlideMenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("page").style.marginRight = "0";
}

$("#logoutBtn").click(function () {
  sessionStorage.removeItem("name");
  sessionStorage.removeItem("email");
  location.href = "../index.html";
  sessionStorage.removeItem("postId");
  sessionStorage.removeItem("user");
});

// 사이드바 끝

$(".homeUserName").html(sessionStorage.getItem("name")); //~님

