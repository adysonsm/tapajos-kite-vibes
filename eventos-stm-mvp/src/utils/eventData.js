// src/utils/eventData.js

// Eventos em Destaque (para o carrossel)
export const featuredEvents = [
  {
    id: "f1",
    title: "Festa do Sairé 2025",
    category: "Festas",
    // URL de exemplo: Substitua por uma imagem real de Santarém/Sairé
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx88nxlmTdbCk7g1sfecMSxUkxGu6ZFd1EWA&s",
    description:
      "A mais tradicional festa folclórica da Amazônia. Celebre a cultura e a lenda do boto!",
    price: 80.0,
    date: "2025-09-18", // Sugestão de data em setembro para o Sairé
    location: "Comunidade de Alter do Chão",
    fullDescription:
      "Prepare-se para a magia do Sairé em Alter do Chão! Uma celebração única com danças folclóricas, o embate dos botos Tucuxi e Cor-de-Rosa, muita música e a beleza natural do Rio Tapajós. Uma experiência cultural inesquecível em Santarém.",
  },
  {
    id: "f2",
    title: "Corrida das Pontas 10K",
    category: "Esportes",
    // URL de exemplo: Substitua por uma imagem real de corrida em Santarém
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9f-p2ysC4TmXLh8e5z4AuNVvv_1quuwfjLQ&s",
    description:
      "Desafio de 10km pela orla de Santarém, com vista para o Encontro das Águas. Participe!",
    price: 45.0,
    date: "2025-08-25",
    location: "Orla de Santarém",
    fullDescription:
      "Um percurso desafiador e revigorante que celebra as belezas naturais de Santarém. A largada será na Praça da Matriz, seguindo pela orla e retornando. Inscreva-se e garanta sua medalha de participação e kit corredor. Aberto para atletas de todos os níveis.",
  },
  {
    id: "f3",
    title: "Festival do Pirarucu Santareno",
    category: "Cultura",
    // URL de exemplo: Substitua por uma imagem real de culinária amazônica
    imageUrl:
      "https://midias.agazeta.com.br/2022/08/03/sabores-da-amazonia-809057-article.jpg",
    description:
      "Sabores únicos da Amazônia em um só lugar. Delícias com o rei dos peixes, o Pirarucu!",
    price: 30.0, // Preço da entrada
    date: "2025-07-12",
    location: "Centro de Eventos de Santarém",
    fullDescription:
      "Experimente pratos típicos e inovadores com o delicioso pirarucu, preparado por chefs locais e renomados. Haverá demonstrações culinárias, música ao vivo e stands com produtos artesanais. Uma verdadeira imersão nos sabores e na cultura da nossa terra.",
  },
];

// Categorias de Eventos
export const categories = [
  { name: "Festas", slug: "festas" },
  { name: "Shows", slug: "shows" },
  { name: "Esportes", slug: "esportes" },
  { name: "Cultura", slug: "cultura" },
  { name: "Museus", slug: "museus" },
  { name: "Experiências", slug: "experiencias" },
];

