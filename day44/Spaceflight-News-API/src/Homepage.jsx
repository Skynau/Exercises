import { useEffect, useState } from "react"
import ArticleList from "./ArticleList"

export default function Homepage() {

    const [articleData, setArticleData] = useState([])
    const [page, setPage] = useState(0)

    const loadSpaceArtilces = async () => {
        const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=10&_sort=publishedAt%3Adesc&_start=${page}`)
        const data = await response.json();
        setArticleData(data)
    }

    useEffect(() => {
        loadSpaceArtilces()
    }, [page])

    const nextPage = () => {
        setPage(page+10)
    }

    const prevPage = () => {
        if (page != 0) {
            setPage(page-10)
        }
    }

    return (
        <>
            <button onClick={prevPage}>PREV</button>
            <button onClick={nextPage}>NEXT</button>
            <ArticleList articleData={articleData}/>
            <button onClick={prevPage}>PREV</button>
            <button onClick={nextPage}>NEXT</button>
        </>
    )
}