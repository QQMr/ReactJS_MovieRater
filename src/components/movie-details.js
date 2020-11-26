import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetails(props){

    const [ highlighted, setHighlighted ] = useState(-1);

    const highlightRate = high => evt => {
        setHighlighted(high);
    }

    const mov = props.movie;
    return (
        <div>
            {mov?(
            <div>
                <h1>{  mov.title}</h1>
                <p>{ mov.description}</p>
                <FontAwesomeIcon icon={faStar} className={ mov.avg_rating>0 ? 'orange':'' }></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className={ mov.avg_rating>1 ? 'orange':'' }></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className={ mov.avg_rating>2 ? 'orange':'' }></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className={ mov.avg_rating>3 ? 'orange':'' }></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} className={ mov.avg_rating>4 ? 'orange':'' }></FontAwesomeIcon>
                ({mov.no_of_ratings})
                <div className='rate-container'>
                    <h2>Rate it</h2>
                    {
                        [...Array(5)].map( (e,i)=>{
                           return  <FontAwesomeIcon key={i} icon={faStar} className={ highlighted > i-1 ? 'purple':'' }
                           onMouseEnter = { highlightRate(i) } 
                           onMouseLeave = { highlightRate(i-1) } 
                           /> 
                        } )
                    }
                </div>
            </div>
            ): null}
        </div>
    )
}

export default MovieDetails;