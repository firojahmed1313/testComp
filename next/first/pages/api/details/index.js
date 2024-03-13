
export default async (req, res) => {

    switch (req.method) {
        case 'GET':
            res.json({
                message: "Hello World Get"
            })
            break;
        case 'POST':
            res.json({
                message: "Hello World post"
            })
            break;
        default:
            res.json({
                message: "Hello World"
            })
            break;
    }
}