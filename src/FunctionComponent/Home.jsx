import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'

export default function Home(props) {
    var [articles, setarticles] = useState([])
    var [page, setpage] = useState(1)
    var [totalResults, settotalResults] = useState(0)
    async function getAPIData() {
        setpage(1)
        var response = ""
        if (props.search === "")
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&language=${props.language}&pageSize=${props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&language=${props.language}&pageSize=${props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        var result = await response.json()
        setarticles(result.articles)
        settotalResults(result.totalResults)
    }
    const fetchData = async () => {
        setpage(page + 1)
        var response = ""
        if (props.search === "")
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&language=${props.language}&pageSize=${props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&language=${props.language}&pageSize=${props.pageSize}&apiKey=a86f22a30fb7431dbbcc8d0317b839ec`)
        var result = await response.json()
        setarticles(articles.concat(result.articles))
    }
    useEffect(() => {
        getAPIData()
    }, [props])
    return (
        <div className='container-fluid'>
            <h6 className='background text-light text-center p-2 mt-1'>{props.q} News Section</h6>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={
                    <div className='container mt-5 mb-5 text-center'>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
            >
                <div className='row'>
                    {
                        articles.map((item, index) => {
                            return <NewsItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                date={item.publishedAt}
                                pic={item.urlToImage}
                                source={item.source.name}
                                url={item.url}
                            />
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}
