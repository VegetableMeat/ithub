export default function userHandler(req, res) {
	const {
		query: { id, name },
		method,
	} = req;

	switch (method) {
		case "POST":
			res.status(200).json({ markdown: req.body });
			break;
		default:
			res.setHeader("Allow", ["GET", "PUT"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
