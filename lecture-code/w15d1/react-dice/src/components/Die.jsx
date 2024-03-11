// import { Component } from 'react'
import './Die.css'

// TODO: Refactor this component to be a functional component

// class Die extends Component {
//     render(){
//         return (
//             <div>
//                 <i className={`Die fas fa-dice-${ this.props.face } 
//                     ${ this.props.shake ? 'shake-dice' : '' }`} />
//             </div>
//         );
//     }
// }

function Die ({shake, face}) {
    return (
        <div>
            <i className={`Die fas fa-dice-${ face } 
                ${ shake ? 'shake-dice' : '' }`} />
        </div>
    );
}
export default Die;

