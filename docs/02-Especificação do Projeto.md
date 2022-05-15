# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários em um trabalho de 
imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram
afirmados na forma de personas e histórias de usuários.  

## Personas

### Paula Renata

- **Idade:** 31 anos
- **Ocupação:** Professora de história, atua lecionando em faculdades no curso de bacharel em história.
- **Motivações:** Cristã praticante da fé. Envolvimento em projetos sociais. Ama Lecionar
- **Frustrações:** Se manter em isolamento social. Diminuir a participação da prática cristã presencial. Não frequentar mais projetos sociais.
- **Hobbies, História:** Leitura e estudos de práticas emocionais e psicológicas. Cinema de época.
- **Aplicativos:** Instagram, Linkedin.

### André Luiz

- **Idade:** 47 anos
- **Ocupação:** Empresário, dono de uma rede de lojas do setor de tecnologia e influenciador digital.
- **Motivações:** Dar o incentivo e oportunidades que não recebeu. Engrandecer sua imagem e de sua marca. Formar novos talentos.
- **Frustrações:** Ter capital e não saber direcionar a uma causa. Falta de tempo disponível para participar de campanhas sociais.
- **Hobbies, História:** Criação e cuidado de animais. Entusiasta de tecnologia. Muito atuante em redes sociais.
- **Aplicativos:** Instagram, Linkedin, Facebook, Reddit, Skype.

### Jorge Aguiar

- **Idade:** 53 anos
- **Ocupação:** Médico Pneumologista, atuante no front da pandemia em hospitais públicos. 
- **Motivações:** Sensibilizado pela pandemia procura realizar um trabalho de ajuda a parte do que faz em sua rotina do hospital. 
- **Frustrações:** Não ter salvado todas as pessoas que poderia. Não ter tempo e ciência do que fazer para ajudar as famílias vítimas da pandemia.
- **Hobbies, História:** Aprofundamento de estudo médico. Lecionar em palestras e eventos clínicos. Ler e estudar comportamentos e hábitos humanos. 
- **Aplicativos:** Instagram, Linkedin, Facebook, MedScape.

### Rebeca Fernandes

- **Idade:** 27 anos
- **Ocupação:** Estudante de economia e estagiária em uma empresa investimentos online.
- **Motivações:** Foi beneficiada quando adolescente de um projeto social de incentivo a educação financeira de jovens carentes. 
- **Frustrações:** Não atuar de forma em projetos destinados a jovens que hoje estão na situação que já esteve. Falta de tempo e disponibilidade.
- **Hobbies, História:** Investir de forma online. Aprofundar seus estudos de área atuante. Praticar exercícios físicos. 
- **Aplicativos:** Instagram, Facebook, LinkedIn, Trello, Plataformas de investimento.

## Histórias de Usuários

A fim de buscar mais informações sobre os motivos e causas de uso dessas 
pessoas à plataforma a ser desenvolvida, foram realizadas perguntas por meio de 
entrevistas, tendo resultados demonstrados no quadro apresentado:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                 |PARA ... `MOTIVO/VALOR`                          |
|--------------------|----------------------------------------------------|-------------------------------------------------|
|Paula Renata        | Participar de alguma causa social sem sair de casa | Manter o isolamento social                      |
|Paula Renata        | Ajudar em causas grandes internacionalmente        | Fortalecer a fé                                 |
|André Luiz          | Incentivar jovens na carreira profissional         | Formar novos talentos e gerar empregos          |
|André Luiz          | Atrelar a minha empresa a causas filantrópicas     | Aumentar a visibilidade de sua empresa          |
|Jorge Aguiar        | Ajudar pessoas afetadas pela pandemia              | Cumprir com o dever moral que sente como médico |
|Jorge Aguiar        | Encontrar mais fácilmente causas para eu apoiar    | Poder ajudar mais as pessoas que precisam       |
|Rebeca Fernandes    | Tranformar a vida de uma pessoal                   | Retribuição moral e pessoal                     |
|Rebeca Fernandes    | Contribuir com instituições de ajuda               | Poder ajudar sem que eu tenha conhecimento      |

## Requisitos

Os propósitos funcionais da plataforma serão denotados por intermédio da
apresentação de duas categorias diferentes de requisitos (funcionais e não funcionais) 
que indicará as características que a plataforma demonstrará de maneira total. Sendo 
apresentados a seguir.

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).

### Requisitos Funcionais

|ID    | Descrição do Requisito                            | Prioridade |
|------|---------------------------------------------------|------------|
|RF-001| Página de apresentação                            | ALTA       | 
|RF-002| Página de contribuição rápida                     | ALTA       |
|RF-003| Página de colaboradores                           | ALTA       |
|RF-004| Página de cadastro                                | ALTA       |
|RF-005| Página de contruições direcionadas                | ALTA       |
|RF-006| Informações sobre os produtos para contribuição   | ALTA       |
|RF-007| Permitir pagamentos via cartão, pix, e boleto     | ALTA       |
|RF-008| Página de contatos                                | ALTA       |
|RF-009| Sistema de recompensa                             | MÉDIA      |
|RF-010| Opção de recebimento do comprovante               | MÉDIA      |
|RF-011| Opção de recebimento de informativos por email    | BAIXA      |
|RF-012| Desvinculo da plataforma                          | BAIXA      |


### Requisitos não Funcionais

|ID    | Descrição do Requisito                            | Prioridade |
|------|---------------------------------------------------|------------|
|RNF-01| Acessível a todas as idades                       | ALTA       | 
|RNF-02| O Site deve ter elementos de acessibilidade       | ALTA       | 
|RNF-03| O Site deve funcionar em dispositivos móveis      | ALTA       | 
|RNF-04| Guardar dados de doações para fins de segurança   | ALTA       | 
|RNF-05| Verificar autenticidade dos usuários              | ALTA       | 
|RNF-06| O Site deverá ser leve visualmente                | MÉDIA      | 
|RNF-07| O Site irá utilizar cache do navegador            | BAIXA      | 

## Restrições

As questões que limitam a execução desse projeto e que se configuram como  
obrigações claras para o desenvolvimento do projeto em questão são apresentadas   
na tabela a seguir.

|ID   | Restrição                                                             |
|-----|-----------------------------------------------------------------------|
|RE-01| O projeto deverá ser entregue até o final do semestre                 |
|RE-02| O Site deve apenas utilizar as tecnologias básicas da web no Frontend |
|RE-03| O Projeto deve ser feito apenas por integrantes do grupo              |
|RE-04| O Projeto deve utilizar apenas serviços com licenças Permissivas      |
