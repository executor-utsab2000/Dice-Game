import '../Css/Rules.scss'

// the setShowRules of parent component is received here as update State Variable
// To close the Rules Box
export default function Rules({ updateStateVariable }) {


    return (

        <div className="row ">
            <div className="col-12  d-flex justify-content-center">
                <div className="rules animate__animated animate__zoomIn">
                    <div className="header">rules : </div>
                    <div className="content">
                        <ul type="circle">
                            <li>Click on a Dice as per your choice . </li>
                            <li>if the dice you selected matches the computer generated dice you will get the same point as dice .</li>
                            <li>if the dice you selected does'nt matches with computer generated dice <span className="text-danger"> 2 Points </span> will be deducted</li>
                            <li>Total chances allowed to an individual  is <span className="text-danger"> 20 .</span></li>
                        </ul>
                    </div>
                    <div className="buttonHolder">
                        <button onClick={() => updateStateVariable(false)}>close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}