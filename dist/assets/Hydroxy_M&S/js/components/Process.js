function Process() {
    return `
    <!-- Collaboration Process Section -->
    <section class="stats visible" id="collaboration-process"> 
        <div class="container"> 
            <div class="section-header">
                <h2 class="section-title">Our Collaboration Process</h2>
                <p class="section-description">How we work together to deliver exceptional results</p>
            </div>
            <div class="stats-grid process-grid"> 
                <div class="stat-item process-item"> 
                    <div class="process-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="stat-number process-step" id="step1">01</div> 
                    <h3 class="process-title">Consultation</h3>
                    <div class="stat-label process-description">Initial meeting to understand your needs and vision</div> 
                </div> 
                <div class="stat-item process-item"> 
                    <div class="process-icon">
                        <i class="fas fa-drafting-compass"></i>
                    </div>
                    <div class="stat-number process-step" id="step2">02</div> 
                    <h3 class="process-title">Design</h3>
                    <div class="stat-label process-description">Creating detailed plans and material selection</div> 
                </div> 
                <div class="stat-item process-item"> 
                    <div class="process-icon">
                        <i class="fas fa-hard-hat"></i>
                    </div>
                    <div class="stat-number process-step" id="step3">03</div> 
                    <h3 class="process-title">Installation</h3>
                    <div class="stat-label process-description">Expert execution with premium materials</div> 
                </div> 
                <div class="stat-item process-item"> 
                    <div class="process-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="stat-number process-step" id="step4">04</div> 
                    <h3 class="process-title">Quality Assurance</h3>
                    <div class="stat-label process-description">Final inspection and client satisfaction</div> 
                </div> 
            </div> 
        </div> 
    </section>
    `;
}

function initProcess() {
    // Animacja procesu współpracy
    const processItems = document.querySelectorAll('.process-item');
    
    const observerProcess = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observerProcess.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    processItems.forEach((item, index) => {
        item.style.setProperty('--animation-order', index + 1);
        observerProcess.observe(item);
    });
}

export { Process, initProcess };