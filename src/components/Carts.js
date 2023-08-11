import { Button, Container, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clearFromCart, deleteFromCart } from '../rtk/slices/cart-slice';

function Carts() {

    const cartStore = useSelector((store)=>(store.cart))
    const dispatch = useDispatch();
    const totalPrice = cartStore.reduce((acc ,product)=>{
        acc += product.price * product.quantity;
        return acc
    },0)

    return (
      <Container>
        <h1 className='py-5'>Cart</h1>
        <Button variant='primary' className='my-2'onClick={()=> dispatch(clearFromCart())}>Clear</Button>
        <h4>Price : {totalPrice.toFixed(2)} $</h4>
            <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Options</th>
            </tr>
        </thead>
        <tbody>
        {
            cartStore.map((product)=>(
                <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} alt={product.title} style={{height:"100px" , width:"100px"}}/></td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
                <td><Button variant='danger' onClick={()=>{dispatch(deleteFromCart(product))}}>Delete</Button></td>
                </tr>
            ))
        }
        </tbody>
        </Table>
    </Container>
    );
}

export default Carts;