// Code Keypad Component Here

function Keypad (){
    function security(event){
console.log ('Entering password...');

    }
    return (
        <div>
<input 
type="password"
onChange={security}
placeholder="enter password"
/>

        </div>
    )
}

export default Keypad;