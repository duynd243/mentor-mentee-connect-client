const RatingStars = ({rating}) => {

    const roundedRating = Math.round(rating * 2) / 2;
    console.log(roundedRating);
    const filledStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    const filledStarsArray = new Array(filledStars).fill(1);
    const halfStarArray = hasHalfStar ? [0.5] : [];
    const emptyStarsArray = new Array(emptyStars).fill(0);

    console.log(filledStarsArray.length, halfStarArray.length, emptyStarsArray.length);

    return (
        <>
            <ul>
                {filledStarsArray.map((star, index) => {
                    return (
                        <li key={index}>
                            <a href="#">
                                <ion-icon name="star"></ion-icon>
                            </a>
                        </li>
                    );
                })}

                {halfStarArray.map((star, index) => {
                    return (
                        <li key={index}>
                            <a href="#">
                                <ion-icon name="star-half"></ion-icon>
                            </a>
                        </li>
                    );
                })}

                {emptyStarsArray.map((star, index) => {
                    return (
                        <li key={index}>
                            <a className="empty" href="#">
                                <ion-icon name="star"></ion-icon>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default RatingStars;