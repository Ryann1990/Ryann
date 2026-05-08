const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// "မချစ်ဘူး" button ကို mouse ထိရင် ပြေးခိုင်းတာ
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "fixed";
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// "ချစ်တယ်" button ကို နှိပ်ရင် message ပြတာ
yesBtn.addEventListener('click', () => {
    alert("ဟေးးး ငါလဲ ချစ်တယ်နော်! ❤️💖");
    document.querySelector('.card').innerHTML = "<h1>Yayyy! I Love You Too! 💖</h1><p>ပျော်ရွှင်စရာနေ့လေးဖြစ်ပါစေ!</p>";
});