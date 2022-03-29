prediction_1 = "";
prediction_2 = "";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HMrXkGivQ/model.json',modelLoaded);

function modelLoaded()
{
    console.log('model loaded');
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="prediction 1 : "+prediction_1;
    speak_data_2="prediction 2 : "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance (speak_data_1+speak_data_2);
    synth.speak(utterThis);
}  
function check()
{
img=document.getElementById('captured_image');
classifier.classify(img,gotResult);
}  

function gotResult(error,result)
{
if (error)
{
    console.error(error);
}
else 
{
    console.log(result);
    document.getElementById("result_emotion_name").innerHTML=result[0].label;
    document.getElementById("result_emotion_name2").innerHTML=result[1].label;
    prediction_1 = result[0].label;
    prediction_2 = result[1].label;
    speak();
    if (result[0].label=="one")
    {
        document.getElementById("update_emoji").innerHTML="&#9757;";
    }

    if (result[0].label=="fist")
    {
        document.getElementById("update_emoji").innerHTML="&#9994;";
    }
    
    if (result[0].label=="hand")
    {
        document.getElementById("update_emoji").innerHTML="&#9995;";
    }
    
    if (result[0].label=="two")
    {
        document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    
    if (result[0].label=="thumps up")
    {
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    
    if (result[0].label=="thumps down")
    {
        document.getElementById("update_emoji").innerHTML="&#128078;";
    }
    
    if (result[0].label=="horns")
    {
        document.getElementById("update_emoji").innerHTML="&#129304;";
    }

    if (result[1].label=="one")
    {
        document.getElementById("update_emoji").innerHTML="&#9757;";
    }

    if (result[1].label=="fist")
    {
        document.getElementById("update_emoji").innerHTML="&#9994;";
    }
    
    if (result[1].label=="hand")
    {
        document.getElementById("update_emoji").innerHTML="&#9995;";
    }
    
    if (result[1].label=="two")
    {
        document.getElementById("update_emoji").innerHTML="&#9996;";
    }
    
    if (result[1].label=="thumps up")
    {
        document.getElementById("update_emoji").innerHTML="&#128077;";
    }
    
    if (result[1].label=="thumps down")
    {
        document.getElementById("update_emoji").innerHTML="&#128078;";
    }
    
    if (result[1].label=="horns")
    {
        document.getElementById("update_emoji").innerHTML="&#129304;";
    }
}
}