// Eventos Regulares (exclui os destaques para que não se repitam nas categorias)
const regularEvents = [
  {
    id: "e4",
    title: "Tour Histórico pelo Centro de Santarém",
    category: "Experiências",
    // URL de exemplo: Centro histórico de Santarém
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c73wq0tim6ExCETek8AOltZNcdearHDSxQ&s",
    description:
      "Descubra os segredos e a arquitetura do coração de Santarém em um passeio guiado.",
    price: 20.0,
    date: "2025-08-05",
    location: "Praça da Matriz, Santarém",
    fullDescription:
      "Um tour guiado pelas ruas e praças do centro histórico de Santarém. Conheça a Praça da Matriz, a Catedral de Nossa Senhora da Conceição, o calçadão da orla e os casarões coloniais, descobrindo a rica história da cidade.",
  },
  {
    id: "e5",
    title: "Show da Diva do Brega",
    category: "Shows",
    // URL de exemplo: Palco de show
    imageUrl:
      "https://i.ytimg.com/vi/xzw8ElvLK1E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAouGSqXpqN8XwLGA_s9YwzkfJA6Q",
    description:
      "Noite de muito ritmo com a Diva do Brega no Bar da Orla. Garanta seu ingresso!",
    price: 60.0,
    date: "2025-08-18",
    location: "Bar do Porto, Santarém",
    fullDescription:
      "Prepare-se para dançar ao som contagiante dos maiores sucessos do brega! A Diva do Brega promete uma noite inesquecível em um dos pontos mais badalados da orla de Santarém. Ingressos limitados, não perca!",
  },
  {
    id: "e6",
    title: "Exposição Arte Indígena Tapajônica",
    category: "Museus",
    // URL de exemplo: Artefatos indígenas
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9FCaqLkblcTog0RNmX7h_j0uH3C4f_jqyQ&s",
    description:
      "Explore a rica arte e cultura dos povos indígenas da região do Tapajós no Museu da Cidade.",
    price: 15.0,
    date: "2025-09-01",
    location: "Museu da Cidade de Santarém",
    fullDescription:
      "Uma jornada visual e reflexiva sobre a rica arte e os costumes dos povos indígenas da bacia do Tapajós. A exposição conta com artefatos, fotografias e painéis explicativos, proporcionando uma imersão na cultura amazônica.",
  },
  {
    id: "e7",
    title: "Trilha Ecológica Flona do Tapajós",
    category: "Experiências",
    // URL de exemplo: Floresta
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwEv_WBH8koMsBwszeuaa13yjyF9sEwYaug&s",
    description:
      "Aventura na Floresta Nacional do Tapajós, com guia especializado e contato com a natureza.",
    price: 90.0,
    date: "2025-09-05",
    location: "Flona do Tapajós - Comunidade de Jamaraquá",
    fullDescription:
      "Explore a rica flora e fauna da Floresta Nacional do Tapajós em uma trilha guiada por nativos. Conecte-se com a natureza amazônica, descubra seus segredos e aprenda sobre o modo de vida sustentável das comunidades ribeirinhas.",
  },
  {
    id: "e8",
    title: "Workshop de Culinária Amazônica",
    category: "Cultura",
    // URL de exemplo: Comida amazônica
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HUS_rzAVVzGLefWDug244LdTpfLOAhaOGA&s",
    description:
      "Aprenda a preparar pratos típicos como tacacá, maniçoba e vatapá.",
    price: 120.0,
    date: "2025-08-22",
    location: "Cozinha Escola Sabor da Amazônia",
    fullDescription:
      "Um curso prático para desvendar os segredos da culinária paraense e amazônica. Aprenda técnicas de preparo, história dos ingredientes e deguste os pratos preparados. Inclui apostila de receitas e dicas de harmonização.",
  },
  {
    id: "e9",
    title: "Passeio de Barco no Encontro das Águas",
    category: "Experiências",
    // URL de exemplo: Encontro das águas Tapajós-Amazonas
    imageUrl:
      "https://www.viagensecaminhos.com/wp-content/uploads/2015/08/encontro-das-aguas-rio-negro-e-solimoes-manaus.jpg",
    description:
      "Veja o fenômeno único do encontro dos rios Tapajós e Amazonas em um passeio inesquecível.",
    price: 75.0,
    date: "2025-08-10",
    location: "Embarque na Orla de Santarém",
    fullDescription:
      "Um passeio de barco inesquecível para testemunhar o espetáculo natural do encontro das águas dos rios Tapajós (água cristalina) e Amazonas (água barrenta), sem que elas se misturem imediatamente. Inclui guia turístico e lanche a bordo.",
  },
  {
    id: "e10",
    title: "Festa Junina da Aldeia Muiraquitã",
    category: "Festas",
    // URL de exemplo: Festa junina ou celebração em comunidade
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXGhXvWpRVRPBVZ0GUcur3pDAy3IYQp0sZw&s",
    description:
      "Celebração tradicional com comidas típicas, quadrilha e forró na comunidade local.",
    price: 40.0,
    date: "2025-06-28", // Sugestão de data junina
    location: "Comunidade Indígena Muiraquitã, Santarém",
    fullDescription:
      "Mergulhe na alegria das festas juninas em um ambiente autêntico! A Aldeia Muiraquitã convida a todos para uma noite de muita dança, forró, quadrilha, fogueira e deliciosas comidas típicas da região. Uma experiência cultural e divertida para toda a família.",
  },
  {
    id: "e11",
    title: "Torneio de Futebol de Praia - Alter do Chão",
    category: "Esportes",
    // URL de exemplo: Futebol de praia
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeku_v-uhT5IfubzW6sFqJJSYcOr5tCLXU3g&sg",
    description:
      "Venha torcer ou participar do emocionante torneio de futebol de praia nas areias de Alter do Chão.",
    price: 10.0, // Entrada para assistir
    date: "2025-07-07",
    location: "Praia de Alter do Chão",
    fullDescription:
      "Um evento esportivo vibrante nas paradisíacas areias de Alter do Chão. Equipes locais e de outras cidades se enfrentarão em busca do título. Venha prestigiar o esporte, aproveitar o sol e a beleza da praia.",
  },
  {
    id: "e12",
    title: "Sarau Poético no Centro Cultural João Fona",
    category: "Cultura",
    // URL de exemplo: Sarau/poesia
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3_hkmhh3q_uOdz7VuTH8LasHarc1EX7mIw&s",
    description:
      "Noite de poesia, música e arte no histórico Centro Cultural João Fona.",
    price: 15.0,
    date: "2025-08-15",
    location: "Centro Cultural João Fona, Santarém",
    fullDescription:
      "Uma noite dedicada à arte da palavra e à expressão cultural. Poetas locais e convidados declamarão suas obras, acompanhados de performances musicais e exposições de arte visual. Um encontro para os amantes da cultura em um dos espaços mais charmosos da cidade.",
  },
];

// Exporta a lista completa de eventos para uso geral (ex: EventListPage)
export const allEvents = [...featuredEvents, ...regularEvents];

// Função para obter eventos por categoria a partir de *todos* os eventos
// Esta é a função que EventListPage.vue precisa para filtrar TUDO.
export const getEventsByCategory = (categorySlug) => {
  if (categorySlug === "todos" || !categorySlug) {
    return allEvents;
  }
  return allEvents.filter(
    (event) =>
      event.category.toLowerCase().replace(/\s/g, "-") ===
      categorySlug.toLowerCase()
  );
};

// Função para obter eventos por categoria, *excluindo os destaques* da lista de "eventos regulares"
// Esta função é para a seção "Explore por Categoria" na HomePage
export const getEventsForCategoryExplore = (categorySlug) => {
  // Filtra apenas os eventos regulares (não destaques)
  const eventsNotInFeatured = regularEvents.filter(
    (event) => !featuredEvents.some((fEvent) => fEvent.id === event.id)
  );

  if (categorySlug === "todos" || !categorySlug) {
    return eventsNotInFeatured;
  }
  return eventsNotInFeatured.filter(
    (event) =>
      event.category.toLowerCase().replace(/\s/g, "-") ===
      categorySlug.toLowerCase()
  );
};

// Função para obter qualquer evento pelo ID, de qualquer lista (destaque ou regular)
export const getEventById = (id) => {
  return allEvents.find((event) => event.id === id);
};
