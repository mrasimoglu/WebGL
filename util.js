var loadTextResource = function(url)
{
    return new Promise((resolve, reject) => { 

    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if(request.status < 200 || request.status > 299)
            reject('Error: HTTP status ' + request.status + ' on source ' + url);
        else
            resolve(request.responseText);
    };
    request.send();
    } );
    
};

var loadImage = function (url) {
    return new Promise((resolve, reject) => { 
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.src = url;
    });
};

var loadJSONResource = (url) => { 
    return new Promise((resolve, reject) => {
        loadTextResource(url).then((r)=> {
            resolve(JSON.parse(r));
        }).catch((err) => {
            reject(err);
        }); 
    });
};