import { useState } from 'react'
import '../Css/Landing.scss'
import Rules from './Rules'
import GameInterFace from './GameInterFace'


export default function Landing() {

    const [showRules, setShowRules] = useState(false)
    const [playGame, setSetPlayGame] = useState(false)

    return (
        <>

            {
                playGame ? <GameInterFace backToLanding = {setSetPlayGame} /> : <div className="landingBg">

                    <div className="row mx-0">
                        <div className="col-12 d-flex justify-content-md-end justify-content-center text-center">
                            <div className="content">
                                <div className="header">dice game</div>
                                <div className="btnContainer">
                                    <button onClick={() => setSetPlayGame(true)}>play game</button>
                                    <button onClick={() => setShowRules(true)}>read rules</button>
                                </div>
                            </div>
                        </div>
                    </div>







                    {
                        showRules ? <Rules updateStateVariable={setShowRules} /> : ''
                    }


                </div>
            }


        </>
    )
}