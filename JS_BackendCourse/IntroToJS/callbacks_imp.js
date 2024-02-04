function download(url,cb){
    console.log("started Downloading from...",url);
    setTimeout(function downloading(){
        console.log("Download Complete");
        const content = "abc";
        cb(content);
    },5000);
}

function saveData(data,cb){
    console.log("Saving Data");
    setTimeout(function writingData(){
        console.log("Data Saved");
        const fileName = "demo.pdf";
        cb(fileName);
    },6000);
}

function uploadtoNewUrl(fileName,url2,cb){
    console.log("Started Uploading to url",);
    setTimeout(function uploading(){
        console.log("Upload Complete");
        cb(url2);
    },7000);
}

download("www.xyz.com",function execDownload(content){
    console.log("Downloaded data is",content);
    saveData(content,function execWriteData(fileName){
        console.log("Data is written into",fileName);
        uploadtoNewUrl(fileName,"www.manu.com",function execUpload(url2){
            console.log(fileName,"successfully uploaded to",url2);
        });
        
    });
});