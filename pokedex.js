pokename.addEventListener("keypress", function(evento){
    console.log(evento.keyCode)
    if(evento.keyCode=="13"){
        cambio();/*alch no se ni como piñas hice esto xd*/
    }
    else{
        return 0;
                                                        }})
const cambio =()=>{
    const PokeName=document.getElementById("pokename");
    let pokeimput=PokeName.value.toLowerCase();
    const url=(`https://pokeapi.co/api/v2/pokemon/${pokeimput}`);
        console.log(url)
        fetch(url).then((res)=>{
            if(res.status!="200"){
                console.log(res);
                pokeimage("../pokemon-sad.gif")
                aparecer();
                pikename("No se ha encontrado el pokemon, intenta otra vez.");
                piketipo("...");
                piketipo2("...");
                piketipo3("...");
                piketipo4("...");
                piketipo5("...");
                Stat("...");
                Stat1("...");
                Stat2("...");
                Stat3("...");
                Stat4("...");
                Stat5("...");
                Habil("...");
                Habil1("...");

            }
            else{
                return res.json();
            }
        }).then((data)=>{
            console.log(data);
            let pokeimg=data.sprites.front_default;
            let pikenam=data.name;
            aparecer();
            
            console.log(data.types);
            let y=data.types;
            y=y.length;
            console.log(y);/*para saber cuantas cosas tiene un array*/ 


               
                
                
                let poketip="-"+data.types[0].type.name;
                console.log(poketip)
                piketipo(poketip);
                y=y-1;
                aparecer();
                
                /*tube que hacer esto porque por una extraña razon no me deja entrar a ciclos for*/
                if(y>0){
                let poketip2="-"+data.types[1].type.name;
                console.log(poketip2)
                piketipo2(poketip2);
                y=y-1;
                }
                else{
                    piketipo2("...");
                }
                if(y>0){
                let poketip3="-"+data.types[2].type.name;
                console.log(poketip3)
                piketipo3(poketip3); 
                y=y-1;
                }
                else{
                    piketipo3("...");
                }
                if(y>0){
                let poketip4="-"+data.types[3].type.name;
                console.log(poketip4)
                piketipo4(poketip4); 
                y=y-1;
                }
                else{
                    piketipo4("...");
                }
                if(y>0){
                let poketip5="-"+data.types[4].type.name;
                console.log(poketip5)
                piketipo5(poketip5); 
                y=y-1;
                }
                else{
                    piketipo5("...");
                }

                   
                                                                
                
            pokeimage(pokeimg);
            console.log(pokeimg);
            console.log(pikenam);
            pikename(pikenam);

                console.log(data.stats)
                y=data.stats;
                y=y.length;
                console.log(y)


                
                console.log(data.stats[0].stat.name)
                console.log(data.stats[0].base_stat)
                let stat=(data.stats[0].stat.name)+("==")+(data.stats[0].base_stat);
                console.log(stat);
                Stat(stat);
                y=y-1;
                if(y>0){
                    console.log(data.stats[0].stat.name)
                    console.log(data.stats[0].base_stat)
                    let stat1=(data.stats[1].stat.name)+("==")+(data.stats[1].base_stat);
                    console.log(stat1);
                    Stat1(stat1);
                    y=y-1;    
                }
                
                if(y>0){
                    let stat2=(data.stats[2].stat.name)+("==")+(data.stats[2].base_stat);
                    console.log(stat2);
                    Stat2(stat2);
                    y=y-1;
                }
                if(y>0){
                    let stat3=(data.stats[3].stat.name)+("==")+(data.stats[3].base_stat);
                    console.log(stat3);
                    Stat3(stat3);
                    y=y-1;
                }
                if(y>0){
                    let stat4=(data.stats[4].stat.name)+("==")+(data.stats[4].base_stat);
                    console.log(stat4);
                    Stat4(stat4);
                    y=y-1;
                }
                if(y>0){
                    let stat5=(data.stats[5].stat.name)+("==")+(data.stats[5].base_stat);
                    console.log(stat5);
                    Stat5(stat5);
                    y=y-1;
                }
        let habil=(data.abilities[0].ability.name);
        console.log(habil);
        Habil(habil);  
        let habil1=(data.abilities[1].ability.name);
        console.log(habil1);
        Habil1(habil1);       
        

                

                                         


            
            

            

            
            




            
            
            
            
        })
                    }
const piketipo = (url) =>{
    const piketipo=document.getElementById(`ishi0`);
    piketipo.textContent= url;}
const piketipo2 = (url) =>{
    const piketipo2=document.getElementById(`ishi1`);
    piketipo2.textContent= url;}     
const piketipo3 = (url) =>{
    const piketipo3=document.getElementById(`ishi2`);
    piketipo3.textContent= url;}        
const piketipo4 = (url) =>{
    const piketipo4=document.getElementById(`ishi3`);
    piketipo4.textContent= url;}  
const piketipo5 = (url) =>{
    const piketipo5=document.getElementById(`ishi4`);
    piketipo5.textContent= url;}  
    
    const Habil=(url)=>{
        const Habil=document.getElementById("san0");
        Habil.textContent=url;
    }
    const Habil1=(url)=>{
        const Habil1=document.getElementById("san1");
        Habil1.textContent=url;
    }

const Stat=(url)=>{
    const Stat=document.getElementById("ni0");
    Stat.textContent=url;
}
const Stat1=(url)=>{
    const Stat1=document.getElementById("ni1");
    Stat1.textContent=url;
}
const Stat2=(url)=>{
    const Stat2=document.getElementById("ni2");
    Stat2.textContent=url;
}
const Stat3=(url)=>{
    const Stat3=document.getElementById("ni3");
    Stat3.textContent=url;
}
const Stat4=(url)=>{
    const Stat4=document.getElementById("ni4");
    Stat4.textContent=url;
}
const Stat5=(url)=>{
    const Stat5=document.getElementById("ni5");
    Stat5.textContent=url;
}


const pikename = (url) =>{
    const pikename=document.getElementById("noc");
    pikename.textContent= url;
                                                }
const pokeimage = (ulr) =>{
    const pokeimage=document.getElementById("img");
    pokeimage.src = ulr;
                            }

const pokestats = (ulr) =>{
    const pokestats=document.getElementById("ni");
    pokestats.textContent = ulr;
                            }
const pokemove = (ulr) =>{
    const pokemove=document.getElementById("san");
    pokemove.textContent = ulr;
                            }
                            

function aparecer(){
    document.getElementById("noc").style.display="block";
    document.getElementById("ishi0").style.display="block";
    document.getElementById("ishi1").style.display="block";
    document.getElementById("ishi2").style.display="block";
    document.getElementById("ishi3").style.display="block";
    document.getElementById("ishi4").style.display="block";
    document.getElementById("ni0").style.display="block";
    document.getElementById("ni2").style.display="block";
    document.getElementById("ni3").style.display="block";
    document.getElementById("ni4").style.display="block";
    document.getElementById("ni5").style.display="block";
    document.getElementById("san0").style.display="block";
    document.getElementById("san1").style.display="block";

}
function desaparecer(){
    document.getElementById("noc").style.display="none";
}