function ImageModal() {
    return `
    <!-- Modal do wyświetlania zdjęć -->
    <div id="imageModal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img id="modalImage" src="" alt="Project Image">
            <h3 id="modalTitle"></h3>
        </div>
    </div>
    `;
}

function initImageModal() {
    // Obsługa modalu ze zdjęciami
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const closeModal = document.querySelector('.close-modal');
    const projectLinks = document.querySelectorAll('.project-link');

    // Otwieranie modalu po kliknięciu w ikonkę lupki
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const imageUrl = this.getAttribute('data-image');
            const title = this.closest('.project-info').querySelector('h3').textContent;
            
            modalImg.src = imageUrl;
            modalTitle.textContent = title;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Blokuje przewijanie strony pod modalem
        });
    });

    // Zamykanie modalu po kliknięciu w X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = ''; // Przywraca przewijanie strony
        });
    }

    // Zamykanie modalu po kliknięciu poza obrazem
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
            document.body.style.overflow = ''; // Przywraca przewijanie strony
        }
    });
}

export { ImageModal, initImageModal };