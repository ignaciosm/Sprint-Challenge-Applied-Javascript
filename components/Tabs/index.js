// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    // handle success
    console.log(response.data.topics);
    const topics = response.data.topics;
    topics.forEach(topic => {
      const newTopic = Tab(topic);
    })
  })
  .catch(error => {
    // handle error
    console.log(error);
  });

const topicsCont = document.querySelector('.topics');

  function Tab(topic) {
    const topicName = document.createElement('div');
    topicName.textContent = topic;
    topicName.classList.add('tab');
    topicsCont.appendChild(topicName);

    return topic;
  }