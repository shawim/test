var images = [];
$.ajax({
    url: 'https://shawim.github.io/test/test_fot_json/gallery_info.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        window.images = data;
        console.log(images);
    }
});
console.log(images);

