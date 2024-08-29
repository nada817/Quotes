function Quote(){
    var arr_name=[" Wayne Gretzy" ,"Marilyn Monroe " ," Elbert Hubbard" , " Andre Gide" ,"Friedrich Nietzsche" ," Mark Twain" ," Jess C. Scott"];
    var arr_quote=["You miss 100% of the shots you don't  take.","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
    "“A friend is someone who knows all about you and still loves you.” ","“It is better to be hated for what you are than to be loved for what you are not.” ",
    "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.” ","“If you tell the truth, you don't have to remember anything.” ",
    "“When someone loves you, the way they talk about you is different. You feel safe and comfortable.” "
    ]
    var random=Math.floor(Math.random()*arr_name.length);
    document.getElementById("author-name").innerHTML=arr_name[random];
    document.getElementById("quotes").innerHTML=arr_quote[random];
}
Quote();