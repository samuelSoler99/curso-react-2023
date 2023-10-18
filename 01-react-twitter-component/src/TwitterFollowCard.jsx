import {useState} from "react";

export function TwitterFollowCard( {children,userName = 'unkown',followState}){
    const [isFollowing,setIsFollowing] = useState(followState)



    const imageSrc = `https://unavatar.io/${userName}`
    const followText = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard--button is-following' : 'tw-followCard--button'

    const handleCLick= () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de Kikobeats" src={imageSrc} />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleCLick}>
                    <span className='tw-followCard-text'>{followText}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}