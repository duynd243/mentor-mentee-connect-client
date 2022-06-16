import {Star, StarHalf, StarOutline} from "react-ionicons";

const RatingStars = ({rating}) => {
    const roundedRating = Math.round(rating * 2) / 2;
    const filledStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);


    const filledStarsArray = new Array(filledStars).fill(<li>
        <a href="#">
            <Star
                width="18px"
                color={'#f5b455'}
            />
        </a>
    </li>);
    const halfStar = <li>
        <a href="#">
            <StarHalf
                width="18px"
                color={'#f5b455'}
            />
        </a>
    </li>;
    const emptyStarsArray = new Array(emptyStars).fill(<li>
        <a className="empty" href="#">
            <StarOutline
                width="18px"
                color={'#f5b455'}
            />
        </a>
    </li>);


    return (
        <>
            <ul>
                {filledStarsArray.map((star) => {
                    return star;
                })}

                {hasHalfStar ? halfStar : null}

                {emptyStarsArray.map((star) => {
                    return star;
                })}
            </ul>
        </>
    );
}

export default RatingStars;