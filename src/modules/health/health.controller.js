export async function healthController(request, response) {
  console.log("health controller response");
  return response.status(200).send({ health: "OK!" });
}
