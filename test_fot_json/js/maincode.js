var images = [];
$.ajax({
    url: 'https://shawim.github.io/test/test_fot_json/gallery_info.json',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        this.images = data;
    }
});
console.log(images);

