let captures =
    [
        { name: 'Lite', information: 'rabitur ullamcorper. Magnis etiam dictumst curae facilisi id augue suspendisse, a magna integer viverra nunc po', photo: "images/block2_img1.png" },
        { name: 'Professional', information: 'Finibus suspendisse gravida mattis sociosqu phasellus eget porttitor duis at', photo: "images/block2_img2.png" },
        { name: 'Ultimate', information: 'Est ridiculus placerat turpis lectus potenti sociosqu inceptos fringilla ligula finibus', photo: "images/block2_img3.png" },
    ];

let i = 0;
function emp() {
    let elem = document.getElementById("capture");
    let n = Number(document.getElementById('number').value);
    console.log(n);
    if (n > i) {
        for (; i < n; i++) {
            let div = document.createElement("div");
            div.className = "capture";
            div.innerHTML = `<img src=${captures[i].photo}></img>`;
            div.innerHTML += `<h3 class="cap_name">${captures[i].name}</h3>`;
            div.innerHTML += `<p class="additional">${captures[i].information}</p`;
            elem.prepend(div);
        };
    }
    else if (n < i) {
        let b = i - n;
        i = n;
        console.log(i);
        for (; b > 0; b--) {
            let cof = document.querySelector('.capture');
            cof.removeChild(cof.firstChild);
        };
      
    }
}