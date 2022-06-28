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
        <div className='card' id={mainId}>
            <div className='card-image'>
                <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className='card-content deep-purple lighten-4'>
            <span className='card-title'>{displayName}</span>
                <p>
                    {displayDescription}
                </p>
            </div>
            <div className="card-action deep-purple lighten-3">
                <button className='btn deep-purple darken-1 white-text' onClick={() => {
                    // при клике вызываем наш колбек и передаем в него параметры id name price
                    cb({
                        mainId, 
                        displayName,        
                        price, 
                    })
                    }}>Купить</button>
                <span className='right' style={{fontSize: '1.8rem'}}>{price.regularPrice} руб.</span>
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