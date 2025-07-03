document.addEventListener('DOMContentLoaded', function() {
    // Lightboxモーダルの要素を取得
    var lightboxModal = document.getElementById('lightbox-modal');
    var lightboxImg = document.getElementById('lightbox-img');
    var lightboxCaption = document.getElementById('lightbox-caption');
    var closeButton = document.getElementsByClassName('close-button')[0];

    // 各グリッドアイテムの画像にクリックイベントを追加
    document.querySelectorAll('.art-grid-item img').forEach(function(img) {
        img.addEventListener('click', function() {
            var imageUrl = this.src;
            var imageAlt = this.alt;

            lightboxModal.style.display = 'flex';
            lightboxImg.src = imageUrl;
            lightboxCaption.textContent = imageAlt;
        });
    });

    // 閉じるボタンにクリックイベントを追加
    closeButton.addEventListener('click', function() {
        lightboxModal.style.display = 'none';
    });

    // モーダルの外側をクリックで閉じる
    lightboxModal.addEventListener('click', function(event) {
        if (event.target === lightboxModal) {
            lightboxModal.style.display = 'none';
        }
    });

    // スムーズスクロールの処理
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});