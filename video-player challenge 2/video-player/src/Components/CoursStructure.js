import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Course() {
    let { coursename } = useParams();
    const courses = {
        reactjs: [
            { title: "Introduction", vid: "QFaFIcGhPoM" },
            { title: "Printing Hello World", vid: "9hb_0TZ_MVI" },
            { title: "Components", vid: "Y2hgEGPzTZY" }
        ],
        reactnativejs: [
            { title: "Introduction", vid: "ur6I5m2nTvk" },
            { title: "Setting up with expo", vid: "pflXnUNMsNk" },
            { title: "View, Text & Styles", vid: "_YydVvnjNFE" }
        ]
    }
    const [vid, uid] = useState(courses[coursename][0].vid)
    const [title, utit] = useState(courses[coursename][0].title)

    const renderVideo = () => {
        return (
            <>
                <h3>{title}</h3>
                <div className="video-container">
                <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
                </div>
            </>
        )
    }
    return (
        <div>
            <h1>{ coursename }</h1>
            {renderVideo()}
            <div className="collection">
                {
                    courses[coursename].map(item => {
                        return <a href="#!" class="collection-item" onClick={() => {
                            uid(item.vid);
                            utit(item.title);
                        }}>{item.title}</a>
                    })
                }
            </div>
        </div>
    )
}

export default Course;
