export const analysisData = ( movements = [] ) => {

    const analysisData = [];
    let categoriesData = {};

    movements.forEach( movement => {
        if(!categoriesData.hasOwnProperty(movement.category_id)) {
            categoriesData = {
                ...categoriesData,
                [movement.category_id]: movement.amount
            }
        }else{
            categoriesData = {
                ...categoriesData,
                [movement.category_id]: categoriesData[movement.category_id] + movement.amount
            }
        }
    });

    for (const prop in categoriesData) {
        analysisData.push({[prop]: categoriesData[prop]})
    }

    return analysisData
}