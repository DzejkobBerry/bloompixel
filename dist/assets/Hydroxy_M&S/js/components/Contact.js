function Contact() {
    return `
    <!-- Contact Section -->
    <section class="contact" id="contact"> 
        <div class="container"> 
            <div class="section-header"> 
                <h2 class="section-title">Get Your Premium Quote</h2> 
                <p class="section-description">Professional consultation and detailed pricing estimate</p> 
            </div> 
            
            <div class="contact-grid">
                <!-- Karta informacyjna (lewa strona) -->
                <div class="contact-info-card">
                    <div class="info-card-header">
                        <h3>Contact Information</h3>
                        <p>We're here to assist you with your project</p>
                    </div>
                    
                    <div class="info-card-content">
                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-clock"></i></div>
                            <div class="info-details">
                                <h4>Business Hours</h4>
                                <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                                <p>Saturday: 9:00 AM - 3:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-phone"></i></div>
                            <div class="info-details">
                                <h4>Phone</h4>
                                <p><a href="tel:+31639501024">+31 6 39 50 10 24</a></p>
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-envelope"></i></div>
                            <div class="info-details">
                                <h4>Email</h4>
                                <p><a href="mailto:info@hydroxyms.nl">info@hydroxyms.nl</a></p>
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="info-details">
                                <h4>On-Site Service</h4>
                                <p>We provide on-site consultations and services throughout the metropolitan area</p>
                            </div>
                        </div>
                        
                        <div class="info-item">
                            <div class="info-icon"><i class="fas fa-truck"></i></div>
                            <div class="info-details">
                                <h4>Service Area</h4>
                                <p>Noordwijkerhout +50km: Noordwijkerhout, Noordwijk, Katwijk, Hillegom, Lisse, Zandvord, Haga, Rotterdam, Amsterdam, Badhoevendorp, Alsmere and more.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Formularz kontaktowy (prawa strona) -->
                <div class="contact-form-container"> 
                    <div class="info-card-header" style="border-bottom: none;">
                        <h3>Get a Quote</h3>
                    
                        <div class="info-item" style="margin-top: var(--space-md);">
                            <div class="info-icon"><i class="fas fa-calculator"></i></div>
                            <div class="info-details">
                                <h4>Check How Much It Will Cost - Free</h4>
                                <p>Fill out the form and receive an initial quote within 1 business day.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div style="border-bottom: 1px solid rgba(212, 175, 55, 0.3); margin-bottom: var(--space-lg);"></div>
                    
                    <form id="quote-form" class="quote-form"> 
                        <div class="form-grid"> 
                            <div class="form-group"> 
                                <label for="fullName">Full Name</label> 
                                <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required aria-required="true"> 
                            </div> 
                            
                            <div class="form-group"> 
                                <label for="email">Email Address</label> 
                                <input type="email" id="email" name="email" placeholder="Enter your email address" required aria-required="true"> 
                            </div> 
                            
                            <div class="form-group"> 
                                <label for="phone">Phone Number</label> 
                                <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required aria-required="true"> 
                            </div> 
                            
                            <div class="form-group"> 
                                <label for="area">Project Area (m²)</label> 
                                <input type="number" id="area" name="area" placeholder="Enter project area" required aria-required="true"> 
                            </div> 
                            
                            <div class="form-group"> 
                                <label for="surface">Select services</label> 
                                <select id="surface" name="surface" required aria-required="true"> 
                                    <option value="" disabled selected>Select service type</option> 
                                    <optgroup label="Waterproofing">
                                        <option value="waterproofing_garage">garage</option> 
                                        <option value="waterproofing_terrace">terrace</option> 
                                        <option value="waterproofing_balcony">balcony</option> 
                                        <option value="waterproofing_foundations">foundations</option> 
                                    </optgroup>
                                    <optgroup label="Epoxy resin floor">
                                        <option value="epoxy_garage">garage</option> 
                                        <option value="epoxy_livingroom">living room</option> 
                                        <option value="epoxy_office">office</option> 
                                        <option value="epoxy_premises">premises</option> 
                                        <option value="epoxy_apartment">apartment</option> 
                                        <option value="epoxy_wall">wall</option> 
                                    </optgroup>
                                </select> 
                            </div> 
                            
                            <div class="form-group"> 
                                <label for="date">Preferred Start Date</label> 
                                <input type="date" id="date" name="date" required aria-required="true"> 
                            </div> 
                            
                            <div class="form-group full-width"> 
                                <label for="details">Project Details</label> 
                                <textarea id="details" name="details" rows="5" placeholder="Describe your project requirements..." aria-required="true"></textarea> 
                            </div> 
                            
                            <div class="form-group full-width text-center"> 
                                <button type="submit" class="btn btn-primary"> 
                                    <span class="btn-text">Request Quote</span> 
                                </button> 
                            </div> 
                        </div> 
                    </form> 
                </div>
            </div>
        </div>
    </section>

    <!-- Modal sukcesu -->
    <div id="successModal" class="modal">
        <div class="modal-content success-modal-content">
            <span class="close-modal">&times;</span>
            <div class="success-icon">
                <i class="fas fa-check-circle"></i>
            </div>
            <h3>Thank You for Your Message!</h3>
            <p>We appreciate your interest in our services.</p>
            <p>Our team will get back to you within 24 hours.</p>
            <button class="btn btn-primary close-success-btn">Close</button>
        </div>
    </div>
    `;
}

function initContact() {
    // Obsługa modalu z informacją o pomyślnym wysłaniu
    const successModal = document.getElementById('successModal');
    const closeSuccessBtn = document.querySelector('.close-success-btn');
    
    // Zamykanie modalu z informacją o pomyślnym wysłaniu
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            successModal.classList.remove('show');
            document.body.style.overflow = ''; // Przywraca przewijanie strony
        });
    }
    
    // Dodanie obsługi zamykania modalu z informacją o pomyślnym wysłaniu po kliknięciu w X
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        });
    });
    
    // Inicjalizacja formularza za pomocą klasy QuoteForm
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        // Załadowanie skryptu quote-form.js jeśli jeszcze nie został załadowany
        if (typeof QuoteForm === 'undefined') {
            const script = document.createElement('script');
            script.src = 'js/quote-form.js';
            document.head.appendChild(script);
            script.onload = function() {
                new QuoteForm('#quote-form');
            };
        } else {
            new QuoteForm('#quote-form');
        }
    }
}

export { Contact, initContact };