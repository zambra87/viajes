
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

<script>
$(document).ready(function() { /* Script para desplazamiento suave desde el menu */

    $('.navbar-nav a').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href');
        
        /* Desplazamiento suave animado hasta el elemento objetivo */
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70 
        }, 1000); /* 1 segundo de duracion */
    });
});
</script>



