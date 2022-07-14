let bilder = ["https://scontent.fbsl1-1.fna.fbcdn.net/v/t1.6435-9/33850532_2082556931764584_623691154742837248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=PUAjn7wzvlIAX8-0Vdd&_nc_ht=scontent.fbsl1-1.fna&oh=00_AT92pSTkihZ0z_wSByEdX4bGI79nFGn2BDvSaZVPWLbEAQ&oe=62F4F303",
    "https://scontent.fbsl1-1.fna.fbcdn.net/v/t1.6435-9/31958271_2057974434222834_7344054473095905280_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=zuXTuoxMMVIAX_Qdvd-&_nc_ht=scontent.fbsl1-1.fna&oh=00_AT_x4-qyumDa5onQXXCqOXP0nDmP0cN7A1jDT9hDP4rsSQ&oe=62F3F132",
    "https://scontent.fbsl1-1.fna.fbcdn.net/v/t1.6435-9/86265670_3142047459148854_4637408500253720576_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kYO-vjKER0kAX-o-zFk&_nc_ht=scontent.fbsl1-1.fna&oh=00_AT-hI-4pzTGKJMeSXOecWrxIUiFXvCvzJrSCiK4XqGma9g&oe=62F30BB8",
    "https://scontent.fbsl1-1.fna.fbcdn.net/v/t1.6435-9/46981235_2347913678562240_4406496597265874944_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=O0-osqQ_81YAX9npn0l&_nc_ht=scontent.fbsl1-1.fna&oh=00_AT-E8wP92WQfDX9CH3Za6PWVCNPETz6QKi1rI41o7Ws_Tg&oe=62F533C9"
];
let text = ["Di da marschar, Sursaissa 2018", "Concert annual 2018", "Tscheiver 2020 15-2-2020: Cun la gruppa da nanins dil rudi d\'affons Trun", "Nozzas 2018"];

document.getElementById("veranstaltungen").style.gridTemplateRows = `repeat(${bilder.length}, 1fr)`

for (let i = 0; i < bilder.length; i++) {
    let div = document.createElement("DIV");
    div.setAttribute("id", `div${i}`);
    div.classList.add("postdiv");
    document.getElementById("veranstaltungen").append(div);
    let img = document.createElement("IMG");
    img.setAttribute("src", bilder[i]);
    img.classList.add("postimage");
    document.getElementById(`div${i}`).append(img);
    let posttext = document.createElement("P");
    posttext.innerText = text[i];
    posttext.classList.add("posttext");
    document.getElementById(`div${i}`).append(posttext);
}

if (window.innerWidth < 500) {
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        p[i].style.fontSize = "0.7em"
    }
}