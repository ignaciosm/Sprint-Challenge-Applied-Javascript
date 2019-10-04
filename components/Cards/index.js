// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    // handle success
    // console.log(response.data.articles);
    const articleTopics = response.data.articles;
    Object.values(articleTopics).forEach(articleTopic => {
      // console.log(articleTopic);
      articleTopic.forEach(article => {
        // console.log(article);
        const newCard = createCard(article);
      })
    });

    // })
  })
  .catch(error => {
    // handle error
    // console.log(error);
  });

const cardsCont = document.querySelector('.cards-container');

function createCard(article) {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const by = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  by.textContent = `By ${article.authorName}`

  cardsCont.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(by);
  imgContainer.appendChild(img);

  return article;
}