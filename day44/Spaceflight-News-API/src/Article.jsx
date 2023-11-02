import './Article.css'

export default function Article({articleData}) {
    console.log(articleData)
    return (
        <div className="article">
            <div className="article_imageContainer">
                <img src={articleData.imageUrl} alt={`image for article ${articleData.title}`} />
            </div>
            <div className="article_textContainer">
                <div className='article_textContainer__top'>
                    <h3>{articleData.title}</h3>
                    <p>{articleData.summary}</p>
                </div>
                <div className='article_textContainer__bottom'>
                    <a href={articleData.url} rel="noopener noreferrer" target='_blank'>Click to go the article</a>
                </div>
            </div>
        </div>
    )
}