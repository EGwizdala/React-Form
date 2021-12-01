function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const Bubble = (props) => {
    let key = 0;
    let delay = randomNumber(0, 5);
    let intViewportHeight = window.innerHeight;
    let intViewportWidth = window.innerWidth
    return (
        <svg key = {key++}>
        <circle
            cx={`${randomNumber(0, 100)}%`}
            cy={`${randomNumber(0, 100)}%`}
            r={`${randomNumber(0, 100)}`}
            fill="green"
            class="bubble"
            fillOpacity={`${randomNumber(1, 90) / 100}`}
            >
                <animateMotion fill-rule="evenodd" stroke="black" dur="30s" begin={`${delay}s`} repeatCount="indefinite"
                path={`M-50 65.54s36-36.79 56.31-35.66 38.6 27.31 58.13 26.56 26.34-5.91 37.6-13 30.53-19.52 39.48-19.14 19.48 ${randomNumber(0, 600)} 31.12 19.87 ${randomNumber(0, 600)} 13.2 25.25 13.16S278.24 ${randomNumber(0, 600)} 297 40.76s25.86-17.86 ${randomNumber(0, 600)}-${randomNumber(0, 600)} 48.11 15.42 ${intViewportWidth} ${intViewportHeight}/${randomNumber(1, 10)}`}
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

    return (
        <svg className="bubbles">
        {bubbles}
       
    </svg>
    );      
}

export default Bubbles;