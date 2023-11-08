const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');



const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry🍒', 'Coconut🥥', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit🥝', 'Kumquat', 'Lemon🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango🥭', 'Mangosteen', 'Marionberry', 'Melon🍈', 'Cantaloupe', 'Honeydew', 'Watermelon🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange🍊', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach🍑', 'Pear🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    
	let results = [];
    results = fruit.filter(f => f.toLowerCase().includes(str))
	return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    results = search(inputVal.toLowerCase());
	showSuggestions(results, inputVal)
}

function showSuggestions(results, _inputVal) {
    suggestions.innerHTML = '';
    for(let inputVal of results){
        const fruitElement = document.createElement('li');
        fruitElement.textContent = inputVal;
        suggestions.appendChild(fruitElement)
}
	suggestions.classList.add('has-suggestions')
}

function useSuggestion(e) {
    input.value= e.target.innerText;
    input.focus();
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions')
    
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
