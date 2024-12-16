class GetUserService {
  async execute() {
    try {
      return "Guilherme";
    } catch (error) {
      console.log("Erro ao buscar usuários: ", error);
    }
  }
}

export { GetUserService };
