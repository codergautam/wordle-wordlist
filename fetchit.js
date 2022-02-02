var axios = require("axios")
module.exports = async (url) => {
  var res = await axios.get(url)
  return res.data.split("\n")
  
}