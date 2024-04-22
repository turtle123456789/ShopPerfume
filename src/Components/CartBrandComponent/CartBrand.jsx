import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import brandLV from '../../assets/images/brand/lv.webp'
// import brandDior from '../../assets/images/brand/Dior.webp'
// import brandChannel from '../../assets/images/brand/channel.webp'
// import brandBurBerry from '../../assets/images/brand/burberry.webp'
// import brandGucci from '../../assets/images/brand/gucci.webp'
// import brandValorou from '../../assets/images/brand/valorou.webp'
// import brandJS from '../../assets/images/brand/js.webp'
// import brandOpium from '../../assets/images/brand/opium.webp'
// import brandMP from '../../assets/images/brand/mp.webp'
// import brandShalimar from '../../assets/images/brand/shalimar.webp'
const CartBrand = ()=>{
    
    return<>

    <Card style={{ width: '280px',  alignItems:"center", overflow:'hidden'}} className='flag'>
      <Card.Img variant="top" src={brandLV} />
        <Card.Body className='bodyCart'>
        <div style={{position:"relative", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className='triangle'></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
        </Card.Body>
    </Card>
    <Card style={{ width: '280px',  alignItems:"center", overflow:'hidden'}} className='flag'>
      <Card.Img variant="top" src={brandLV} />
        <Card.Body className='bodyCart'>
        <div style={{position:"relative", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className='triangle'></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
        </Card.Body>
    </Card>
    <Card style={{ width: '280px',  alignItems:"center", overflow:'hidden'}} className='flag'>
      <Card.Img variant="top" src={brandLV} />
        <Card.Body className='bodyCart'>
        <div style={{position:"relative", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className='triangle'></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
        </Card.Body>
    </Card>
    <Card style={{ width: '280px',  alignItems:"center", overflow:'hidden'}} className='flag'>
      <Card.Img variant="top" src={brandLV} />
        <Card.Body className='bodyCart'>
        <div style={{position:"relative", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className='triangle'></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
        </Card.Body>
    </Card>
    <Card style={{ width: '280px',  alignItems:"center", overflow:'hidden'}} className='flag'>
      <Card.Img variant="top" src={brandLV} />
        <Card.Body className='bodyCart'>
        <div style={{position:"relative", display:"flex", justifyContent:"center", width:"100%"}}>
            <div className='triangle'></div>
            <div className='circle1'></div>
            <div className='circle2'></div>
        </div>
        </Card.Body>
    </Card>
    </>
}
export default CartBrand