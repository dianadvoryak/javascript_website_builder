const model = [
    {
        type: "title",
        value: "Hello World from JS"
    },
    {
        type: "text",
        value: "here we go with some text"
    },
    {
        type: "columns",
        value: [
            "1111111",
            "2222222",
            "3333333"
        ]
    },
    {
        type: "image",
        value: "./assets/image.png"
    }
];
const $site = document.querySelector("#site");
model.forEach((block)=>{
    let html = "";
    if (block.type === "title") html = title(block);
    else if (block.type === "text") html = text(block);
    else if (block.type === "column") html = columns(block);
    else if (block.type === "image") html = image(block);
    $site.insertAdjacentHTML("beforeend", html);
});
function title(block) {
    return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
}
function text(block) {
    return `
    <div class="row">
      <div class="col-sm">
        <h1>${block.value}</h1>
      </div>
    </div>
  `;
}
function columns(block) {
    const html = block.value.map((item)=>`<div class="col-sm"><p>${item}</p></div>`);
    return `
    <div class="row">
      ${html.join("")}
    </div>
  `;
}
function image(block) {
    return `
    <div class="row">
      <img stc="${block.value}" />
    </div>
  `;
}

//# sourceMappingURL=index.579125c3.js.map