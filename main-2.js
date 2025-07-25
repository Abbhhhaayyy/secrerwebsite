

const paragraph = `Babe ❤️ I am very lucky that I get you on this day 🥰 tumnne 26 July 2003 ko iss duniya mein 
ayi mujhse milne iske liye mai bhagwan ka bhot shukragujar hoon ki unhone mujhe tumse milaya 🙏😇. Kabhi kabhi lagta hai
ki mujhse jyada kismat wala koi nahi 😎 kyuki tumhare mummy papa ne byproduct banaya cute cute sa pyara pyara sa 😘.`;

const textElement = document.getElementById("typewriter-text");

let index = 0;

function typeWriter() {
  if (index < paragraph.length) {
    textElement.textContent += paragraph.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}

function goToNextPage() {
  window.location.href = "nextpage.html";
}

window.onload = typeWriter;