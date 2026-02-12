function status(request, response) {
  response.status(200).json({ chave: "Ta funfando" });
}

export default status;
