$(document).ready(function() {
  $('.navbar-toggler').click(function () {
    $('.navbar-nav').toggleClass('active')
  });
});
function alertHeart() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '已加入我的收藏',
    showConfirmButton: false,
    timer: 1500
  })
}

function alertShop() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '已加入購物車',
    showConfirmButton: false,
    timer: 1500
  })
}
