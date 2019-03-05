var imgInfoUrl = 'https://shawim.github.io/test/test_fot_json/gallery_info.json';
var images = [];

function getImageInfo(imgInfoUrl) {
    var images = [];
    $.ajax({
        url: imgInfoUrl,
        dataType: 'json',
        success: function (data) {
            if(data)
            {
                $.each(data, function(i, item){
                    var inner = 
                    {
                        name: item.name,
                        title: item.title,
                        content: item.content,
                    }
                    images.push(inner);
                });
            }
        }
    });
    return images; 
}
console.log(images);