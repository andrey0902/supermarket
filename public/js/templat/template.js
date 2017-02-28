document.getElementById('template').innerText = `   
    <a href="#!/product/<%= id %>"><img src="./public/img/<%= img %>" class="img-responsive" alt="Product"></a>
    <div class="line"></div>
    <p class="title-product"><%= title %> </p>
    <p class="description-product"><%= text %> </p>
    <a class="btn btn-default btn-my" href="#!/product/<%= id %>">More...</a> `;

