function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const fullImageUrl = imgElement.dataset.full;

  modal.classList.add("show");
  modalImg.src = fullImageUrl;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.remove("show");
  modalImg.src = ""; // 메모리 해제
}

// 시간표 팝업: 사진을 누르면 확대 (누른 곳이 가운데 오도록), 다시 누르면 원래대로
function toggleScheduleZoom(box, event) {
  const img = box.querySelector("img");
  if (box.classList.contains("zoomed")) {
    box.classList.remove("zoomed");
    return;
  }
  const rect = img.getBoundingClientRect();
  const ratioX = (event.clientX - rect.left) / rect.width;
  const ratioY = (event.clientY - rect.top) / rect.height;
  box.classList.add("zoomed");
  box.scrollLeft = img.offsetWidth * ratioX - box.clientWidth / 2;
  box.scrollTop = img.offsetHeight * ratioY - box.clientHeight / 2;
}
