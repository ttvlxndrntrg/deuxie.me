console.log('moi');

/*
.addEventListener("click",function(){
    console.log('parempaa kehitystä');
});
*/

let lauta=document.getElementById("pelilauta")

let=laattojenMaara=9;
let=pisteet=0;
for (var i=0;i<laattojenMaara;i++){
    //console.log(i);
    let laatta=document.createElement("div");
    laatta.innerHTML=i;
    laatta.dataset.numero=i

    laatta.addEventListener("click",function(){
        console.log(this.innerHTML);
        if(this.dataset.numero==4){
            console.log("tämä on aarre");
            if(!this.classList.contains('klikattu')){
                this.classList.add('klikattu');
                pisteet=pisteet+5;
                let aarre=document.createElement("img");
                aarre.src="img/aarre.jpg";
                this.appendChild(aarre);
                document.getElementById("aarreAani").play();
            }
        }else if(this.dataset.numero==5){
            console.log("tämä on pommi");
            if(!this.classList.contains('klikattu')){
                this.classList.add('klikattu');
                pisteet=pisteet-3;
                let pommi=document.createElement("img");
                pommi.src="img/pommi.gif";
                this.appendChild(pommi);
                document.getElementById("pommiAani").play(); 
            }
        }else{
            document.getElementById("beepAani").play();
            if(!this.classList.contains('klikattu')){
                this.classList.add('klikattu');
                //pisteet=pisteet+1;
                pisteet++;
            }else{
                console.log("ei enää lisää pisteitä");
            }
        }
        console.log("Pisteet: "+pisteet);
        document.getElementById("pisteet").innerHTML=pisteet;
    });
    lauta.appendChild(laatta);
}