fetch('/data')
  .then(response => response.json())
  .then(foods => {
    const foodList = document.querySelector('#food-list');

    foods.forEach(food => {
      const foodItem = document.createElement('li');
      foodItem.textContent = `${food.name} - ${food.cuisine} ($${food.price})`;
      foodList.appendChild(foodItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
