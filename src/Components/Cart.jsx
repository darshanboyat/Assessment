import { useCart } from 'react-use-cart';
import Style from '../style'

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;

    const classes = Style();
    return (
        <>
            <div className={classes.wrapper} id= 'cart'>
                <h1 className={classes.Head}>Cart ({totalUniqueItems})</h1>

                <ul>
                    {items.map((item) => (
                        <li className={classes.list} key={item.id}>
                            <img src={item.thumbnail} alt="" width='23%' />
                            <h3 className={classes.prodName}>{item.quantity} x {item.title} &mdash;</h3>
                            <div className={classes.btns}>
                                <button className={classes.btn} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                <button className={classes.btn1} onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                <button className={classes.btn2} onClick={() => removeItem(item.id)}>&times;</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Cart