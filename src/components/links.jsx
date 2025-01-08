/* eslint-disable react/prop-types */
const Link = ({img, alt, link}) => {
    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={alt} className="h-img_mobile lg:h-img_desktop"/>
        </a>
    )
}

export default Link;