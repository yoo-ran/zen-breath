import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import "../styles/home.scss"

const Home = () => {
    return(
        <>
            <section className='left'>
                <h2>
                    <img alt='Zen-breath Logo'></img> Music
                </h2>
                <article>
                    <h3>Special for You</h3>
                    <div className='special'>
                        ?
                    </div>
                </article>
                <article></article>
            </section>
            <section className='right'>
                <div>

                    <ul>
                        <li>Calmness</li>
                        <li>Energy</li>
                        <li>Positive</li>
                        <li>Blue</li>
                    </ul>
                </div>
                <article>
                    <h3>More Music You'll Love</h3>
                    <ul className='musics'>
                        <li>
                            <span>Breathing Exercise</span>
                            <p>Take a Deep Breath</p>
                            <button><FontAwesomeIcon icon={faPlay} /></button>
                        </li>
                        <li>
                            <span>Breathing Exercise</span>
                            <p>Take a Deep Breath</p>
                            <button><FontAwesomeIcon icon={faPlay} /></button>
                        </li>
                        <li>
                            <span>Breathing Exercise</span>
                            <p>Take a Deep Breath</p>
                            <button><FontAwesomeIcon icon={faPlay} /></button>
                        </li>
                        <li>
                            <span>Breathing Exercise</span>
                            <p>Take a Deep Breath</p>
                            <button><FontAwesomeIcon icon={faPlay} /></button>
                        </li>
                        <li>
                            <span>Breathing Exercise</span>
                            <p>Take a Deep Breath</p>
                            <button><FontAwesomeIcon icon={faPlay} /></button>
                        </li>
                        <li>
                            <span>Breathing Exercise</span>
                            <p>Take a Deep Breath</p>
                            <button><FontAwesomeIcon icon={faPlay} /></button>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    )
}

export default Home