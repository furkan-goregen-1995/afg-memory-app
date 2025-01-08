
import { useEffect, useState } from 'react';
import './App.css';
import Kart from './components/Kart';


const kartResimler = [
  {"src":"img/iksir.png",eslesme:false},
  {"src":"img/kalkan.png",eslesme:false},
  {"src":"img/kask.png",eslesme:false},
  {"src":"img/kilic.png",eslesme:false},
  {"src":"img/parsomen.png",eslesme:false},
  {"src":"img/zil.png",eslesme:false},

]

function App() {
  const [kartlar,setKartlar] = useState([]);
  const [birinciSecilen,setBirinciSecilen] = useState();
  const [ikinciSecilen,setIkinciSecilen] = useState();
  const [secimSayisi,setSecimSayisi] = useState(0);
  const [tiklanmaAktiflik,setTiklanmaAktiflik] = useState(true);
  

  const secimSifirla=()=>{
    setBirinciSecilen(null);
    setIkinciSecilen(null);
    setSecimSayisi(oncekiSayi=>oncekiSayi+1);
    setTiklanmaAktiflik(false);
  }
  
  useEffect(()=>{
    if(birinciSecilen && ikinciSecilen){
      setTiklanmaAktiflik(true);
      if(birinciSecilen.src === ikinciSecilen.src){
        setKartlar(oncekiKart=>oncekiKart.map(kart=>{
          if(birinciSecilen.src===kart.src){
            return {...kart,eslesme:true}
          }else{
            return kart
          }
          
        }))
        secimSifirla();
        console.log(kartlar);
      }
      else{
        console.log("eşleşmedi");
        secimSifirla();
      }
    }
    
  },[birinciSecilen,ikinciSecilen]);

  useEffect(()=>{
    handleClick();
  },[])

  const kartSec=(kart)=>{
    birinciSecilen?setIkinciSecilen(kart):setBirinciSecilen(kart);
  }



  const handleClick = () =>{
    const karistirilmisKartlar = [...kartResimler,...kartResimler].sort(()=>Math.random()-0.5).map((k)=>({...k,id:Math.random()}));
    setKartlar(karistirilmisKartlar);
    //console.log(kartlar);
  }
  return (
    <div className="App">
       <h1>React Hafıza Oyunu</h1>
       <div className='card-grid'>
        {kartlar.map(kart=>(
          <Kart key={kart.id} kart={kart} kartSec={kartSec} donus={kart===birinciSecilen || kart ===ikinciSecilen || kart.eslesme} aktiflik={tiklanmaAktiflik}/>
        ))}
       </div>
       <div>Seçim Sayısı: {secimSayisi}</div>
    </div>
  );
}

export default App;
