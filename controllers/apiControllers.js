const axios = require('axios')


exports.getSearchItems = async(req, res, next) => {
    const { q } = req.query
    const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    const { data: { results } } = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
    const categories = data.filters.length && data.filters && data.filters[0].values[0].path_from_root.map((category) => category.name)
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
            free_shipping: e.shipping.free_shipping,
            address: e.address.state_name
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

exports.getItem = async (req,res,next)=>{
  const {id} = req.params
  const { data } = await axios.get(`https://api.mercadolibre.com/items/${id}`)
  const { data: description } = await axios.get(`https://api.mercadolibre.com/items/${id}/description`)
  let decimals = parseFloat(Math.round(data.price * 100) / 100).toFixed(2)

  const item = {
        author: {
            firstname: 'Jorge',
            lastname: 'Martinez'
        },
        item:{
          id: data.id,
          title: data.title,
          price:{
            currency: data.currency_id,
            amount: data.price,
            decimals
          },
          picture: data.thumbnail,
          condition: data.condition,
          free_shipping: data.shipping.free_shipping,
          sold_quantity: data.sold_quantity,
          description: description.plain_text
        }
    }
  res.status(200).json({ item })

}