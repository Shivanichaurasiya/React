import React, { useReducer } from 'react'

//initial step

const initialState={
    cart:[
    {id:1,name:"Motoraola g-96",price:999,quantity:1},
    {id:2,name:"Sumsung galaxy s 24",price:2999,quantity:1},
    {id:3,name:"iphone",price:1999,quantity:1},
    {id:4,name:"Poco",price:3999,quantity:1},
    ],
};

//Reducer function

function reducer(state,action){
    switch(action.type){
        case 'increment':
            return{
                ...state,
                cart:state.cart.map((item)=>
                    item.id===action.payload?{...item,quantity:item.quantity+1}
                    :item   
                ),
            };
            case 'decrement':
            return{
                ...state,
                cart:state.cart.map((item)=>
                    item.id===action.payload?{...item , quantity: Math.max(1,item.quantity-1)}
                    :item
                ),
            };

            default:
                throw new Error("unknown component")
    }
}

const UseReduser1 = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
  <>
  <div style={styles.container}>
    <h2>🛒 Shoping cart</h2>
    {state.cart.map((item)=>{
        const total=item.price*item.quantity;
        return(
            <div key={item.id} style={styles.card}>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>

                <div style={styles.controls}>
                    <button onClick={()=>dispatch({type:'decrement',payload:item.id})}>-</button>
                    <span style={styles.qty}>{item.quantity}</span>
                    <button onClick={()=>dispatch({type:'increment',payload:item.id})}>+</button>

                </div>
                <p><strong>Total:</strong>${total}</p>

            </div>
        )
    })}
  </div>
  </>
  )
}

const styles = {
    container: {
        fontFamily: "Arial",
        padding: "20px",
    },
    card: {
    border: '1px solid #ccc',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    width: '300px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0',
  },
  qty: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default UseReduser1
