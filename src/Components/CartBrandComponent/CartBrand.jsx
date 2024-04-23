
import Card from 'react-bootstrap/Card';

const CartBrand = ({datas})=>{
    return(<>

    <Card style={{ width: '280px',  alignItems:"center", overflow:'hidden'}} className='flag'>
      <Card.Img variant="top" src={datas.image} style={{aspectRatio:"1"}}/>
        <Card.Body className='bodyCart'>
        <div style={{position:"relative", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className='triangle'></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <h1 style={{position:"absolute", bottom:"-12px"}}>{datas.name}</h1>
        </div>
        </Card.Body>
    </Card>
    </>
    )
}
export default CartBrand