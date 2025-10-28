// Salve este arquivo como js/faq-accordion.js

document.addEventListener('DOMContentLoaded', () => {
    const faqPerguntas = document.querySelectorAll('.faq-pergunta');

    faqPerguntas.forEach(pergunta => {
        pergunta.addEventListener('click', () => {
            const targetId = pergunta.getAttribute('data-target');
            const resposta = document.getElementById(targetId);
            const isExpanded = pergunta.getAttribute('aria-expanded') === 'true';

            // 1. Fechar todos os outros, exceto o atual se estiver sendo aberto
            faqPerguntas.forEach(p => {
                const pTargetId = p.getAttribute('data-target');
                const pResposta = document.getElementById(pTargetId);
                
                if (p !== pergunta && p.getAttribute('aria-expanded') === 'true') {
                    p.setAttribute('aria-expanded', 'false');
                    pResposta.style.maxHeight = '0';
                    pResposta.style.paddingTop = '0';
                    pResposta.style.paddingBottom = '0';
                }
            });

            // 2. Abrir ou fechar o item clicado
            if (!isExpanded) {
                // Abrir
                pergunta.setAttribute('aria-expanded', 'true');
                // Calcula a altura real do conteúdo e define a altura máxima para animar
                // +40px para compensar o padding-top e padding-bottom
                resposta.style.maxHeight = resposta.scrollHeight + 40 + "px"; 
                resposta.style.paddingTop = '20px';
                resposta.style.paddingBottom = '20px';
            } else {
                // Fechar
                pergunta.setAttribute('aria-expanded', 'false');
                resposta.style.maxHeight = '0';
                resposta.style.paddingTop = '0';
                resposta.style.paddingBottom = '0';
            }
        });
    });
});