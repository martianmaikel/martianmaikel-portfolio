
// write basic hello next js api 
export default (req, res) => {
    res.statusCode = 200
    res.json({ hello_there: ', this is Maikel. What are you doing here?' })
}
