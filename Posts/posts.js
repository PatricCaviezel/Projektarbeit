let posts = ["https://scontent.fzrh3-1.fna.fbcdn.net/v/t39.30808-6/288857141_5617794318240810_385641343588664161_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=bOlWZd3m6JoAX-xENiX&_nc_ht=scontent.fzrh3-1.fna&oh=00_AT96LqcGPld6q9JRb-X33gvnMKBbS0dRlOrNKFgz4b3h8w&oe=62D471D7",
    "https://external.fzrh3-1.fna.fbcdn.net/emg1/v/t13/5337807576318586194?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FAl6y3qQRwUw%2Fmaxresdefault.jpg&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=00_AT-vHrk63omJ9-eii97DdUn1smJr0M7BNPelo3HM1bgz8g&oe=62D197B4&_nc_sid=c504da",
    "https://scontent.fzrh3-1.fna.fbcdn.net/v/t39.30808-6/281759484_5497877500232493_5507033988901051692_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=teThE_D5zUIAX-SZ4ee&_nc_ht=scontent.fzrh3-1.fna&oh=00_AT_65g8xR1W5wvK9avixL1EZPmCpwRp5V_uJADeDv-5jnQ&oe=62D4D84D",
    "https://scontent.fzrh3-1.fna.fbcdn.net/v/t39.30808-6/274637681_5277563102263935_1865013751382874208_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=NJmgyTB6jT4AX-gggrJ&_nc_ht=scontent.fzrh3-1.fna&oh=00_AT-Srf9Qoz9NqrLj2mqQUKIQeJ-mZhYZ7yHWG1lqMf86Mw&oe=62D3DECC",
    "https://external.fzrh3-1.fna.fbcdn.net/emg1/v/t13/12827697187334701807?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2FMJgYej2t28U%2Fmaxresdefault.jpg&utld=ytimg.com&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75&ccb=13-1&oh=00_AT_nvPjDajtegEoocCLtvEKOq-so89CVn5yzxbiy76yZ0g&oe=62D124C8&_nc_sid=c504da"
];
let text = ["26-6-22: Processiun si Schlans",
    "Il GP Vignogn ei gia vargaus. Engraziel fetg! Alla Societad da musica Vignogn per l'organisaziun, al RTR Radiotelevisiun Svizra Rumantscha per la registraziun, ed a tuttas e tuts vus che haveis sutegniu nus en ina ni l'autra fuorma. Igl ei stau bi da veser la szena da stuors activa si \"tier nus\" puspei ina gada. Tochen la proxima gada. https://www.youtube.com/watch?v=Al6y3qQRwUw",
    "Cordiala gratulaziun a nossa commembra d'honur e veterana cantunala Mengia Decurtins. Nus gratulein a tuttas novas veteranas e tuts novs veterans. Era a nies gidonter Sini. 🎺🥁👍 Si cun la musica e sin biaras fiastas e muments da cumpignia! Fotografia dil Graubündner Kantonaler Musikverband.",
    "La flomma arda 🔥 Nos concerts primavauns han liug:- sonda, ils 7-5-22 allas 20.00 - dumengia, ils 8-5-22 allas 17.00 🎺 🥁 🎶 Ina biala primavera ed entochen gleiti! Ord (La Quotidiana, 23.2.2022):",
    "Nus giavischein bialas fiastas da nadal e sin seveser il 2022. 🎄🎶📯 Stei sauns e fagei empau musica duront quels dis. https://youtu.be/MJgYej2t28U"
];

document.getElementById("posts").style.gridTemplateRows = `repeat(${posts.length}, 1fr)`

for (let i = 0; i < posts.length; i++) {
    let div = document.createElement("DIV");
    div.setAttribute("id", `div${i}`);
    div.classList.add("postdiv");
    document.getElementById("posts").append(div);
    let img = document.createElement("IMG");
    img.setAttribute("src", posts[i]);
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