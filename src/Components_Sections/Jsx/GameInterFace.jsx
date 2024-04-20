
import { useState } from 'react';
import '../Css/GameInterFace.scss'
import Rules from './Rules'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GameInterFace({ backToLanding }) {
    const [computerDice, setComputerDice] = useState('/question.png')
    const [userScore, setUserScore] = useState(0)
    const [showRules, setShowRules] = useState(false)
    const [isBtnDisabled, setIsBtnDisabled] = useState(true)
    const [clickCounter, setClickCounter] = useState(0)
    const [startDisabled, setStartDisabled] = useState(false)
    const [showCount, setShowCount] = useState(false)


    const diceArray = [
        '/1-6 Dice/dice_1.png',
        '/1-6 Dice/dice_2.png',
        '/1-6 Dice/dice_3.png',
        '/1-6 Dice/dice_4.png',
        '/1-6 Dice/dice_5.png',
        '/1-6 Dice/dice_6.png',
    ]


    const startGame = () => {
        setShowCount(true)
        setStartDisabled(true)
        setIsBtnDisabled(false)
        toast("Let's start the Game")
    }

    const click_Play = (btnNoClicked) => {
        if (isBtnDisabled == true && clickCounter != 20) {
            toast("Click on The Start Button")
        }

        else {
            if (clickCounter != 20) {
                const randomNumber = Math.floor(Math.random() * 6);
                setComputerDice(diceArray[randomNumber])
                console.log(btnNoClicked, randomNumber);
                setClickCounter((prev) => prev + 1)

                if (randomNumber === btnNoClicked) {
                    setUserScore(prev => prev + (btnNoClicked + 1))
                }
                else if (randomNumber != btnNoClicked) {
                    setUserScore(prev => prev - 2)
                }

            }
            else if (clickCounter == 20) {
                setIsBtnDisabled(true)

            }
        }
    }

    const ifDisabledAlert = () => {
        if (isBtnDisabled == true && clickCounter != 20) {
            toast("Click on The Start Button")
        }
        else if (isBtnDisabled == true && clickCounter === 20) {
            toast("Click On Reset to Restart the Game")
        }
    }

    const reset = () => {
        setClickCounter(0)
        setUserScore(0)
        setShowCount(false)
    }


    return (
        <>

            <div className="container-fluid gameInterFace">


                <div className="container pt-4">


                    <div className="row d-flex justify-content-between">
                        <div className="col-2 text-center">
                            <div className="score">
                                <div className="scorePoint">{userScore}</div>
                                <div className="label">Your Total Score</div>
                            </div>
                        </div>
                        <div className="col-8 col-lg-6 d-flex justify-content-center">
                            <div className="diceBtns" onMouseEnter={ifDisabledAlert}>
                                {
                                    diceArray.map((elm, index) => {
                                        return (
                                            <>
                                                <button className="imgContainer mx-2 my-1 my-lg-0" onClick={() => click_Play(index)} disabled={isBtnDisabled} key={Math.random()} >
                                                    <img src={elm} alt="" />
                                                </button>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 computerDice d-flex justify-content-center">
                            <div className="imgContainer">
                                <img src={computerDice} alt="" />
                            </div>
                        </div>
                    </div>


                    {
                        showCount ? <div className="row">
                            <div className="col-12 text-center clickCounter my-4">
                                <div className="">You Clicked <span className="text-danger"> {clickCounter} </span> times</div>
                                <div className="">you are left with only <span className="text-danger"> {20 - clickCounter} </span> times</div>
                            </div>
                        </div> : ''
                    }







                    <div className="row">
                        <div className="col-5 mx-auto d-flex justify-content-center">
                            <div className="btnContainer">
                                <div className=''>
                                    <button className={`start`} onClick={startGame} disabled={startDisabled}>Start Game</button>
                                    <button className='rulesBtn' onClick={() => setShowRules(true)}>Show Rules</button>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <button className='back' onClick={() => backToLanding(false)}>Back</button>
                                    {clickCounter === 20 ? <button className='reset' onClick={reset}>Reset</button> : ''}
                                </div>
                            </div>
                        </div>
                    </div>





























                    {
                        showRules ? <Rules updateStateVariable={setShowRules} /> : ''
                    }







                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </>
    )
}