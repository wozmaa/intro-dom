const root = document.getElementById("root");


const p = document.createElement("p");
p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum commodi officia? Aspernatur facilis ea mollitia expedita dicta nisi quidem obcaecati reiciendis, ad officiis odio quos commodi. Veritatis, fugiat impedit.'
p.style.borderRadius = "20px";
p.style.border = "2px solid brown";
p.style.margin = "auto";
p.style.width = "600px";
p.style.padding = "10px";

const div = document.createElement("div");
const intocode = document.createElement("a");
const google = document.createElement("a");
const instugrum = document.createElement("a");

intocode.textContent = "intocode";
google.textContent = "google";
instugrum.textContent = "instugrum";
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.width = "500px";
div.style.margin = "auto";
div.style.padding = "10px"
intocode.href = "https://intocode.ru/";
google.href = "https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwj6mPu3x5j4AhUstYsKHbhqD70QPAgI";
instugrum.href = "https://www.youtube.com/watch?v=1cTfHw9nJqY";
intocode.target = "_blanc";
google.target = "_blanc";
instugrum.target = "_blanc";

root.append(p, div);
div.append(intocode, google, instugrum);