import './index.scss'

const AnimatedLetters = ({letterClass, strArray, ind}) => {
    return (
        <span>
            {
                strArray.map((char, i)=>(

                    <span key={char + i} className={`${letterClass} _${i + ind}`}>
                        {char}
                    </span>

                ))
            }
        </span>
    )
}

export default AnimatedLetters