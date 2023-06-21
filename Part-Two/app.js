$(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        let title = $('form').find('input[name="title"]').val();
        let rating = $('form').find('input[name="rating"]').val();
        $('ul').append(`<li >${title} - ${rating} <i class='fa fa-star text-warning'></i> <button class='btn btn-danger item' style='border-radius:50%'>X</button> </li>`);
        $('form')[0].reset()
    });

    $('ul').on('click', ".item", function(e){
        e.preventDefault();
        const $target = $(e.target);
        $target.closest("li").remove();
  
    });
    
});