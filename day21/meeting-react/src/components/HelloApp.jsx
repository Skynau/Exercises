import Term from "./term"
import FactsData from "./data"

const HelloApp = () => {
    <FactsData/>
    return (
        <>
            <h1>My ecyclopedia</h1>
            <Term item={FactsData[0].item} text={FactsData[0].text}/>
            <Term item={FactsData[1].item} text={FactsData[1].text}/>
            <Term item={FactsData[2].item} text={FactsData[2].text}/>
            <Term item={FactsData[3].item} text={FactsData[3].text}/>
        </>
    )
}

export default HelloApp