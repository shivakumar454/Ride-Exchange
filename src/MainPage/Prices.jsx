export default function Prices({ discounts, originals }) {
    let styling = {
        textDecorationLine: "line-through" ,
        fontFamily : "arial",
       
    }
    let originalStyle = {
        color:"red",
         fontFamily : "arial",
         fontSize:"18px"
    }

    return (
         
        <div>   
            <span style={styling}>{discounts}</span>
            &nbsp; 
            <span style={originalStyle}>{originals}</span>
        </div>
    );
}