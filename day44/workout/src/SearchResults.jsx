export default function SearchResults({searchResults}) {

    console.log(searchResults)

    return (
        <ul>
            {
                searchResults && searchResults.map(result => 
                   <>
                       <li key={result.pageid}>{result.title}</li>
                       <a href={`https://en.wikipedia.org/wiki/${result.title}`} target='_blank' rel="noopener noreferrer">Click me..</a>
                   </>
                )
            }
        </ul>
    )
}