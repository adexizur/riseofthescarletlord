if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  var notification = document.getElementById('notification');
  notification.style.display = 'block';
}
