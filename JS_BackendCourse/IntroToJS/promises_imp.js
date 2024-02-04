function download(url){
    return new Promise(function(resolve,reject){
        console.log("startedDownloading from ",url);
        setTimeout(function downloading(){
            console.log("Download Complete");
            const content = "abcd";
            resolve(content);
        },5000);
    });
}

function write(data){
    return new Promise(function(resolve,reject){
        console.log("writing ",data);
        setTimeout(function writing(){
            console.log("Data written Successfully");
            const fileName="Demo.pdf";
            resolve(fileName);
        },2000);

    });
}

function upload(url2,fileName){
    return new Promise(function(resolve,reject){
        console.log("Uploading data to",url2);
        setTimeout(function Uploading(){
            console.log("Uploaded Successfully");
            const done = "completed";
            resolve(done);
        },2000);
    });
}

 download("www.xyz.com")
.then(function processDownload(value){
   console.log("Data downloaded is",value); 
   return write(value);
})
.then(function procesWrite(value){
    console.log("Data written into",value);
    return upload("www.manu.com",value);
})
.then(function processUpload(value){
    console.log(value);
})
