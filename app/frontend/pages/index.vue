<script setup>
// Página inicial estática por enquanto
</script>

<template>
    <div class="landing-container">
        <!-- 🌐 Header -->
        <header class="header flex align-items-center justify-content-between px-4 py-3 fixed top-0 left-0 w-full">
            <div class="flex align-items-center gap-2">
                <img src="../assets/images/logos/logo.png" alt="Agendaki" class="logo" />
            </div>
            <nav>
                <NuxtLink to="/login" class="btn-primary">Entrar</NuxtLink>
            </nav>
        </header>

        <!-- 🏠 Hero -->
        <main class="hero flex flex-column align-items-center justify-content-center text-center px-3 py-8">
            <h1 class="hero-title">
                Simplifique seus <span class="highlight">agendamentos</span> com o Agendaki
            </h1>
            <p class="hero-subtitle">
                A plataforma moderna para barbearias, salões, clínicas e autônomos. Gerencie seus horários, clientes e
                serviços de forma fácil e rápida.
            </p>
            <div class="flex flex-column sm:flex-row gap-3 mt-4">
                <NuxtLink to="/cadastro" class="btn-primary">Começar agora</NuxtLink>
                <a href="#recursos" class="btn-outline">Ver recursos</a>
            </div>

            <div class="mt-6">
                <img src="../assets/images/agentes.png" alt="Painel Agendaki" class="mockup" />
            </div>
        </main>

        <!-- 💡 Recursos -->
        <section id="recursos" class="recursos-section py-8 px-3">
            <div class="text-center mb-6">
                <h2 class="section-title">Recursos principais</h2>
            </div>
            <div class="grid">
                <div class="col-12 md:col-4">
                    <div class="feature-card">
                        <div class="feature-icon">💈</div>
                        <h3 class="feature-title">Agendamento Inteligente</h3>
                        <p class="feature-desc">Gerencie horários automaticamente e evite conflitos de agenda.</p>
                    </div>
                </div>
                <div class="col-12 md:col-4">
                    <div class="feature-card">
                        <div class="feature-icon">📱</div>
                        <h3 class="feature-title">Painel Responsivo</h3>
                        <p class="feature-desc">Acesse sua agenda e informações de qualquer dispositivo.</p>
                    </div>
                </div>
                <div class="col-12 md:col-4">
                    <div class="feature-card">
                        <div class="feature-icon">💬</div>
                        <h3 class="feature-title">Lembretes Automáticos</h3>
                        <p class="feature-desc">Envie lembretes de agendamento por WhatsApp ou SMS.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 💰 Planos e Preços -->
        <section id="planos" class="planos-section py-10 px-3 text-center">
            <h2 class="section-title mb-6">Planos simples e transparentes</h2>
            <p class="section-subtitle mb-6">Escolha o plano ideal para o seu negócio e comece hoje mesmo.</p>

            <div class="grid justify-content-center">
                <div class="col-12 md:col-4">
                    <div class="plan-card">
                        <h3 class="plan-title">Iniciante</h3>
                        <p class="plan-price">R$ 0 <span>/mês</span></p>
                        <ul class="plan-features">
                            <li>✅ 1 Profissional</li>
                            <li>✅ Agendamentos ilimitados</li>
                            <li>✅ Painel web responsivo</li>
                            <li>❌ Sem lembretes automáticos</li>
                        </ul>
                        <NuxtLink to="/cadastro" class="btn-outline mt-3">Começar grátis</NuxtLink>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="plan-card destaque">
                        <div class="tag">Mais Popular</div>
                        <h3 class="plan-title">Profissional</h3>
                        <p class="plan-price">R$ 49 <span>/mês</span></p>
                        <ul class="plan-features">
                            <li>✅ Até 5 profissionais</li>
                            <li>✅ Lembretes automáticos (WhatsApp)</li>
                            <li>✅ Suporte prioritário</li>
                            <li>✅ Estatísticas e relatórios</li>
                        </ul>
                        <NuxtLink to="/cadastro" class="btn-primary mt-3">Assinar agora</NuxtLink>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="plan-card">
                        <h3 class="plan-title">Empresarial</h3>
                        <p class="plan-price">R$ 99 <span>/mês</span></p>
                        <ul class="plan-features">
                            <li>✅ Profissionais ilimitados</li>
                            <li>✅ Lembretes automáticos e personalizados</li>
                            <li>✅ Integração com redes sociais</li>
                            <li>✅ Suporte premium</li>
                        </ul>
                        <NuxtLink to="/cadastro" class="btn-outline mt-3">Falar com vendas</NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- ⭐ Depoimentos -->
        <section id="depoimentos" class="depoimentos-section py-10 px-3 text-center">
            <h2 class="section-title mb-6">O que nossos clientes dizem</h2>
            <div class="grid justify-content-center">
                <div class="col-12 md:col-4">
                    <div class="testimonial-card">
                        <p class="testimonial-text">
                            “Depois que comecei a usar o Agendaki, nunca mais perdi um cliente por esquecimento. Os
                            lembretes automáticos são incríveis!”
                        </p>
                        <div class="testimonial-author">
                            <img src="" alt="Marcos" class="author-photo" />
                            <div>
                                <strong>Marcos Silva</strong>
                                <span>Barbearia do Marcos - SP</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="testimonial-card">
                        <p class="testimonial-text">
                            “Simples, rápido e confiável. Consigo ver minha agenda pelo celular e meus clientes amam a
                            praticidade de agendar online.”
                        </p>
                        <div class="testimonial-author">
                            <img src="" alt="Ana" class="author-photo" />
                            <div>
                                <strong>Ana Paula</strong>
                                <span>Estúdio de Beleza Ana - RJ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 md:col-4">
                    <div class="testimonial-card">
                        <p class="testimonial-text">
                            “Economizei horas por semana. Tudo fica organizado e o suporte é excelente. Recomendo pra
                            qualquer autônomo!”
                        </p>
                        <div class="testimonial-author">
                            <img src="" alt="Rodrigo" class="author-photo" />
                            <div>
                                <strong>Rodrigo Lima</strong>
                                <span>Fisioterapeuta - MG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 🚀 CTA Final -->
        <section id="cta-final" class="cta-section text-center py-10 px-3">
            <h2 class="cta-title">Pronto para organizar seus agendamentos?</h2>
            <p class="cta-subtitle">Crie sua conta gratuita e comece a transformar a rotina do seu negócio agora mesmo.
            </p>
            <NuxtLink to="/cadastro" class="btn-primary mt-4">Começar grátis</NuxtLink>
        </section>

        <!-- 📩 Rodapé -->
        <footer class="footer text-center py-4">
            <p>© {{ new Date().getFullYear() }} Agendaki — Todos os direitos reservados.</p>
        </footer>
    </div>
