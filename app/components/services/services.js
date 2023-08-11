const services = [
  {
    id: 1,
    title: "Consultoria Complementar",
    imgURL:
      "url(https://chalet-webapp.s3.amazonaws.com/designer-photos/IMG_1283.JPG)",
    description:
      "Pretende dar apenas aquele toque especial à sua casa mas não sabe por onde começar? Já comprou toda a mobília para a sua casa nova (sofá, mesa, cadeiras) mas não sabe que objetos decorativos pode escolher ou conjugar?",
    detail1:
      "Sugestão de uma paleta de cores (totalmente nova ou a partir de uma cor já existente no espaço e que o cliente pretenda mesmo manter);",
    detail2:
      "Consoante o espaço a trabalhar e orçamento disponível, sugestão ao nível de todo o tipo de artigos decorativos ou ate mobiliario (ex.almofadas, tapetes,etc);",
    detail3:
      "Conselhos sobre como integrar estes elementos na decoração - ex. forma correta de colocar os tapetes ou cortinados, conjugação de almofadas, entre outros;",
    detail4: "Lista detalhada dos artigos propostos a adquirir.",
    step1:
      "A Consultoria Complementar é um serviço maioritariamente online mas há duas formas de o finalizar:",
    step2:
      "o cliente fica responsável pela compra de todas as peças e pela colocação das mesmas no espaço,",
    step3:
      "a gestão das compras e encomendas fica a nosso cargo, assim como a montagem final do espaço - poupança de tempo e dinheiro! (válido apenas para a região da Grande Lisboa).",
  },
  {
    id: 2,
    title: "Consultoria Online",
    imgURL:
      "url(https://chalet-webapp.s3.amazonaws.com/moodboards/Moodboard+cozinha1.png)",
    description:
      "O serviço de Consultoria Online destina-se a quem pretende apenas apoio e sugestões de melhoria ao nível funcional e/ou estético de um ou mais espaços da sua casa, não incluindo assim um projeto técnico detalhado. Não estão incluídos projetos de cozinhas e instalações sanitárias.",
    detail1: "Paleta de cores, Texturas e Materiais escolhida;",
    detail2:
      "Planta Simples com a disposição das principais peças de mobiliário (layout);",
    detail3: "ConceptBoard de composição final do espaço;",
    detail4:
      "Apresentação detalhada de artigos a adquirir (artigos de lojas físicas de fácil acesso ou de lojas com venda online);",
    step1:
      "Entre em contacto com a CHALET através do email para envio de orçamento. Para tal são necessárias: Planta(s) originais ou desenhada(s) com as medidas principais do espaço; Fotos do(s) espaço(s) a decorar.",
    step2:
      "Após aprovação do orçamento, entramos em contacto com o cliente e é enviado um questionário para perceber principais gostos, necessidades e funcionalidades pretendidas para o(s) espaço(s) a decorar (o cliente pode e deve enviar fotografias de inspiração).",
    step3: "O projeto final é enviado ao cliente por email incluindo:",
    step4:
      "Após receber o projeto, o cliente só tem de o implementar, ao seu ritmo.",
    step5:
      "Para mais informações ou dúvidas, enviar mensagem privada no Instagram ou enviar email para chalet.designinteriores@gmail.com",
  },
  {
    id: 3,
    title: "Projetos de Design Interiores",
    imgURL:
      "url(https://chalet-webapp.s3.amazonaws.com/designer-photos/IMG_1460.JPG)",
    description:
      "Este serviço destina-se a quem quer um projeto para um espaço novo (em fase de construção) ou a remodelar.",
    detail1:
      "Inclui desenhos técnicos (layout, planta de tetos e localização de luminárias, mobiliário à medida, entre outros...), Moodboard, ConceptBoard ou imagens 3D (aconselhado) para visualização do resultado final e lista detalhada dos materiais e artigos selecionados.",
    detail2:
      "Projeto em formato ConceptBoard ou Projeto 3D (mais aconselhado);",
    detail3: "Desenhos técnicos do mobiliário desenhado à medida;",
    detail4:
      "Lista detalhada dos materiais e artigos selecionados (não inclui orçamento dos serviços de construção civil).",
    step1:
      "Entre em contacto através do email para envio de orçamento. Para tal são necessários os seguintes dados: Localização do espaço e breve descrição do que é pretendido; Medidas gerais do(s) espaço(s); Fotografias do(s) espaço(s);Estimativa do valor a investir. Localização do espaço e breve descrição do que é pretendido",
    step2:
      "Após aprovação do orçamento, é marcada uma Reunião com o cliente para definir gostos, necessidades e funcionalidade do(s) espaço(s). Levantamento paramétrico (medidas) e fotográfico rigoroso do(s) espaço(s) a trabalhar.",
    step3:
      "Definição do planeamento, organização e disposição do(s) espaço(s) novos ou a reabilitar, assim como do respetivo mobiliário, de forma a obter os desenhos técnicos finais.",
    step4:
      "Após aprovação dos desenhos técnicos e moodboard por parte do cliente, avançamos para a escolha de todas as cores, texturas e materiais de acabamentos (revestimentos, tetos, pavimentos), desenho  e selecção de mobiliário à medida, iluminação, entre outros.",
    step5:
      "O serviço de acompanhamento e assistência à obra pode ser incluído, caso seja do interesse do cliente.",
  },
  {
    id: 4,
    title: "Projetos de Decoracao de Interiores",
    imgURL:
      "url(https://chalet-webapp.s3.amazonaws.com/designer-photos/IMG_1148.JPG)",
    description:
      "Este serviço destina-se a quem pretende apenas uma melhoria estética e funcional do seu espaço, com pouca ou nenhuma necessidade de execução de obra.",
    detail1:
      "Inclui proposta de Layout, Moodboard, ConceptBoard ou imagens 3D para visualização do resultado final e lista detalhada dos materiais e artigos selecionados.",
    detail2: "Moodboard - Conceito/Inspiração do Projeto",
    detail3: " Plantas e Cortes em 2D (Desenhos Técnicos)",
    detail4:
      "Projeto em formato ConceptBoard ou Projeto 3D. Desenhos técnicos de mobiliário (caso haja mobiliário desenhado à medida). Lista detalhada dos artigos selecionados.",
    step1:
      "Entre em contacto através do email para envio de orçamento. Para tal são necessários os seguintes dados: Breve descrição do que é pretendido; Medidas gerais do(s) espaço(s); Fotografias do(s) espaço(s); Estimativa do valor que pretende investir.",
    step2:
      "Após aprovação do orçamento, é marcada uma Reunião com o cliente para definir gostos, necessidades e funcionalidade do(s) espaço(s); Levantamento paramétrico (medidas) e fotográfico rigoroso do(s) espaço(s) a trabalhar.",
    step3:
      "Definição da organização e disposição do(s) espaço(s) e respetivo mobiliário, de forma a obter o layout final.",
    step4:
      "Após aprovação do layout e moodboard por parte do cliente, avançamos para a escolha das cores, texturas (estofos, cortinas, tapetes), mobiliário (que pode ou não ser desenhado à medida), peças decorativas, iluminação, entre outros.",
    step5:
      "Montagem final do espaço. O cliente pode optar por não usufruir do serviço de montagem final, ficando com toda a lista de artigos, fazendo ele próprio a aquisição e montagem dos mesmos.",
  },
  {
    id: 5,
    title: "Home Staging",
    imgURL:
      "url(https://chalet-webapp.s3.amazonaws.com/designer-photos/IMG_4135.JPG)",
    description:
      "O serviço de Home Staging destina-se a quem quer vender ou arrendar (arrendamento de longa duração ou temporário) um imóvel. Este serviço proporciona uma valorização do imóvel, tornando-o mais atractivo e funcional para quem o procura. Contacte-nos para saber como podemos ajudá-lo, consoante as suas necessidades e orçamento.",
  },
];

export default services;
