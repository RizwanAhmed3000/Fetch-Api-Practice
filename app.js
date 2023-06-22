const fetchData = fetch('https://fakestoreapi.com/products');
const container = document.querySelector('.container');

function cardUi(data){
    console.log(data)
    const dataMapping = data.map((item)=>{
        const card = `<div class="card mb-4" style="width: 14rem;">
        <img src=${item.image} width="100%" height="200px" class="card-img-top image-fit" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text" style="height: 200px; overflow: hidden;">${item.description}</p>
          <a href="#" class="btn btn-primary">$${item.price}</a>
        </div>
      </div>`
      return card
    })

    container.innerHTML = dataMapping;
}

const dataIntoJson = ()=>{
    fetchData.then((response)=>{
        return response.json();
    }).then((data)=>{
        // console.log(data);
        cardUi(data);
    })
};

dataIntoJson()

