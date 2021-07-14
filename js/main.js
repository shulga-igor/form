$(document).ready(function(e){

    $('.js-additional').on('click', function(e){
        var name = $(this).val();

        if(name == 'no'){
           $('.additional-blc').slideUp();
        }else{
            $('.additional-blc').slideDown();
        }
        
    })




      $('.js-fileInput').on('change', function(){
        var fileFolder = $(this).siblings('.file-input');
        var fileName = fileFolder.find('.file-input');
        var filePlaceholder = fileFolder.find('.placeholder');
        var fileText = fileFolder.find('.file-name .text');
        var value = $(this).val();
        var fileName = value.split("\\");

        if(fileName.length > 1){
            filePlaceholder.hide();
            fileText.show();
            fileText.text(fileName[fileName.length - 1]);
        }else{
            filePlaceholder.show();
            fileText.hide();
        }

      })

})