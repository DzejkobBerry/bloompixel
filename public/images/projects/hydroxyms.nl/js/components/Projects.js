function Projects() {
    return `
    <!-- Projects Section -->
    <section class="projects visible" id="projects">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Projects & Gallery</h2>
                <p class="section-description">Explore our premium installations and transformations</p>
            </div>
            
            <div class="project-grid">
                <article class="project-card">
                    <div class="golden-placeholder" data-title="Balconies">
                        <div class="placeholder-icon"><i class="fas fa-building"></i></div>
                        <div class="placeholder-text">Balconies</div>
                    </div>
                    <div class="project-info">
                        <h3>Balconies</h3>
                        <a href="projects.html" class="project-link"><i class="fas fa-search"></i></a>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="golden-placeholder" data-title="Commercial Office">
                        <div class="placeholder-icon"><i class="fas fa-building"></i></div>
                        <div class="placeholder-text">Commercial Office</div>
                    </div>
                    <div class="project-info">
                        <h3>Commercial Office</h3>
                        <a href="projects.html" class="project-link"><i class="fas fa-search"></i></a>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="golden-placeholder" data-title="Industrial Warehouse">
                        <div class="placeholder-icon"><i class="fas fa-industry"></i></div>
                        <div class="placeholder-text">Industrial Warehouse</div>
                    </div>
                    <div class="project-info">
                        <h3>Industrial Warehouse</h3>
                        <a href="projects.html" class="project-link"><i class="fas fa-search"></i></a>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="golden-placeholder" data-title="Stairs">
                        <div class="placeholder-icon"><i class="fas fa-stairs"></i></div>
                        <div class="placeholder-text">Stairs</div>
                    </div>
                    <div class="project-info">
                        <h3>Stairs</h3>
                        <a href="projects.html" class="project-link"><i class="fas fa-search"></i></a>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="golden-placeholder" data-title="Restaurant Floor">
                        <div class="placeholder-icon"><i class="fas fa-utensils"></i></div>
                        <div class="placeholder-text">Restaurant Floor</div>
                    </div>
                    <div class="project-info">
                        <h3>Restaurant Floor</h3>
                        <a href="projects.html" class="project-link"><i class="fas fa-search"></i></a>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="golden-placeholder" data-title="Garage System">
                        <div class="placeholder-icon"><i class="fas fa-car"></i></div>
                        <div class="placeholder-text">Garage System</div>
                    </div>
                    <div class="project-info">
                        <h3>Garage System</h3>
                        <a href="projects.html" class="project-link"><i class="fas fa-search"></i></a>
                    </div>
                </article>
            </div>
            
            <div class="more-projects-container">
                <a href="projects.html" class="btn btn-primary more-projects-btn">
                    <span class="btn-text">More Projects</span>
                    <i class="fas fa-arrow-right btn-icon"></i>
                </a>
            </div>
        </div>
    </section>
    `;
}

function initProjects() {
    // Animacja pojawiania się elementów podczas przewijania
    const animateProjectCards = function() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                card.classList.add('animate');
            }
        });
    };
    
    // Wywołaj animację przy załadowaniu strony
    animateProjectCards();
    
    // Wywołaj animację podczas przewijania
    window.addEventListener('scroll', animateProjectCards);
    
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

export { Projects, initProjects };