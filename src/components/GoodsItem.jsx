import React from 'react';

function GoodsItem(props) {
    const { 
        mainId, 
        displayName, 
        displayDescription, 
        price, 
        displayAssets,
        cb = Function.prototype
    } = props;
    return (
        <div className='card shadow-2' id={mainId}>
            <div className='card-image'>
                <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className='card-content grey lighten-5'>
            <span className='card-title'>{displayName}</span>
                <p>
                    {displayDescription}
                </p>
            </div>
            <div className="card-action grey lighten-5">
                <button className='btn pink lighten-1 white-text' style={{width: '8rem', fontSize: '1.2rem'}} onClick={() => {
                    // при клике вызываем наш колбек и передаем в него параметры id name price
                    cb({
                        mainId, 
                        displayName,        
                        price, 
                    })
                    }}>Buy</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price.regularPrice} $</span>
            </div>
        </div>
    );
}

export default GoodsItem;

// "displayAssets": [
//     {
//         "displayAsset": "DAv2_Bundle_Featured_Architect_Stars",
//         "materialInstance": "MI_Bundle_Featured_Architect_Stars",
//         "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_Architect_Stars/MI_Bundle_Featured_Architect_Stars.png",
//         "flipbook": null,
//         "background_texture": "https://media.fortniteapi.io/images/textures/FNCSSeries.png",
//         "background": "https://media.fortniteapi.io/images/cosmetics/9bd75ebe081a3b0228c708703eada584/v2/MI_Bundle_Featured_Architect_Stars/background.png",
//         "full_background": "https://media.fortniteapi.io/images/cosmetics/9bd75ebe081a3b0228c708703eada584/v2/MI_Bundle_Featured_Architect_Stars/info.ru.png"
//     }
// ]