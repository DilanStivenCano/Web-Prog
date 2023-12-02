import './ServicesPage.css'
import SourceImg from '../../assets/servicesAsset.png'

export function ServicesPage() {
  return (
    <div className='serviBody'>
      <h3>WHAT WE DO</h3>
      
      <div className='servicesContainer'>
        <div className='servicesType'>
          <h2 className="rosita">App / Web Development</h2>
          <h2 className="rosita">UI Design</h2>
          <h2 className="rosita">UX Design</h2>
          <h2 className="rosita">Prototyping</h2>
          <h2 className="rosita">Branding</h2>
        </div>
        <img src={SourceImg}/>
      </div>
    </div>    
  )
}
