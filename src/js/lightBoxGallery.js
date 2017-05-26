
 $(function () {
 
   $('a.galleryLink').click(function (e) {
      
     e.preventDefault();
     
     $('#image-modal .modal-body .modalImg').attr('src', $(this).find('img').attr('src'));
      console.log($(this).find('img').attr('src'));
     $("#image-modal").modal('show');
   });

   $(".ModalCommentAction").click(function(){
  
       $(".RightBodyModal").toggleClass("rightBodyModalToggle");
       $(".modalTextArea").toggleClass("text");
       $(".modalSendBlock").toggleClass("modalSendBlockToogle");
       $(".modalMakeComment").toggleClass("modalMakeCommentToogle");
       $(".modalMasc").toggleClass("modalMascToogle");
       $(".TabletComment").toggleClass("TabletCommentTrigger");
       $(".postTablet").toggleClass("postTabletTrigger");

      //  $(".modalTextArea").css({display: "block"});
      // $(".RightBodyModal").css({height: "380px"});
   });

 $(".post").click(function(){
 
     $(".modalTextArea").toggleClass("text");
   $(".RightBodyModal").toggleClass("rightBodyModalToggle");
        $(".modalSendBlock").toggleClass("modalSendBlockToogle");
            $(".modalMakeComment").toggleClass("modalMakeCommentToogle");
});
  //  $('#image-modal .modal-body img').on('click', function () {
  //    $("#image-modal").modal('hide')
  //  });

   $('#prev,#next').click(function () {


     var src = $('#image-modal .modal-body .modalImg').attr('src');
     var img = $('.galleryLink').find('img[data-img="' + src + '"]');
     if (this.id == 'next') {
       var nextsrc = img.parent().parent().next().find('img').attr('data-img');
       if (!nextsrc) {
         var img = $('.galleryLink').filter(':first').find('img');

         nextsrc = img.attr('data-img');
         console.log('new:' + nextsrc);
       }
       $('#image-modal .modal-body .modalImg').attr('src', nextsrc);
     } else {
       var prevsrc = img.parent().parent().prev().find('img').attr('data-img');
       if (!prevsrc) {
         var img = $('.galleryLink').filter(':last').find('img');
          console.log(img);
         prevsrc = img.attr('data-img');
         console.log('new:' + prevsrc);
       }
       $('#image-modal .modal-body .modalImg').attr('src', prevsrc);
     }
   });
 });