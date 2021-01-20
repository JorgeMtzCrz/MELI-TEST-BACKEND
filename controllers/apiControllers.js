const axios = require('axios')


exports.getSearchItems = async(req, res, next) => {
    const { q } = req.query
    const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    const { data: { results } } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    const categories = data.filters && data.filters[0].values[0].path_from_root.map((category) => category.name)

    const newResult = results.slice(0, 4).map(e => {
        let decimals = parseFloat(Math.round(e.price * 100) / 100).toFixed(2)
        return {
            id: e.id,
            title: e.title,
            price: {
                currency: e.currency_id,
                amount: e.price,
                decimals
            },
            picture: e.thumbnail,
            condition: e.condition,
            free_shipping: e.shipping.free_shipping
        }
    })



    const result = {
        author: {
            firstname: 'Jorge',
            lastname: 'Martinez'
        },
        categories,
        items: [...newResult]
    }

    res.status(200).json({ result })
}