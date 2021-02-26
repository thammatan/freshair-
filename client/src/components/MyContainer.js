import React from 'react'
import Fade from 'react-reveal/Fade';
function MyContainer({
    title = "",
    detail = "",
    subdetail = "",
    description = "",
    line = false,
    position = "",
    descriptionPosition = "",
    titleWeight = "",
    descriptionWeight = "",
    component = "" }) {
    return (
        <div >
            <div style={{ textAlign: position }}>
                <Fade bottom >
                    <h1 className="container-title" style={{ fontWeight: titleWeight }}>{title}</h1>
                    <h4 className="container-detail">{detail}</h4>
                    <h5 className="container-subdetail">{subdetail}</h5>
                </Fade>
            </div>
            {line &&
                <div style={{ paddingTop: "10px" }}>
                    <div className="container-line"></div>
                </div>
            }
            {component}
            <div style={{ textAlign: descriptionPosition }}>
                <Fade bottom  >
                    <h1 className="container-title" style={{ fontWeight: descriptionWeight }}>{description}</h1>
                </Fade>
            </div>
        </div>
    )
}

export default MyContainer
