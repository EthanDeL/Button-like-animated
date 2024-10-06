// BUTTON LIKE ANIMATED //

const likeBtn = document.querySelector('.like-btn');
const points = document.querySelector('.points');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');

    if (likeBtn.classList.contains('liked')) {
        points.classList.add('active');
        setTimeout(() => {
            points.classList.remove('active');
        }, 800);
    }
});