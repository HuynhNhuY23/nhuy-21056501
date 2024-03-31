
/*LAPTOP*/
function nhan() {
    var doctiep = document.getElementById('doctiep').value;


/*DANHGIA*/
    document.getElementById('submitReview').addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var rating = document.getElementById('rating').value;
        var comment = document.getElementById('comment').value;
        
        var currentDate = new Date();
        var dateTime = currentDate.toLocaleString('vi-VN');
        
        // Thêm ký tự "@" vào phần tên
        var formattedName = "@" + name;
        
        var reviewResult = document.getElementById('reviewResult');
        var newReview = document.createElement('div');
        newReview.innerHTML = `<p><strong>Tên:</strong> ${formattedName}</p>
                               <p><strong>Đánh giá:</strong> ${rating} sao</p>
                               <p><strong>Nội dung đánh giá:</strong> ${comment}</p>
                               <p><strong>Ngày và giờ đánh giá:</strong> ${dateTime}</p>`;
        reviewResult.appendChild(newReview);
        reviewResult.classList.remove('hidden');
    });


document.getElementById('ratingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var rating = document.querySelector('input[name="star"]:checked').value;
    alert("Thank you for rating this product with " + rating + " stars!");
  });

/* bai Liên hệ */
function gui() {
    var hoten = document.getElementById('hoten').value;
    var mail = document.getElementById('mail').value;
    var tieude = document.getElementById('tieude').value;
    var noidung = document.getElementById('noidung').value;
    // hiển thị cửa sổ confirm
    var ketqua = confirm('Họ và tên: ' + hoten + '\nĐịa chỉ e-mail: ' + mail + '\nTiêu đề bài viết: ' + tieude + '\nNội dung góp ý:\n' + noidung);
    if (ketqua) {
        // Nếu chọn OK, reset lại ô input
        document.getElementById('hoten').value="";
        document.getElementById('mail').value="";
        document.getElementById('tieude').value="";
        document.getElementById('noidung').value="";
    }
}


