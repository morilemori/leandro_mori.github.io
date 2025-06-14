// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

document.addEventListener('DOMContentLoaded', function(){

    //tagueamento header:
    var cabecalho = document.querySelector('.cabecalho-logo')
    cabecalho.addEventListener('click', function(){
            gtag('event', 'click', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                element_name: cabecalho.alt.trim().replace(/\n/g, '_').toLowerCase().replace(/\s+/g, '_').replace(/é/g, 'e'),
                element_group: 'header'
            })
        })

    //tagueamento menu:
    var menu_nav = document.querySelectorAll('a.menu-lista-index, a.menu-sublista-link, a.menu-lista-contato')
    menu_nav.forEach(function (link){
        link.addEventListener('click', function(){
            gtag('event', 'click', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                element_name: link.innerText.trim().toLowerCase().replace(/\s+/g, '_'),
                element_group: 'menu'
            })
        })
    })

    //tagueamento menu-header:
    var menu_home = document.querySelector('.menu-header')
    menu_home.addEventListener('click', function(){
            gtag('event', 'click', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                element_name: menu_home.innerText.trim().replace(/\n/g, '_').toLowerCase().replace(/\s+/g, '_').replace(/é/g, 'e'),
                element_group: 'menu'
            })
        })
    
    //tagueamento menu-rodape:
    var menu_footer = document.querySelector('.menu-rodape')
    menu_footer.addEventListener('click', function(){
            gtag('event', 'outbound_click', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                element_name: menu_footer.children[0].title.trim().replace(/\n/g, '_').toLowerCase().replace(/\s+/g, '_'),
                element_group: 'menu-footer'
            })
        })
  

    //tagueamento file_download:
    var pdf_download = document.querySelector('.menu-lista-download')
    if (pdf_download){
    pdf_download.addEventListener('click', function(){
            gtag('event', 'file_download', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                element_name: pdf_download.innerText.trim().toLowerCase().replace(/\s+/g, '_'),
                element_group: 'menu'
            })
        })
    }

    //tagueamento botao next-page:
    var next = document.querySelector('.next-page')
    next.addEventListener('click', function(){
            gtag('event', 'click', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                element_name: next.innerText.trim().replace(/\n/g, '_').toLowerCase().replace(/\s+/g, '_'),
                element_group: 'next-page'
            })
        })
  
    // tagueamento página analise:
    var card_montadora = document.querySelectorAll('.card.card-montadoras')
        card_montadora.forEach(function (element){
            element.addEventListener('click', function(){
                gtag('event', 'click', {
                    send_to: 'G-096NHNN8Q2',
                    page_location: window.location.href,
                    element_name: element.dataset.id.trim().toLowerCase().replace(/\s+/g, '_'),
                    element_group: 'ver_mais'
                })
            })
        })
   
    // tagueamento página sobre:
    let form_iniciado = false
    const form_button = document.querySelector('button')
    const form_header = document.querySelector('#contato')
    const form_contato = document.querySelector('form.contato')

        //Evento: form_start
        form_contato.querySelectorAll('input, textarea, select').forEach(function (campo){
            campo.addEventListener('focus', function(){

                if (!form_iniciado) {
                    form_iniciado = true;

                    gtag ('event', 'form_start', {
                        send_to: 'G-096NHNN8Q2',
                        page_location: window.location.href,
                        form_id: form_header.id || '',
                        form_name: form_header.innerText.trim().toLowerCase().replace(/\s+/g, '_') || '',
                        form_destination: form_contato.action || ''
                    })
                }
            })
        })

        //Evento: form_submit
        form_contato.addEventListener('submit', function(){
            gtag('event', 'form_submit', {
                send_to: 'G-096NHNN8Q2',
                page_location: window.location.href,
                form_id: form_header.id || '',
                form_name: form_header.innerText.trim().toLowerCase().replace(/\s+/g, '_') || '',
                form_destination: form_contato.action || '',
                form_submit_text: form_button.innerText.trim().toLowerCase().replace(/\s+/g, '_') || ''
            })
        })

        //Evento: view_form_success
        const popup = document.body
        const observer = new MutationObserver(function(mutationList){
            for (let mutation of mutationList) {
                if(mutation.attributeName ==='class'){
                    if (popup.classList.contains('lightbox-open')){
                        gtag('event', 'view_form_success', {
                            send_to: 'G-096NHNN8Q2',
                            page_location: window.location.href,
                            form_id: form_header.id || '',
                            form_name: form_header.innerText.trim().toLowerCase().replace(/\s+/g, '_') || ''
                        });
                        break;
                    }
                }
            }
        })
        observer.observe(popup, {attributes: true, attributeFilter: ['class']})

})

