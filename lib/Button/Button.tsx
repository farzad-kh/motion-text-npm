import  { PropsWithChildren } from 'react';

export  const Button = ({children}:PropsWithChildren) => {
    return (
        <button style={{background:"red",color:"#fff"}}>
            {children}
        </button>
    );
};

 