</template>

<style scoped>
/* ====== 🌈 Layout Geral ====== */
.landing-container {
    font-family: 'Inter', sans-serif;
    color: #333;
    background: linear-gradient(to bottom, #f8faff, #ffffff);
    overflow-x: hidden;
}

/* ====== 🧭 Header ====== */
.header {
    background-color: #282828;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #eee;
    z-index: 10;
}

.logo {
    height: 70px;
    width: 70px;
    cursor: pointer;
}

.btn-primary {
    background: #7AAE25;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s;
}

.btn-primary:hover {
    background: #9FCC3D;
}

.btn-outline {
    border: 1px solid #ccc;
    color: #333;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s;
}

.btn-outline:hover {
    background-color: #f4f4f4;
}

/* ====== 🏠 Hero ====== */
.hero {
    min-height: 90vh;
    margin-top: 70px;
}

.hero-title {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1.2;
    max-width: 800px;
}

@media (min-width: 768px) {
    .hero-title {
        font-size: 3.5rem;
    }
}

.hero-subtitle {
    color: #555;
    font-size: 1.2rem;
    max-width: 600px;
    margin-top: 1rem;
}

.highlight {
    color: #9FCC3D;
}

.mockup {
    width: 100%;
    max-width: 900px;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ====== 💡 Recursos ====== */
.recursos-section {
    background: #fff;
}

.section-title {
    font-size: 2rem;
    font-weight: 700;
}

.feature-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
}

.feature-card:hover {
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
}

.feature-icon {
    font-size: 2.5rem;
    color: #9FCC3D;
    margin-bottom: 1rem;
}

.feature-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.feature-desc {
    color: #666;
}

/* ====== 💰 Planos ====== */
.planos-section {
    background: #f9fafb;
}

.plan-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: 0.3s;
    position: relative;
}

.plan-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.08);
}

.plan-card.destaque {
    border: 2px solid #9FCC3D;
}

.plan-card .tag {
    position: absolute;
    top: -12px;
    right: 20px;
    background: #9FCC3D;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
}

.plan-title {
    font-size: 1.5rem;
    font-weight: 700;
}

.plan-price {
    font-size: 2rem;
    font-weight: 800;
    color: #9FCC3D;
}

.plan-price span {
    font-size: 1rem;
    color: #666;
}

.plan-features {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
    text-align: left;
    line-height: 1.8;
}

/* ====== ⭐ Depoimentos ====== */
.depoimentos-section {
    background: #fff;
}

.testimonial-card {
    background: #f9fafb;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    transition: 0.3s;
}

.testimonial-card:hover {
    transform: translateY(-3px);
}

.testimonial-text {
    font-style: italic;
    color: #555;
    margin-bottom: 1.5rem;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-align: left;
}

.author-photo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}

/* ====== 🚀 CTA ====== */
.cta-section {
    background: #9FCC3D;
    color: white;
    border-radius: 1rem;
    margin: 3rem auto;
    max-width: 900px;
}

.cta-title {
    font-size: 2rem;
    font-weight: 800;
}

.cta-subtitle {
    font-size: 1.1rem;
    opacity: 0.9;
}

/* ====== 📩 Rodapé ====== */
.footer {
    background-color: #fafafa;
    color: #666;
    border-top: 1px solid #eee;
    font-size: 0.9rem;
}
</style>
