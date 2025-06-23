/*
  Descrição: Este arquivo centraliza todos os dados dos produtos da loja,
  combinando a lista original com os novos itens dos catálogos.
*/

const products = [
    // --- PRODUTOS ORIGINAIS ---
    { 
        id: 1, 
        category: 'aneis', 
        name: 'Anel de Prata Ajustável', 
        price: 20.00, 
        image: 'imagens/anel.jpg', 
        alt: 'Anel de Prata Ajustável' 
    },
    { 
        id: 2, 
        category: 'aneis', 
        name: 'Anel com Pingente de Trevo', 
        price: 22.00, 
        image: 'imagens/colartrevo.jpg', 
        alt: 'Anel com Pingente de Trevo' 
    },
    { 
        id: 3, 
        category: 'aneis', 
        name: 'Anel com design geométrico', 
        price: 25.00, 
        image: 'imagens/brincotriangulo.jpg', 
        alt: 'Anel com design geométrico' 
    },
    { 
        id: 4, 
        category: 'aneis', 
        name: 'Anel com detalhe de bolinhas', 
        price: 18.00, 
        image: 'imagens/pulseirabolinha.jpg', 
        alt: 'Anel com detalhe de bolinhas' 
    },
    { 
        id: 5, 
        category: 'brincos', 
        name: 'Kit 2 Brincos Prata 925 com Zircônia', 
        price: 25.00, 
        image: 'imagens/Kit 2 Brincos Prata 925 com Zircônia – Brilho, Elegância e Versatilidade.jpg', 
        alt: 'Kit 2 Brincos Prata 925 com Zircônia' 
    },
    { 
        id: 6, 
        category: 'brincos', 
        name: 'Brinco Ondinha em Prata 925', 
        price: 25.00, 
        image: 'imagens/Brinco Ondinha em Prata 925 – Minimalista e com Vibe Praiana.jpg', 
        alt: 'Brinco Ondinha em Prata 925' 
    },
    { 
        id: 7, 
        category: 'brincos', 
        name: 'Kit 3 pares de brincos coração prata 925', 
        price: 26.60, 
        image: 'imagens/kit com 3 pares de brincos em formato de coração, feitos em prata 925 legítima.jpg', 
        alt: 'kit 3 pares de brincos coração prata 925' 
    },
    { 
        id: 8, 
        category: 'brincos', 
        name: 'Kit 3 Pares de Brincos Prata 925 Concha', 
        price: 30.00, 
        image: 'imagens/Kit 3 Pares de Brincos Prata 925 Concha Brinco Feminino Delicado Minimalista.jpg', 
        alt: 'Kit 3 Pares de Brincos Prata 925 Concha' 
    },
    { 
        id: 9, 
        category: 'brincos', 
        name: 'Brinco Triângulo Vazado com Zircônias', 
        price: 28.50, 
        image: 'imagens/brincotriangulo.jpg', 
        alt: 'Brinco Triângulo Vazado com Zircônias em Prata 925' 
    },
    { 
        id: 10, 
        category: 'brincos', 
        name: 'Brinco de Argola Prata 925 com Zircônia', 
        price: 28.00, 
        image: 'imagens/Brinco de Argola Prata 925 com Zircônia Original Feminino.jpg', 
        alt: 'Brinco de Argola Prata 925 com Zircônia Original Feminino' 
    },
    { 
        id: 11, 
        category: 'colares', 
        name: 'Colar com Pingente de Trevo', 
        price: 35.00, 
        image: 'imagens/colartrevo.jpg', 
        alt: 'Colar com Pingente de Trevo' 
    },
    { 
        id: 12, 
        category: 'pulseiras', 
        name: 'Pulseira de Bolinhas', 
        price: 18.00, 
        image: 'imagens/pulseirabolinha.jpg', 
        alt: 'Pulseira de Bolinhas' 
    },

    // --- NOVOS PRODUTOS ADICIONADOS DOS CATÁLOGOS ---
    // --- ANÉIS ---
    { 
        id: 13, 
        category: 'aneis', 
        name: 'Anel Ajustável', 
        price: 62.90, 
        image: 'imagens/Anel Ajustável - Prata 925.jpg', 
        alt: 'Anel Ajustável em Prata 925' 
    },
    { 
        id: 14, 
        category: 'aneis', 
        name: 'Anel Zircônia Verde', 
        price: 64.90, 
        image: 'imagens/Anel Zircônia Verde - Prata 925.jpg', 
        alt: 'Anel com Zircônia Verde em Prata 925' 
    },
    { 
        id: 15, 
        category: 'aneis', 
        name: 'Anel Zircônia Central', 
        price: 94.90, 
        image: 'imagens/Anel Zircônia Central - Prata 925.jpg', 
        alt: 'Anel com Zircônia Central em Prata 925' 
    },
    { 
        id: 16, 
        category: 'aneis', 
        name: 'Anel Meia Aliança', 
        price: 84.90, 
        image: 'imagens/Anel Meia Aliança - Prata 925.jpg', 
        alt: 'Anel modelo Meia Aliança com zircônias' 
    },
    { 
        id: 17, 
        category: 'aneis', 
        name: 'Anel Coração Vazado', 
        price: 84.90, 
        image: 'imagens/Anel Coração Vazado - Prata 925.jpg', 
        alt: 'Anel de coração vazado com zircônias' 
    },

    // --- BRINCOS ---
    { 
        id: 18, 
        category: 'brincos', 
        name: 'Brinco Gota Minimalista', 
        price: 79.90, 
        image: 'imagens/Brinco Gota Vazada - Prata 925.jpg', 
        alt: 'Brinco em formato de Gota Vazada' 
    },
    { 
        id: 19, 
        category: 'brincos', 
        name: 'Brinco Geométrico Hexagonal', 
        price: 62.90, 
        image: 'imagens/Brinco Geométrico - Prata 925.jpg', 
        alt: 'Brinco de argola em formato geométrico hexagonal' 
    },
    { 
        id: 20, 
        category: 'brincos', 
        name: 'Brinco Gota Trabalhada', 
        price: 84.90, 
        image: 'imagens/Brinco Gota Trabalhada - Prata 925.jpg', 
        alt: 'Brinco em formato de gota com superfície trabalhada' 
    },
    { 
        id: 21, 
        category: 'brincos', 
        name: 'Brinco Escama Oval', 
        price: 84.90, 
        image: 'imagens/Brinco Escama Oval - Prata 925.jpg', 
        alt: 'Brinco de argola oval com textura de escama' 
    },
    { 
        id: 22, 
        category: 'brincos', 
        name: 'Brinco Abanado Zircônia', 
        price: 94.90, 
        image: 'imagens/Brinco Abanado Zircônia - Prata 925.jpg', 
        alt: 'Brinco com design abanado e zircônias' 
    },
    { 
        id: 23, 
        category: 'brincos', 
        name: 'Argola Coração Lisa', 
        price: 49.90, 
        image: 'imagens/Argola Coração Lisa - Prata 925.jpg', 
        alt: 'Brinco de argola em formato de coração liso' 
    },
    { 
        id: 24, 
        category: 'brincos', 
        name: 'Brinco Geométrico Vazado', 
        price: 72.60, 
        image: 'imagens/Brinco Geométrico Vazado - Prata 925.jpg', 
        alt: 'Brinco com design de quadrados geométricos vazados' 
    },
    { 
        id: 25, 
        category: 'brincos', 
        name: 'Brinco Argola P', 
        price: 45.90, 
        image: 'imagens/Brinco P - Prata 925.jpg', 
        alt: 'Brinco de argola tamanho P' 
    },
    { 
        id: 26, 
        category: 'brincos', 
        name: 'Brinco Argola M', 
        price: 52.90, 
        image: 'imagens/Brinco M - Prata 925.jpg', 
        alt: 'Brinco de argola tamanho M' 
    },
    { 
        id: 27, 
        category: 'brincos', 
        name: 'Brinco Argola G', 
        price: 58.90, 
        image: 'imagens/Brinco G - Prata 925.jpg', 
        alt: 'Brinco de argola tamanho G' 
    },

    { 
        id: 43, 
        category: 'brincos', 
        name: 'Brinco Meia Argola Zircônia Verde', 
        price: 84.90, 
        image: 'imagens/Brinco Meia Argola Zircônia Verde.jpg', 
        alt: 'Brinco Meia Argola Zircônia Verde' 
    },

    // --- COLARES ---
    { 
        id: 28, 
        category: 'colares', 
        name: 'Colar Bolinhas', 
        price: 114.90, 
        image: 'imagens/Colar Bolinhas - Prata 925.jpg', 
        alt: 'Colar de prata com bolinhas espaçadas' 
    },
    { 
        id: 29, 
        category: 'colares', 
        name: 'Colar Elo Circular', 
        price: 94.90, 
        image: 'imagens/Colar Elo Circular - Prata 925.jpg', 
        alt: 'Colar de prata com elos circulares' 
    },
    { 
        id: 30, 
        category: 'colares', 
        name: 'Colar Corações Vazados', 
        price: 99.90, 
        image: 'imagens/Colar Coração Vazado - Prata 925.jpg', 
        alt: 'Colar de prata com elos de corações vazados' 
    },
    { 
        id: 31, 
        category: 'colares', 
        name: 'Colar Fases da Lua', 
        price: 134.90, 
        image: 'imagens/Colar Fases da Lua - Prata 925.jpg', 
        alt: 'Colar de prata com pingentes de fases da lua' 
    },

    { 
        id: 38, 
        category: 'colares', 
        name: 'Kit Corações Vazados - Colar + Pulseira', 
        price: 144.90, 
        image: 'imagens/Kit Corações Vazados - Colar + Pulseira Prata 925.jpg', 
        alt: 'Kit Corações Vazados - Colar + Pulseira Prata 925' 
    },

    { 
        id: 41, 
        category: 'colares', 
        name: 'Colar Bolinhas Prata 925', 
        price: 94.90, 
        image: 'imagens/Colar Bolinhas - Prata 925 (2).jpg', 
        alt: 'Colar Bolinhas Prata 925' 
    },

    // --- PULSEIRAS ---
    { 
        id: 32, 
        category: 'pulseiras', 
        name: 'Pulseira Zircônias Clássicas', 
        price: 84.90, 
        image: 'imagens/Pulseira Zircônias - Prata 925.jpg', 
        alt: 'Pulseira de prata com pontos de zircônia' 
    },
    { 
        id: 33, 
        category: 'pulseiras', 
        name: 'Pulseira Coração Infinito', 
        price: 69.90, 
        image: 'imagens/Pulseira Coração Infinito - Prata 925.jpg', 
        alt: 'Pulseira de prata com símbolo de coração e infinito' 
    },
    { 
        id: 34, 
        category: 'pulseiras', 
        name: 'Pulseira Florzinhas Coloridas', 
        price: 78.90, 
        image: 'imagens/Pulseira Florzinhas Coloridas - Prata 925.jpg', 
        alt: 'Pulseira de prata com berloques de flores coloridas' 
    },
    { 
        id: 35, 
        category: 'pulseiras', 
        name: 'Pulseira Pontos de Luz', 
        price: 74.90, 
        image: 'imagens/Pulseira Pontos de Luz - Prata 925.jpg', 
        alt: 'Pulseira de prata com pontos de luz' 
    },
    { 
        id: 36, 
        category: 'pulseiras', 
        name: 'Pulseira Elo Cartier Fina', 
        price: 64.90, 
        image: 'imagens/Pulseira Elo Cartier Fina - Prata 925.jpg', 
        alt: 'Pulseira de prata com elo cartier fino' 
    },
    { 
        id: 37, 
        category: 'pulseiras', 
        name: 'Pulseira Corações Vazados', 
        price: 64.90, 
        image: 'imagens/Pulseira Coração Vazado - Prata 925.jpg', 
        alt: 'Pulseira de prata com elos de corações vazados' 
    },

    { 
        id: 39, 
        category: 'pulseiras', 
        name: 'Pulseira Fases da Lua', 
        price: 114.90, 
        image: 'imagens/Conjunto Fases da Lua - Prata 925.jpg', 
        alt: 'Pulseira Fases da Lua' 
    },

     { 
        id: 40, 
        category: 'pulseiras', 
        name: 'Conjunto Fases da Lua', 
        price: 219.00, 
        image: 'imagens/Conjunto Fases da Lua - Prata 925.jpg', 
        alt: 'Conjunto Fases da Lua' 
    }
];