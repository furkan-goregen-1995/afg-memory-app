const Kart = ({kart,kartSec,donus,aktiflik}) => {

    const handleClick=()=>{
        kartSec(kart);
        if(!aktiflik){
            kartSec(kart);
        }
    }

    return ( 
        <div className='card' key={kart.id}>
        <div className={donus?"flipped":""} onClick={handleClick}>
            <img className='front' src={kart.src} alt="kart ön yüz"/>
            <img className='back' src="img/back.png" />
        </div>
    </div>
     );
}
 
export default Kart;
