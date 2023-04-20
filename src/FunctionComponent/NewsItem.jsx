import React from 'react'

export default function NewsItem(props) {
    return (
        <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-2'>
            <div className="card">
                <img src={props.pic} height="200px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title.slice(0, 100) + "..."}</h5>
                    <h5 className='news-source'>{props.source}</h5>
                    <p className='news-source'>{`${new Date(props.date).getDate()}/${new Date(props.date).getMonth()}/${new Date(props.date).getFullYear()} ${new Date(props.date).getHours()}:${new Date(props.date).getMinutes()}:${new Date(props.date).getSeconds()}`}</p>
                    <hr />
                    <p className="card-text" style={{ height: "250px" }}>{props.description.slice(0, 300) + "..."}</p>
                    <a href={props.url} className="btn background text-light btn-sm w-100">Read Full Article</a>
                </div>
            </div>
        </div>
    )
}
