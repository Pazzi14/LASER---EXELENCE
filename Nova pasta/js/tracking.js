// Salve este arquivo como js/tracking.js
// O rastreamento agora é feito pelo Google Tag Manager (GTM)
// O GTM irá respeitar o Consentimento de Cookies do usuário.

document.addEventListener('DOMContentLoaded', () => {
    
    // Função para disparar eventos APENAS para o Google Tag Manager (GTM)
    function trackEvent(eventName, eventLabel) {
        if (window.dataLayer) {
            window.dataLayer.push({
                'event': 'custom_event', // Nome do evento que será capturado no GTM
                'event_name': eventName, // Nome do evento real (e.g., 'whatsapp_click')
                'event_label': eventLabel, // Label/Detalhe do evento
                'event_category': 'Engagement' // Categoria (pode ser ajustada no GTM)
            });
            console.log(`[GTM Tracked] Evento: ${eventName}, Label: ${eventLabel}`);
        } else {
            console.warn(`[GTM ERROR] dataLayer não encontrado para rastrear ${eventName}.`);
        }
    }

    // 1. Rastreamento do CTA Fixo (WhatsApp)
    const ctaFixo = document.getElementById('cta-fixo-agendar');
    if (ctaFixo) {
        ctaFixo.addEventListener('click', () => {
            trackEvent('whatsapp_click', 'CTA_Fixo_WhatsApp');
        });
    }

    // 2. Rastreamento de CTAs Principais
    const ctas = document.querySelectorAll('.cta-principal-btn');
    ctas.forEach(cta => {
        // Evita duplicar o rastreamento em botões que já têm a função handleFormSubmission (contato.html)
        if (!cta.closest('form')) { 
            cta.addEventListener('click', () => {
                const label = cta.textContent.trim().substring(0, 30); // Usa o texto do botão como label
                trackEvent('cta_click', `CTA_Principal_${label}`);
            });
        }
    });
    
    // 3. Rastreamento dos Links do Footer (para Politica/Termos)
    const legalLinks = document.querySelectorAll('.footer-legal a');
    legalLinks.forEach(link => {
        link.addEventListener('click', () => {
            const label = link.textContent.trim();
            trackEvent('legal_click', `Link_${label}`);
        });
    });

});
