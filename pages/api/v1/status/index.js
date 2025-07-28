function status(request, response) {
  response.status(200).json({ chave: "software acima da média;" });
}
export default status;
