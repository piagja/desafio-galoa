## Desafio Galoá 

Repositório para o desafio Galoá de Frontend usando HTML + CSS com uma pitadinha de JS.
* [Website](https://piagja.github.io/desafio-galoa/)

## Como foi?

A principio eu fiquei bem ansioso para fazer o teste. 
Pensei, primeiramente, em fazer conforme o que eu sabia naquele momento ... mas sabe quando começa dando certo e conforme você vai ajustando, um negócinho vai mais pra la, outro vem mais pra ca?
Então ... fiquei metade do prazo estudando Grid Layout no CSS para poder inserir no template. Inseri mais de um Grid Template =P No footer tem um outro Grid (tipo um subgrid, mas sem os possiveis bugs)

Não consegui deixar tudo Pixel Perfect, por falta de prática, mas até que esta navegável hahahah
Mas olha ... eu adorei o desafio, foi um DESAFIO mesmo, ainda mais pra mim que estava somente absorvendo conhecimento sem bota-los em prática! Gostei muito!

## O que aprendi?

* Paciência, disposição (de leve) dos elementos na tela, Semântica no HTML, o próprio Grid Layout, a responsabilidade dentro do prazo ... não parece, mas meu cotidiano melhorou, e muito!

## Há algo que precisamos saber?
* A disposição de alguns elementos (Infelizmente tive que colocar um 'HARD CODE' ou forçar com margin e etc para poder alinhar, sei que não é a solução viável, mas penso ser melhor do que deixar desalinhado);
* A nomenclatura dos elementos! Tem mais em português, mas tem algumas coisas que não tem como escapar (Toggle por exemplo, Button ...). Ainda dei uma estudada em BEM, que é uma convenção de nomes para CSS, separando block level e etc. Mas não implementei;
* Também utilizei [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), acredito que desde já temos que estruturar nossos commits!;
* Algumas imagens foram alteradas, mas não impacta na navegação do usuário. E também o 'botão' do header, não é um botão! Fiquei batendo a cabeça pra colocar o conteudo bonitinho dentro do botão, que falhei, retirei o botão e fiz uma borda e um texto! Pelo menos ta alinhado hahahah;

## O que foi mais difícil?
* Com absoluta certeza, dispor e alinhar os elementos dentro de cada container que criei com o Grid Layout;
* O próprio Grid Layout. Estes dias não foram suficientes para incrementar meu conhecimento sobre, mas sinto que evolui bem neste paradigma!

## Edit dia 18/10
* Recebi um email pedindo para arrumar algumas coisas, elementos fora do padrão, algumas imagens, adicionar responsividade, estilo do sidenav e etc.
* Rearranjei o layout do Desktop, parece-me muito mais interessante e alinhado agora!
* As imagens eu peguei no Figma (tinha uma opção que tava marcada la, na hora de dar Export, era o Content Only, desmarcando eu podia baixar a imagem inteira) corretamente.
* A responsividade ... meus amigos, foi aquela pedra! E de longe esta perfeito, mas é melhor feito do que perfeito! Só tem um Breakpoint (max-width: 640px). Quando fui aprender CSS pela primeira, me foi bem dito que o melhor é começar pelo menor pro maior (Mobile > Tablet > Desktop), e voltar as casas (Desktop > ...) é bem complicado, pelo menos pra mim foi! Devo enfatizar alguns pontos abaixo:

* O Logo no Footer, quebra. Eu tento mudar o width, ele quebra todo o layout (parece que fica mais fino).
* Outra coisa, é a parte branca do lado direito ... não consegui fazer nada a respeito, provavelmente estourei o width de algum elemento ou container e não verifiquei direito.
* Eu usei o menu tipo Hamburguer para o Layout Responsivo (canto esquerdo superior), ele funciona, ok; Se você deixar o menu aberto no Mobile e ir pro Desktop direto, o menu continua, MAS se você FECHAR o menu no Mobile e voltar pro Desktop, ele some xD Realmente não consegui resolver! Mas suponho que o usuário do celular não vá direto pro Desktop kkk
* Alguns elementos se arrastam junto com a janela Mobile do Inspecionar, como o Box de Detalhes do Vídeo e os cards de Resposta Expandida =(

* Tirando estes pontos que não consegui resolver por falta de prática ou conhecimento talvez, ou até porque não fiz uma estrutura inicial adequada, o website funciona até que legal! Gostei muito e vou deixar aqui como experiência e lembrete de que consigo fazer! Ou pelo menos, cheguei bem perto!
