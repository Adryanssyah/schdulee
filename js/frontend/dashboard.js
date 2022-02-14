// MODAL BOX
// ambil modal
var modal = document.getElementById('modal-tambah');

// ambil tombol tambah
var btn = document.getElementById('tambahJadwal');

// ambil span close button
var span = document.getElementsByClassName('close')[0];

// ketika user menekan tombol tambah
btn.onclick = function () {
      modal.style.display = 'block';
};

// ketika user menekan tombol x
span.onclick = function () {
      modal.style.display = 'none';
};

// ketika user menekan luar dari modaal
window.onclick = function (event) {
      if (event.target == modal) {
            modal.style.display = 'none';
      }
};

//TIPE TOGGLE
// ambil input pribadi
let pribadi = document.querySelector('.pribadi');

// ambil input yang akan disabled
let formPin = document.querySelector('.create');

if (pribadi.checked) {
      formPin.disabled;
}
