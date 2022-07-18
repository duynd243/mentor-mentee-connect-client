const BeanIcon = ({fillColor, position, smallIcon, customStyles}) => {

    const iconSize = smallIcon ? "0.8rem" : "1rem";

    const style = position === 'right' ? {
        display: 'inline',
        marginLeft: '5px',
        ...customStyles
    } : {
        display: 'inline',
        marginRight: '5px',
        ...customStyles
    };

    const fillColorStyle = fillColor || "#279b61";
    return <div style={style}>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width={iconSize} height={iconSize} viewBox="0 0 981.000000 982.000000"
             preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,982.000000) scale(0.100000,-0.100000)"
               fill={fillColorStyle} stroke="none">
                <path d="M6870 9814 c-408 -28 -712 -92 -1005 -211 -424 -172 -768 -462 -1009
-852 -224 -362 -369 -829 -431 -1381 -17 -157 -54 -305 -111 -452 -231 -590
-672 -1055 -1280 -1350 -203 -98 -348 -143 -541 -168 -659 -85 -1164 -281
-1578 -610 -647 -516 -979 -1367 -905 -2321 104 -1327 972 -2256 2265 -2424
284 -37 916 -51 1185 -26 807 74 1628 323 2374 722 766 410 1584 1020 2171
1620 917 938 1433 1924 1639 3134 120 705 184 1666 133 2010 -23 153 -51 283
-89 415 -133 462 -398 892 -742 1202 -405 365 -886 588 -1442 668 -135 20
-497 33 -634 24z m-1327 -2639 c33 -21 57 -82 57 -143 0 -65 -34 -304 -60
-426 -123 -565 -458 -1107 -969 -1563 -468 -418 -1059 -690 -1636 -753 -125
-13 -458 -14 -556 0 -99 14 -176 53 -202 103 -26 51 -28 194 -3 252 23 55 69
99 130 127 50 22 58 23 296 20 335 -4 476 13 701 88 244 81 448 207 801 496
164 135 395 358 500 484 256 306 404 629 459 1004 26 181 57 237 163 293 81
43 265 54 319 18z"/>
            </g>
        </svg>
    </div>;
}

export default BeanIcon;