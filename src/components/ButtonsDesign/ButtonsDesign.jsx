import  {useState} from 'react'
import './ButtonsDesign.css'

const ButtonsDesign = ({ id, title, image, imageH }) => {

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="col">
            <button type="button" className="btn-circle btn-xl" onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}>
                {/* <img src={isHovered ? `/images/logos/${imageH}` : `/images/logos/${image}`} alt={title} className="img-fluid" /> */}
                <img src={`/images/logos/${image}`} alt={title} className="card-img-top" />
            </button >
            <p>{title}</p>
        </div>
    )
}

export default ButtonsDesign
//<img src={`/images/logos/${image}`} alt={title} className="card-img-top" />
