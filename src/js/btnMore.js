document.addEventListener('DOMContentLoaded', function (evt) {

    let btnMore = document.querySelectorAll('.btn--more');

    if (!btnMore) return;

    hideTextHeight();

    btnMore.forEach(function (link) {
        link.addEventListener('click', function(e) {
            console.log('xxxx1');
            this.closest('.hide-text-wrap').querySelector('.hide-text').classList.toggle('excerpt');
        });
    });

});
function hideTextHeight() {
    let h = 320;
    let hideText = document.querySelectorAll('.hide-text');

    hideText.forEach(function (div) {
        let heightOfHideText = div.outerHeight;

        if(heightOfHideText > h) {
            div.classList.toggle('expert');
        }
    })
}

