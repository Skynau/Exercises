import Article from "./Article";

export default function ArticleList({articleData}) {
    return (
        <div className="article-list">
            {
                articleData.map((article, i) => 
                    <Article key={article.id} articleData={articleData[i]} />
                )
            }
        </div>
    )
}