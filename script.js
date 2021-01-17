var list = [];
const endpoint = "https://trello-clone-ppm.herokuapp.com";
const listWrapper = document.getElementById("wrapper");

window.onload = () => {
  displayData();
};

function displayData() {
  fetch(endpoint + "/list")
    .then((response) => response.json())
    .then(function (data) {
      list = data;
      console.log(data);
      const allListHtmlStr = list.map((l) => toListHtmlString(l)).join("");
      listWrapper.innerHTML = allListHtmlStr;
    });
}

function toListHtmlString(l) {
  return `

    <div class="col">
        <div class="card m-1">
          <div class="card-body">
            <div class="row p-1">
              <div class="col mt-1">
                <h5 class="card-title">${l.title}</h5>
              </div>
              <div class="col d-flex justify-content-end">
                <button class="btn btn-sm text-light mt-0">
                  <i class="fas fa-ellipsis-h text-secondary"></i>
                </button>
              </div>
            </div>
            ${l.cards && l.cards.map((card) => toCardHtmlString(card)).join("")}
              <button class="add">
                <i class="fas fa-plus"></i>&nbsp;&nbsp;Add another card
              </button>
            </div>
          </div>
        </div>
      </div>

    `;
}

function toCardHtmlString(card) {
  return `

        <div class="row p-1">
              <div class="col smallcards">
                <h5>${card.title}</h5>
                <div class="row">
                  ${
                    card.description
                      ? `
                  <div class="col-1 m-1">
                    <button class="btn btn-sm text-secondary mt-0">
                      <i class="fa fa-align-justify"></i>
                    </button>
                  </div>
                  `
                      : ""
                  }
                  <div class="col-1 m-1">
                    <button class="btn btn-sm text-secondary mt-0">
                      <i class="fas fa-paperclip"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

  `;
}
