/*
  Descrição: Este arquivo centraliza todos os dados dos produtos da loja.
  Estrutura: O campo 'category' é uma lista (array) para suportar múltiplos cadastros.
*/

const products = [
    { 
        id: 2, 
        category: ['brincos'], 
        name: 'Brinco Ondinha em Prata 925', 
        price: 25.00, 
        image: 'imagens/Brinco Ondinha em Prata 925 – Minimalista e com Vibe Praiana.jpg', 
        alt: 'Brinco Ondinha em Prata 925' 
    },
    { 
        id: 3, 
        category: ['brincos'], 
        name: 'Kit 3 pares de brincos coração prata 925', 
        price: 26.60, 
        image: 'imagens/kit com 3 pares de brincos em formato de coração, feitos em prata 925 legítima.jpg', 
        alt: 'kit 3 pares de brincos coração prata 925' 
    },
    { 
        id: 4, 
        category: ['brincos'], 
        name: 'Kit 3 Pares de Brincos Prata 925 Concha', 
        price: 45.60, 
        image: 'imagens/Kit 3 Pares de Brincos Prata 925 Concha Brinco Feminino Delicado Minimalista.jpg', 
        alt: 'Kit 3 Pares de Brincos Prata 925 Concha' 
    },
    { 
        id: 5, 
        category: ['brincos'], 
        name: 'Brinco Triângulo Vazado com Zircônias', 
        price: 32.90, 
        image: 'imagens/brincotriangulo.jpg', 
        alt: 'Brinco Triângulo Vazado com Zircônias em Prata 925' 
    },
    { 
        id: 6, 
        category: ['colares'], 
        name: 'Colar com Pingente de Trevo', 
        price: 45.00, 
        image: 'imagens/colartrevo.jpg', 
        alt: 'Colar com Pingente de Trevo' 
    },
    { 
        id: 7, 
        category: ['aneis'], 
        name: 'Anel Ajustável', 
        price: 62.90, 
        image: 'imagens/Anel Ajustável - Prata 925.jpg', 
        alt: 'Anel Ajustável em Prata 925' 
    },
    { 
        id: 8, 
        category: ['aneis'], 
        name: 'Anel Zircônia Verde', 
        price: 64.90, 
        image: 'imagens/Anel Zircônia Verde - Prata 925.jpg', 
        alt: 'Anel com Zircônia Verde em Prata 925' 
    },
    { 
        id: 9, 
        category: ['aneis'], 
        name: 'Anel Zircônia Central', 
        price: 94.90, 
        image: 'imagens/Anel Zircônia Central - Prata 925.jpg', 
        alt: 'Anel com Zircônia Central em Prata 925' 
    },
    { 
        id: 10, 
        category: ['aneis'], 
        name: 'Anel Meia Aliança', 
        price: 84.90, 
        image: 'imagens/Anel Meia Aliança - Prata 925.jpg', 
        alt: 'Anel modelo Meia Aliança com zircônias' 
    },
    { 
        id: 11, 
        category: ['aneis'], 
        name: 'Anel Coração Vazado', 
        price: 84.90, 
        image: 'imagens/Anel Coração Vazado - Prata 925.jpg', 
        alt: 'Anel de coração vazado com zircônias' 
    },
    { 
        id: 12, 
        category: ['brincos'], 
        name: 'Brinco Gota Minimalista', 
        price: 79.90, 
        image: 'imagens/Brinco Gota Vazada - Prata 925.jpg', 
        alt: 'Brinco em formato de Gota Vazada' 
    },
    { 
        id: 13, 
        category: ['brincos'], 
        name: 'Brinco Geométrico Hexagonal', 
        price: 62.90, 
        image: 'imagens/Brinco Geométrico - Prata 925.jpg', 
        alt: 'Brinco de argola em formato geométrico hexagonal' 
    },
    { 
        id: 14, 
        category: ['brincos'], 
        name: 'Brinco Gota Trabalhada', 
        price: 84.90, 
        image: 'imagens/Brinco Gota Trabalhada - Prata 925.jpg', 
        alt: 'Brinco em formato de gota com superfície trabalhada' 
    },
    { 
        id: 15, 
        category: ['brincos'], 
        name: 'Brinco Escama Oval', 
        price: 84.90, 
        image: 'imagens/Brinco Escama Oval - Prata 925.jpg', 
        alt: 'Brinco de argola oval com textura de escama' 
    },
    { 
        id: 16, 
        category: ['brincos'], 
        name: 'Brinco Abanado Zircônia', 
        price: 94.90, 
        image: 'imagens/Brinco Abanado Zircônia - Prata 925.jpg', 
        alt: 'Brinco com design abanado e zircônias' 
    },
    { 
        id: 17, 
        category: ['brincos'], 
        name: 'Argola Coração Lisa', 
        price: 49.90, 
        image: 'imagens/Argola Coração Lisa - Prata 925.jpg', 
        alt: 'Brinco de argola em formato de coração liso' 
    },
    { 
        id: 18, 
        category: ['brincos'], 
        name: 'Brinco Geométrico Vazado', 
        price: 72.60, 
        image: 'imagens/Brinco Geométrico Vazado - Prata 925.jpg', 
        alt: 'Brinco com design de quadrados geométricos vazados' 
    },
    { 
        id: 19, 
        category: ['brincos'], 
        name: 'Brinco Argola - P', 
        price: 45.90, 
        image: 'imagens/Brinco P - Prata 925.jpg', 
        alt: 'Brinco de argola tamanho P' 
    },
    { 
        id: 20, 
        category: ['brincos'],
        name: 'Brinco Argola - M', 
        price: 52.90, 
        image: 'imagens/Brinco M - Prata 925.jpg', 
        alt: 'Brinco de argola tamanho M' 
    },
    { 
        id: 21, 
        category: ['brincos'], 
        name: 'Brinco Argola - G', 
        price: 58.90, 
        image: 'imagens/Brinco G - Prata 925.jpg', 
        alt: 'Brinco de argola tamanho G' 
    },
    { 
        id: 22, 
        category: ['brincos'], 
        name: 'Brinco Meia Argola Zircônia Verde', 
        price: 84.90, 
        image: 'imagens/Brinco Meia Argola Zircônia Verde.jpg', 
        alt: 'Brinco Meia Argola Zircônia Verde' 
    },
    { 
        id: 23, 
        category: ['colares'], 
        name: 'Colar Bolinhas', 
        price: 114.90, 
        image: 'imagens/Colar Bolinhas - Prata 925.jpg', 
        alt: 'Colar de prata com bolinhas espaçadas' 
    },
    { 
        id: 24, 
        category: ['colares'], 
        name: 'Colar Elo Circular', 
        price: 94.90, 
        image: 'imagens/Colar Elo Circular - Prata 925.jpg', 
        alt: 'Colar de prata com elos circulares' 
    },
    { 
        id: 25, 
        category: ['colares', 'pulseiras'], 
        name: 'Kit Corações Vazados - Colar + Pulseira - P', 
        price: 144.90, 
        image: 'imagens/Kit Corações Vazados - Colar + Pulseira Prata 925.jpg', 
        alt: 'Kit Corações Vazados - Colar + Pulseira Prata 925' 
    },
    { 
        id: 26, 
        category: ['colares'],
        name: 'Colar Bolinhas Prata 925', 
        price: 94.90, 
        image: 'imagens/Colar Bolinhas - Prata 925 (2).jpg', 
        alt: 'Colar Bolinhas Prata 925' 
    },
    { 
        id: 27, 
        category: ['pulseiras'], 
        name: 'Pulseira Zircônias Clássicas', 
        price: 84.90, 
        image: 'imagens/Pulseira Zircônias - Prata 925.jpg', 
        alt: 'Pulseira de prata com pontos de zircônia' 
    },
   
    { 
        id: 28, 
        category: ['pulseiras'], 
        name: 'Pulseira Florzinhas Coloridas', 
        price: 78.90, 
        image: 'imagens/Pulseira Florzinhas Coloridas - Prata 925.jpg', 
        alt: 'Pulseira de prata com berloques de flores coloridas' 
    },
    { 
        id: 29, 
        category: ['pulseiras'], 
        name: 'Pulseira Pontos de Luz', 
        price: 74.90, 
        image: 'imagens/Pulseira Pontos de Luz - Prata 925.jpg', 
        alt: 'Pulseira de prata com pontos de luz' 
    },
    { 
        id: 30, 
        category: ['pulseiras'], 
        name: 'Pulseira Elo Cartier Fina', 
        price: 64.90, 
        image: 'imagens/Pulseira Elo Cartier Fina - Prata 925.jpg', 
        alt: 'Pulseira de prata com elo cartier fino' 
    },
    { 
        id: 31, 
        category: ['colares', 'pulseiras'],
        name: 'Conjunto Fases da Lua Colar + Pulseira', 
        price: 219.00, 
        image: 'imagens/Colar Fases da Lua - Prata 925.JPG', 
        alt: 'Conjunto Fases da Lua' 
    }, 
    { 
        id: 32, 
        category: ['colares', 'pulseiras'], 
        name: 'Kit Corações Vazados - Colar + Pulseira - M', 
        price: 169.90, 
        image: 'imagens/Kit Corações Vazados - Colar + Pulseira Prata 925.jpg', 
        alt: 'Kit Corações Vazados - Colar + Pulseira Prata 925' 
    },

     { 
        id: 33, 
        category: ['pulseiras'], 
        name: 'Pulseira Coração Infinito', 
        price: 69.90, 
        image: 'imagens/Pulseira Coração Infinito - Prata 925.jpg', 
        alt: 'Pulseira de prata com símbolo de coração e infinito' 
    },
    { 
        id: 34, 
        category: ['colares'], 
        name: 'Colar Coração', 
        price: 45.00, 
        image: 'imagens/colar coracao.JPG', 
        alt: 'Colar Coração' 
    },
     { 
        id: 35, 
        category: ['colares'], 
        name: 'Colar Minimalista', 
        price: 94.90, 
        image: 'imagens/colar minimalista.JPG', 
        alt: 'Colar Minimalista' 
    },
     { 
        id: 36, 
        category: ['brincos'], 
        name: 'Kit Brinco Pedrinhas', 
        price: 34.90, 
        image: 'imagens/kit brinco pedrinha.JPG', 
        alt: 'Kit Brinco Pedrinhas' 
    },

    { 
        id: 37, 
        category: ['brincos'], 
        name: 'Trio de Brincos', 
        price: 25.80, 
        image: 'imagens/trio de brincos.JPG', 
        alt: 'Trio de Brincos' 
    },
    { 
        id: 38, 
        category: ['brincos'], 
        name: 'Brinco Lacinho', 
        price: 34.00, 
        image: 'imagens/brinco lacinho.JPG', 
        alt: 'Brinco Lacinho' 
    },
    { 
        id: 39, 
        category: ['brincos'], 
        name: 'Brinco Raio', 
        price: 30.00, 
        image: 'imagens/brinco raio.JPG', 
        alt: 'Brinco Raio' 
    },
    
    { 
        id: 41, 
        category: ['brincos'], 
        name: 'Brinco Gota de Zircônias', 
        price: 36.60, 
        image: 'imagens/brinco gota de zinconia.JPG', 
        alt: 'Brinco Gota de Zircônias' 
    },
    { 
        id: 42, 
        category: ['brincos'], 
        name: 'Trio de Brinco Argola', 
        price: 37.80, 
        image: 'imagens/trio de brinco argola.JPG', 
        alt: 'Trio de Brinco Argola' 
    },
    { 
        id: 43, 
        category: ['colares'], 
        name: 'Colar de Cruz', 
        price: 50.00, 
        image: 'imagens/colar de cruz.JPG', 
        alt: 'Colar de Cruz' 
    },

    { 
        id: 44, 
        category: ['aneis'], 
        name: 'Anel de Prata 925 Entrelaçado com Zircônia', 
        price: 69.90, 
        image: 'imagens/Anel de Prata Entrelacado.jpg', 
        alt: 'Anel de Prata 925 Entrelaçado com Zircônia' 
    },
];