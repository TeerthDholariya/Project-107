//https://teachablemachine.withgoogle.com/models/rlu1h4Xa4/

function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/rlu1h4Xa4/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    console.log(gotResults);
}