document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})


function solution(text) {
    textsplit = text.split("");
    // console.log(textsplit);
    // console.log(textsplit[0]);
    // console.log(textsplit[2]);
    // console.log(textsplit[5]);
    // console.log(textsplit[8]);


    let count = 0;
    for (i = 0; i < textsplit.length; i++) {
        if (textsplit[i] == "(") {
            count += 1;
            
        }
        else if (textsplit[i] == ")") {
            count -= 1;
          

        }


    }
    console.log(count);


}