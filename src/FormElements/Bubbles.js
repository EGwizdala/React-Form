function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Bubble = (props) => {
    return (
        <svg>
        <circle
            cx={`${randomNumber(0, 100)}%`}
            cy={`${randomNumber(0, 100)}%`}
            r={`${randomNumber(0, 100)}`}
            fill="green"
            class="bubble"
            fillOpacity={`${randomNumber(1, 90) / 100}`}
        >
        <animateMotion dur="10s" repeatCount="indefinite"
                    path={`M ${randomNumber(300, 300)} -3 C 20.748 ${randomNumber(0, 100)} -2.704 -21.994 20.453 59.523 C 43.609 ${randomNumber(100, 200)} 78.251 181.985 40 ${randomNumber(100, 700)} Q 1.749 307.197 14 369.928 Q 64.8 ${randomNumber(0, 400)} 58.998 533.454 C 53.197 566.071 41.149 570.605 26 577 Q 15.937 ${randomNumber(0, 800)} 0 593.${randomNumber(100, 200)}`}
                />
        </circle>
        </svg>
    )
}

function Bubbles() {
    const bubbleNumber = randomNumber(20, 40)
    const bubbleArray = [...Array(bubbleNumber).keys()]

    const bubbles = bubbleArray.map(bubble => {
        return <Bubble />
 
    })
    console.log(bubbles)
    
    return (
        <svg className="bubbles">
            {bubbles}
        </svg>
    );      
}

export default Bubbles;