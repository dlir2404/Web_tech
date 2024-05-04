const $ = (querySelector) => {
  return document.querySelector(querySelector)
}

const $$ = (querySelector) => {
  return document.querySelectorAll(querySelector)
}

const content = $('.content')

const addGroupBtnsFuntion = () => {
  const newGroup = document.createElement('div')
  newGroup.classList.add('info-container')
  newGroup.innerHTML = `
  <div class="info-container-title">
    <div class="info-title-text">
        Group Item_20215415
    </div>
    <div class="btn-group">
        <div class="add-info-btn">
            < Add Info Item >
        </div>
        <div class="add-group-btn">
            < Add Group Item >
        </div>
    </div>
  </div>
  <div class="info-content-main">
    <div class="info-item">
        <div class="info-item-title">Item Info Name</div>
        <div class="info-item-action">
            <input class="info-item-input" type="text">
            <div class="delete-trash-btn"></div>
        </div>
    </div>
    <div class="info-item">
        <div class="info-item-title">Item Info Name</div>
        <div class="info-item-action">
            <input class="info-item-input" type="text">
            <div class="delete-trash-btn"></div>
        </div>
    </div>
    <div class="info-item">
        <div class="info-item-title">Item Info Name</div>
        <div class="info-item-action">
            <input class="info-item-input" type="text">
            <div class="delete-trash-btn"></div>
        </div>
    </div>
  </div>
  `
  content.appendChild(newGroup)

  addEventlistenerToBtn()
}

const addInfoItemsFuntion = function() {
  const parentContainer = this.closest('.info-container')
  const parenContainerContent = parentContainer.querySelector('.info-content-main')
  const newItem = document.createElement('div')
  newItem.classList.add('info-item')

  newItem.innerHTML = `
    <div class="info-item-title">Item Info Name</div>
    <div class="info-item-action">
        <input class="info-item-input" type="text">
        <div class="delete-trash-btn"></div>
    </div>
  `
  parenContainerContent.appendChild(newItem)

  addEventlistenerToBtn()
}

const addEventlistenerToBtn = () => {
  const addGroupBtns = $$('.add-group-btn')
  const addInfoItems = $$('.add-info-btn')
  const deleteItemBtns = $$('.delete-trash-btn')

  for (const btn of addGroupBtns) {
    btn.removeEventListener('click', addGroupBtnsFuntion)
    btn.addEventListener('click', addGroupBtnsFuntion)
  }

  for (const btn of addInfoItems) {
    btn.removeEventListener('click', addInfoItemsFuntion)
    btn.addEventListener('click', addInfoItemsFuntion)
  }

  for (const btn of deleteItemBtns) {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.info-item')
      parentItem.remove()
    })
  }
}

addEventlistenerToBtn()

