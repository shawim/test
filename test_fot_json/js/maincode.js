var images = [];
$.ajax({
    url: 'https://shawim.github.io/test/test_fot_json/gallery_info.json',
    dataType: 'json',
    success: function (data) {
        images = data;
    }
});
console.log(images);
