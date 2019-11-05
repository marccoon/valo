window.onload = function () {
    $('.img-filters').change(function () {
        if($('#showBlock').prop('checked')) {
            $('#catalogBlock').show();
            $('#catalogList').hide();
            $('#showBlockBtn').attr('src', 'img/apartments-block-filter.png');
            $('#showListBtn').attr('src', 'img/a-list-filter.png');
        } else if ($('#showList').prop('checked')) {
            $('#catalogBlock').hide();
            $('#catalogList').show();
            $('#showBlockBtn').attr('src', 'img/apartmentsblock-no-check.png');
            $('#showListBtn').attr('src', 'img/checked-block.png');
        }
    });
    $('.loader').fadeOut(500)
};