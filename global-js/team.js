function changeTeam () {
        $('.team-container__cards_container').hide();
        $('.team-container__buttons_btn').css('background', 'rgba(255,255,255,.6')
}
window.onload = function () {
        $('.team-container__buttons_btn').click(function () {
            changeTeam()
            $(this).css('background', '#fff')
            if ($(this).hasClass('sale-team-btn')) {
                $('.sale-team').show().css('display', 'grid')
            } else if ($(this).hasClass('important-team-btn')) {
                $('.important-team').show().css('display', 'grid')
            } else if ($(this).hasClass('work-agents-btn')) {
                $('.work-agents').show().css('display', 'grid')
            } else if ($(this).hasClass('clients-service-btn')) {
                $('.clients-service').show().css('display', 'grid')
            } else if ($(this).hasClass('team-service-btn')) {
                $('.team-service').show().css('display', 'grid')
            } else if ($(this).hasClass('team-service-btn')) {
                $('.team-service').show().css('display', 'grid')
            } else if ($(this).hasClass('team-zac-btn')) {
                $('.team-zac').show().css('display', 'grid')
            }
        });
        $('.loader').fadeOut(500)
}
