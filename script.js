let flashInterval;
let selectionInterval;
let winners = [];
let displayedDetails = "";
let Count = 0;

const startbtn = document.getElementById("startbtn");
const winnertitle = document.createElement("h3");
winnertitle.textContent = "winners are: ";
winnertitle.className = "winner-h3";

const cngrstext=document.createElement("h3");
cngrstext.textContent="congratulations!"



function start() {
    const stopbtn = document.getElementById("stopbtn");
    const resetbtn = document.getElementById("resetbtn");

    const person = [
        { SiNo: 1, Name: "Shahana", age: 18, course: "computer science" },
        { SiNo: 2, Name: "Shifana", age: 18, course: "computer science" },
        { SiNo: 3, Name: "Navya", age: 18, course: "computer science" },
        { SiNo: 4, Name: "Anjana", age: 18, course: "computer science" },
        { SiNo: 5, Name: "Shifa", age: 18, course: "computer science" },
        { SiNo: 6, Name: "Najva", age: 18, course: "computer science" },
        { SiNo: 7, Name: "Fidha", age: 18, course: "computer science" },
        { SiNo: 8, Name: "Saniya", age: 18, course: "computer science" },
        { SiNo: 9, Name: "Mushrifa", age: 18, course: "computer science" },
        { SiNo: 10, Name: "Jahana", age: 18, course: "computer science" },
    ];

    function RandomNames() {
        if (!flashInterval) {
            flashInterval = setInterval(() => {
                const index = Math.floor(Math.random() * person.length);
                const randomName = person[index].Name;
                document.getElementById("randomName").innerHTML = randomName;
            }, 100);
        }
    }

    function selection() {
        if (!selectionInterval && Count < 5) {
            selectionInterval = setInterval(() => {
                if (Count >= 5) {
                    clearInterval(selectionInterval);
                    clearInterval(flashInterval);
                    selectionInterval = null;
                    flashInterval = null;
                    document.getElementById("randomName").innerHTML = "selection completed";
                    return;
                }

                let randomIndex;
                let randomName;

                do {
                    randomIndex = Math.floor(Math.random() * person.length);
                    randomName = person[randomIndex].Name;
                } while (winners.find(winner => winner.Name === randomName));

                const dtls = person[randomIndex];

                const ul = document.getElementById("details-ul");
                const li = document.createElement("li");
                li.className = "li";
                li.textContent = `SINO: ${dtls.SiNo}, Name: ${dtls.Name}, age: ${dtls.age}, course: ${dtls.course}`;
                ul.appendChild(li);

                winners.push(dtls);
                document.getElementById("winnersName").innerHTML = winners.map(winner => winner.Name).join(", ");

                
                Count++;
            }, 1000);
        }
    }

const winner=document.getElementById("winners")
winner.appendChild(winnertitle)

const cngrs=document.getElementById("cngrs")
cngrs.appendChild(cngrstext)


    function stop() {

                clearInterval(flashInterval);
                clearInterval(selectionInterval);
                flashInterval = null;
                selectionInterval = null;
        
            }


   function reset(){
    clearInterval(flashInterval);
    clearInterval(selectionInterval);
    flashInterval=null;
    selectionInterval=null;

    displayedDetails=""
    Count=0;
    winners=[]

    document.getElementById("winnersName").textContent=""
    document.getElementById("randomName").textContent="The beauty contest winners are...?";
    const ul=document.getElementById("details-ul")
    ul.textContent=""


   }
    

    RandomNames();
    selection();
    stopbtn.addEventListener("click", stop);
    resetbtn.addEventListener("click", reset);
}
