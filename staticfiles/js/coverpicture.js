$(function () {

  var jcrop_api,
      boundx,
      boundy,
      xsize = 800,
      ysize = 800;

  $("#crop-picture").Jcrop({
    aspectRatio: xsize / ysize,
    onSelect: updateCoords,
    setSelect: [800, 800, 1200, 1200]
  },function(){
    var bounds = this.getBounds();
    boundx = bounds[0];
    boundy = bounds[1];
    jcrop_api = this;
  });

  function updateCoords(c) {
    $("#x").val(c.x);
    $("#y").val(c.y);
    $("#w").val(c.w);
    $("#h").val(c.h);
  };


$("#btn-cover-upload-picture").click(function () {
    $("#cover-picture-upload-form input[name='coverpicture']").click();
  });

  $("#cover-picture-upload-form input[name='coverpicture']").change(function () {
    $("#cover-picture-upload-form").submit();
  });



});
