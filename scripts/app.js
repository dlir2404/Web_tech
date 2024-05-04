const $ = (querySelector) => {
  return document.querySelector(querySelector)
}

const $$ = (querySelector) => {
  return document.querySelectorAll(querySelector)
}

const SUFFIX = '_20215415'
const removeSuffix = (string) => {
  return string.replace(SUFFIX, '')
}
const addSuffix = (string) => {
  return string + SUFFIX
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
  <div class="delete-trash-btn-container"></div>
  `
  content.appendChild(newGroup)

  addEventlistenerToElement()
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

  addEventlistenerToElement()
}

const addTitleFunction = function(_this, inputElementClass, textElementClass, parentClass, isAddSuffix) {
  var inputElement = document.createElement('input');
  inputElement.value = isAddSuffix ? removeSuffix(_this.innerText) : _this.innerText;
  inputElement.classList.add(inputElementClass)
  
  var inputContainer = document.createElement('div')
  inputContainer.classList.add(parentClass)
  inputContainer.appendChild(inputElement)
  _this.parentNode.replaceChild(inputContainer, _this);
  
  inputElement.focus();
  
  inputElement.addEventListener('blur', function() {
      var newTextElement = document.createElement('div');
      newTextElement.classList.add(textElementClass)
      newTextElement.textContent = isAddSuffix ? addSuffix(this.value) : this.value;
      
      this.parentNode.parentNode.replaceChild(newTextElement, this.parentNode);
      addEventlistenerToElement()
  });

  inputElement.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      this.blur()
    }
});
}

const addGroupTitleFunction = function() {
  addTitleFunction(this, 'info-title-text-input', 'info-title-text', 'flex-1', true)
}

const addItemTitleFunction = function() {
  addTitleFunction(this, 'item-title-text-input', 'info-item-title', 'flex-2', false)
}

const addDeleteGroupBtnFunction = function() {
  const promptLayer = document.createElement('div')
  promptLayer.classList.add('prompt-layer')

  const prompt = document.createElement('div')
  prompt.classList.add('prompt')
  prompt.innerHTML = `
    <div class="prompt-title">Bạn có chắc muốn xóa nhóm thông tin này? </div>
    <div>
        <p>Họ tên: Vũ Đình Linh</p>
        <p>MSSV: 20215415</p>
    </div>
    <div class="promt-group-btn">
        <div class="cancel-btn">Hủy</div>
        <div class="ok-btn">Có</div>
    </div>
  `
  const body = $('body')
  body.appendChild(promptLayer)
  body.appendChild(prompt)

  const cancelBtn = $('.cancel-btn')
  const okBtn = $('.ok-btn')

  cancelBtn.addEventListener('click', function() {
    promptLayer.remove()
    prompt.remove()
  })

  const _this = this
  okBtn.addEventListener('click', function() {
    promptLayer.remove()
    prompt.remove()
    _this.closest('.info-container').remove()
  })
}

const addEventlistenerToElement = () => {
  const addGroupBtns = $$('.add-group-btn')
  const addInfoItems = $$('.add-info-btn')
  const deleteItemBtns = $$('.delete-trash-btn')
  const groupTitles = $$('.info-title-text')
  const itemTitles = $$('.info-item-title')
  const deleteGroupBtns = $$('.delete-trash-btn-container')

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

  for (const title of groupTitles) {
    title.addEventListener('dblclick', addGroupTitleFunction)
  }

  for (const title of itemTitles) {
    title.addEventListener('dblclick', addItemTitleFunction)
  }

  if (deleteGroupBtns.length > 0) {
    for (btn of deleteGroupBtns) {
      btn.addEventListener('click', addDeleteGroupBtnFunction)
    }
  }
}

addEventlistenerToElement()

