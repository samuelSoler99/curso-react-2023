import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";
const users= [
    {
        userName:'samuelillo',
        name: 'Samuel soler picó',
        isFollowing: true
    },
    {
        userName:'pacpacoso',
        name: 'Paco garcia ribera',
        isFollowing: true
    },
    {
        userName:'tomaselmotoras',
        name: 'Tomas monllor ribera',
        isFollowing: false
    }
]
export function App(){

    return(
        <section className='App'>
            {
                users.map(({userName,name,isFollowing})=> {
                    return (
                        <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        followState={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}